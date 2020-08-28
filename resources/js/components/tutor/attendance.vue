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

                    <b-table-simple bordered>
                      <b-thead>
                        <b-tr>
                          <b-th>Name</b-th>
                          <b-th>Day</b-th>
                          <b-th>Record</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr v-for="(record,idx) in sorted" :key="idx">
                          <b-th>{{record.user.name}}</b-th>
                          <b-td class="toCaps">
                            {{record.day}}
                            <br />
                            {{record.date}}
                          </b-td>
                          <b-tbody>
                            <b-tr>
                              <b-td
                                class="text-center toCaps"
                                v-for="(value,id) in JSON.parse(record.record)"
                                :key="id"
                              >
                                {{value.subject}}
                                <br />
                                <b-icon
                                  v-if="value.student"
                                  icon="check-circle-fill"
                                  :class="{green:value.student && value.tutor,amber:value.student && !value.tutor}"
                                ></b-icon>
                                <b-icon v-else icon="x-circle-fill" class="red"></b-icon>
                              </b-td>
                            </b-tr>
                          </b-tbody>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>

        <b-tab title="Todays Attendance">
           <h5 class="mb-4">   Todays Class</h5>
          <div class="text-right select mb-3">
            <b-row>
              <b-col>
                <b-form-select v-model="level">
                  <b-form-select-option
                    v-for="(item,idx) in myclass"
                    :key="idx"
                    :value="item"
                  >{{item}}</b-form-select-option>
                </b-form-select>
              </b-col>
              <b-col>
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

          <b-table-simple v-if="todaysClass.length">
            <b-thead>
              <b-tr>
                <b-th>Name</b-th>
                <b-th>Attendance</b-th>
                <b-th>Participation</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item,idx) in sortedStuds" :key="idx" :value="item">
                <b-td>{{item.name}}</b-td>
              <b-td>
                <b-tr>
                    <b-td
                  v-for="(val,index) in sortedAtt.filter(i=>i.user.name==item.name)"
                  :key="index"
                >
                  <b-icon icon="check-circle-fill" class="present" @click="mark(item,val,true)"></b-icon>|
                  <b-icon @click="mark(item,val,false)" icon="x-circle-fill" class="absent"></b-icon>
                  <span class="ml-4">{{val.tutor?'Present':'Absent'}}</span>
                </b-td>
                </b-tr>
              </b-td>
                <b-td class="part">
                  <b-row v-if="sortedAtt.length">
                  
                    <b-col cols="6">
                      <b-form-select
                        size="sm"
                        label="Score"
                        @change="handleParticipation($event,item)"
                    
                      >
                        <b-form-select-option v-for="(num,idx) in n" :key="idx" :value="num">{{num}}</b-form-select-option>
                      </b-form-select>
                    </b-col >
                      <b-col cols="6">
                       <span v-for="(i,idx) in sortedPart.filter(v=> v.user_id== item.id && v.date== new Date().toLocaleDateString())" :key="idx">{{i.score}}</span>
                    </b-col>
                   
                  </b-row>

                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>


       
          <b-alert v-else show >
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
      n: 10,
      attendance: [],
      todaysClass: [],
      level: "",
      myclass: [],
      allstudnts: [],
      subject: "",
      participation:[],


       tables: [],
      n: 52,
      week: "",
      table: [],
      myclass: [],
      overlay: false,
      item: false,
      my_class: "",
      items: [],
      filterShow: false,
      todaysClass: [],
      today:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
        allClass:[],
          attendance: [],
          my_class:'',
          all_class:[]
    };
  },
  mounted() {
 this.getTable();
    this.getTodayClass();
    this.getallClass()
    this.getAttendance()
    this.getClasses()
      this.week = this.getWeek(new Date());


  },
  computed: {
    sorted() {
      var first = this.attendance.filter(
        (item) => this.getWeek(item.date) == this.week
      );
      return first.filter(
        (item) =>item.level.toLowerCase().includes(this.my_class.toLowerCase())
      );
    },
    attributes() {
      return [
        {
          highlight: true,

          dates: [new Date()],
          popover: {
            label: "Mathematics Class",
             label: "Mathematics Class"
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
             this.my_class = this.all_class[0]
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
    getTable() {
      axios
        .get(`/api/tutor-times-table`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tables = res.data;
            this.myclass = res.data.filter((item) => item.myclass);
            this.my_class = this.myclass[0].myclass;
          }
        });
    },










 
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
  width: 300px;
}
.part {
  width: 180px;
}
.red {
  color: #ff0000;
}
.green {
  color: green;
}
</style>