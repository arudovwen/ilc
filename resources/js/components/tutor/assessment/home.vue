<template>
  <!-- <div class="body">
    <nav class="mb-5">
      <router-link to="/tutor/quiz">
        <b-button block class="shadow-sm reg-btn text-center">Quiz</b-button>
      </router-link>

      <router-link to="/tutor/exam">
        <b-button block class="shadow-sm reg-btn text-center">Examination</b-button>
      </router-link>
      <router-link to="/tutor/assignment">
        <b-button block class="shadow-sm reg-btn text-center">Assignment</b-button>
      </router-link>
      <router-link to="/tutor/test">
        <b-button block class="shadow-sm reg-btn text-center">Tests</b-button>
      </router-link>
    </nav>

    <div class="content">
      <b-row>
        <b-col class="text-center">
          <h5>Quiz</h5>
          <b-table :fields="fields" :items="quiz" bordered>
            <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
        <b-col class="text-center">
          <h5>Assignment</h5>
          <b-table :fields="fields" :items="assignment" bordered>
             <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
        <b-col class="text-center">
          <h5>Examinations</h5>
          <b-table :fields="fields" :items="examination" bordered>
             <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
        <b-col class="text-center">
          <h5>Tests</h5>
          <b-table :fields="fields" :items="test" bordered>
             <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
      </b-row>
    </div>
  </div>-->

  <div class="assessment">
    <b-tabs content-class>
      <b-tab title="Assignment" active>
        <b-container fluid>
          <b-row>
            <b-col md="8" class="assessment-table">
             <div class="bd-table">
                <b-table :fields="fields" bordered :items="assignment"  >
                <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              </b-table>
             </div>
            </b-col>
            <b-col md="4">
              <div class="right">
                <router-link to="/tutor/assignment">
                  <div class="right-btn">
                    <div class="btn text-center">
                      <span>ALL ASSIGNMENTS</span>
                    </div>
                  </div>
                </router-link>
                <h6>Assignment Notification</h6>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <p>Henry Obudu submitted English Assignment</p>
                    <div class="notify-class">
                      <p>Primary 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab title="Quiz">
        <b-container fluid>
          <b-row>
            <b-col md="8" class="assessment-table">
              <div class="bd-table">
                <b-table :fields="fields" bordered :items="quiz" hover  >
                <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              </b-table>
              </div>
            </b-col>
            <b-col md="4">
              <div class="right">
                <router-link to="/tutor/quiz">
                  <div class="right-btn">
                    <div class="btn text-center">
                      <span>ALL QUIZZES</span>
                    </div>
                  </div>
                </router-link>
                <h6>Quiz Notification</h6>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <p>Henry Obudu submitted Maths Quiz</p>
                    <div class="notify-class">
                      <p>Primary 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab title="Test">
        <b-container fluid>
          <b-row>
            <b-col md="8" class="assessment-table">
             <div class="bd-table">
                <b-table :fields="fields" bordered :items="test"  hover>
                <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              </b-table>
             </div>
            </b-col>
            <b-col md="4">
              <div class="right">
                <router-link to="/tutor/test">
                  <div class="right-btn">
                    <div class="btn text-center">
                      <span>ALL TESTS</span>
                    </div>
                  </div>
                </router-link>
                <h6>Test Notification</h6>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <p>Henry Obudu submitted Maths Test</p>
                    <div class="notify-class">
                      <p>Primary 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab title="Examination">
        <b-container fluid>
          <b-row>
            <b-col md="8" class="assessment-table">
              <div class="bd-table">
                <b-table :fields="fields" bordered :items="examination"  hover>
                <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              </b-table>
              </div>
            </b-col>
            <b-col md="4">
              <div class="right">
                <router-link to="/tutor/exam">
                  <div class="right-btn">
                    <div class="btn text-center">
                      <span>ALL EXAMINATIONS</span>
                    </div>
                  </div>
                </router-link>
                <h6>Exam Notification</h6>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <p>Henry Obudu submitted Maths Exam</p>
                    <div class="notify-class">
                      <p>Primary 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      tutors: [],
      busy: true,
      items: [],
      item: false,
      quiz: [],
      test: [],
      assignment: [],
      examination: [],
      fields: [
        "Sn",
        {
          key: "title",
          sortable: true,
        },
        "status",
      ],
    };
  },
  watch: {
    item: "selectAll",
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/assessment`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data;
            this.items.forEach((item) => {
              if (item.type == "quiz") {
                this.quiz.push(item);
              }
              if (item.type == "test") {
                this.test.push(item);
              }
              if (item.type == "assignment") {
                this.assignment.push(item);
              }
              if (item.type == "examination") {
                this.examination.push(item);
              }
            });
          }
        })
        .catch();
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.tutors.forEach((it) => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },

    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/tutor/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getAdmins();
            }
          });
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
      let data = {
        data: this.items,
      };
      if (del) {
        axios
          .post("/api/multi-tutor-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getAdmins();
            }
          })
          .catch((err) => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.$router.push(`/admin/tutor/update/${id}`);
    },
    view(id) {
      this.$router.push(`/admin/tutor/view/${id}`);
    },
  },
};
</script>

<style scoped>
.container-fluid {
  width: 100% !important;
}
.row {
  margin-left: 0px !important;
}
.right {
  background: #fff;
  height: 100vh;
  padding: 10px;
  margin-top: 1rem;
}
.right-btn {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}
.btn {
  background: transparent;
  border: 1px solid #0a4065;
  color: #0a4065;
  font-weight: 500;
}
.btn:hover {
  background: #0a4065;
  color: white;
}
h6 {
  padding-top: 1.5rem;
  font-size: 14px;
  text-align: center;
}
.assignment-notification {
  background: rgba(34, 202, 222, 0.2);
  border-left: 5px solid #22cade;
  padding: 5px 10px;
  margin-bottom: 1rem;
}
.notification-content p {
  font-size: 12px;
  margin-bottom: 0;
}
.notify-class {
  display: flex;
  justify-content: flex-end;
  color: #0a4065;
  font-weight: 500;
}
.assessment-table {
  padding-left: 15px;
  padding-top: 0;
}
.hiden {
  opacity: 0;
}
</style>