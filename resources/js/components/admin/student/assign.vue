<template>
  <div class="body">
    <div class="d-flex">
      <div class="w-25 mr-3">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Student List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in students" :key="idx">
              <td scope="row" @click="selectstudent(item.id,item.name)">{{item.name}}</td>
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
        <table class="table text-center table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th class="text-center">{{data.student.name}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in data.choosen_course" :key="idx">
              <td scope="row" class="text-center">{{item.name}}</td>
            </tr>
          </tbody>
        </table>
        <div class="my-3">
          <b-form-group>
            <b-button
              v-if="data.student.name !== ''"
              v-waves.float
              v-waves.light
              @click="submit"
            >Register</b-button>
          </b-form-group>
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
      students: [],
      subjects: [],
      data: {
        student: {
          id: "",
          name: ""
        },
        choosen_course: []
      }
    };
  },
  mounted() {
    this.getStudents();
    this.getSubjects();
  },
  methods: {
     toggleModal(){
   this.$emit('toggleModal','student-create')
    },
    submit() {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      axios
        .post("/api/students-course", this.data, {
          headers: {
            Authorization: `Bearer ${admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 201) {
            this.$toasted.info("Successful");
            this.toggleModal()
          }
          if (res.status == 200) {
            this.$toasted.info("Saved Successful");
            this.$router.push("/admin/students");
          }
        });
    },
    selectSubject(id, name) {
      if (this.data.student.name !== "") {
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
        this.$toasted.info("Select student");
      }
    },
    selectstudent(id, name) {
      this.data.student.name = name;
      this.data.student.id = id;
    },
    getStudents() {
      axios
        .get("/api/admin-get-students", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.students = res.data;
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