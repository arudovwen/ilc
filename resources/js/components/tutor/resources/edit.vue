<template>
  <div class="body">
    <form @submit.prevent="submit" class="border rounded">
      <legend class="mb-5">Update Resource</legend>
      <div class="form-group mb-5">
        <label for>Choose Class</label>
        <select class="custom-select" v-model="resource.level">
          <option selected value>Select Class</option>
          <option
            :value="item.class_name.toLowerCase()"
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
            :value="item.name.toLowerCase()"
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
            :value="item.name.toLowerCase()"
            v-for="(item,idx) in modules"
            class="toCaps"
            :key="idx"
          >{{item.name}}</option>
        </select>
      </div>
   <div class="form-group mb-5">
        <label for="">Excerpt (optional)</label>
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

        <button
          type="button"
          class="btn btn-primary mb-3 mx-auto"
          @click="addmore"
          v-if="resource.count == 'multiple'"
        >Add more</button>
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

              <Upload :index="idx" @getUploadDetails="getUploadDetails" />
              <p class="toCaps animated fadeIn" v-if="item.type !==''">Resource Type : {{item.type}}</p>
              <p class="toCaps animated fadeIn" v-if="item.name !==''">Resource Name : {{item.name}}</p>
            </div>
          </div>
        </div>
      </div>

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

      <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
    </form>
  </div>
</template>

<script>
import Upload from "../../uploadComponent";
export default {
  props: ["tutor"],
  data() {
    return {
      allClass: [],
      modules: [],
      subjects: [],
      resource: {
        level: "",
        subject: "",
        module: "",
        excerpt:'',
        count: "single",
        content: [
          {
            type: "",
            file: "",
            name: ""
          }
        ],
        worksheet: "",
        note: ""
      }
    };
  },

  components: {
    Upload
  },
  mounted() {
    this.getResource();
    this.getCLasses();
    this.getSubjects();
  },
  watch: {
    "resource.subject": "getModules"
  },
  methods: {
    submit() {
      axios
        .put(`/api/resource/${this.$route.params.id}`, this.resource, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$toasted.info("Updated successfully");
            this.$router.push("/tutor/resources");
          }
        });
    },
    getCLasses() {
      axios
        .get("/api/all-classes", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
           
            this.allClass = res.data;
          }
        });
    },
    addmore() {
      this.resource.content.push({
        type: "",
        file: "",
        name: ""
      });
    },
    getUploadDetails(id, res) {
      this.resource.content[id].file = res.secure_url;
      this.resource.content[id].name = res.original_filename;
    },
    getModules() {
      axios
        .get(
          `/api/tutor-module/${this.resource.level}/${this.resource.subject}`,
          {
            headers: {
              Authorization: `Bearer ${this.$props.tutor.access_token}`
            }
          }
        )
        .then(res => {
          if (res.status == 200) {
            this.modules = res.data;
          }
        });
    },
    getResource() {
      axios
        .get(`/api/resource/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.resource = res.data;
            this.resource.content = JSON.parse(res.data.content);
          }
        });
    },
    getSubjects() {
      axios
        .get(`/api/tutor-all-subjects`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    }
  }
};
</script>

<style scoped>
.body {
  padding: 40px 20px 60px;
}
form {
  padding: 20px;
  width: 80%;
  margin: 0 auto;
}
.custom-control-input {
  opacity: 1;
  z-index: 1;
}
.custom-control {
  display: flex;
  align-items: center;
}
.resource {
  display: grid;
  grid-template-columns: 31% 31% 31%;
  grid-column-gap: 2.33%;
  grid-row-gap: 20px;
}
</style>