<template>
  <!-- <div class="view">
    <div class="chat-body"  v-chat-scroll>
      <div class="message-body" >
        <ul>
          <li
            class="message mb-4"
            v-for="(item,idx) in messages"
            :key="idx"
            :class="{'text-right':item.sender_id == student.id}"
          >
            <span class="shadow rounded-pill chat-item">
              <span v-if="item.message" class="mr-3">{{item.message}}</span>
              <a v-else :href="item.attachment" download class="mr-3">
                <b-img :src="item.attachment" fluid width="60"></b-img>
              </a>
              <small class="text-muted">{{item.created_at | moment('h:m a')}}</small>
            </span>
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
  </div> -->
   <div class="chat">
    <div class="card tutor-chat">
      <b-row>
        <b-col md="8" class="chat-area ">
          <div @submit.prevent="submit" class="send-tab" >
           <div class="btn btn-emoji"  @click="openEmoji"><i class="fa fa-smile-o" aria-hidden="true"></i></div>
          <VEmojiPicker @select="selectEmoji" v-if="showEmoji" class="emoji" />
             <div class="file-attachement">
                <b-input placeholder="Write message......."></b-input><span><i class="fa fa-paperclip" aria-hidden="true"></i></span>
              
             </div>
          <div class="send-btn btn" type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></div>
          </div>
        </b-col>
        <b-col md="4">
          <b-card class="online-presence">
            <div class="online-presence-top">
              <b-form-input placeholder="Search to start chat"></b-form-input>
              
            </div>
            <hr />
            <div class="online-tag">
              <div class="single-online-tag">
                <div class="inner-single">
                  <div class="avatar">
                    <b-avatar></b-avatar>
                  </div>
                  <div class="message-info">
                    <h6>Group name</h6>
                    <div>
                      <b-badge variant="success">3</b-badge>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </b-card>
        </b-col>
      </b-row>
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
          Echo.join(res.data.name + this.$props.id + res.data.tutor_id)
            .here((users) => {
              this.users = users;
            })
            .joining((user) => {
              this.users.push(user);
            })
            .listen("GroupMessageSent", (e) => {
              this.messages.push(e.message);
            })
            .leaving((user) => {
              console.log(user.name);
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
.online-presence {
  background: #f5f4f4;
  height: 85vh;
}
.online-presence-top {
  display: flex;
}
.online-presence-top .fa {
  padding-left: 10px;
  padding-top: 10px;
}
.inner-single {
  display: flex;
}
.message-info {
  display: flex;
  padding-left: 20px;
  align-items: center;
}
.message-info h6 {
  margin-bottom: 0;
  line-height: 0;
}
.file-attachement{
  display: flex;
  width: 100%;
  position: relative;
}
.file-attachement span{
      position: absolute;
    right: 0;
    transform: translate(-7px);
    padding-top: 5px;
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
.chat-area{
  position: relative;
}
.send-tab {
  position: absolute;
  bottom: 0;
  background: #cec9c9;
 display: flex;
    width: 100%;
    padding: 10px;
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

ul,
ol {
  list-style: none;
}
.chat-item {
  background: white;
  padding: 30px 50px;
}
</style>