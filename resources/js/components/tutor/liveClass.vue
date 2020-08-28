<template>
  <div>
    <b-container fluid>
      <b-form-select v-model="select" class="lev">
        <b-form-select-option v-for="(val,id) in classes" :key="id" :value="val">{{val}}</b-form-select-option>
      </b-form-select>

      <div class="d-flex justify-content-around my-2">
        <span>
          <b-icon icon="circle-fill" class="upcoming-i"></b-icon>Upcoming
        </span>
        <span>
          <b-icon icon="circle-fill" class="ongoing-i"></b-icon>Ongoing
        </span>
        <span>
          <b-icon icon="circle-fill" class="finished-i"></b-icon>Finished
        </span>
      </div>
      <b-row class="p-3">
        <b-col cols="3" class="p-2" v-for="(val,id) in sorted" :key="id">
          <b-card
            title="Class Detail"
            :class="{'ongoing':( getSeconds(today) > getSeconds(val.start_time) && 
          getSeconds(today)< getSeconds(val.end_time)), 
          'finished':( getSeconds(today) > getSeconds(val.start_time) && 
          getSeconds(today)> getSeconds(val.end_time)),
          'upcoming':( getSeconds(today) < getSeconds(val.start_time) )
          }"
            class="mb-2"
          >
            <b-card-text>Subject : {{val.subject}}</b-card-text>
            <b-card-text>Tutor : {{val.tutor}}</b-card-text>
            <b-card-text>Level : {{val.level}}</b-card-text>
            <b-card-text>Start time : {{val.start_time | format }}</b-card-text>
            <b-card-text>End time :{{val.end_time | format }}</b-card-text>
            <b-card-text>
              Class Link :
              <router-link to>{{val.link}}</router-link>
            </b-card-text>
            <b-card-text>Password: {{val.password}}</b-card-text>

            <b-button variant="success" @click="enterClass(val)">Enter Classroom</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      todaysClass: [],
      select: "",
      classes: [],
      today:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };
  },
  mounted() {
    this.getLive();
    this.getClasses();
  },
  computed: {
    sorted() {
      return this.todaysClass.filter((item) =>
        item.level.toLowerCase().includes(this.select.toLowerCase().trim())
      );
    },
  },
  methods: {
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
              if (item.sub_class !== "") {
                item.sub_class.split(",").forEach((i) => {
                  this.classes.push(i);
                });
              }
            });
            this.select = this.classes[0];
          }
        });
    },
    enterClass(val) {
      let data = {
        date: new Date().toDateString(),
        day: new Date()
          .toLocaleString("default", { weekday: "long" })
          .toLowerCase(),
        record: [
          {
            tutor: "pending",
            student: false,
            subject: val.subject,
            level: val.level,
            time: new Date().toLocaleTimeString(),
          },
        ],
        level: val.level,
        time: new Date().toLocaleTimeString(),
      };
if(this.getSeconds(this.today) > this.getSeconds(val.start_time) && this.getSeconds(this.today) > this.getSeconds(val.end_time)){
       this.$toasted.info('This Class has ended')
     }else{
      axios
        .post(`/api/create-attendance`, data, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 201) {
          }
        });
     }
    },
    getSeconds(hms) {
      var a = hms.split(":"); // split it at the colons

      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
      return seconds;
    },
    getLive() {
      axios
        .get(`/api/tutor-live`, {
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
  },
};
</script>

<style scoped>
.container-fluid {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
p.card-text {
  font-size: 15px;
}
.lev {
  width: 150px;
  margin-left: auto;
}
h4.card-title {
  font-size: 17px;
}
.ongoing {
  border-color: #008e3a;
}
.upcoming {
  border-color: #ffc200;
}
.finished {
  border-color: red;
}
.ongoing-i {
  color: #008e3a;
}
.upcoming-i {
  color: #ffc200;
}
.finished-i {
  color: red;
}
</style>