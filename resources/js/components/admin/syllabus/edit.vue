<template>
  <div class="body">
    <nav class="mb-5">
      <div class="nav_box shadow-sm">
        <p class="mx-auto" @click="multiDrop">Multi-Drop</p>
        <hr />
      </div>
      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Add Class</p>
        <hr />
      </div>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Remove Class</p>
        <hr />
      </div>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Assign Level</p>
        <hr />
      </div>
    </nav>

    <form @submit.prevent="createSyllabus" class>
      <div class="mb-5 p-3 content">
        <div class="d-flex">
          <div class="form-group">
            <label for>Class</label>
            <select class="custom-select" v-model="data.myclass">
              <option value disabled>Select class</option>
              <option
                v-for="(item,idx) in classes"
                :key="idx"
                :value="item.class_name"
                class="toCaps"
              >{{item.class_name}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for>Subject</label>
            <select class="form-control" v-model="data.subject">
              <option value disabled>Select Subject</option>
              <option
                v-for="(item,idx) in subjects"
                :key="idx"
                :value="item.name"
                class="toCaps"
              >{{item.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for>Topic</label>
          <input
            type="text"
            class="form-control"
            v-model="data.topic"
            aria-describedby="helpId"
            placeholder
          />
        </div>
        <div>
          <div class="form-group">
            <label for>Prerequisite</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.prerequisite"
            ></editor>
          </div>

          <div class="form-group">
            <label for>Description</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.desc"
            ></editor>
          </div>
          <div class="form-group">
            <label for>Objective</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.objective"
            ></editor>
          </div>
          <div class="form-group">
            <label for>Learning Outcome</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.outcome"
            ></editor>
          </div>
          <div class="form-group">
            <label for>Course Format</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.course_format"
            ></editor>
          </div>
          <div class="form-group">
            <label for>Student Evaluation</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.evaluation"
            ></editor>
          </div>

          <div class="form-group">
            <label for>Examination Format</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.exam_format"
            ></editor>
          </div>
          <div class="form-group">
            <label for>Grading Scale</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.grading_scale"
            ></editor>
          </div>
          <div class="form-group">
            <label for>Book References</label>

            <editor
              apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
              :init="{
      height: 250,
      menubar: true,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table'
      ],
      toolbar: 'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help'
    }"
              v-model="data.syllabus.references"
            ></editor>
          </div>
        </div>
      </div>

      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  </div>
</template>


<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  props: ["admin"],
  data() {
    return {
      data: {
        myclass: "",
        subject: "",
        topic: "",
        syllabus: {
          prerequisite: "",
          desc: "",
          objective: "",
          grading_scale: "",
          exam_format: "",
          course_format: "",
          evaluation: "",
          outcome: "",
          references: ""
        }
      },

      classes: [],
      subjects: [],
      items: [],
      item: false
    };
  },
  components: {
    editor: Editor
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getSubjects();
    this.getclasses();
    this.getSyllabus();
  },
  methods: {
    createSyllabus() {
      axios
        .post(`/api/syllabus/${this.$route.params.id}`, this.data, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$toasted.info("Success");
            this.$router.push("/admin/syllabus/home");
          }
        });
    },
    getSyllabus() {
      axios
        .get(`/api/syllabus/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.data.myclass = res.data.myclass;
            this.data.subject = res.data.subject;
            this.data.topic = res.data.topic;
            this.data.syllabus = JSON.parse(res.data.syllabus);
          }
        });
    },
    getSubjects() {
      axios
        .get("/api/subject", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    },
    getclasses() {
      axios
        .get("/api/classes", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.classes = res.data;
          }
        });
    },
    addSection() {
      this.data.push({
        class: "",
        subject: "",
        topic: "",
        syllabus: [
          {
            week: null,
            title: "",
            description: ""
          }
        ]
      });
    },
    removeSection() {
      this.data.pop();
    },

    selectAll() {
      if (this.item) {
        this.items = [];
        this.subjects.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },

    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/syllabus/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getTutors();
            }
          });
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
      if (del) {
        axios
          .post("/api/multi-syllabus-drop", this.items, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getsubjects();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    }
  }
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
}
.hiden {
  opacity: 0;
}
.nav_box {
  background-color: #f7f8fa;
  display: flex;
  text-align: center;
  padding: 10px 15px;
}
.add,
.content {
  background-color: #f7f8fa;
}
.body {
  padding: 20px 20px 70px;
  height: 100%;
}
form {
  padding-bottom: 70px;
}
label{
    font-weight:bold;
}
</style>