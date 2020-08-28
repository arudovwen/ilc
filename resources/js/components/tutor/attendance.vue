<template>
  <div class="main-body">
    <b-card no-body>
      <b-tabs card justified>
        <b-tab title="Attendance" active>
          <div class="activity">
            <div class="main-attendance">
              <div class="attendance">
                <div class="sort-table">
                  <div>
                    <b-row>
                      <b-col md="2">
                        <p>
                          <strong>Attendance</strong>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </div>
                <hr />

                <div class="attendance-table">
                  <b-row>
                    <b-col cols="4">
                      <div class="text-right">
                        <b-form-select v-model="week" class="week mb-3">
                          <b-form-select-option
                            :value="num"
                            v-for="(num,id) in n"
                            :key="id"
                          >{{getWeek(new Date())==num?'Current week ':'Week' }} {{num}}</b-form-select-option>
                        </b-form-select>
                      </div>
                    </b-col>
                    <b-col cols="4">
                      <b-form-select v-model="my_class" class="week mb-3">
                        <b-form-select-option
                          :value="lev"
                          v-for="(lev,id) in all_class"
                          :key="id"
                        >{{lev}}</b-form-select-option>
                      </b-form-select>
                    </b-col>
                  </b-row>

                  <b-table-simple>
                    <b-thead>
                      <b-th>Name</b-th>
                      <b-th>Record</b-th>
                    </b-thead>
                    <b-tbody>
                      <b-tr v-for="(stud,index) in sortedStuds" :key="index">
                        <b-td>{{stud.name}}</b-td>
                        <b-td>
                          <b-tr
                            v-for="(att,idx) in sorted.filter(item=>item.user_id==stud.id)"
                            :key="idx"

                          >
                            <b-td class="border-0">{{att.date}}</b-td>
                            <b-td
                              class="text-center toCaps border-0"
                              v-for="(value,id) in JSON.parse(att.record)"
                              :key="id"
                            >
                              {{value.subject}}
                              <br />
                              <b-icon
                                v-if="value.student"
                                icon="check-circle-fill"
                                :class="{green:value.student && value.tutor!== 'pending' ,amber:value.student && value.tutor =='pending'}"
                              ></b-icon>
                              <b-icon v-if="!value.tutor" icon="x-circle-fill" class="red"></b-icon>
                            </b-td>
                          </b-tr>
                          <hr>
                        </b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </div>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab title="Todays Attendance">
          <h5 class="mb-4">Todays Class</h5>
          <div class="text-right select mb-3">
            <b-row>
              <b-col cols="3">
                <div class="text-right">
                  <b-form-select v-model="myweek" class="week mb-3">
                    <b-form-select-option
                      :value="num"
                      v-for="(num,id) in n"
                      :key="id"
                    >{{getWeek(new Date())==num?'Current week ':'Week' }} {{num}}</b-form-select-option>
                  </b-form-select>
                </div>
              </b-col>

              <b-col cols="3">
                <b-form-select v-model="myday">
                  <b-form-select-option
                    :value="day.value"
                    v-for="(day,id) in days"
                    :key="id"
                    class="toCaps"
                  >{{day.key}}</b-form-select-option>
                </b-form-select>
              </b-col>
              <b-col cols="3">
                <b-form-select v-model="level">
                  <b-form-select-option
                    v-for="(item,idx) in myclass"
                    :key="idx"
                    :value="item"
                  >{{item}}</b-form-select-option>
                </b-form-select>
              </b-col>
              <b-col cols="3">
                <b-form-select v-model="subject">
                  <b-form-select-option
                    v-for="(item,idx) in todaysClass"
                    :key="idx"
                    :value="item.subject"
                  >{{item.subject}}</b-form-select-option>
                </b-form-select>
              </b-col>
            </b-row>
          </div>

          <b-table-simple>
            <b-thead>
              <b-th>Name</b-th>
              <b-th>Attendance</b-th>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item,idx) in sortedStuds" :key="idx" :value="item">
                <b-td>{{item.name}}</b-td>
                <b-td v-if="sortedAtt.filter(val=>val.user.id == item.id).length">
                  <div
                    class="d-flex justify-content-between"
                    v-for="(att,idx) in sortedAtt.filter(val=>val.user.id == item.id)"
                    :key="idx"
                  >
                    <div>
                      <b-icon icon="check-circle-fill" class="present" @click="mark(item,att,true)"></b-icon>|
                      <b-icon
                        @click="mark(item,att,false)"
                        icon="x-circle-fill"
                        size="2rem"
                        class="absent"
                      ></b-icon>
                      <span class="ml-4">{{att.tutor?'Present':'Absent'}}</span>
                    </div>
                    <div class="text-center d-flex align-items-center" v-if="att.tutor">
                      ">
                      <div class="mr-3">
                        <strong>Participation</strong>
                      </div>
                      <div class="d-flex align-items-center" v-if="att.tutor">
                        <b-form-select
                          size="sm"
                          label="Score"
                          class="mr-3"
                          @change="handleParticipation($event,att)"
                        >
                          <b-form-select-option
                            v-for="(num,idx) in np"
                            :key="idx"
                            :value="num"
                          >{{num}}</b-form-select-option>
                        </b-form-select>

                        <span
                          v-for="(i,idx) in sortedPart.filter(part=>part.user_id == item.id)"
                          :key="idx"
                        >{{i.score}}</span>
                      </div>
                      <div v-else>0</div>
                    </div>
                  </div>
                </b-td>
                <b-td v-else></b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

          <b-alert>
            <div>No class scheduled for today</div>
          </b-alert>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>


