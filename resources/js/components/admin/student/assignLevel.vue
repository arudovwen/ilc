<template>

  <div class="body p-3">
    <div class="d-flex justify-content-around mb-5">
      <div class="w-25">
        <h5>Select Class</h5>
        <div class="mr-3 top_box">
          <table class="table table-bordered table-hover">
            <thead class="thead-light">
              <tr>
                <th>Class List</th>
              </tr>
            </thead>
            <tbody class="t-body">
              <tr v-for="(item,idx) in allClass" :key="idx">
                <td
                  :class="{selected:item == current}"
                  scope="row"
                  @click="selectClass(item)"
                >{{item}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="w-25">
        <h5>Add Students</h5>
        <div class="top_box">
          <table class="table table-bordered table-hover table-res">
            <thead class="thead-light">
              <tr>
                <th>Student List</th>
              </tr>
            </thead>
            <tbody class="t-body">
              <tr v-for="(item,idx) in students" :key="idx">
                <td scope="row" @click="selectStudent(item.id,item.name)">{{item.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   
   <div  v-if="current !=''">
        <div class=" d-flex my-3 px-3">
          <button type="button" class="mr-3" @click="save">Add</button>
          <button type="button" @click="remove" v-if="data.length > 1">Remove</button>
        </div>
        <div class="bottom_box">
        
      <div class="px-3 text-center" v-for="(item,idx) in data" :key="idx">
        <table class="table text-center table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th>{{item.my_class}}</th>
            </tr>
          </thead>
          <tbody class="t-body">
            <tr v-for="(item,idx) in item.students" :key="idx">
              <td scope="row" class>{{item.name}}</td>
            </tr>
          </tbody>
        </table>
       
      </div>
    </div>

      <button type="button" class="my-3" @click="submit">Save all</button>
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
      current: "",
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
      let data = {
        data: this.data
      };
      axios
        .post("/api/class-student", data, {
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
      this.current = name;
      let arr = [];

      this.data.forEach(item => {
        arr.push(item.my_class);
      });
      if (arr.includes(name)) {
        this.$toasted.info("added already");
      } else {
        this.data[this.data.length - 1].my_class = name;
      }
    },
    selectStudent(id, name) {
      let arr = [];
      let array = [];

     
      this.data.forEach(item => {
        item.students.forEach(i => {
          array.push(i.id);
        });
      });

      if (array.includes(id)) {
        this.$toasted.info("added already");
      } else {
        this.data[this.data.length - 1].students.push({
          id: id,
          name: name
        });
      }
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
    },
    remove() {
      this.data.pop();
    }
  }
};
</script>
<style scoped>
.body {
  min-height: 100%;
  padding: 40px 20px 70px;
}
.bottom_box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
}
.t-body {
  max-height: 400px;
  overflow: scroll;
}
.selected {
  background: slategrey;
}
.top_box {
  display: block;
  position: relative;
  height: 300px;
  overflow: auto;
}
</style>