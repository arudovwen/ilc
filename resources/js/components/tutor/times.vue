<template>
  <div class="time-table">
    <div class="timetable-schedule">
     
      <b-container>
         <h5 class="mt-5">School Times-Table</h5>
        <div class="filter-table">
        
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <div class="mr-3 sort">Sort By:</div>
                <b-form-select v-model="my_class">
                  <b-form-select-option value disabled>-- Class --</b-form-select-option>

                  <b-form-select-option
                    :value="item.myclass"
                    v-for="(item,idx) in myclass"
                    :key="idx"
                  >{{item.myclass}}</b-form-select-option>
                </b-form-select>
              </b-navbar-nav>

              <!-- Right aligned nav items -->

              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2 search rounded-pill" placeholder="Search"></b-form-input>
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
        <div class="bd-table">
          <div class="table-responsive">
            <div class="form-group">
              <h5 class="toCaps">{{my_class}}</h5>
            </div>
            <table class="table table-bordered" v-if="sortedTable.length">
              <thead class="thead-light">
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(tab,index) in JSON.parse(sortedTable[0].table)" :key="index">
                  <td class="toCaps day">{{tab.day}}</td>
                  <td class="d-flex justify-content-between p-0">
                    <table class="w-100">
                      <tr class="w-100">
                        <td class="text-center" v-for="(item,idx) in tab.courses" :key="idx">
                          <div class>{{item.start | format}} - {{item.end | format}}</div>
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
      </b-container>
  
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
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
</style>