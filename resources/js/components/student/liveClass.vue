<template>
  <div>
    <b-container fluid>
      <h4 class="mb-3">Todays Class</h4>
      <div class="d-flex justify-content-around mb-2">
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
        <b-col cols="3" class="p-2" v-for="(val,id) in todaysClass" :key="id">
          <b-card
            title="Class Detail"
            class="mb-2"
            :class="{'ongoing':( getSeconds(today) > getSeconds(val.start_time) && 
          getSeconds(today)< getSeconds(val.end_time)), 
          'finished':( getSeconds(today) > getSeconds(val.start_time) && 
          getSeconds(today)> getSeconds(val.end_time)),
          'upcoming':( getSeconds(today) < getSeconds(val.start_time) )
          }"
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
  props: ["student"],
  data() {
    return {
      subject: "Mathematics",
      level: "Jss 1a",
      tutor: "Kerry",
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
    this.getLive();
  },
  methods: {
    enterClass(val) {
      let data = {
        school_id: this.$props.student.school_id,
        user_id: this.$props.student.id,
        tutor: 2,
        subject: val.subject,
        day: new Date().toDateString(),
        record: "pending",
        level: val.level,
        time: new Date().toLocaleTimeString(),
      };
      // if (
      //   this.getSeconds(this.today) > this.getSeconds(val.start_time) &&
      //   this.getSeconds(this.today) > this.getSeconds(val.end_time)
      // ) {
      //   this.$toasted.info("This Class has ended");
      // } else {
        axios
          .post(`/api/attendance`, data, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 201) {
            }
          });
      // }
    },
    getLive() {
      axios
        .get(`/api/student-live`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.todaysClass = res.data;
          }
        });
    },
    getSeconds(hms) {
      var a = hms.split(":"); // split it at the colons

      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
      return seconds;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  margin-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
p.card-text {
  font-size: 15px;
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