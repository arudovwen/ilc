<template>
  <div>
    <b-container fluid>
      <b-row class=" p-3">
        <b-col cols="3" class="p-2" v-for="(val,id) in todaysClass" :key="id">
          <b-card title="Class Detail"   class="mb-2">
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
        tutor_id: 2,
        tutor:val.tutor,
        date: new Date().toDateString(),
        day: new Date()
          .toLocaleString("default", { weekday: "long" })
          .toLowerCase(),
        record: [
          {
            tutor: false,
            student: true,
            subject: val.subject,
            level: val.level,
            time: new Date().toLocaleTimeString(),
          },
        ],
        level: val.level,
        time: new Date().toLocaleTimeString(),
      };
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
  },
};
</script>

<style scoped>
.container-fluid {
  margin-top: 30px;
  padding-left: 20px;
  padding-right:20px;
}
p.card-text{
    font-size: 15px;
}

</style>