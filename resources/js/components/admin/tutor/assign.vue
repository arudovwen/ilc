<template>
  <div class="p-3">
    <div class="d-flex">
      <div class="w-25 mr-3">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Tutor List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in tutors" :key="idx">
              <td scope="row" @click="selectTutor(item.id,item.name)">{{item.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-25">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Subject List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in subjects" :key="idx">
              <td scope="row" @click="selectSubject(item.id,item.name)">{{item.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-50 px-3 text-center">
        <table class="table text-center table-bordered table-hover" v-if="data.tutor.name !== '' ">
          <thead class="thead-dark">
            <tr>
              <th class="text-center">{{data.tutor.name}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in data.choosen_course" :key="idx">
              <td scope="row" class="text-center">{{item.name}}</td>
            </tr>
          </tbody>
        </table>
        <div class="form-control" v-else>No Tutor Selected</div>
        <div class="my-3" v-if="data.choosen_course.length">
          <button type="button" @click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["admin"],
  data() {
    return {
      tutors: [],
      subjects: [],
      data: {
        tutor: {
          id: "",
          name: ""
        },
        choosen_course: []
      }
    };
  },
  mounted() {
    this.getTutors();
    this.getSubjects();
  },
  methods: {
    submit() {
        let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios.post("/api/tutor-course", this.data,{headers:{
          Authorization: `Bearer ${admin.access_token}`
      }}).then(res => {
        if (res.status == 201) {
          this.$toasted.info("Successful");
        //   this.$router.push("/admin/tutors");
        }else if(res.status == 200){
              this.$toasted.info("Updated")
        }
      });
    },
    selectSubject(id, name) {
      if (this.data.tutor.name !== "") {
        let data = {
          id: id,
          name: name
        };
        let arr = [];
        this.data.choosen_course.forEach(item => {
          arr.push(item.id);
        });
        let presence = arr.includes(id);

        if (!presence) {
          this.data.choosen_course.push(data);
        } else {
          this.$toasted.info("Already added");
        }
      } else {
        this.$toasted.info("Select Tutor");
      }
    },
    selectTutor(id, name) {
      this.data.tutor.name = name;
      this.data.tutor.id = id;
    },
    getTutors() {
      axios
        .get("/api/tutor", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.tutors = res.data;
          }
        });
    },
    getSubjects() {
      axios
        .get("/api/subject", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    }
  }
};
</script>
<style scoped>
</style>