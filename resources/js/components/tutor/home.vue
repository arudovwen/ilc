<template>
  <div class="main">
    <div class="container-fluid">
      <b-row class="overview-board">
        <b-col md="6">
          <div class="assignment-overview-board">
            <p>Assessment Overview</p>
            <b-container class="overview-main">
              <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(level,idx)  in allClass" :key="idx">
                  <p class="toCaps">{{level.class_name}}</p>
                  <b-row>
                    <b-col md="6" class="overview-log-1 text-center">
                      <h6>{{handleAssess(level.class_name).length}}</h6>
                      <p>Recieved</p>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </b-col>
                    <b-col md="6" class="overview-log-3 text-center">
                      <h6>{{handleStudent(level.class_name).length - handleAssess(level.class_name).length}}</h6>
                      <p>Yet to Recieve</p>
                      <i class="fa fa-ban" aria-hidden="true"></i>
                    </b-col>
                  </b-row>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>

              <div class="log-link">
                <router-link to>View assessment log</router-link>
              </div>
            </b-container>
          </div>
        </b-col>
        <b-col md="6">
          <div class="assignment-overview-board">
            <p>Resource Overview</p>
            <b-container class="overview-main">
              <b-row>
                <b-col md="4" class="overview-log-1 text-center">
                  <h6>{{resources.length}}+</h6>
                  <p>Submitted</p>
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </b-col>
                 <b-col md="4" class="overview-log-4 text-center">
                  <h6>{{ approvedResource.length}}+</h6>
                  <p>Approved</p>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </b-col>
                <b-col md="4" class="overview-log-2 text-center">
                  <h6>{{ pendingResource.length}}+</h6>
                  <p>Pending</p>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                </b-col>
              </b-row>
              <div class="log-link">
                <router-link to="/tutor/resources">View Resources</router-link>
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
              <h5>Today's Schedule</h5>
              <div class="class_section">
                <div
                  class="class-content border-bottom p-2"
                  v-for="(item,idx) in todaysClass"
                  :key="idx"
                >
                  <div class="class-content-top">
                    <h6 class="toCaps">{{item.subject}}</h6>

                    <i
                      class="fa fa-play-circle-o green"
                      v-if="(getSecond(today)  > getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                      aria-hidden="true"
                    ></i>

                    <i
                      class="fa fa-dot-circle-o text-dark"
                      v-else-if="(getSecond(today)  <  getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                      aria-hidden="true"
                    ></i>

                    <i
                      class="fa fa-stop-circle-o red"
                      :id="idx.toString()"
                      v-else-if="(getSecond(today)   >  getSecond(item.start)) && (getSecond(today) >getSecond(item.end))"
                      aria-hidden="true"
                    ></i>
                    <b-tooltip ref="tooltip" :target="idx.toString()">
                      <p
                        class="m-0"
                        v-if="(getSecond(today)  > getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                      >This class is ongoing</p>
                      <p
                        class="m-0"
                        v-else-if="(getSecond(today)  <  getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                      >This class begins by {{item.start | format}}</p>

                      <p
                        class="m-0"
                        v-else-if="(getSecond(today)   >  getSecond(item.start)) && (getSecond(today) >getSecond(item.end))"
                      >This class has ended</p>
                    </b-tooltip>
                  </div>
                  <small>{{item.start | format}} to {{item.end | format}}</small>
                  <div class="class-content-main">
                    <p>
                      <span>
                        by:
                        <strong class="toCaps">{{item.tutor}}</strong>
                      </span>
                    </p>

                    <p
                      v-if="(getSecond(today)  > getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                    >Ongoing</p>
                    <p
                      v-else-if="(getSecond(today)  <  getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                    >Upcoming</p>

                    <p
                      v-else-if="(getSecond(today)   >  getSecond(item.start)) && (getSecond(today) >getSecond(item.end))"
                    >Finished</p>
                  </div>
                </div>
              </div>

              <div class="log-link">
                <router-link to="/tutor/activities">View all</router-link>
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="discussion cards">
              <h5>Discussion</h5>
              <div class="main-note">
                <div class="discussion-content" v-for="(group,idx) in groups" :key="idx">
                  <div class="discussion-content-top">
                    <router-link to="/student/group">
                      <p>
                        <strong class="toCaps check">{{group.name}}</strong>
                      </p>
                    </router-link>

                    <b-avatar-group size="2.5rem">
                      <b-avatar class="profile-img"></b-avatar>

                      <b-avatar text="BV" variant="primary"></b-avatar>
                      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                    </b-avatar-group>
                  </div>
                  <p
                    v-if="group.messages.length"
                  >{{group.messages[group.messages.length-1].message}}</p>
                  <div class="discussion-content-bottom">
                    <p>Updated {{ group.messages.created_at | moment("from", "now")}}</p>
                    <div class="notify-discussion">
                      <p>3 New Messages</p>
                    </div>
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
                <div v-b-modal.all-note class="check_it">
                  View All
                  <b-icon icon="arrow-right"></b-icon>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-modal id="note" title="New note" hide-footer>
      <b-form @submit.prevent="addNote">
        <b-form-group class="mb-3">
          <label for>Title</label>
          <b-form-input required v-model="note.title" placeholder="Enter title"></b-form-input>
        </b-form-group>
        <b-form-group class="mb-3">
          <label for>Note</label>
          <b-form-textarea
            maxlength="200"
            required
            v-model="note.description"
            rows="3"
            placeholder="Write note here"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group class="mb-3">
          <b-button variant="darkgreen" type="submit">Add note</b-button>
        </b-form-group>
      </b-form>
    </b-modal>
    <b-modal id="all-note" title="My notes" hide-footer>
      <div class>
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
              <div class="notes-date d-flex align-items-center justify-content-between w-100">
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
    </b-modal>
  </div>
