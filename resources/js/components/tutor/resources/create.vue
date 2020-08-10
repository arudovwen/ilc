<template>
  <!-- <div class="body">
    <form @submit.prevent="submit" class="border rounded">
      <legend class="mb-5">New Resource</legend>
      <div class="form-group mb-5">
        <label for>Choose Class</label>
        <br />
        <select class="custom-select w-25" v-model="resource.level">
          <option selected value>Select Class</option>
          <option
            :value="item.class_name"
            v-for="(item,idx) in allClass"
            class="toCaps"
            :key="idx"
          >{{item.class_name}}</option>
        </select>
      </div>
      <div class="form-group mb-5">
        <label for>Choose Subject</label>
        <br />
        <select
          class="custom-select w-25"
          v-model="resource.subject"
          :disabled="resource.level ==''"
        >
          <option selected disabled value>Select one</option>
          <option
            :value="item.name"
            v-for="(item,idx) in subjects"
            class="toCaps"
            :key="idx"
          >{{item.name}}</option>
        </select>
      </div>

      <div class="form-group mb-5">
        <label for>Choose Module/Topic</label>
        <br />
        <select
          class="custom-select w-50"
          v-model="resource.module"
          :disabled="resource.subject ==''"
        >
          <option selected disabled value>Select one</option>
          <option
            :value="item.name"
            v-for="(item,idx) in modules"
            class="toCaps"
            :key="idx"
          >{{item.name}}</option>
        </select>
      </div>
      <div class="form-group mb-5">
        <label for>Excerpt (optional)</label>
        <textarea class="form-control" rows="3" v-model="resource.excerpt"></textarea>
      </div>

      <div class="border p-3 mb-5">
        <h4>Resource Upload</h4>
        <div class="form-group mb-5">
          <label for>Resources Count</label>
          <label class="custom-control custom-radio">
            <input
              type="radio"
              value="single"
              class="custom-control-input"
              v-model="resource.count"
            />
            <span class="custom-control-indicator">Single resource</span>
          </label>

          <label class="custom-control custom-radio">
            <input
              type="radio"
              value="multiple"
              class="custom-control-input"
              v-model="resource.count"
            />
            <span class="custom-control-indicator">Multiple resources</span>
          </label>
        </div>

        <b-button
          type="button"
          @click="addmore"
          v-if="resource.count == 'multiple'"
        >Add more</b-button>
        <div class="resource">
          <div v-for="(item,idx) in resource.content" :key="idx">
            <div class="form-group border bg-white p-3 text-center">
              <h5>Upload Resource</h5>
              <div class="form-group mb-3 text-center">
                <label for>Choose Format</label>
                <br />
                <select class="custom-select" v-model="item.type">
                  <option selected disabled value>Select one</option>
                  <option value="pdf">PDF</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                  <option value="ppt">PPT</option>
                  <option value="csv">CSV</option>
                </select>
              </div>
              <div class="form-group">
                <label for>Title</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="item.title"
                  aria-describedby="helpId"
                  placeholder
                />
              </div>
              <div class="form-group">
                <h6>Overview (250 characters)</h6>
                <textarea class="form-control" v-model="item.overview" maxlength="250" rows="3"></textarea>
              </div>
              <b-form-group>
                 <Upload :index="idx" @getUploadDetails="getUploadDetails" />
              <p class="toCaps animated fadeIn" v-if="item.type !==''">Resource Type : {{item.type}}</p>
              <p class="toCaps animated fadeIn" v-if="item.name !==''">Resource Name : {{item.name}}</p>
             </b-form-group>
            </div>
          </div>
        </div>
      </div>

      <b-form-group class="mb-5 w-25">
        <h5 class="mb-2" >Cover Image</h5>  <br>
        <label for="cover">  <b-avatar :src="resource.cover_image" rounded size="7rem" icon="image-fill"></b-avatar></label>
        <Upload :label='label' :index='cover' @getUploadDetails="getUploadDetails"/>
       
     </b-form-group>

      <div class="form-group mb-5">
        <label for>Would you like to include a Worksheet/Quiz?</label>
        <label class="custom-control custom-radio">
          <input type="radio" value="yes" class="custom-control-input" v-model="resource.worksheet" />
          <span class="custom-control-indicator">Yes</span>
        </label>

        <label class="custom-control custom-radio">
          <input type="radio" value="no" class="custom-control-input" v-model="resource.worksheet" />
          <span class="custom-control-indicator">No</span>
        </label>
      </div>

      <div class="form-group mb-5">
        <label for>Tutors Note</label>
        <textarea class="form-control" rows="3" v-model="resource.note"></textarea>
      </div>

      <b-button type="submit">Submit</b-button>
    </form>
  </div>-->
  <div class="add-resource">
    <h5 class="container">Add Resource</h5>
    <b-container class="form-container">
      <b-form @submit.prevent="submit">
        <b-form-row>
          <b-col md="4">
            <div class="form-group mb-3">
              <label for>Select Class</label>
              <br />
              <select class="custom-select" v-model="resource.level">
                <option selected value>Select Class</option>
                <option
                  :value="item.class_name"
                  v-for="(item,idx) in allClass"
                  class="toCaps"
                  :key="idx"
                >{{item.class_name}}</option>
              </select>
            </div>
          </b-col>
          <b-col md="4">
            <div class="form-group mb-5">
              <label for>Choose Subject</label>
              <br />
              <select
                class="custom-select"
                v-model="resource.subject"
                :disabled="resource.level ==''"
              >
                <option selected disabled value>Select Subject</option>
                <option
                  :value="item.name"
                  v-for="(item,idx) in subjects"
                  class="toCaps"
                  :key="idx"
                >{{item.name}}</option>
              </select>
            </div>
          </b-col>
          <b-col md="4">
            <div class="form-group mb-5">
              <label for>Select Module</label>
              <br />
              <select
                class="custom-select"
                v-model="resource.module"
                :disabled="resource.subject ==''"
              >
                <option selected disabled value>Select one</option>
                <option
                  :value="item.name"
                  v-for="(item,idx) in modules"
                  class="toCaps"
                  :key="idx"
                >{{item.name}}</option>
              </select>
            </div>
          </b-col>
        </b-form-row>
        <div class="form-group mb-5">
          <label for>Excerpt (optional)</label>
          <textarea class="form-control" rows="3" v-model="resource.excerpt"></textarea>
        </div>
        <b-form-group label="Resource Upload Type">
          <b-form-radio-group v-model="resource.count" :options="options" plain name="plain-inline"></b-form-radio-group>
        </b-form-group>
        <b-button type="button" @click="addmore" v-if="resource.count == 'multiple'">Add more</b-button>
        <div v-for="(item,idx) in resource.content" :key="idx">
          <div class="upload-resource container">
            <h5>Upload Resource</h5>
            <b-form-row>
              <b-col md="6">
                <div class="form-group mb-3">
                  <label for>Choose Format</label>
                  <br />
                  <select class="custom-select" v-model="item.type">
                    <option selected disabled value>Select one</option>
                    <option value="pdf">PDF</option>
                    <option value="audio">Audio</option>
                    <option value="video">Video</option>
                    <option value="ppt">PPT</option>
                    <option value="csv">CSV</option>
                  </select>
                </div>
              </b-col>
              <b-col md="6">
                <div class="form-group">
                  <label for>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="item.title"
                    aria-describedby="helpId"
                    placeholder
                  />
                </div>
              </b-col>
            </b-form-row>
            <div class="form-group">
              <h6>Overview (250 characters)</h6>
              <textarea class="form-control" v-model="item.overview" maxlength="250" rows="3"></textarea>
            </div>
            <b-form-group>
              <Upload :index="idx" @getUploadDetails="getUploadDetails" />
              <p class="toCaps animated fadeIn" v-if="item.type !==''">Resource Type : {{item.type}}</p>
              <p class="toCaps animated fadeIn" v-if="item.name !==''">Resource Name : {{item.name}}</p>
            </b-form-group>
            <!-- <b-form-group class="mb-5 w-25">
              <h5 class="mb-2">Cover Image</h5>
              <br />
              <label for="cover">
                <b-avatar :src="resource.cover_image" rounded size="7rem" icon="image-fill"></b-avatar>
              </label>
              <Upload :label="label" :index="cover" @getUploadDetails="getUploadDetails" />
            </b-form-group>-->
            <div class="upload-btn-wrapper">
              <h6>Uplaod Cover Image</h6>
              <b-avatar :src="resource.cover_image" rounded size="7rem" icon="image-fill"></b-avatar>
              <input type="file" name="myfile" />
            </div>
          </div>
        </div>
        <!-- <div class="form-group mb-5">
          <label for>Would you like to include a Worksheet/Quiz?</label>
          <label class="custom-control custom-radio">
            <input
              type="radio"
              value="yes"
              class="custom-control-input"
              v-model="resource.worksheet"
            />
            <span class="custom-control-indicator">Yes</span>
          </label>

          <label class="custom-control custom-radio">
            <input
              type="radio"
              value="no"
              class="custom-control-input"
              v-model="resource.worksheet"
            />
            <span class="custom-control-indicator">No</span>
          </label>
        </div>-->
        <b-form-group label="Would You Like to Include Worksheet/Quiz">
          <b-form-radio-group
            v-model="resource.worksheet"
            :options="worksheet"
            plain
            name="plain-inline"
          ></b-form-radio-group>
        </b-form-group>
        <div class="form-group mb-5">
          <label for>Tutors Note</label>
          <textarea class="form-control" rows="3" v-model="resource.note"></textarea>
        </div>

        <div class="save-btn">
          <b-button type="submit" class="btn-save">ADD RESOURCE</b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Upload from "../../uploadComponent";
