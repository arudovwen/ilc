<template>
  <div class="body">
    <form @submit.prevent="createSyllabus" class>
        <legend class="mb-5 mx-auto text-center"> Course  Syllabus</legend>
      <div class="mb-5 p-3 content">
        <div class>
          <div class="form-group">
         
            <h5>Class : {{data.myclass}}</h5>
          </div>
          <div class="form-group">
           
            <h5>Subject : {{data.subject}}</h5>
          </div>
        </div>
        <div class="form-group">
        
          <h5>Topic : {{data.topic}}</h5>
        </div>
        <div>
          <div class="form-group">
            <label for>Prerequisite</label>

            <p v-html="data.syllabus.prerequisite"></p>
          </div>

          <div class="form-group">
            <label for>Description</label>

            <p v-html="data.syllabus.desc"></p>
          </div>
          <div class="form-group">
            <label for>Objective</label>
            <p v-html="data.syllabus.objective"></p>
          </div>
          <div class="form-group">
            <label for>Learning Outcome</label>

            <p v-html="data.syllabus.outcome"></p>
          </div>
          <div class="form-group">
            <label for>Course Format</label>
            <p v-html="data.syllabus.course_format"></p>
          </div>
          <div class="form-group">
            <label for>Student Evaluation</label>

            <p v-html="data.syllabus.evaluation"></p>
          </div>

          <div class="form-group">
            <label for>Examination Format</label>

            <p v-html="data.syllabus.exam_format"></p>
          </div>
          <div class="form-group">
            <label for>Grading Scale</label>
            <p v-html="data.syllabus.grading_scale"></p>
          </div>
          <div class="form-group">
            <label for>Book References</label>
            <p v-html="data.syllabus.references"></p>
          </div>
        </div>
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

  
    };
  },
  components: {
    editor: Editor
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getSyllabus();
 
  },
  methods: {
   
    getSyllabus() {
      axios
        .get(`/api/syllabus/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.data = res.data;
            this.data.syllabus = JSON.parse(res.data.syllabus)
          }
        });
    },
   

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
    background-color: #f7f8fa;
}
form {
  padding-bottom: 70px;
}
p{
    font-size: 16px;
}
label{
    font-weight:bold;
}
</style>