</template>


<script>
export default {
  props: ["tutor", "groups"],
  data() {
    return {
      tutors: [],
      draftResult: [],
      allStudents: [],
      students: [],
      classes: [],
      syllabus: [],
      groupMessage: [],
      curriculum: [],
      fields: ["class", "subject"],
      field: ["class"],
      note: {
        title: "",
        description: "",
      },
      notes: [],
      todaysClass: [],
      today:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      resources: [],
      allClass: [],
      swiperOptions: {
        autoplay: {
          delay: 5000,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
      },
    };
  },
  mounted() {
    this.getNotes();
    this.getResources();
    this.getTodayClass();
    this.getData();
    this.getStudent("jss 1");
    this.getDraftResult();
    this.getallmessages();
    this.getClasses();
  },
  computed: {
    pendingResource() {
      return this.resources.filter((item) => item.status == "pending");
    },
    approvedResource() {
      return this.resources.filter((item) => item.status == "approved");
    },
  },
  methods: {
    handleAssess(level) {
      return this.draftResult.filter(
        (item) => item.level.toLowerCase() == level.toLowerCase()
      );
    },
    handleStudent(level) {
      return this.allStudents.filter(
        (item) => item.student_level.toLowerCase() == level.toLowerCase()
      );
    },
    getClasses() {
      axios
        .get("/api/all-classes", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.allClass = res.data;
          }
        });
    },
    getallmessages() {
      axios
        .get(`/api/tutormessages`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          this.groupMessage = res.data;
        });
    },
    getStudent(level) {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/students/${level}`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.allStudents = res.data;
          }
        });
    },
    getDraftResult() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let data = {
        title: "",
      };
      axios
        .post(`/api/draft-result`, data, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.draftResult = res.data;
          }
        });
    },
    getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));

      axios
        .get(`/api/assessment`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          // if (res.status == 200) {
          //   this.items = res.data;
          //   this.items.forEach((item) => {
          //     if (item.type == "quiz") {
          //       this.quiz.push(item);
          //     }
          //     if (item.type == "test") {
          //       this.test.push(item);
          //     }
          //     if (item.type == "assignment") {
          //       this.assignment.push(item);
          //     }
          //     if (item.type == "examination") {
          //       this.examination.push(item);
          //     }
          //   });
          // }
        })
        .catch();
    },
    getResources() {
      axios
        .get("/api/resource", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.resources = res.data;
          }
        });
    },
    getSecond(hms) {
      var a = hms.split(":"); // split it at the colons

      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
      return seconds;
    },
    getTodayClass() {
      axios
        .get(`/api/current-class`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.todaysClass = res.data;
          }
        });
    },
    gotoHer(id) {
      this.$router.push(`/student/resource/view/${id}`);
    },
    addNote() {
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
            this.$bvModal.hide("note");
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
.note-body {
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 14px;
}
.m-res {
  height: 320px;
  overflow: auto;
}
.main-note {
  height: 330px;
  overflow: auto;
}
.assignment-overview-board {
  background: #fff;
  font-family: "Montserrat";
  padding: 15px;
  border-radius: 10px;
  height: 100%;
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
.class_section {
  height: 340px;
  overflow: auto;
}
.class-content-top {
  display: flex;
  justify-content: space-between;
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
.check_it {
  color: #008e3a;
  font-size: 12px;
}
.red {
  color: #ff0000;
}
.green {
  color: green;
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
.my-icon {
  color: #008e3a;
}
</style>