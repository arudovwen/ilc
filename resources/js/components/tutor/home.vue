<template>
  <div class="main">
    <div class="container-fluid">
      <b-row>
        <b-col md="6">
          <div class="assignment-overview-board">
            <p>Assignment Overview</p>
            <b-container class="overview-main">
              <b-row>
                <b-col md="6" class="overview-log-1 text-center">
                  <h6>30+</h6>
                  <p>Recieved</p>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </b-col>
                <b-col md="6" class="overview-log-3 text-center">
                  <h6>20+</h6>
                  <p>Yet to Recieve</p>
                  <i class="fa fa-ban" aria-hidden="true"></i>
                </b-col>
                
              </b-row>
              <div class="log-link">
                <router-link to>View assignment log</router-link>
              </div>
            </b-container>
          </div>
        </b-col>
        <b-col md="6">
            <div class="assignment-overview-board">
            <p>Resource Overview</p>
            <b-container class="overview-main">
              <b-row>
                <b-col md="6" class="overview-log-4 text-center">
                  <h6>30+</h6>
                  <p>Submitted</p>
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </b-col>
                <b-col v-b-tooltip.hover title="You have over 20 resource to be submitted" md="6" class="overview-log-2 text-center">
                  <h6>20+</h6>
                  <p>Pending</p>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </b-col>
                
              </b-row>
              <div class="log-link">
                <router-link to>View Resources</router-link>
              </div>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="content-cards">
      <b-container>
        <b-row>
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
          <b-col md="4">
            <div class="discussion cards">
              <h5>Discussion</h5>
            </div>
          </b-col>
          <b-col md="4">
            <div class="notes cards">
              <div class="notes-top">
                <h5>Notes</h5>
                <div class="btn">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <span>ADD</span>
                </div>
              </div>
              <div class="notes-content">
                <div class="notes-content-top">
                  <i class="fa fa-file-o" aria-hidden="true"></i>
               
                  <h6 class="title"> Prepare Test for Basic 2</h6>
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
               
                </div>
                <div class="notes-content-main">
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut tempora iure </p>
                  <div class="notes-date">
                    <p>Posted: <strong>07/07/2020</strong></p>
                  </div>
                </div>

              </div>
               <div class="notes-content">
                <div class="notes-content-top">
                  <i class="fa fa-file-o" aria-hidden="true"></i>
               
                  <h6 class="title"> Prepare Test for Basic 2</h6>
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
               
                </div>
                <div class="notes-content-main">
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut tempora iure </p>
                  <div class="notes-date">
                    <p>Posted: <strong>07/07/2020</strong></p>
                  </div>
                </div>

              </div>
               <div class="notes-content">
                <div class="notes-content-top">
                  <i class="fa fa-file-o" aria-hidden="true"></i>
               
                  <h6 class="title"> Prepare Test for Basic 2</h6>
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
               
                </div>
                <div class="notes-content-main">
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut tempora iure </p>
                  <div class="notes-date">
                    <p>Posted: <strong>07/07/2020</strong></p>
                  </div>
                </div>
                  <div class="log-link">
                    <router-link to>View All </router-link>
                  </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
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
.assignment-overview-board {
  background: #fff;
  font-family: "Montserrat";
  padding: 15px;
  border-radius: 10px;
}
.assignment-overview-board p {
  font-weight: 600;
  color: #808080;
}
.text-center p {
  font-weight: 500;
  margin-bottom: 10px;
}
.text-center h6 {
  font-weight: 700;
}
.overview-log-1 {
  border-right: 1px solid #c4c4c4;
}
.overview-log-4 {
  border-right: 1px solid #c4c4c4;
}

.overview-log-1 i {
  color: #22cade;
  background: rgba(34, 202, 222, 0.25);
  border-radius: 50%;
  padding: 10px;
}
.overview-log-2 i {
  color: #dfd291;
  background: rgba(223, 210, 145, 0.25);
  border-radius: 50%;
  padding: 10px;
}
.overview-log-3 i {
  color: #ff0000;
  background: rgba(255, 0, 0, 0.25);
  border-radius: 50%;
  padding: 10px;
}
.overview-log-4 i {
  color: #008e3a;
  background: rgba(0, 142, 58, 0.25);
  border-radius: 50%;
  padding: 10px;
}
.log-link {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
}
.content-cards {
  padding-top: 2rem;
}

.cards{
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  height: 450px;
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
.notes-content{
  border-bottom: 1px solid #e4e4e4;
}
.notes-content:last-child{
  border-bottom: none;
}
.notes-top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.notes-content-top{
  display: flex;
  justify-content: space-between;
}
.notes-content-top h6{
  margin-bottom: 0;
  padding-top: 5px;
}
.notes-content{
  padding-top: 5px;
}
.notes-content-main{
  padding-bottom: 5px ;
}
.notes-content-main p{
  font-size: 12px;
  margin-bottom: 0;
 
}
.notes-date {
  color: #808080;
  padding-top: 5px;
  padding-left: 10px;
}
.fa-file-o{
   color: #22cade;
  background: rgba(34, 202, 222, 0.25);
  border-radius: 50%;
   padding: 9px;
}
.btn {
  border: 1px solid #0a4065;
  color: #0a4065;
}
</style>