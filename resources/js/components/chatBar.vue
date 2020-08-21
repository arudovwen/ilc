<template>
  <div>
    <div class="progress mt-2 ml-auto text-right" v-if="start">
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
    <div class="send-tab">
      <div class="btn btn-emoji" @click="openEmoji">
        <i class="fa fa-smile-o" aria-hidden="true"></i>
      </div>
      <VEmojiPicker @select="selectEmoji" v-if="showEmoji" class="emoji" />
      <div class="file-attachement">
        <b-input placeholder="Write message......." v-model="newMessage"></b-input>
        <span>
          <label for="attachment">
            <i class="fa fa-paperclip" aria-hidden="true"></i>
          </label>
          <input
            type="file"
            hidden
            class="form-control-file"
            @change="handleFileChange($event)"
            name="attachment"
            id="attachment"
            aria-describedby="fileHelpId"
          />
        </span>
      </div>
      <div class="send-btn btn" type="button" @click="submit">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
export default {
  data() {
    return {
      showEmoji: false,
      newMessage: "",
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
          this.$emit("attach", response.secure_url); // https address of uploaded file
          this.start = false;
        } else {
          this.start = false;
          this.progress = 0;
          alert("Upload failed. Please try again.");
        }
      };
      xhr.send(formData);
    },

    submit() {
      if (this.newMessage !== "") {
        this.$emit("submit", this.newMessage);
        this.newMessage = "";
      } else {
        this.$toasted.error("Cannot send empty message");
      }
    },
    openEmoji() {
      this.showEmoji = !this.showEmoji;
    },
    selectEmoji(emoji) {
      this.newMessage = this.newMessage + emoji.data;
      this.showEmoji = false;
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
.file-attachement {
  display: flex;
  width: 100%;
  position: relative;
}
.file-attachement span {
  position: absolute;
  right: 0;
  transform: translate(-7px);
  padding-top: 5px;
}
.progress {
  height: 10px;
  position: absolute;
  bottom: 60px;
  right: 50px;
  width: 100px;
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
.chat-area {
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
.chat-message {
  background: white;
  padding: 15px 20px;
  width: fit-content;
  width: max-content;
  max-width: 50%;

  text-align: left;
}
</style>