export default {
  props: ["tutor"],
  data() {
    return {
      selected: "single",
      options: [
        { text: "Single Resource", value: "single" },
        { text: "Multiple Resource", value: "multiple" },
      ],
      selected: "yes",
      worksheet: [
        { text: "Yes", value: "yes" },
        { text: "No", value: "no" },
      ],
      label: "cover",
      cover: "cover",
      allClass: [],
      modules: [],
      subjects: [],

      resource: {
        level: "",
        subject: "",
        module: "",
        excerpt: "",
        count: "single",
        cover_image: "",
        content: [
          {
            type: "",
            file: "",
            name: "",
            title: "",
            overview: "",
          },
        ],
        worksheet: "",
        note: "",
      },
    };
  },

  components: {
    Upload,
  },
  mounted() {
    this.getCLasses();
    this.getSubjects();
  },
  watch: {
    "resource.subject": "getModules",
  },
  methods: {
    submit() {
      axios
        .post(`/api/resource`, this.resource, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 201) {
            this.$toasted.success("Created successfully", {
              icon: {
                name: "check",
                after: false,
              },
            });
            this.$router.push("/tutor/resources");
          }
        });
    },
    getCLasses() {
      axios
        .get("/api/all-classes", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            // res.data.forEach(item => {
            //   this.allClass.push(item.class_name);
            //   if (item.sub_class !== "") {
            //     item.sub_class.split(",").forEach(i => {
            //       this.allClass.push(i);
            //     });
            //   }
            // });
            this.allClass = res.data;
          }
        });
    },
    addmore() {
      this.resource.content.push({
        type: "",
        file: "",
        name: "",
        title: "",
        overview: "",
      });
    },
    getUploadDetails(id, res) {
      console.log("getUploadDetails -> id", id);

      if (id == "cover") {
        this.resource.cover_image = res.secure_url;
      } else {
        this.resource.content[id].file = res.secure_url;
        this.resource.content[id].name = res.original_filename;
      }
    },
    getModules() {
      axios
        .get(
          `/api/tutor-module/${this.resource.level}/${this.resource.subject}`,
          {
            headers: {
              Authorization: `Bearer ${this.$props.tutor.access_token}`,
            },
          }
        )
        .then((res) => {
          if (res.status == 200) {
            this.modules = res.data;
          }
        });
    },
    getSubjects() {
      axios
        .get(`/api/tutor-all-subjects`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    },
  },
};
</script>

<style scoped>
.body {
  padding: 40px 20px 60px;
}
.add-resource {
  padding: 20px 30px;
}
.form-container {
  background: #fff;
  border: 3px solid #22cade;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(249, 247, 240, 0.25);
  padding: 10px 20px;
  margin-top: 10px;
}
.upload-resource {
  border: 1px dotted #22cade;
  padding: 10px 20px;
  margin-top: 10px;
}
.custom-select {
  display: inline-block !important;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  /* background: #fff; */
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  /* -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; */
  background: #fff url(/images/down-chevron.png) no-repeat right 0.75rem
    center/8px 10px;
}
label {
  font-family: "Montserrat";
  font-weight: 500;
}
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
  border-style: dotted;
  width: 100%;
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
.save-btn {
  display: flex;
  justify-content: center;
}
.btn-save {
  background-color: #0a4065;
  padding: 10px 20px;
}
</style>