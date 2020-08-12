<template>
  <div class="body">
    <h3 class="text-center my-3">Curriculum</h3>
    <div class="form-group" v-if="curriculum">
      <h4 class="toCaps">
        Grade Level :
        <span class>{{curriculum.grade_level}}</span>
      </h4>
    </div>
    <div class="contain-syllabus">
      <div class="view-syllabus">
        <div class="class-information" v-if="curriculum.profile">
          <h5>Student Profile</h5>
          <div class="underline"></div>
          <div class="form-group d-flex">
            <label for class="mr-3 side-label">Target Age :</label>
            {{curriculum.profile.age}}
          </div>
          <div class="form-group d-flex">
            <label for class="mr-3 side-label">Interests :</label>
            {{curriculum.profile.interests}}
          </div>
          <div class="form-group d-flex">
            <label for class="mr-3 side-label">Learning Abilities :</label>
            {{curriculum.profile.abilities}}
          </div>
          <div class="form-group d-flex">
            <label for class="mr-3 side-label">Other Pecularities :</label>
            {{curriculum.profile.others}}
          </div>
        </div>
        <hr />
        <div class="class-information">
          <h5>Overarching Learner Outcome</h5>
          <div class="underline"></div>
          <div class="form-group">
            <span v-for="(item,idx) in curriculum.learner_outcome" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
        </div>
        <hr />
        <div class="class-information">
          <h5>Target skills to be learned</h5>
          <div class="underline"></div>
          <span v-for="(item,idx) in curriculum.target_skills" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            {{item.name}}
          </span>
        </div>
        <hr />
        <div class="class-information">
          <h5>Required subjects</h5>
          <div class="underline"></div>
          <div class="form-group">
            <span v-for="(item,idx) in curriculum.prerequisite" :key="idx" class="mb-2 d-flex">
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
            <span v-for="(item,idx) in curriculum.delivery_methods" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
        </div>
        <hr />
        <div class="class-information">
          <h5>Assessment</h5>
          <div class="underline"></div>
          <div class="form-group">
            <span v-for="(item,idx) in curriculum.assessments" :key="idx" class="mb-2 d-flex">
              <span class="mr-3">{{idx+1}}.</span>
              {{item.name}}
            </span>
          </div>
        </div>
        <hr />
        <div class="class-information">
          <h5>FAQs (Optional)</h5>
          <div class="underline"></div>
          <div v-for="(item,idx) in curriculum.faqs" :key="idx" class="mb-3">
            <span class="d-flex mb-2">
              <label for="Question" class="side-label">Question</label>
              {{item.question}}
            </span>
            <span class="d-flex">
              <label for class="side-label">Answer</label>
              {{item.answer}}
            </span>
            <hr v-if="curriculum.faqs.length > 1" />
          </div>
        </div>
        <hr />
        <div class="class-information">
          <h5>Course Availability</h5>
          <div class="underline"></div>
          <div class="form-group">
            <p>{{curriculum.availability}}</p>
          </div>
        </div>
        <hr />
        <div class="class-information">
          <h5>Comments</h5>
          <div class="underline"></div>
          <div class="form-group">
            <p>{{curriculum.comments}}</p>
          </div>
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
      curriculum: {},
    };
  },
  mounted() {
    this.getCurriculum();
  },
  methods: {
    getCurriculum() {
      axios
        .get(`/api/tutor-curriculum/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.curriculum = JSON.parse(res.data.curriculum);
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
  margin-bottom: 2px !important;
}
.class-information-inner {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
.class-information-inner span {
  color: #808080;
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