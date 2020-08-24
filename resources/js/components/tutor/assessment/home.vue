<template>
  <div class="assessment">
    <b-tabs content-class>
      <b-tab title="Assignment" active>
        <b-container fluid>
          <b-row>
            <b-col md="8" class="assessment-table">
              <div class="bd-table">
                <router-link to="/tutor/assignment">
                  <div class="right-btn">
                    <div class="btn">
                      <span>ALL ASSIGNMENTS</span>
                    </div>
                  </div>
                </router-link>
                <b-table :fields="fields" :items="assignment">
                  <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
                  <template v-slot:cell(publish_status)="data">
                    <span v-if="data.item.publish_status== true">Published</span>
                    <span v-else>Unpublished</span>
                  </template>
                  <template v-slot:cell(title)="data">
                    <div class="main-title">
                      <div class="title">{{data.item.title}}</div>
                      <div class="text-muted">{{data.item.description}}</div>
                    </div>
                  </template>
                  <template v-slot:cell(action)="data">
                    <span
                      @click="publish(true,data.item.id)"
                      v-if="data.item.publish_status== false"
                    >Publish</span>
                    <span @click="publish(false,data.item.id)" v-else>Unpublish</span>
                  </template>
                </b-table>
              </div>
            </b-col>
            <b-col md="4">
              <div class="right">
                <h6 class="notify">Assignment Notification</h6>
                <div class="overall-assessment">
                  <div class="submitted">
                    <i class="fa fa-check"></i>
                    <h6>{{assResult.filter(item=>item.status=='submitted').length}}</h6>
                    <p>submitted</p>
                  </div>
                  <div class="pending">
                    <i class="fa fa-ban"></i>
                    <h6>{{assResult.filter(item=>item.status=='pending').length}}</h6>
                    <p>pending</p>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in assResult.filter(item=>item.status=='pending')" :key="idx" @click="getContent(item)">
                      <p>{{item.user.name}} submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <div class="notify-class">
                        <p>{{item.level}}</p>
                      </div>
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
                <router-link to="/tutor/quiz">
                  <div class="right-btn">
                    <div class="btn text-center">
                      <span>ALL QUIZZES</span>
                    </div>
                  </div>
                </router-link>
                <b-table :fields="fields" :items="quiz" hover>
                  <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
                  <template v-slot:cell(publish_status)="data">
                    <span v-if="data.item.publish_status== true">Published</span>
                    <span v-else>Unpublished</span>
                  </template>

                  <template v-slot:cell(title)="data">
                    <div class="main-title">
                      <div class="title">{{data.item.title}}</div>
                      <div class="text-muted">{{data.item.description}}</div>
                    </div>
                  </template>
                  <template v-slot:cell(action)="data">
                    <span
                      @click="publish(true,data.item.id)"
                      v-if="data.item.publish_status== false"
                    >Publish</span>
                    <span @click="publish(false,data.item.id)" v-else>Unpublish</span>
                  </template>
                </b-table>
              </div>
            </b-col>
            <b-col md="4" class="notify-board">
              <div class="right">
                <h6 class="notify">Quiz Notification</h6>
                <div class="overall-assessment">
                  <div class="submitted">
                    <i class="fa fa-check"></i>
                    <h6>{{quizResult.filter(item=>item.status=='submitted').length}}</h6>
                    <p>submitted</p>
                  </div>
                  <div class="pending">
                    <i class="fa fa-ban"></i>
                    <h6>{{quizResult.filter(item=>item.status=='pending').length}}</h6>
                    <p>pending</p>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in quizResult.filter(item=>item.status=='pending')" :key="idx" @click="getContent(item)">
                      <p>{{item.user.name}}u submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <div class="notify-class">
                        <p>{{item.level}}</p>
                      </div>
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
                <router-link to="/tutor/test">
                  <div class="right-btn">
                    <div class="btn text-center">
                      <span>ALL TESTS</span>
                    </div>
                  </div>
                </router-link>
                <b-table :fields="fields" :items="test" hover>
                  <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
                  <template v-slot:cell(action)="data">
                    <span
                      @click="publish(true,data.item.id)"
                      v-if="data.item.publish_status== false"
                    >Publish</span>
                    <span @click="publish(false,data.item.id)" v-else>Unpublish</span>
                  </template>
                  <template v-slot:cell(title)="data">
                    <div class="main-title">
                      <div class="title">{{data.item.title}}</div>
                      <div class="text-muted">{{data.item.description}}</div>
                    </div>
                  </template>
                  <template v-slot:cell(publish_status)="data">
                    <span v-if="data.item.publish_status== true">Published</span>
                    <span v-else>Unpublished</span>
                  </template>
                </b-table>
              </div>
            </b-col>
            <b-col md="4">
              <div class="right">
                <h6 class="notify">Test Notification</h6>
                <div class="overall-assessment">
                  <div class="submitted">
                    <i class="fa fa-check"></i>
                    <h6>{{testResult.filter(item=>item.status=='submitted').length}}</h6>
                    <p>Submitted</p>
                  </div>
                  <div class="pending">
                    <i class="fa fa-ban"></i>
                    <h6>{{testResult.filter(item=>item.status=='pending').length}}</h6>
                    <p>Pending</p>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in testResult.filter(item=>item.status=='pending')" :key="idx" @click="getContent(item)">
                      <p>{{item.user.name}} submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <div class="notify-class">
                        <p>{{item.level}}</p>
                      </div>
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
                <router-link to="/tutor/exam">
                  <div class="right-btn">
                    <div class="btn text-center">
                      <span>ALL EXAMINATIONS</span>
                    </div>
                  </div>
                </router-link>
                <b-table :fields="fields" :items="examination" hover>
                  <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
                  <template v-slot:cell(action)="data">
                    <span
                      @click="publish(true,data.item.id)"
                      v-if="data.item.publish_status== false"
                    >Publish</span>
                    <span @click="publish(false,data.item.id)" v-else>Unpublish</span>
                  </template>

                  <template v-slot:cell(title)="data">
                    <div class="main-title">
                      <div class="title">{{data.item.title}}</div>
                      <div class="text-muted">{{data.item.description}}</div>
                    </div>
                  </template>
                  <template v-slot:cell(publish_status)="data">
                    <span v-if="data.item.publish_status== true">Published</span>
                    <span v-else>Unpublished</span>
                  </template>
                </b-table>
              </div>
            </b-col>
            <b-col md="4">
              <div class="right">
                <h6 class="notify mb-2">Exam Notification</h6>
                <div class="overall-assessment">
                  <div class="submitted">
                    <i class="fa fa-check"></i>
                    <h6>{{examResult.filter(item=>item.status=='submitted').length}}</h6>
                    <p>Submitted</p>
                  </div>
                  <div class="pending">
                    <i class="fa fa-ban"></i>
                    <h6>{{examResult.filter(item=>item.status=='pending').length}}</h6>
                    <p>Pending</p>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in examResult.filter(item=>item.status=='pending')" :key="idx" @click="getContent(item)">
                      <p>{{item.user.name}} submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <div class="notify-class">
                        <p>{{item.level}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
    <b-modal id="content" size="xl" title="Review" hide-footer>
      <Review
        @refresh="refresh"
        :id="id"
        :overall="overall"
        :name="name"
        :form="form"
        :options="options"
      />
    </b-modal>
  </div>
</template>


<script>
import Review from "./review";
export default {
  props: ["tutor"],
  data() {
    return {
      id: null,
      name: {},
      form: [],
      overall: null,
      options: {
        title: "",
        subject: "",
        level: "",
        type: "",
      },
      search: "",
      tutors: [],
      busy: true,
      items: [],
      item: false,
      quiz: [],
      test: [],
      assignment: [],
      examination: [],
      draftResult: [],
      title: "",
      subject: "",
      type: "",
      fields: [
        {
          key: "title",
          sortable: true,
        },
        "level",

        "status",
        "publish_status",
        "action",
      ],
    };
  },
  watch: {
    item: "selectAll",
  },
  components: {
    Review,
  },
  mounted() {
    this.getData();
  },
  computed: {
    examResult() {
      return this.draftResult.filter((item) => {
        if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
          return item.type == "examination";
        }
      });
    },
    testResult() {
      return this.draftResult.filter((item) => {
        if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
          return item.type == "test";
        }
      });
    },
    assResult() {
      return this.draftResult.filter((item) => {
        if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
          return item.type == "assignment";
        }
      });
    },
    quizResult() {
      return this.draftResult.filter((item) => {
        if (item.title.toLowerCase().includes(this.search.toLowerCase())) {
          return item.type == "quiz";
        }
      });
    },
  },
  methods: {
    refresh() {
      this.getDraftResult();
    },
    getContent(content) {
      this.id = content.id;
      this.overall = content.overall;
      this.name = content.user;
      this.options.title = content.title;
      this.options.subject = content.subject;
      this.options.level = content.level;
      this.options.type = content.type;
      this.form = JSON.parse(content.record);

      this.$bvModal.show("content");
    },
    publish(name, id) {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let data = {
        stat: name,
      };
      axios
        .put(`/api/publish-assessment/${id}`, data, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.getData();
          }
        });
    },
    getDraftResult(title, subject, type) {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let data = {
        title: title,
        subject: subject,
        type: type,
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
            this.subject = subject;
            this.title = title;
            this.type = type;
          }
        });
    },
    getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      this.quiz = [];
      this.test = [];
      this.assignment = [];
      this.examination = [];

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
            if (this.assignment.length) {
              this.getDraftResult(
                this.assignment[0].title,
                this.assignment[0].subject,
                this.assignment[0].type
              );
            }
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
.main-title {
  width: 350px;
}
.title {
  font-weight: bold;
  color: #56cee3;
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
  justify-content: flex-end;
  padding-top: 2rem;
}
.btn {
  background: transparent;
  text-decoration: underline;
  color: #0a4065;
  font-weight: 500;
}
.btn:hover {
  color: #118fe2;
}
.right h6 {
  padding-top: 1.5rem;
  font-size: 14px;
}
.assignment-notification {
  background: rgba(34, 202, 222, 0.2);
  border-left: 5px solid #22cade;
  padding: 5px 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
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
.notify {
  text-align: center;
  font-size: 17px;
  margin-bottom: 16px;
}
.assessment-table {
  padding-left: 15px;
  padding-top: 0;
}
.hiden {
  opacity: 0;
}
.overall-assessment {
  display: flex;
  justify-content: space-between;
  padding: 2px 10px;
}
.overall-assessment h6 {
  margin-bottom: 3px;
  padding-top: 5px;
}
.overall-assessment p {
  color: grey;
  font-size: 14px;
}
.submitted {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pending {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.submitted .fa-check {
  color: #008e3a;
  background: rgba(0, 142, 58, 0.25);
  border-radius: 50%;
  padding: 10px;
}
.pending .fa-ban {
  color: #dfd291;
  background: rgba(223, 210, 145, 0.25);
  border-radius: 50%;
  padding: 10px;
}
</style>