<script>
export default {
  props: ["tutor"],
  data() {
    return {
      np: 10,
      attendance: [],
      todaysClass: [],
      level: "",
      allstudnts: [],
      subject: "",
      participation: [],
      attendanceSort: [],
      sorTa: [],
      tables: [],
      n: 52,
      week: "",
      myweek: "",

      table: [],
      myclass: [],
      overlay: false,
      item: false,
      my_class: "",
      myday: 0,
      items: [],
      filterShow: false,
      todaysClass: [],
      today:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      allClass: [],
      attendance: [],
      my_class: "",
      all_class: [],
      days: [
        { key: "Monday", value: "monday" },
        { key: "Tuesday", value: "tuesday" },
        { key: "Wednesday", value: "wednesday" },
        { key: "Thursday", value: "thursday" },
        { key: "Friday", value: "friday" },
        { key: "Saturday", value: "saturday" },
        { key: "Sunday", value: "sunday" },
      ],
    };
  },
  mounted() {
    //  this.getTable();

    this.getTodayClass();
    this.getallClass();
    this.getAttendance();
    this.getClasses();
    this.week = this.getWeek(new Date());
    this.myweek = this.getWeek(new Date());
    this.getStud();
    this.getSortAttendance();
    this.getParticipation();
    this.myday = new Date()
      .toLocaleString("default", {
        weekday: "long",
      })
      .toLowerCase();
  },
  computed: {
    sortedStuds() {
      return this.allstudnts.filter((item) =>
        item.sub_class.toLowerCase().includes(this.my_class.toLowerCase())
      );
    },
    sortedAtt() {
      var mweek = this.attendanceSort.filter(
        (item) => this.getWeek(item.date) == this.myweek
      );
      var first = mweek.filter((item) =>
        item.subject.toLowerCase().includes(this.subject.toLowerCase())
      );

      return first.filter((item) =>
        item.day.toLowerCase().includes(this.myday.toLowerCase())
      );
    },
    sortedPart() {
      return this.participation.filter((item) =>
        item.subject.toLowerCase().includes(this.subject.toLowerCase())
      );
    },

    sorted() {
      var first = this.attendance.filter(
        (item) => this.getWeek(item.date) == this.week
      );
      return first.filter((item) =>
        item.level.toLowerCase().includes(this.my_class.toLowerCase())
      );
    },
    attributes() {
      return [
        {
          highlight: true,

          dates: [new Date()],
          popover: {
            label: "Mathematics Class",
            label: "Mathematics Class",
          },
        },
      ];
    },
    sortedTable() {
      return this.tables.filter((item) =>
        item.myclass.toLowerCase().includes(this.my_class.toLowerCase())
      );
    },
  },
  methods: {
    getParticipation() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/participation`, {
          headers: { Authorization: `Bearer ${tutor.access_token}` },
        })
        .then((res) => {
          if (res.status == 200) {
            this.participation = res.data;
          }
        });
    },
    handleParticipation(e, item) {
      console.log("handleParticipation -> e", e);
      console.log("handleParticipation -> item", item);
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let data = {
        att_id: item.id,
        score: e,
        subject: this.subject,
        tutor: tutor.id,
        user_id: item.user.id,
        day: item.day,
        date: item.date,
      };
      axios
        .post(`/api/participation`, data, {
          headers: { Authorization: `Bearer ${tutor.access_token}` },
        })
        .then((res) => {
          if (res.status == 201) {
            this.getParticipation();
          }
          if (res.status == 200) {
            this.getParticipation();
          }
        });
    },
    mark(user, val, value) {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));

      let data = {
        user_id: user.id,
        value: value,
        subject: val.subject,
      };
      axios
        .put(`/api/update-attendance/${val.id}`, data, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.getSortAttendance();
          }
        });
    },

    getWeek(date) {
      var date = new Date(date);
      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return (
        1 +
        Math.round(
          ((date.getTime() - week1.getTime()) / 86400000 -
            3 +
            ((week1.getDay() + 6) % 7)) /
            7
        )
      );
    },
    getStud() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/tutor-all-students`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.allstudnts = res.data;
          }
        });
    },
    getAttendance() {
      axios
        .get(`/api/tutor-get-attendance`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.attendance = res.data;
          }
        });
    },
    getSortAttendance() {
      axios
        .get(`/api/sorted-student-attendance`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.attendanceSort = res.data;
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
            this.level = res.data[0].level;
            this.subject = res.data[0].subject;
            res.data.forEach((i) => {
              if (!this.myclass.includes(i.level)) {
                this.myclass.push(i.level);
              }
            });
          }
        });
    },
    // getTodayClass() {
    //   axios
    //     .get(`/api/current-class`, {
    //       headers: {
    //         Authorization: `Bearer ${this.$props.tutor.access_token}`,
    //       },
    //     })
    //     .then((res) => {
    //       if (res.status == 200) {
    //         this.todaysClass = res.data;
    //       }
    //     });
    // },
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
            res.data.forEach((item) => {
              // this.allClass.push(item.class_name);
              if (item.sub_class !== "") {
                item.sub_class.split(",").forEach((i) => {
                  this.all_class.push(i);
                });
              }
            });
            this.my_class = this.all_class[0];
          }
        });
    },
    getallClass() {
      axios
        .get(`/api/all-class`, {
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
    cancel() {
      this.overlay = false;
      this.tables = [];
      this.myclass = "";
    },

    toggleFilter() {
      this.filterShow = !this.filterShow;
    },
    // getTable() {
    //   axios
    //     .get(`/api/tutor-times-table`, {
    //       headers: {
    //         Authorization: `Bearer ${this.$props.tutor.access_token}`,
    //       },
    //     })
    //     .then((res) => {
    //       if (res.status == 200) {
    //         this.tables = res.data;
    //         this.myclass = res.data.filter((item) => item.myclass);
    //         this.my_class = this.myclass[0].myclass;
    //       }
    //     });
    // },
  },
};
</script>

<style scoped>
.sort-table p {
  font-size: 14px;
}
.main-attendance {
  padding-top: 20px;
  font-family: "Montserrat";
}
.attendance {
  background: #fff;
  padding: 20px;
}
.absent {
  color: #ff0000;
}
.present {
  color: green;
}
.select {
  width: 70%;
}
.part {
  /* width: 200px; */
}
.red {
  color: #ff0000;
}
.green {
  color: green;
}
</style>