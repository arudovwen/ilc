<template>
  <div class="body">
      <h3 class="text-center my-3">Syllabus</h3>
    <!-- form starts here  -->
    <div class="border p-3 my-4">
      <h3>Class Information</h3>
      <div class="form-group">
        <h5 class="toCaps">
        
         <span class="text-muted">Term :</span> {{syllabus.term}}
        </h5>
      </div>
      <div class="form-group">
        <h5 class="toCaps">
          <span class="text-muted">Grade Level :</span>
          {{syllabus.grade_level}}
        </h5>
      </div>
    </div>
    <table class="table table-bordered bg-white">
      <tr class="border p-3 my-4">
        <td>
          <h3>Subject Information</h3>

          <div class="form-group">
            <h5 class="toCaps">
              <span class="text-muted">Subject :</span>
              {{syllabus.subject}}
            </h5>
          </div>

          <div class="form-group">
            <label for>Description :</label>
            {{syllabus.description}}
          </div>

          <div class="form-group">
            <label for>Frequency :</label>
            {{syllabus.frequency}}
          </div>
        </td>
      </tr>

      <tr class="border p-3 my-4">
        <td>
          <h3>Overarching Learner Outcome</h3>

          <div class="form-group">
            <span v-for="(item,idx) in syllabus.learner_outcome" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h3>Target skills to be learned</h3>

          <span v-for="(item,idx) in syllabus.target_skills" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h3>Required Modules</h3>

          <span v-for="(item,idx) in syllabus.modules" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h3>Delivery Methods</h3>

          <span v-for="(item,idx) in syllabus.delivery_methods" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h3>Assessment</h3>
          <small id="helpId" class="form-text text-muted">How will the students be assessed?</small>

          <span v-for="(item,idx) in syllabus.assessments" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <h3>FAQs (Optional)</h3>

          <div v-for="(item,idx) in syllabus.faqs" :key="idx" class="mb-3">
            <span class="d-flex mb-2">
              <label for="Question" class="side-label">Question</label>
              {{item.question}}
            </span>
            <span class="d-flex">
              <label for class="side-label">Answer</label>
              {{item.answer}}
            </span>
            <hr v-if="syllabus.faqs.length > 1" />
          </div>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h3>Course Availability</h3>

          <div class="form-group">{{syllabus.availability}}</div>
        </td>
      </tr>

      <tr class="border p-3 my-4">
        <td>
          <h3>Comments</h3>
          <div class="form-group">{{syllabus.comments}}</div>
        </td>
      </tr>
    </table>
    <!-- form ends here  -->
  </div>
</template>

<script>
export default {
  props: ["admin"],
  data() {
    return {
      syllabus: []
    };
  },
  mounted() {
    this.getSyllabus();
  },
  methods: {
    getSyllabus() {
      let data = { syllabus: this.syllabus };
      axios
        .get(`/api/syllabus/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.syllabus = JSON.parse(res.data.syllabus);
          }
        });
    }
  }
};
</script>

<style scoped>
.body {
  padding: 40px 30px 70px;
  position: relative;

}
.popup-overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  top: 0;
  left: 0;
}
.suggestion-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 5px;
  height: 250px;
  width: 50%;
  padding: 15px;
  position: absolute;
  bottom: 50%;
  transform: translate(50%, 50%);
  right: 50%;
}
.suggestion-box p {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.close {
  position: absolute;
  right: 5px;
  top: 5px;
}
form {
  padding: 20px;
  padding-bottom: 60px;
  background: white;
  font-size: 14px;
}
h3 {
  margin-bottom: 24px;
  font-size: 1.4em;
}
.side-label {
  width: 150px;
}
.form-text {
  margin-bottom: 18px;
}
</style>