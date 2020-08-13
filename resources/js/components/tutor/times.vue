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
    <b-container>
      <b-row>
        <b-col md="8">
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
        </b-col>
        <b-col md="4">
        <div class="schedule-part">
           <vc-calendar></vc-calendar>
        </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'
export default {
  components: {
    Calendar
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
.container{
  width: 100%;
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
.schedule-part{
  background: #fff;
}
</style>