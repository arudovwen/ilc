<template>
  <div class="p-3">
    <div class="d-flex mb-5">
      <div class="w-25 mr-3">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Class List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in allClass" :key="idx">
              <td scope="row" @click="selectClass(item)">{{item}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-25">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Student List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in students" :key="idx">
              <td scope="row" @click="selectStudent(item.id,item.name)">{{item.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    <div class="d-flex">
      <div class="w-25 px-3 text-center" v-for="(item,idx) in data" :key="idx">
        <table class="table text-center table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th>{{item.my_class}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in item.students" :key="idx">
              <td scope="row" class>{{item.name}}</td>
            </tr>
          </tbody>
        </table>
        <div class="my-3">
          <button type="button" @click="save">Add</button>
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
      allClass: [],
      data: [
        {
          my_class: "",
          students: []
        }
      ]
    };
  },
  mounted() {
    this.getStudents();
    this.getCLasses();
  },
  methods: {
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
            this.$router.push("/admin/students");
          }
        });
    },
    selectClass(name) {
        this.data.forEach(item=>{
            if (item.my_class == name) {
                this.$toasted.info('Already added')
            }else{
                   this.data[this.data.length -1].my_class = name;
            }
        })
   
    },
    selectStudent(id, name) {
      this.data[this.data.length-1].students.push({
        id: id,
        name: name
      });
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
    getCLasses() {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      axios
        .get("/api/classes", {
          headers: {
            Authorization: `Bearer ${admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            res.data.forEach(item => {
              if (item.sub_class !== "") {
                item.sub_class.split(",").forEach(i => {
                  this.allClass.push(i);
                });
              }
            });
          }
        });
    },
    save() {
      this.data.push({
        my_class: "",
        students: []
      });
    }
  }
};
</script>
<style scoped>
</style>