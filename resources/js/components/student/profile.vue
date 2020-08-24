<template>
  <div class="profile-page">
    <b-form @submit.prevent="submit">
      <div class="profile container">
        <div class="tutor-profile">
          <div class="avatar-profile">
            <b-avatar variant="secondary" :src="detail.profile" class="profile-img" size="6rem">
                <template v-slot:badge><label for="up" class="m-0"><b-icon icon="pencil" size="1rem"></b-icon></label>
               
                <b-form-file
                id="up"
                 hidden
                  accept="image/*"
                  plain
                  @change="handleFileChange($event)"
                ></b-form-file>
         
                </template>

            </b-avatar>
              
           
          </div>
          <div class="profile-inner">
            <h6>Personal Information</h6>
            <div class="personal-form">
              <b-form>
                <b-form-row>
                  <b-col>
                    <b-form-group label="Name">
                      <div class="after-edit">
                        <b-form-input placeholder v-model="detail.name"></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Email">
                      <div class="after-edit">
                        <b-form-input v-model="detail.email" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group label="Date of Birth">
                      <div class="after-edit">
                        <b-form-datepicker v-model="detail.dob" id="example-datepicker"></b-form-datepicker>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Address">
                      <div class="after-edit">
                        <b-form-input v-model="detail.address" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-group label="Gender">
                  <div class="after-edit">
                    <b-form-select v-model="detail.gender" :options="gender"></b-form-select>
                  </div>
                </b-form-group>
                <b-form-row>
                  <b-col>
                    <b-form-group label="State">
                      <div class="after-edit">
                        <b-form-input v-model="detail.state" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Local Goverment Area">
                      <div class="after-edit">
                        <b-form-input v-model="detail.lga" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group label="Guardian">
                      <div class="after-edit">
                        <b-form-input v-model="detail.guardian" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Guardian Phone">
                      <div class="after-edit">
                        <b-form-input v-model="detail.guardian_phone" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <b-form-row>
                  <b-col>
                    <b-form-group label="Next of Kin">
                      <div class="after-edit">
                        <b-form-input v-model="detail.next_of_kin" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Next of Kin Phone">
                      <div class="after-edit">
                        <b-form-input v-model="detail.next_of_kin_phone" placeholder></b-form-input>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-form-row>
              </b-form>
            </div>
          </div>
          <div class="profile-inner">
            <h6>School Information</h6>
            <div class="personal-form">
              <b-form>
                <b-form-row>
                  <b-col>
                    <b-form-group label="Class">
                      <b-form-input placeholder disabled v-model="detail.student_level"></b-form-input>
                    </b-form-group>
                  </b-col>
                    <b-col>
                    <b-form-group label="Sub Class">
                  <b-form-input disabled placeholder v-model="detail.sub_class"></b-form-input>
                </b-form-group>
                   </b-col>
                  
                </b-form-row>
               <b-form-row>
                 <b-col>
                    <b-form-group label="Student Id">
                  <b-form-input disabled placeholder v-model="detail.student_id"></b-form-input>
                </b-form-group>
                   </b-col>
                  <b-col>
                    <b-form-group label="File No">
                      <b-form-input disabled placeholder v-model="detail.file_no"></b-form-input>
                    </b-form-group>
                  </b-col>
               </b-form-row>
              </b-form>
            </div>
          </div>

          <div class="save-btn"  >
            <button class="btn btn-save" type="submit">Save</button>
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>




<script>

export default {
  props: ["student"],
  data() {
    return {
      detail: {},
      gender: [
        {
          value: "male",
          text: "Male",
        },
        { value: "female", text: "Female" },
      ],
      cloudinary: {
        uploadPreset: "wo4qwffs",
        apiKey: "754134295584927",
        cloudName: "imostate",
      },
      progress: 0,
      start: false,
    };
  },
  mounted() {
    this.getInfo();
  },
 
  methods: {
    getUploadDetails(index, res, id) {
      this.student.profile = res.secure_url;
    },
    submit() {
      let user = JSON.parse(localStorage.getItem("typeStudent"));
      axios
        .put(`/api/user/${user.id}`, this.detail, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.$toasted.info("Successful");
         
          }
        });
    },
    getInfo() {
      axios
        .get(`/api/user`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.detail = res.data;
          }
        });
    },
    update() {
      this.$router.push(`/detail/update`);
    },
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
          this.$toasted.info("Profile picture changed");
          this.detail.profile = response.secure_url; // https address of uploaded file
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
.profile {
  /* display: flex;
  justify-content: center; */
  padding-top: 70px;
    padding-bottom: 80px;
}
.centered {
  position: absolute;
  right: -100%;
  top: 70%;
}
.upload {
  opacity: 0;
}
.avatar-profile {
  position: absolute;
  left: calc(50% - 35px);
  transform: translateY(-65%);
}
.tutor-profile {
  background: #fff;
  position: relative;
  padding: 30px;
}
.personal-form {
  border: 1px solid #c4c4c4;
  margin-bottom: 30px;
  margin-top: 20px;
}
.form-group {
  position: relative;
}
.after-edit:hover::before {
  content: "\f040";
  font-family: "FontAwesome";
  font-weight: 500;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(10px);
}
.save-btn {
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
}
.btn-save {
  background: #13a699;
  color: #fff;
  padding: 9px 16px;
  font-size: 16px;
  font-weight: 500;
}

</style>