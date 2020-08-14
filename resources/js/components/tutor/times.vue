<template>
  <!-- <div class="body">
   
    <div class="overlay-content" v-if="overlay">
      <div class="ov bg-white  p-3">
        <div class="text-right">
          <button type="button" class="btn btn-primary ml-auto" @click="cancel">Close</button>
        </div>
       
        <div class="table-responsive ">
          <div class="form-group">
            <h5 class="toCaps">{{myclass}}</h5>
          </div>
          <table class="table table-bordered">
            <thead class="thead-darkblue">
              <tr>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tab,index) in tables" :key="index">
                <td class="toCaps day">{{tab.day}}</td>
                <td class="d-flex justify-content-between p-0">
                  <table class="w-100">
                    <tr class="w-100">
                      <td class="text-center" v-for="(item,idx) in tab.courses" :key="idx">
                        <div class>{{item.start}} - {{item.end}}</div>
                        <div>{{item.subject}}</div>
                        <div>{{item.tutor}}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

 
    <div>
      <table class="table table-bordered">
        <thead class="thead-darkblue">
          <tr>
            <th>Class</th>

            <th>Action</th>
            <th>
              <input type="checkbox" v-model="item" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in table" :key="idx">
            <td scope="row" class="toCaps">{{item.myclass}}</td>

            <td class="d-flex justify-content-around">
              <span class="mr-3" @click="getTables(item.id)">
                <i class="fa fa-eye" aria-hidden="true"></i> View
              </span>
            </td>
            <td>
              <input type="checkbox" :value="item.id" v-model="items" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>-->
  <div class="time-table">
    <div class="timetable-schedule">
      <b-container>
       <div class="filter-table">
        <div class="filter-container">
          <div class="filter-btn btn" @click="toggleFilter">
            <span>Filter</span>
            <i class="icon-sort"></i>
          </div>
        </div>
        <b-navbar toggleable="lg" type="dark" variant="info" v-if="filterShow">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Sort By:</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="mx-auto">
              <b-form-select class="mr-3" v-model="myclass">
                <b-form-select-option value disabled>-- Class --</b-form-select-option>
                <b-form-select-option value="all">-- All --</b-form-select-option>
                <b-form-select-option
                  :value="item.class_name"
                  v-for="(item,idx) in classess"
                  :key="idx"
                >{{item.class_name}}</b-form-select-option>
              </b-form-select>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-form class="ml-auto">
                <b-form-input size="sm" class="mr-sm-2 search rounded-pill" placeholder="Search"></b-form-input>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
        <div class="table-responsive">
          <div class="form-group">
            <h5 class="toCaps">{{myclass}}</h5>
          </div>
          <table class="table table-bordered">
            <thead class="thead-darkblue">
              <tr>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tab,index) in tables" :key="index">
                <td class="toCaps day">{{tab.day}}</td>
                <td class="d-flex justify-content-between p-0">
                  <table class="w-100">
                    <tr class="w-100">
                      <td class="text-center" v-for="(item,idx) in tab.courses" :key="idx">
                        <div class>{{item.start}} - {{item.end}}</div>
                        <div>{{item.subject}}</div>
                        <div>{{item.tutor}}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-container>
      <div class="schedule-part">
        <div class="schedule-inner">
          <h6>Scheduler</h6>
          <p>keep reminders with your scheduler</p>
          <div class="calendar">
            <vc-calendar></vc-calendar>
          </div>
          <h6>Notifications</h6>
          <div class="notify">
            <div class="notify-i">
              <i class="fa fa-book" aria-hidden="true"></i>
            </div>
            <div class="notify-word">
              <p>
                SS1
                <strong>English Language</strong>
                <em>8:00AM</em>
              </p>
            </div>
          </div>
          <div class="notify">
            <div class="notify-i">
              <i class="fa fa-book" aria-hidden="true"></i>
            </div>
            <div class="notify-word">
              <p>
                JSS2
                <strong>Virtual Class</strong>
                <em>10:00AM</em>
              </p>
            </div>
          </div>
              <div class="notify">
            <div class="notify-i">
              <i class="fa fa-book" aria-hidden="true"></i>
            </div>
            <div class="notify-word">
              <p>
                JSS2
                <strong>Virtual Class</strong>
                <em>10:00AM</em>
              </p>
            </div>
          </div>
              <div class="notify">
            <div class="notify-i">
              <i class="fa fa-book" aria-hidden="true"></i>
            </div>
            <div class="notify-word">
              <p>
                JSS2
                <strong>Virtual Class</strong>
                <em>10:00AM</em>
              </p>
            </div>
          </div>
        </div>
      </div>
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
      myclass: "",
      overlay: false,
      item: false,
      items: [],
       filterShow: false,
    };
  },
  mounted() {
    this.getTable();
  },
  methods: {
    cancel() {
      this.overlay = false;
      this.tables = [];
      this.myclass = "";
    },
    getTables(id) {
      axios
        .get(`/api/tutor-times-table/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tables = JSON.parse(res.data.table);
            this.myclass = res.data.myclass;
            this.overlay = true;
          }
        });
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
            this.table = res.data;
          }
        });
    },
  },
};
</script>
<style scoped>
.timetable-schedule {
  display: flex;
  justify-content: space-between;
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
.noftify-word p{
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

.nav-link {
  color: #000 !important;
}
</style>