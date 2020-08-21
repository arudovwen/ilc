<template>
  <div class="view">
    <div class="chat-body" v-chat-scroll>
      <div class="message-body">
        <ul>
          <li
            class="message mb-4"
            v-for="(message,idx) in messages"
            :key="idx"
           
          >
            <div
              class="shadow rounded-pill chat-message"
              v-if=" message.user"
              :class="{'ml-auto':message.user.id == student.id }"
            >
              <strong class="text-muted">{{message.user.name}}</strong>

              <br />
              <span v-if="message.message" class="mr-3">{{message.message}}</span>
              <a v-else :href="message.attachment" download class="mr-3">
                <b-img :src="message.attachment" fluid width="60"></b-img>
              </a>
              <small class="text-muted">{{message.created_at | moment('h:mm a')}}</small>
            </div>
            <div
              class="shadow rounded-pill chat-message"
              v-if="message.tutor"
              
            >
              <strong class="text-muted">{{message.tutor.name}}</strong>
              <br />
              <span v-if="message.message" class="mr-3">{{message.message}}</span>
              <a v-else :href="message.attachment" download class="mr-3">
                <b-img :src="message.attachment" fluid width="60"></b-img>
              </a>
              <small class="text-muted">{{message.created_at | moment('h:mm a')}}</small>
            </div>
          </li>
          <div class="progress mt-2 w-25 ml-auto text-right" v-if="start">
            <div
              class="progress-bar progress-bar-striped"
              :class="{active: progress !='Completed'}"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              v-bind:style="{width:progress}"
            >{{progress}}</div>
            <b-img :src="file" width="20"></b-img>
          </div>
        </ul>
      </div>
    </div>
    <b-form @submit.prevent="submit" class="send-tab">
      <b-input-group>
        <b-input-group-prepend>
          <b-button class="button px-2" @click="openEmoji">
            <i class="fa fa-smile-o" aria-hidden="true"></i>
          </b-button>
          <VEmojiPicker @select="selectEmoji" v-if="showEmoji" class="emoji" />
        </b-input-group-prepend>

        <div class="form-group w-75 m-0">
          <input
            type="text"
            class="form-control"
            v-model="message"
            aria-describedby="helpId"
            placeholder
            required
          />
          <label for="attachment">
            <i class="fa fa-paperclip" aria-hidden="true"></i>
          </label>
        </div>

        <input
          type="file"
          hidden
          class="form-control-file"
          @change="handleFileChange($event)"
          name="attachment"
          id="attachment"
          aria-describedby="fileHelpId"
        />

        <b-input-group-append>
          <b-button variant="secondary" type="submit">Send</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
    <div class="online">
      <div class="form-control thead-dark">Online</div>
      <ul>
        <li v-for="(user,idx) in users" :key="idx">
          <b-avatar size="sm" :src="user.profile"></b-avatar>
          {{user.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
export default {
  props: ["student", "id"],
  data() {
    return {
      messages: [],
      message: "",
      attachment: "",
      users: [],
      myText: "",
      showEmoji: false,
      filesSelectedLength: 0,
      file: [],
      filetype: "",
      uploadedFile: this.oldimage,
      uploadedFileUrl: "",
      cloudinary: {
        uploadPreset: "wo4qwffs",
        apiKey: "754134295584927",
        cloudName: "imostate",
      },
      progress: 0,
      start: false,
    };
  },
  components: {
    VEmojiPicker,
  },
  created() {
    this.getMessages();
    axios
      .get(`/api/student-group/${this.$props.id}`, {
        headers: {
          Authorization: `Bearer ${this.$props.student.access_token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          Echo.join(
            res.data.name.replace(" ", "") + this.$props.id + res.data.tutor_id
          )
            .here((users) => {
              this.users = users;
            })
            .joining((user) => {
              if (!this.users.includes(user)) {
                this.users.push(user);
              }
            })
            .listen("GroupMessageSent", (e) => {
              console.log("e", e);
              this.messages.push({
                message: e.message.message,
                user: e.user,
                tutor: e.tutor,
              });
            })
            .leaving((user) => {
               this.users =  this.users.filter(u=>u.id != user.id)
            });
        }
      });
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];

      this.filesSelectedLength = event.target.files.length;

      this.loadFile();
    },
    loadFile() {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.uploadedFile = event.target.result;
      };
      reader.readAsDataURL(this.file);
      this.processUpload();
    },
    processUpload() {
      let that = this;
      this.start = true;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      var cloudName = this.cloudinary.cloudName;
      var upload_preset = this.cloudinary.uploadPreset;
      formData.append("file", this.file);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset); // REQUIRED
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/" + cloudName + "/upload"
      );
      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          that.progress = Math.round((e.loaded / e.total) * 100) + "%";
        }
      };
      xhr.upload.onloadstart = function (e) {
        this.progress = "Starting...";
      };
      xhr.upload.onloadend = function (e) {
        this.progress = "Completing..";
      };
      xhr.onload = (progressEvent) => {
        if (xhr.status === 200) {
          // Success! You probably want to save the URL somewhere
          this.progress = "Completed";
          setTimeout(() => {}, 1000);
          var response = JSON.parse(xhr.response);
          this.attachment = response.secure_url; // https address of uploaded file
        } else {
          this.start = false;
          this.progress = 0;
          alert("Upload failed. Please try again.");
        }
      };
      xhr.send(formData);
    },
    openEmoji() {
      this.showEmoji = !this.showEmoji;
    },
    selectEmoji(emoji) {
      this.message = this.message + emoji.data;
      this.showEmoji = false;
    },
    submit() {
      this.showEmoji = false;
      this.messages.push({
        message: this.message,
        user: this.$props.student,
      });
      console.log("submit ->  this.messages", this.messages);
      let data = {
        message: this.message,
        group_id: this.$props.id,
        attachment: this.attachment,
      };
      axios
        .post("/api/send-student-message", data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.message = "";
            this.start = false;
          }
        });
    },
    getMessages() {
      axios
        .get(`/api/get-student-messages/${this.$props.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.messages = res.data;
          }
        });
    },
  },
};
</script>
<style scoped>
.view {
  background: white;
  position: relative;
  display: flex;
  height: 84vh;
}
.progress {
  height: 15px;
}
label {
  margin: 0 !important;
  display: block;
}
.message {
  font-size: 14px;
  padding: 20px;
}
.chat-body {
  width: 80%;
  height: 100%;
  background: #f7f8fa;
  padding: 20px 0 60px;
  position: relative;
  overflow: auto;
}
.online {
  height: 100%;
  width: 20%;
}
.send-tab {
  position: absolute;
  bottom: 0;
  width: 93%;
  margin: 0 auto;
  padding: 4px 0;
  background: white;
}
.emoji {
  position: absolute;
  bottom: 100%;
  overflow: hidden !important;
}
.online ul li {
  font-size: 15px;
  padding: 10px 5px;
}
.form-group {
  position: relative;
}
.fa-paperclip {
  position: absolute;
  font-size: 17px;
  right: 10px;
  top: 50%;
  margin-top: -8px;
}
ul,
ol {
  list-style: none;
}
.chat-message {
  background: white;
  padding: 15px 20px;
  width: fit-content;
  width: max-content;
  max-width: 50%;

  text-align: left;
}
</style>