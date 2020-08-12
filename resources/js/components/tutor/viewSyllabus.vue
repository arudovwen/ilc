<template>
  <!-- <div class="body">
      <h5 class="text-center my-3">Syllabus</h5>
    
    <div class="border p-3 my-4">
      <h5>Class Information</h5>
      <div class="form-group">
        <strong class="toCaps">
        
         <span class="text-muted">Term :</span> {{syllabus.term}}
        </strong>
      </div>
      <div class="form-group">
        <strong class="toCaps">
          <span class="text-muted">Grade Level :</span>
          {{syllabus.grade_level}}
        </strong>
      </div>
    </div>
    <table class="table table-bordered bg-white">
      <tr class="border p-3 my-4">
        <td>
          <h5>Subject Information</h5>

          <div class="form-group">
            <strong class="toCaps">
              <span class="text-muted">Subject :</span>
              {{syllabus.subject}}
            </strong>
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
          <h5>Overarching Learner Outcome</h5>

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
          <h5>Target skills to be learned</h5>

          <span v-for="(item,idx) in syllabus.target_skills" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h5>Required Modules</h5>

          <span v-for="(item,idx) in syllabus.modules" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h5>Delivery Methods</h5>

          <span v-for="(item,idx) in syllabus.delivery_methods" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr class="border p-3 my-4">
        <td>
          <h5>Assessment</h5>
          <small id="helpId" class="form-text text-muted">How will the students be assessed?</small>

          <span v-for="(item,idx) in syllabus.assessments" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <h5>FAQs (Optional)</h5>

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
          <h5>Course Availability</h5>

          <div class="form-group">{{syllabus.availability}}</div>
        </td>
      </tr>

      <tr class="border p-3 my-4">
        <td>
          <h5>Comments</h5>
          <div class="form-group">{{syllabus.comments}}</div>
        </td>
      </tr>
    </table>
    
  </div>-->
  <div class="viewsyllabus pt-3 pl-3">
    <h2>Syllabus</h2>
    <div class="contain-syllabus">
      <div class="view-syllabus">
        <div class="class-information">
          <h5>Class Information</h5>
          <div class="underline"></div>
          <div class="class-information-inner">
            <h5>
              TERM:
              <span>{{syllabus.term}}</span>
            </h5> 
            <h5>
              Class:
              <span>{{syllabus.grade_level}}</span>
            </h5>
          
        
        </div>
        <hr />
        <div class="class-information">
          <h5>Subject Information</h5>
          <div class="underline"></div>
          <div class="class-information-inner">
            <h6>
              SUBJECT:
              <span>{{syllabus.subject}}</span>
            </h6>
            <h6>
              FREQUENCY:
              <span>{{syllabus.frequency}}</span>
            </h6>
          </div>
          <div class="subject-description">
            <h6>Subject Description</h6>
            <p>{{syllabus.description}}</p>
          </div>
         
         
          
        </div>
       
       </div>
        <div class="class-information">
          <h5>Overarching Learner Outcome</h5>
          <div class="underline"></div>
          <div class="form-group">
            <span v-for="(item,idx) in syllabus.learner_outcome" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
         
        </div>
        <hr />
        <div class="class-information">
          <h5>Target skills to be learned</h5>
          <div class="underline"></div>
          <div class="form-group">
            <span v-for="(item,idx) in syllabus.target_skills" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
        
         
        </div>
        <hr />
        <div class="class-information">
          <h5>Required Modules</h5>
          <div class="underline"></div>
          <div class="form-group">
            <span v-for="(item,idx) in syllabus.modules" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
       
         
        </div>
        <hr />
        <div class="class-information">
          <h5>Delivery Methods</h5>
          <div class="underline"></div>
          <div class="form-group">
            <span v-for="(item,idx) in syllabus.delivery_methods" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
       
         
        </div>
        <hr />
        <div class="class-information">
          <h5>Assessment</h5>
          <div class="underline"></div>
          <small id="helpId" class="form-text text-muted">How will the students be assessed?</small>
          <div class="form-group">
            <span v-for="(item,idx) in syllabus.assessments" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
      
         
        </div>
        <hr />
        <div class="class-information">
          <h5>Course Availability</h5>
          <div class="underline"></div>
          <div class="form-group">{{syllabus.availability}}</div>
        </div>
        <hr>
        <div class="class-information">
          <h5>Comments</h5>
          <div class="underline"></div>
          <div class="form-group">{{syllabus.comments}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      syllabus: [],
    };
  },
  mounted() {
    this.getSyllabus();
  },
  methods: {
    getSyllabus() {
      let data = { syllabus: this.syllabus };
      axios
        .get(`/api/tutor-syllabus/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.syllabus = JSON.parse(res.data.syllabus);
          }
        });
    },
  },
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
h5 {
  margin-bottom: 24px;
  font-size: 1.3em;
}
.side-label {
  width: 150px;
}
.form-text {
  margin-bottom: 18px;
}
.underline {
  width: 80px;
  height: 3px;
  background-color: #0a4065;
}
.class-information {
  padding-top: 20px;
}
.class-information h5 {
  margin-bottom: 0 !important;
}
.class-information-inner {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
h5{
  color: #808080;
}
.class-information-inner span {
  color: #333333;
}
.view-syllabus {
  background: #fff;
  box-shadow: 5px 4px 13px rgba(249, 247, 240, 0.25);
  padding: 30px;
  border-radius: 10px;
}
.subject-description {
  padding-top: 15px;
}
.contain-syllabus {
  padding: 30px;
}
.form-group{
  font-family: "Montserrat";
}
</style>