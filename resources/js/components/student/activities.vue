<template>
  <div>
    <b-container>
      <b-card no-body>
        <b-tabs card justified>
          <b-tab title="Todays Schedule" active>
            <div class="activity">
              <b-row class="py-5">
                <b-col md="6">
                  <div class="cards border-right p-2">
                    <div class="class_section" v-if="todaysClass.length">
                      <div class="class-content p-2" v-for="(item,idx) in todaysClass" :key="idx">
                        <div class="class-content-top">
                          <p class="toCaps">{{item.subject}}</p>
                          <i
                            class="fa fa-play-circle-o green"
                            v-if="(getSecond(today)  > getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                            aria-hidden="true"
                          ></i>

                          <i
                            class="fa fa-dot-circle-o amber"
                            v-else-if="(getSecond(today)  <  getSecond(item.start))"
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
                              Tutor :
                              <strong class="toCaps">{{item.tutor}}</strong>
                            </span>
                          </p>

                          <p
                            v-if="(getSecond(today)  > getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                          >Ongoing</p>
                          <!-- <p v-else-if="(getSecond(today)  <  getSecond(item.start))">Upcoming</p> -->

                          <p v-else-if="(getSecond(today)   >  getSecond(item.start)) && (getSecond(today) >getSecond(item.end))">Finished</p>
                        </div>
                      </div>
                    </div>
                    <div class="class_section p-5" v-else>
                      <div class="form-control text-align">No Class Available</div>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="class-content p-2" v-for="(item,idx) in assess" :key="idx">
                    <div>
                      <div
                        class="border-bottom"
                        v-if="new Date(item.end).getTime() > new Date().getTime()"
                      >{{item.subject}} {{item.type}} submission deadline {{item.end | moment('dddd h:mm A')}}</div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-tab>
          <b-tab title="My Times Table">
            <div class="activity">
              <h5 class="mb-4">{{student.sub_class.toUpperCase()}}</h5>

              <div class="d-flex justify-content-around mb-2">
                <span>
                  <b-icon icon="circle-fill" class="upcoming"></b-icon>Upcoming
                </span>
                <span>
                  <b-icon icon="circle-fill" class="ongoing"></b-icon>Ongoing
                </span>
                <span>
                  <b-icon icon="circle-fill" class="finished"></b-icon>Finished
                </span>
              </div>
              <table class="table table-bordered">
                <thead class="thead-light">
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(tab,index) in table" :key="index">
                    <td class="toCaps day">{{tab.day}}</td>
                    <td class="d-flex justify-content-between p-0">
                      <table class="w-100">
                        <tr class="w-100">
                          <td
                            class="text-center"
                            :class="{upcoming:getSecond(today) < getSecond(item.start) && tab.day.toLowerCase() == today_name,
                            ongoing:getSecond(today) > getSecond(item.start) && getSecond(today) <= getSecond(item.end) && tab.day.toLowerCase() == today_name,
                             finished: getSecond(today) >getSecond(item.end) && tab.day.toLowerCase() == today_name
                           }"
                            v-for="(item,idx) in tab.courses"
                            :key="idx"
                          >
                            <div class>
                              <div>{{item.start | format}} - {{item.end | format}}</div>
                              <div>{{item.subject}}</div>
                              <div>{{item.tutor}}</div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-tab>
          <b-tab title="My Attendance">
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
                    <div class="text-right">
                      <!-- <b-form-select v-model="week" class="week mb-3">
                        <b-form-select-option
                          :value="num"
                          v-for="(num,id) in n"
                          :key="id"
                        >{{getWeek(new Date())==num?'Current week ':'Week' }} {{num}}</b-form-select-option>
                      </b-form-select> -->
                    </div>

                   <b-table :items="attendance" :fields="att" bordered>
                    <template v-slot:cell(record)="data">
                      <div>
                       <span> <b-button v-if="data.item.record=='1'" variant="success">Present <b-icon icon="check-circle-fill"></b-icon> </b-button>
                          <b-button variant="danger" v-if="data.item.record=='0'">Absent <b-icon icon="x-circle-fill"></b-icon> </b-button>
                           <b-button variant="info" v-if="data.item.record=='pending'">Pending <b-icon icon="clock"></b-icon> </b-button>
                       </span>
                      </div>
                    </template>
                  </b-table>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      n: 52,
      week: "",
      table: [],
      assess: [],
      todaysClass: [],
      today_name: new Date()
        .toLocaleString("default", { weekday: "long" })
        .toLowerCase(),
      today:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
      attendance: [],
        att: ["day", 'subject',"record"],
    };
  },
  mounted() {
    this.getTable();
    this.getTodayClass();
    this.getData();
    this.getAttendance();
    this.week = this.getWeek(new Date());
  },
  computed: {
    sorted() {
      return this.attendance.filter(
        (item) => this.getWeek(item.date) == this.week
      );
    },
  },
  methods: {
    getData() {
      let student = JSON.parse(localStorage.getItem("typeStudent"));
      axios
        .get(`/api/student-assessments/${student.level}`, {
          headers: {
            Authorization: `Bearer ${student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.assess = res.data;
          }
        })
        .catch((err) => {
          err.response.data;
          console.log(" err.response.data", err.response.data);
        });
    },
    getTable() {
      axios
        .get(`/api/student-times-table/${this.$props.student.student_level}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.table = JSON.parse(res.data[0].table);
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
        .get(`/api/todays-class/${this.$props.student.sub_class}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.length) {
              this.todaysClass = res.data[0].courses;
            }
          }
        });
    },
    getAttendance() {
      axios
        .get(`/api/student-attendance`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.attendance = res.data;
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
  },
};
</script>


<style scoped>
.container {
  padding-top: 50px;
  padding-bottom: 70px;
}
.activity {
  max-height: 70vh;
}

.m-res {
  height: 520px;
  overflow: auto;
}
.main-note {
  height: 290px;
  overflow: auto;
}

small,
.small {
  font-size: 100%;
}
.resources-inner {
  border-bottom: 1px solid #e4e4e4;
  padding-top: 5px;
}
.resources-inner:last-child {
  border-bottom: none;
}
.class-content {
  padding-bottom: 10px;
}
.class-content-top {
  display: flex;
  justify-content: space-between;
}

.red {
  color: #ff0000;
}
.green {
  color: green;
}
.class-content-main {
  display: flex;
  justify-content: space-between;
}
.class-content-main p {
  font-size: 16px;
}
.notes-top {
  display: flex;
  justify-content: space-between;
}
/* .btn {
  background: transparent;
  border: 1px solid #13a699;
  border-radius: 5px;
  color: #13a699;
  font-size: 15px;
} */

.my-icon {
  color: #008e3a;
}
.check_it {
  color: #008e3a;
  font-size: 12px;
}
.ongoing {
  color: #008e3a;
}
.upcoming {
  color: #ffc200;
}
.finished {
  color: red;
}
.week {
  width: 180px;
  margin-left: auto;
}
</style>