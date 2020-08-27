<template>
  <div class="time-table">
    <div class="timetable-schedule">
         <b-card no-body>
        <b-tabs card justified>
          <b-tab title="Todays Schedule" active>
            <div class="activity">
              <b-row class="py-5">
                <b-col md="4" >
                  <div class="cards border-right p-2">
                   
                    <div class="class_section" v-if="todaysClass.length">
                      <div
                        class="class-content  p-2"
                        v-for="(item,idx) in todaysClass"
                        :key="idx"
                      >
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
                          <p
                            v-else-if="(getSecond(today)  <  getSecond(item.start))"
                          >Upcoming</p>

                          <p
                            v-else-if="(getSecond(today)   >  getSecond(item.start)) && (getSecond(today) >getSecond(item.end))"
                          >Finished</p>
                        </div>
                      </div>
                    </div>
                    <div class="class_section phert-5" v-else>
                      <div class="form-control text-align">No Class Available</div>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  
                </b-col>
              </b-row>
            </div>
          </b-tab>
          <b-tab title="My Times Table">
            <div class="activity">
            

              <div class="d-flex justify-content-around mb-2">
               <span> <b-icon icon="circle-fill" class="upcoming"></b-icon> Upcoming</span>
                <span> <b-icon icon="circle-fill" class="ongoing"></b-icon> Ongoing</span>
                 <span> <b-icon icon="circle-fill" class="finished"></b-icon> Finished</span>
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
                          <td class="text-center "
                           :class="{upcoming:getSecond(today) < getSecond(item.start) && tab.day.toLowerCase() == today_name,
                            ongoing:getSecond(today) > getSecond(item.start) && getSecond(today) <= getSecond(item.end) && tab.day.toLowerCase() == today_name,
                             finished: getSecond(today) >getSecond(item.end) && tab.day.toLowerCase() == today_name
                           }"
                           v-for="(item,idx) in tab.courses" :key="idx">
                        
                            <div class="">
                               <div  >{{item.start | format}} - {{item.end | format}}</div>
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
              <div class="main-attendance container">
                <div class="attendance">
                  <div class="sort-table">
                    <b-container>
                      <b-row>
                        <b-col md="2">
                          <p>
                            <strong>Attendance</strong>
                          </p>
                        </b-col>
                        <b-col md="6">
                          <b-container>
                            <b-row>
                              <b-col md="4">
                                <b-form-select  ></b-form-select>
                              </b-col>
                              <b-col md="4">
                                <b-form-select  ></b-form-select>
                              </b-col>
                              <b-col md="4">
                                <b-form-select  ></b-form-select>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-col>
                        <b-col md="4">
                          <b-container>
                            <b-row>
                              <b-col md="6">
                                <b-form-input
                                  placeholder="Search Student "
                                  class="search rounded-pill"
                                ></b-form-input>
                              </b-col>
                              <b-col md="6">
                                <div class="export">
                                  <div class="btn btn-export">
                                    Export
                                    <i class="fa fa-external-link"></i>
                                  </div>
                                </div>
                              </b-col>
                            </b-row>
                          </b-container>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                  <hr />

                  <div class="attendance-table">
                    <b-table :items="items" bordered>
                      <template v-slot:cell(monday)="data" class="absent">
                        <span v-html="data.value"></span>
                      </template>
                      <template v-slot:cell(tuesday)="data" class="absent">
                        <span v-html="data.value"></span>
                      </template>
                      <template v-slot:cell(wednesday)="data" class="absent">
                        <span v-html="data.value"></span>
                      </template>
                      <template v-slot:cell(thursday)="data" class="absent">
                        <span v-html="data.value"></span>
                      </template>
                      <template v-slot:cell(friday)="data" class="absent">
                        <span v-html="data.value"></span>
                      </template>
                    </b-table>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>

         <b-tab title="My Calendar">
                 <b-container>
        <b-row>
          <b-col cols="7">
            <vc-calendar is-expanded :attributes="attributes" :rows="3"></vc-calendar>
          </b-col>
          <b-col cols="5">
            <div class="schedule-part">
              <div class="schedule-inner">
                <h6>Scheduler</h6>
                <p>keep reminders with your scheduler</p>
                <b-form>
                  <b-input-group class="mt-3">
                    <b-form-input></b-form-input>
                    <b-input-group-append>
                      <b-button variant="success">Add Todo</b-button>
                    </b-input-group-append>
                  </b-input-group>
                  <hr />
                </b-form>
                <h6>Todays Schedule</h6>
                <b-col>
                  <div class="cards">
                    <div class="class_section" v-if="todaysClass.length">
                      <div
                        class="class-content border-bottom p-2"
                        v-for="(item,idx) in todaysClass"
                        :key="idx"
                      >
                        <div
                          class="class-content-top"
                          v-if="(getSecond(today)  <  getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                        >
                          <h6 class="toCaps">{{item.subject}}</h6>

                          <i class="fa fa-dot-circle-o text-dark" aria-hidden="true"></i>

                          <b-tooltip ref="tooltip" :target="idx.toString()">
                            <p class="m-0">This class begins by {{item.start | format}}</p>
                          </b-tooltip>
                        </div>
                        <small
                          v-if="(getSecond(today)  <  getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                        >{{item.start | format}} to {{item.end | format}}</small>
                        <div class="class-content-main">
                          <p
                            v-if="(getSecond(today)  <  getSecond(item.start)) && (getSecond(today)   < getSecond(item.end))"
                          >Upcoming</p>
                        </div>
                      </div>
                    </div>
                    <div class="class_section d-flex justify-content-center align-items-center">
                      <p class="pt-5">Nothing Scheduled</p>
                    </div>
                  </div>
                </b-col>

              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
         </b-tab>
        </b-tabs>
      </b-card>
     
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
export default {
  components: {
    Calendar,
  },
  props: ["tutor"],
  data() {
    return {
      tables: [],
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
    };
  },
  mounted() {
    this.getTable();
    this.getTodayClass();
  },
  computed: {
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
.timetable-schedule {
  padding-top: 50px;
  padding-bottom: 70px;
}
.body {
  position: relative;
  padding: 40px 20px 50px;
  height: 100%;
}
.overlay-content {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  opacity: 0.85;
  backdrop-filter: blur(2px);
  height: 100vh;
  width: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cancel {
  position: absolute;
  right: 10px;
  top: 10px;
}
.ov {
  width: 100%;
  position: relative;
}
.sort {
  width: 120px;
}
.schedule-part {
  background: #fff;
  height: 100vh;
}
.schedule-inner {
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;
}
.schedule-inner p {
  font-size: 14px;
}
.schedule-inner h6 {
  padding-top: 20px;
}
.notify {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}
.notify-i i {
  color: #22cade;
  padding: 10px;
}
.notify-i {
  background: rgba(34, 202, 222, 0.25);
  border-radius: 50%;
}
.noftify-word p {
  font-size: 12px;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(34, 202, 222, 0.25);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.search {
  width: 250px;
  border-color: #41cee2;
}

.rounded-pill {
  border-radius: 50rem !important;
}
.filter-container {
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
}
.filter-btn {
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
.filter-btn span {
  font-family: "Montserrat";
  font-weight: bold;
}
.filter-btn i {
  padding-left: 3px;
}
.sort-section {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
}
.bg-info {
  background: #fff !important;
  box-shadow: 5px 4px 13px rgba(249, 247, 240, 0.25);
  margin-top: 20px;
  border-radius: 10px;
}
.cal {
  text-align: left;
  padding: 10px;
  width: 100px;
}
ul {
  list-style: none;
  margin: 0;
  font-size: 12px;
  color: #333;
  max-height: 60px;
  overflow: auto;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
ul li {
  padding: 5px 0;
}
.nav-link {
  color: #000 !important;
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
.cards {
  background: #fff;
  border-radius: 10px;
  padding: 10px;

}
.class-content {
  padding-bottom: 10px;
}
.class_section {
  max-height: 340px;
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
.btn {
  background: transparent;
  border: 1px solid #13a699;
  border-radius: 5px;
  color: #13a699;
  font-size: 15px;
}

.my-icon {
  color: #008e3a;
}
.check_it {
  color: #008e3a;
  font-size: 12px;
}
.ongoing{
   color: #008e3a;
}
.upcoming{
    color:#FFC200;
}
.finished{
    color:red;
}
</style>