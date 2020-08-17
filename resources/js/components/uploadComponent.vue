<template>
  <div>
    <form @submit.prevent="processUpload" class>
      <div>
        <!-- <input
            type="file"
            class="form-control"
            id="file-input"
            aria-describedby="helpId"
            placeholder
            @change="handleFileChange($event)"
        />-->
        <div class="upload-btn-wrapper">
          <div class="centered">
            <button class="btn">
              <i class="fa fa-upload"></i>
              <span>Upload a File</span>
            </button>
            <b-form-file :id="label" class="mt-3" plain @change="handleFileChange($event)"></b-form-file>
          </div>
        </div>

        <div class="upload-btn">
          <b-button type="submit" class="my-3 btn-upload" :disabled="filesSelectedLength < 1">UPLOAD</b-button>
        </div>
        <div class="progress mt-2" v-if="start">
          <div
            class="progress-bar progress-bar-striped"
            :class="{active: progress !='Completed'}"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            v-bind:style="{width:progress}"
          >{{progress}}</div>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.progress {
  height: 20px;
}
.logo {
  width: 50%;
  height: 120px;
  padding: 5px;
}
.images {
  display: flex;
  margin-top: 15px;
}
.oldimg {
  width: 50%;
  height: 120px;
  padding: 5px;
}
.oldimg img,
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
<script>
export default {
  name: "CloudinaryUpload",
  props: ["index", "label"],
  data() {
    return {
      filesSelectedLength: 0,
      file: null,
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
      duration: "",
    };
  },

  computed: {},
  methods: {
    getDuration(file) {
      window.URL = window.URL || window.webkitURL;

      let video = document.createElement("video");
     var that =this
      video.preload = "metadata";
      video.src = URL.createObjectURL(file);
      video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);
       let duration = video.duration;
       that.duration = duration

        
      };
    },
    getAudioDuration(file) {
      window.URL = window.URL || window.webkitURL;
      let audio = document.createElement("audio");
      audio.preload = "metadata";
      audio.src = URL.createObjectURL(file);

      audio.onloadedmetadata = function () {
        window.URL.revokeObjectURL(audio.src);
        let duration = audio.duration;

        console.log("audio.onloadedmetadata -> duration", duration)
        return duration;
      };
    },
    handleFileChange(event) {
      this.file = event.target.files[0];
       this.getDuration(event.target.files[0])
    
      this.filesSelectedLength = event.target.files.length;

      this.loadFile();
    },
    loadFile() {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.uploadedFile = event.target.result;
      };
      reader.readAsDataURL(this.file);
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
          this.uploadedFileUrl = response.secure_url; // https address of uploaded file
          response.duration = this.duration
          this.$emit("getUploadDetails", this.$props.index, response);
        } else {
          this.start = false;
          this.progress = 0;
          alert("Upload failed. Please try again.");
        }
      };
      xhr.send(formData);
    },
  },
};
</script>
<style scoped>
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
}

.upload-btn-wrapper .btn {
  border: 1px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  border-style: dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.centered {
  display: flex;
  justify-content: center;
}
.upload-btn {
  display: flex;
  justify-content: flex-end;
}
.btn-upload {
  background-color: #0a4065;
}
</style>