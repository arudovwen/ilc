<template>
  <div class="body">
        
       
            <b-container fluid class="bv-example-row">
              <b-row>
                <b-col>
                  <div class="admin-dashboard-top-cards">
                    <b-card>
                      <div class="inner-top-cards">
                        <img src="/images/teacher-green.png" class="img-fluid" alt />
                        <div class="inner-top-cards-text pl-2">
                          <p>
                            <strong>{{tutors.length}}+</strong>
                          </p>
                          <p>Teachers</p>
                        </div>
                      </div>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="admin-dashboard-top-cards">
                    <b-card>
                      <div class="inner-top-cards">
                        <img src="/images/teacher-green.png" class="img-fluid" alt />
                        <div class="inner-top-cards-text pl-2">
                          <p>
                            <strong>{{students.length}}+</strong>
                          </p>
                          <p>Students</p>
                        </div>
                      </div>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="admin-dashboard-top-cards">
                    <b-card>
                      <div class="inner-top-cards">
                        <img src="/images/teacher-green.png" class="img-fluid" alt />
                        <div class="inner-top-cards-text pl-2">
                          <p>
                            <strong>{{classes.length}}+</strong>
                          </p>
                          <p>Classes</p>
                        </div>
                      </div>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
          

        
              <div class="chart">
              <column-chart
                :data="[['Basic 1', 32], ['Basic 2', 46], ['Basic 3', 28], ['Basic 4', 10], ['Basic 5', 18], ['Basic 6', 20], ['Basic 7', 28], ['Basic 8', 38]]"
              ></column-chart>
            </div>
         
              <b-row>
                <b-col md="4">
                  <div class="ongoing-lesson cards">
                    <h5>Ongoing Lessons</h5>
                    <div class="ongoing-lesson-content">
                      <h6>English Language</h6>
                      <p>by: Henry Annayo</p>
                      <div class="ongoing-lesson-time">
                        <p>10:00AM <span>Basic 2</span> </p>
                      </div>
                    </div>
                       <div class="ongoing-lesson-content">
                      <h6>English Language</h6>
                      <p>by: Henry Annayo</p>
                      <div class="ongoing-lesson-time">
                        <p>10:00AM <span>Basic 2</span> </p>
                      </div>
                    </div>
                     <div class="ongoing-lesson-content">
                      <h6>English Language</h6>
                      <p>by: Henry Annayo</p>
                      <div class="ongoing-lesson-time">
                        <p>10:00AM <span>Basic 2</span> </p>
                      </div>
                    </div>
                    <div class="lesson-link">
                      <router-link to="admin/timetable">View Today's Lesson</router-link>
                    </div>
                  </div>
                </b-col>
                <b-col md="4">
                  <div class="discussion-board cards">
                    <h5>Discussion</h5>
                  </div>
                </b-col>
                 <b-col md="4">
                  <div class="notes cards">
                    <div class="notes-top">
                      <h5>Notes</h5>
                      <div class="btn"><i class="fa fa-plus"></i>ADD</div>
                    </div>
                    <p class="text-center">You currently have no notes</p>
                  </div>
                </b-col>
              </b-row>
           </b-container>
       
        
  </div>
</template>


<script>
export default {
  props: ["admin"],
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
    this.getStudents();
    this.getClasses();
    this.getTutors();
    this.getSyllabus();
    this.getCurriculum();
  },
  methods: {
    getStudents() {
      axios
        .get("/api/admin-get-students", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
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
            Authorization: `Bearer ${this.$props.admin.access_token}`,
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
            Authorization: `Bearer ${this.$props.admin.access_token}`,
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
            Authorization: `Bearer ${this.$props.admin.access_token}`,
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
            Authorization: `Bearer ${this.$props.admin.access_token}`,
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
.cards{
  background: #fff;
  height: 500px;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 5px 4px 11px rgba(249, 247, 240, 0.25);
}
.ongoing-lesson-content{
  padding-top: 1.5rem;
  border-bottom: 1px solid #e5e5e5;
}
.ongoing-lesson-content:last-child{
  border-bottom: none;
}
 h6{
  font-weight: 600;
}
.ongoing-lesson-content p{
  margin-bottom: 0;
}
.ongoing-lesson-time{
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
 
}
.ongoing-lesson-time p{
   background: #e5e5e5;
  border-radius: 5px;
  padding: 5px;
  font-weight: 500;
 
}
.lesson-link{
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}
.lesson-link a{
  color:#008E3A ;
  
}
.lesson-link a:hover{
  background: #008E3A;
  color: white;
  border-radius: 5px;
  padding: 10px;
}
.notes-top{
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
}
.btn{
  background: transparent;
  border: 1px solid;
  color: #008E3A;
  padding: 5px 10px;
}
.btn:hover{
  background: #008E3A;
  color: #fff ;
}
</style>