<template>
  <div class="assessment">
    <b-tabs content-class v-model="tabIndex">
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
                <div>
                  <b-form-select v-model="level" size="sm" class="w-25">
                    <b-form-select-option
                      v-for="(level,idx) in all_classess"
                      :key="idx"
                      :value="level.class_name"
                    >{{level.class_name}}</b-form-select-option>
                  </b-form-select>
                </div>
                <b-table :fields="fields" :items="ass">
                  <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
                  <template v-slot:cell(publish_status)="data">
                    <span v-if="data.item.publish_status== true">Published</span>
                    <span v-else>Unpublished</span>
                  </template>
                  <template v-slot:cell(title)="data">
                    <div class="main-title">
                      <div
                        class="title"
                        @click="getNotification(data.item.title)"
                      >{{data.item.title}}</div>
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
                <p class="toCaps" v-if="title">Title : {{title}}</p>
                <div class="overall-assessment">
                  <div
                    class="submitted"
                    @click="handleSubmitted(assResult,allStudents)"
                    id="submitted-1"
                  >
                    <i class="fa fa-check"></i>
                    <h6>{{handleAssess(level,assResult).length}}</h6>
                    <p>submitted</p>
                    <b-popover ref="popover" target="submitted-1">
                      <ul class="pop">
                        <li v-for="(sub,idx) in submitted" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                  <div class="pending" @click="handlePending(assResult,allStudents)" id="pending-1">
                    <i class="fa fa-ban"></i>
                    <h6>{{handleStudent(level,assResult).length - handleAssess(level,assResult).length}}</h6>
                    <p>pending</p>
                    <b-popover ref="popover" target="pending-1">
                      <ul class="pop">
                        <li v-for="(sub,idx) in pending" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in assResult" :key="idx" @click="getContent(item)">
                      <p
                        class="mb-2"
                      >{{item.user.name}} submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <small
                        class="toCaps"
                        :class="{approved:item.status=='submitted',pendings:item.status=='pending'}"
                      >
                        <span>{{item.status=='submitted'?'Approved':'Pending'}}</span>
                        <b-icon :icon="item.status=='submitted'?'check-circle-fill':'clock-fill'"></b-icon>
                      </small>
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
                <div class="right-btn">
                  <router-link to="/tutor/quiz">
                    <div class="btn text-center">
                      <span>ALL QUIZZES</span>
                    </div>
                  </router-link>
                </div>

                <div>
                  <b-form-select v-model="level" size="sm" class="w-25">
                    <b-form-select-option
                      v-for="(level,idx) in all_classess"
                      :key="idx"
                      :value="level.class_name"
                    >{{level.class_name}}</b-form-select-option>
                  </b-form-select>
                </div>
                <b-table :fields="fields" :items="qu" hover>
                  <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
                  <template v-slot:cell(publish_status)="data">
                    <span v-if="data.item.publish_status== true">Published</span>
                    <span v-else>Unpublished</span>
                  </template>

                  <template v-slot:cell(title)="data">
                    <div class="main-title">
                      <div
                        class="title"
                        @click="getNotification(data.item.title)"
                      >{{data.item.title}}</div>
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
                <p class="toCaps" v-if="title">Title : {{title}}</p>
                <div class="overall-assessment">
                  <div
                    class="submitted"
                    @click="handleSubmitted(quizResult,allStudents)"
                    id="submitted-2"
                  >
                    <i class="fa fa-check"></i>
                    <h6>{{handleAssess(level,quizResult).length}}</h6>
                    <p>submitted</p>
                    <b-popover ref="popover" target="submitted-2">
                      <ul class="pop">
                        <li v-for="(sub,idx) in submitted" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                  <div
                    class="pending"
                    @click="handlePending(quizResult,allStudents)"
                    id="pending-2"
                  >
                    <i class="fa fa-ban"></i>
                    <h6>{{handleStudent(level,quizResult).length - handleAssess(level,quizResult).length}}</h6>

                    <p>pending</p>
                    <b-popover ref="popover" target="pending-2">
                      <ul class="pop">
                        <li v-for="(sub,idx) in pending" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in quizResult" :key="idx" @click="getContent(item)">
                      <p>{{item.user.name}} submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <small
                        class="toCaps"
                        :class="{approved:item.status=='submitted',pendings:item.status=='pending'}"
                      >
                        <span>{{item.status=='submitted'?'Approved':'Pending'}}</span>
                        <b-icon :icon="item.status=='submitted'?'check-circle-fill':'clock-fill'"></b-icon>
                      </small>
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
                <div class="right-btn">
                  <router-link to="/tutor/test">
                    <div class="btn text-center">
                      <span>ALL TESTS</span>
                    </div>
                  </router-link>
                </div>

                <div>
                  <b-form-select v-model="level" size="sm" class="w-25">
                    <b-form-select-option
                      v-for="(level,idx) in all_classess"
                      :key="idx"
                      :value="level.class_name"
                    >{{level.class_name}}</b-form-select-option>
                  </b-form-select>
                </div>
                <b-table :fields="fields" :items="tes" hover>
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
                      <div
                        class="title"
                        @click="getNotification(data.item.title)"
                      >{{data.item.title}}</div>
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
                <p class="toCaps" v-if="title">Title : {{title}}</p>
                <div class="overall-assessment">
                  <div
                    class="submitted"
                    @click="handleSubmitted(testResult,allStudents)"
                    id="submitted-3"
                  >
                    <i class="fa fa-check"></i>
                    <h6>{{handleAssess(level,testResult).length}}</h6>
                    <p>Submitted</p>
                    <b-popover ref="popover" target="submitted-3">
                      <ul class="pop">
                        <li v-for="(sub,idx) in submitted" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                  <div
                    class="pending"
                    @click="handlePending(testResult,allStudents)"
                    id="pending-3"
                  >
                    <i class="fa fa-ban"></i>
                    <h6>{{handleStudent(level,testResult).length - handleAssess(level,testResult).length}}</h6>
                    <p>Pending</p>
                    <b-popover ref="popover" target="pending-3">
                      <ul class="pop">
                        <li v-for="(sub,idx) in pending" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in testResult" :key="idx" @click="getContent(item)">
                      <p>{{item.user.name}} submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <small
                        class="toCaps"
                        :class="{approved:item.status=='submitted',pendings:item.status=='pending'}"
                      >
                        <span>{{item.status=='submitted'?'Approved':'Pending'}}</span>
                        <b-icon :icon="item.status=='submitted'?'check-circle-fill':'clock-fill'"></b-icon>
                      </small>
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
                <div class="right-btn">
                  <router-link to="/tutor/exam">
                    <div class="btn text-center">
                      <span>ALL EXAMINATIONS</span>
                    </div>
                  </router-link>
                </div>

                <div>
                  <b-form-select v-model="level" size="sm" class="w-25">
                    <b-form-select-option
                      v-for="(level,idx) in all_classess"
                      :key="idx"
                      :value="level.class_name"
                    >{{level.class_name}}</b-form-select-option>
                  </b-form-select>
                </div>
                <b-table :fields="fields" :items="ex" hover>
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
                      <div
                        class="title"
                        @click="getNotification(data.item.title)"
                      >{{data.item.title}}</div>
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
                <p class="toCaps" v-if="title">Title : {{title}}</p>
                <div class="overall-assessment">
                  <div
                    class="submitted"
                    @click="handleSubmitted(examResult,allStudents)"
                    id="submitted-4"
                  >
                    <i class="fa fa-check"></i>
                    <h6>{{handleAssess(level,examResult).length}}</h6>
                    <p>Submitted</p>
                    <b-popover ref="popover" target="submitted-4">
                      <ul class="pop">
                        <li v-for="(sub,idx) in submitted" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                  <div
                    class="pending"
                    @click="handlePending(examResult,allStudents)"
                    id="pending-4"
                  >
                    <i class="fa fa-ban"></i>
                    <h6>{{handleStudent(level,examResult).length - handleAssess(level,examResult).length}}</h6>
                    <p>Pending</p>
                    <b-popover ref="popover" target="pending-1">
                      <ul class="pop">
                        <li v-for="(sub,idx) in pending" :key="idx" class="toCaps">{{sub}}</li>
                      </ul>
                    </b-popover>
                  </div>
                </div>

                <div>
                  <b-form-input placeholder="Search title" v-model="search"></b-form-input>
                </div>
                <div class="assignment-notification">
                  <div class="notification-content">
                    <div v-for="(item,idx) in examResult" :key="idx" @click="getContent(item)">
                      <p>{{item.user.name}} submitted {{item.subject}} {{item.type}} - {{item.title}}</p>
                      <small
                        class="toCaps"
                        :class="{approved:item.status=='submitted',pendings:item.status=='pending'}"
                      >
                        <span>{{item.status=='submitted'?'Approved':'Pending'}}</span>
                        <b-icon :icon="item.status=='submitted'?'check-circle-fill':'clock-fill'"></b-icon>
                      </small>
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
      subjects: [],
      all_classess: [],
      level: "",
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
      tabIndex: 0,
      tutors: [],
      busy: true,
      items: [],
      item: false,
      quiz: [],
      test: [],
      assignment: [],
      examination: [],
      draftResult: [],
      allClass: [],
      title: "",
      submitted: [],
      pending: [],
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
      allStudents: [],
    };
  },
  watch: {
    item: "selectAll",
    tabIndex: "handleSwitch",
  },
  components: {
    Review,
  },
  mounted() {
    this.getData();
    this.getClasses();
    this.getStudent("jss 1");
  },
  computed: {
    draft() {
      var d = this.draftResult.filter((item) => {
        return item.level.toLowerCase().includes(this.level.toLowerCase());
      });
      return d.filter((item) => item.title.includes(this.title));
    },
    examResult() {
      return this.draft.filter((item) => {
        if (
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.user.name.toLowerCase().includes(this.search.toLowerCase())
        ) {
          return item.type == "examination";
        }
      });
    },
    testResult() {
      return this.draft.filter((item) => {
        if (
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.user.name.toLowerCase().includes(this.search.toLowerCase())
        ) {
          return item.type == "test";
        }
      });
    },
    assResult() {
      return this.draft.filter((item) => {
        if (
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.user.name.toLowerCase().includes(this.search.toLowerCase())
        ) {
          return item.type == "assignment";
        }
      });
    },
    quizResult() {
      return this.draft.filter((item) => {
        if (
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.user.name.toLowerCase().includes(this.search.toLowerCase())
        ) {
          return item.type == "quiz";
        }
      });
    },
    ass() {
      return this.assignment.filter((item) => {
        return item.level.toLowerCase().includes(this.level.toLowerCase());
      });
    },

    tes() {
      return this.test.filter((item) => {
        return item.level.toLowerCase().includes(this.level.toLowerCase());
      });
    },
    qu() {
      return this.quiz.filter((item) => {
        return item.level.toLowerCase().includes(this.level.toLowerCase());
      });
    },
    ex() {
      return this.examination.filter((item) => {
        return item.level.toLowerCase().includes(this.level.toLowerCase());
      });
    },
  },
  methods: {
    getNotification(title) {
      this.title = title;
    },
    handleSwitch() {
      if (this.tabIndex == 0) {
        this.title = this.ass[0].title;
      }
      if (this.tabIndex == 1) {
        this.title = this.qu[0].title;
      }
      if (this.tabIndex == 2) {
        this.title = this.tes[0].title;
      }
      if (this.tabIndex == 3) {
        this.title = this.ex[0].title;
      }
    },
    handleAssess(level, arr) {
      return arr.filter(
        (item) => item.level.toLowerCase() == level.toLowerCase()
      );
    },
    handleStudent(level, arr) {
      return this.allStudents.filter(
        (item) => item.student_level.toLowerCase() == level.toLowerCase()
      );
    },
    handleSubmitted(ass, users) {
      var uid = [];
      ass.forEach((item) => {
        users.forEach((i) => {
          if (i.id == item.user_id) {
            uid.push(i.name);
          }
        });
      });

      this.submitted = uid;
    },
    handlePending(ass, users) {
      var uid = [];
      if (ass.length) {
        ass.forEach((item) => {
          users.forEach((i) => {
            if (i.id !== item.user_id) {
              uid.push(i.name);
            }
          });
        });
      } else {
        users.forEach((i) => {
          uid.push(i.name);
        });
      }
     
      this.pending = uid;
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
    getSubjects() {
      axios
        .get(`/api/tutor-all-subjects`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    },
    getClasses() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get("/api/all-classes", {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.all_classess = res.data;
            this.level = res.data[0].class_name;
            // res.data.forEach((item) => {
            //   this.allClass.push(item.class_name);
            //   if (item.sub_class !== "") {
            //     item.sub_class.split(",").forEach((i) => {
            //       this.allClass.push(i);
            //     });
            //   }
            // });
          }
        });
    },
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

      if (content.status == "pending") {
        this.$bvModal.show("content");
      }
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
              if (item.type == "exam") {
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
            console.log("del -> err", err.data);
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
.approved {
  padding: 5px;
  background: #0a4065;
  color: white;
}
.pendings {
  padding: 5px;
  background: #ffc200;
  color: white;
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
ul,ol{
  list-style:none
}
.pop li{
  padding:5px 10px;
}
</style>