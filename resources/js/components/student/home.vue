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

    <b-container-fluid>
      <b-row>
        <b-col md="4">
          <div class="result-board">
            <div class="latest-result-board cards">
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
        </b-col>
        <b-col md="4">
          <div class="resources-update cards">
            <h5>Resources Update</h5>
            <div class="resources-inner">
              <div class="update-content">
                <b-avatar src="/images/english-lit.jpg"></b-avatar>
                <p>Module 1.1 has been added to your english resources</p>
              </div>
              <div class="log-link">
                <router-link to>View</router-link>
              </div>
            </div>
            <div class="resources-inner">
              <div class="update-content">
                <b-avatar src="/images/english-lit.jpg"></b-avatar>
                <p>Module 1.1 has been added to your english resources</p>
              </div>
              <div class="log-link">
                <router-link to>View</router-link>
              </div>
            </div>
            <div class="resources-inner">
              <div class="update-content">
                <b-avatar src="/images/english-lit.jpg"></b-avatar>
                <p>Module 1.1 has been added to your english resources</p>
              </div>
              <div class="log-link">
                <router-link to>View</router-link>
              </div>
            </div>
             <div class="resources-inner">
              <div class="update-content">
                <b-avatar class="update-avatar" src="/images/english-lit.jpg"></b-avatar>
                <p>Module 1.1 has been added to your english resources</p>
              </div>
              <div class="log-link">
                <router-link to>View</router-link>
              </div>
            </div>
          </div>
        </b-col>
        
         <b-col md="4">
            <div class="cards">
              <h5>Today's Class</h5>
              <div v-b-tooltip.hover title="This class is currently ongoing" class="class-content">
                <div class="class-content-top">
                  <h6>Geography</h6>
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <div class="class-content-main">
                 <p>Bascic 4, <span>by: <strong>Henry Annayo</strong></span></p>
                 <p>Ongoing</p>
                </div>
              </div>
               <div v-b-tooltip.hover title="This class starts 12pm" class="class-content">
                <div class="class-content-top content-2">
                  <h6>Geography</h6>
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <div class="class-content-main">
                 <p>Bascic 4, <span>by: <strong>Henry Annayo</strong></span></p>
                 <p>Upcoming</p>
                </div>
              </div>
              <div v-b-tooltip.hover title="This class starts 12pm" class="class-content">
                <div class="class-content-top content-2">
                  <h6>Geography</h6>
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <div class="class-content-main">
                 <p>Bascic 4, <span>by: <strong>Henry Annayo</strong></span></p>
                 <p>Upcoming</p>
                </div>
              </div>
              <div v-b-tooltip.hover title="This class starts 12pm" class="class-content">
                <div class="class-content-top content-2">
                  <h6>Geography</h6>
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <div class="class-content-main">
                 <p>Bascic 4, <span>by: <strong>Henry Annayo</strong></span></p>
                 <p>Upcoming</p>
                </div>
              </div>
               <div class="log-link">
                <router-link to>View Today's Class</router-link>
              </div>
            </div>
          </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
         <div class="discussion cards">
           <h5>Discussion Board</h5>
         </div>
        </b-col>
        <b-col md="6">
         <div class="notes cards">
           <div class="notes-top">
             <h5>Notes</h5>
             <div class="btn"><i class="fa fa-plus"></i><span>ADD</span></div>
             
           </div>
           <p class="text-center">You currently have no notes</p>
         </div>
        </b-col>
      </b-row>
    </b-container-fluid>
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

.cards {
  margin-top: 2rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  height: 400px;
}

.result-progress {
  margin-top: 10px;
}
.progress-top {
  display: flex;
  justify-content: space-between;
}

.progress-bar {
  width: 67% !important;
  background-color: #de1515 !important;
}
.update-content {
  display: flex;
  justify-content: space-between;
}
.update-content p {
  font-size: 12px;
  padding-left: 10px;
  margin-bottom: 0;
}
.log-link {
  display: flex;
  justify-content: flex-end;
}
.log-link a {
  color: #808080;
}
.log-link a:hover {
  color: #13a699;
  text-decoration: underline !important;
}
.resources-inner {
  border-bottom: 1px solid #e4e4e4;
  padding-top: 5px;
}
.resources-inner:last-child {
  border-bottom: none;
}
.class-content{
  padding-bottom: 10px;
}
.class-content-top{
  display: flex;
  justify-content: space-between;
}
.class-content-top i{
  color: #008e3a;
}
.content-2 i{
  color: #ff0000;
}
.class-content-main{
  display: flex;
  justify-content: space-between;
}
.class-content-main p{
  font-size: 12px;
}
.notes-top{
  display: flex;
  justify-content: space-between;
}
.btn{
  background: transparent;
  border: 1px solid #13A699;
  border-radius: 5px;
  color: #13A699;
}
.btn:hover{
  background: #13A699;
  border-radius: 5px;
  color: #fff;
}
.update-avatar img{
  height: 40px;
  width: 40px;
}
</style>