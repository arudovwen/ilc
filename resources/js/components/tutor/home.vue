<template>
  <div class="main">
    <div class="container-fluid">
      <b-row class="overview-board">
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
                <b-col
                  v-b-tooltip.hover
                  title="You have over 20 resource to be submitted"
                  md="6"
                  class="overview-log-2 text-center"
                >
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
                  <p>
                    Primary 1,
                    <span>
                      by:
                      <strong>Henry Annayo</strong>
                    </span>
                  </p>
                  <p>Ongoing</p>
                </div>
              </div>
              <div v-b-tooltip.hover title="This class starts 12pm" class="class-content">
                <div class="class-content-top content-2">
                  <h6>Geography</h6>
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <div class="class-content-main">
                  <p>
                    SS 3,
                    <span>
                      by:
                      <strong>Henry Annayo</strong>
                    </span>
                  </p>
                  <p>Upcoming</p>
                </div>
              </div>
              <div v-b-tooltip.hover title="This class starts 12pm" class="class-content">
                <div class="class-content-top content-2">
                  <h6>Geography</h6>
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <div class="class-content-main">
                  <p>
                    JS 2,
                    <span>
                      by:
                      <strong>Henry Annayo</strong>
                    </span>
                  </p>
                  <p>Upcoming</p>
                </div>
              </div>
              <div v-b-tooltip.hover title="This class starts 12pm" class="class-content">
                <div class="class-content-top content-2">
                  <h6>Geography</h6>
                  <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <div class="class-content-main">
                  <p>
                    Primary 3,
                    <span>
                      by:
                      <strong>Henry Annayo</strong>
                    </span>
                  </p>
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
              <div class="discussion-content">
                <div class="discussion-content-top">
                  <p>
                    <strong>Up coming Exams</strong>
                  </p>
                  <b-avatar-group size="2.5rem">
                    <b-avatar></b-avatar>
                    <b-avatar text="BV" variant="primary"></b-avatar>
                    <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                  </b-avatar-group>
                </div>
                <p>the upcoming exam is coming up .................</p>
                <div class="discussion-content-bottom">
                  <p>Updated 2mins ago</p>
                  <div class="notify-discussion">
                    <p>3 New Messages</p>
                  </div>
                </div>
              </div>
              <div class="discussion-content">
                <div class="discussion-content-top">
                  <p>
                    <strong>Up coming Exams</strong>
                  </p>
                  <b-avatar-group size="2.5rem">
                    <b-avatar></b-avatar>
                    <b-avatar text="BV" variant="primary"></b-avatar>
                    <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                  </b-avatar-group>
                </div>
                <p>the upcoming exam is coming up .................</p>
                <div class="discussion-content-bottom">
                  <p>Updated 2mins ago</p>
                  <div class="notify-discussion">
                    <p>3 New Messages</p>
                  </div>
                </div>
              </div>
              <div class="discussion-content">
                <div class="discussion-content-top">
                  <p>
                    <strong>Up coming Exams</strong>
                  </p>
                  <b-avatar-group size="2.5rem">
                    <b-avatar></b-avatar>
                    <b-avatar text="BV" variant="primary"></b-avatar>
                    <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                  </b-avatar-group>
                </div>
                <p>the upcoming exam is coming up .................</p>
                <div class="discussion-content-bottom">
                  <p>Updated 2mins ago</p>
                  <div class="notify-discussion">
                    <p>3 New Messages</p>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="notes cards">
              <div class="notes-top">
                <h5>My Notes</h5>
                <div class="btn" v-b-modal.note>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <span>ADD</span>
                </div>
              </div>
              <div class="main-note">
                <div class="note-body" v-for="(note,idx) in notes" :key="idx">
                  <div class="mr-2">
                    <b-icon icon="stickies-fill" class="my-icon"></b-icon>
                  </div>
                  <div class="notes-content w-100">
                    <div class="notes-content-top">
                      <h6 class="title mr-3 mb-2">{{note.title}}</h6>
                    </div>
                    <div class="notes-content-main">
                      <p class>{{note.note}}</p>
                      <div
                        class="notes-date d-flex align-items-center justify-content-between w-100"
                      >
                        <p>
                          Posted:
                          <strong>{{note.created_at | moment('DD/MM/YYYY')}}</strong>
                        </p>

                        <b-icon icon="trash" class="my-icon cpointer" @click="remove(note.id)"></b-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="log-link">
                <div v-b-modal.all-note class="check_it">View All <b-icon icon="arrow-right"></b-icon> </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
      <b-modal id="note" title="New note" hide-footer>
     <b-form @submit.prevent="addNote">
       <b-form-group class="mb-3">
         <label for="">Title</label>
         <b-form-input required v-model="note.title" placeholder="Enter title"></b-form-input>
       </b-form-group>
       <b-form-group  class="mb-3">
         <label for="">Note</label>
         <b-form-textarea maxlength="200" required v-model="note.description" rows="3" placeholder="Write note here">

         </b-form-textarea>
       </b-form-group>
       <b-form-group  class="mb-3">
         <b-button  variant="darkgreen" type="submit">Add note</b-button>
       </b-form-group>
     </b-form>
  </b-modal>
  <b-modal id="all-note" title="My notes" hide-footer>
     <div class="">
                <div class="note-body" v-for="(note,idx) in notes" :key="idx">
                <div class="mr-2">
                   <b-icon icon="stickies-fill" class="my-icon"></b-icon>
                </div>
                <div class="notes-content w-100" >
                <div class="notes-content-top">
                  <h6 class="title mr-3 mb-2">{{note.title}}</h6>
                
                </div>
                <div class="notes-content-main">
                  <p
                    class
                  >{{note.note}}</p>
                  <div class="notes-date d-flex align-items-center justify-content-between w-100">
                    <p>
                      Posted:
                      <strong>{{note.created_at |  moment('DD/MM/YYYY')}}</strong>
                    </p>
                    <b-icon icon="trash" class="my-icon cpointer" @click="remove(note.id)"></b-icon>
                  
                  </div>
                </div>
              </div>
              </div>
              </div>
  </b-modal>
  </div>
