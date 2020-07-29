<template>
  <div class="container">
    <div class="welcome-board">
      <img src="/images/clip-99.png" alt />
      <div class="welcome-board-content ml-auto">
        <h3>
          Welcome OnBoard
          <span>SUCESS AHOAN</span>
        </h3>
        <p>
          Get quick access to your assesment and grade book on the dash board
          <br />Gain fast knowlege add resources to your library and more
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 result-board">
        <div class="latest-result-board">
          <div class="row latest-result-top">
            <div class="col-md-6">
              <h6>Latest Result</h6>
            </div>
            <div class="col-md-6">
              <b-form-datepicker id="example-datepicker" v-model="value" class></b-form-datepicker>
            </div>
          </div>
          <div class="result-progress">
            <div class="progress-top">
              <h6>Mathematics</h6>
              <p>67%</p>
            </div>
            <b-progress :value="value" :max="max" class="mb-3"></b-progress>
          </div>
          <div class="result-progress">
            <div class="progress-top">
              <h6>Mathematics</h6>
              <p>67%</p>
            </div>
            <b-progress :value="value" :max="max" class="mb-3"></b-progress>
          </div>
          <div class="result-progress">
            <div class="progress-top">
              <h6>Mathematics</h6>
              <p>67%</p>
            </div>
            <b-progress :value="value" :max="max" class="mb-3"></b-progress>
          </div>
        </div>
      </div>

      <div class="col-md-8 discussion">
        <div class="discussion-board">
          <div class="discussion-board-top">
            <h6>Discussion Board</h6>
            <router-link to="/student/discussion">View More</router-link>
          </div>
          <div class="discussion-board-content">
            <div class="inner-content">
              <b-avatar src="/images/profile-img.jpg"></b-avatar>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, numquam quidem ipsam quisquam accusantium expedita </p>
            </div>
            <div class="inner-content">
              <b-avatar src="/images/profile-img.jpg"></b-avatar>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, numquam quidem ipsam quisquam accusantium expedita </p>
            </div>
          </div>
        </div>
        <div class="row reminder">
          <div class="col-md-6 ">
            <div class="reminder-card reminder-card-left">
              <h5>ENGLISH LANGUAGE TEST</h5>
              <i class="icon-hour"> 30, July 2020 03PM</i>
            </div>
          </div>
          <div class="col-md-6">
            <div class="reminder-card reminder-card-right">
              <h5>ENGLISH LANGUAGE TEST</h5>
              <i class="icon-hour"> 30, July 2020 03PM</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["student"],
  data() {
    return {
      tutors: [],
      students: [],
      classes: [],
      syllabus: [],
      curriculum: [],
      fields: ["class", "subject"],
      field: ["class"],
    };
  },
  mounted() {
    // this.getStudents();
    // this.getClasses();
    // this.getTutors();
    // this.getSyllabus()
    // this.getCurriculum();
  },
  methods: {
    getStudents() {
      axios
        .get("/api/student-get-students", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.students = res.data;
          }
        });
    },
    getCurriculum() {
      axios
        .get("/api/curriculum", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.curriculum = res.data;
          }
        });
    },
    getTutors() {
      axios
        .get("/api/tutor", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tutors = res.data;
          }
        });
    },
    getClasses() {
      axios
        .get("/api/classes", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.classes = res.data;
          }
        });
    },
    getSyllabus() {
      axios
        .get("/api/syllabus", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.syllabus = res.data;
          }
        });
    },
  },
};
</script>

<style scoped>
.container {
  font-family: "Montserrat";
}

.welcome-board {
  background: rgba(19, 166, 153, 0.43);
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display: flex;
  position: relative;
  margin-top: 2rem;
}
.welcome-board img {
  width: 320px;
  height: 280px;
  position: absolute;
  transform: translateY(-28%);
}
.welcome-board-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem;
}
.welcome-board-content p {
  text-align: center;
  padding: 10px;
}

.welcome-board-content h3 {
  color: #13a699;
}

.latest-result-board {
  margin-top: 2rem;
  background: #fff;
  padding: 1.5rem;
}

.result-progress {
  margin-top: 10px;
}
.progress-top {
  display: flex;
  justify-content: space-between;
}

.progress-bar{
  width: 67% !important;
  background-color: #DE1515 !important;
}
.discussion-board{
  background: #fff;
  padding: 1rem;
}
.discussion-board-top{
  display: flex;
  justify-content: space-between;
}
.discussion{
  margin-top: 2rem;
}
.inner-content{
  display: flex;
}
.reminder-card{
 border-radius: 5px;
  color: #fff;
  padding: 2.5rem;
}
.inner-content p{
 font-size: 12px;
 padding-left: 5px;
}
.reminder{
  margin-top: 2rem;
}
.reminder-card-left{
  background: #AAF0D1;
 
}

.reminder-card-right{
  background: rgba(19, 166, 153, 0.86);
}
</style>