</template>


<script>
export default {
  props: ["tutor"],
  data() {
    return {
      tutors: [],
      students: [],
      classes: [],
      syllabus: [],
      curriculum: [],
      fields: ["class", "subject"],
      field: ["class"],
       note:{
        title:'',
        description:''
      },
      notes:[]
    };
  },
  mounted() {
    // this.getStudents();
    // this.getClasses();
    // this.getTutors();
    // this.getSyllabus()
    // this.getCurriculum();
     this.getNotes()
  },
  methods: {
     gotoHer(id) {
      this.$router.push(`/student/resource/view/${id}`);
    },
      addNote(){
 
      let data = {
        title: this.note.title,
        description: this.note.description,
       
      };
      axios
        .post("/api/tutor-note", data, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 201) {
            this.note.description = "";
             this.note.title = "";
            this.getNotes();
            this.$toasted.success("Note created");
            this.$bvModal.hide('note')
          }
        })
        .catch();
    
  },
     getNotes() {
      axios
        .get(`/api/tutor-note`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.notes = res.data;
          }
        });
    },
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
.overview-board {
  padding-top: 20px;
}
.note-body{
  display:flex;
  border-bottom:1px solid #ccc;
  margin-bottom: 14px;

}
.m-res{
  height: 320px;
  overflow: auto;
}
.main-note{
  height: 330px;
  overflow:auto;
}
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

.cards {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  height: 450px;
}
.class-content {
  padding-bottom: 10px;
}
.class-content-top {
  display: flex;
  justify-content: space-between;
}
.class-content-top i {
  color: #008e3a;
}
.content-2 i {
  color: #ff0000;
}
.class-content-main {
  display: flex;
  justify-content: space-between;
}
.class-content-main p {
  font-size: 12px;
}
.notes-content {
  border-bottom: 1px solid #e4e4e4;
}
.notes-content:last-child {
  border-bottom: none;
}
.check_it{
  color: #008e3a;
  font-size:12px;
}
.notes-top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.notes-content-top {
  display: flex;

}
.notes-content-top h6 {
  margin-bottom: 0;

}
.notes-content {

}
.notes-content-main {
  padding-bottom: 5px;
}
.notes-content-main p {
  font-size: 12px;
  margin-bottom: 0;
}
.notes-date {
  color: #808080;
  padding-top: 5px;

}
.fa-file-o {
  color: #22cade;
  background: rgba(34, 202, 222, 0.25);
  border-radius: 50%;
  padding: 9px;
}
.btn {
  border: 1px solid #0a4065;
  color: #0a4065;
  font-size: 15px;
}
.discussion-content {
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 10px;
  padding-top: 5px;
}
.discussion-content:last-child {
  border-bottom: none;
}
.discussion-content p {
  font-size: 10px;
}
.discussion-content-top {
  display: flex;
  justify-content: space-between;
}
.discussion-content-top p {
  font-size: 14px;
}
.discussion-content-bottom {
  display: flex;
  justify-content: space-between;
}
.discussion-content-bottom p {
  font-size: 12px;
  margin-bottom: 0;
}
.notify-discussion p {
  background: #e4e4e4;
  color: #808080;
  border-radius: 5px;
  font-weight: 500;
  padding: 5px 10px;
}
.my-icon{
   color: #008e3a;
}
</style>