<template>
  <div class="body ">
    <div class="d-flex justify-content-around mb-5">
      <div class="w-25">
        <h5 class="mb-3">Select Class</h5>
        <div class="mr-3 top_box">
          <b-table hover :items="allClass" bordered :fields="field1">
            <template v-slot:cell(class_list)="data">
             
                <span  @click="selectClass(data.item)">{{data.item}}</span>
              
            </template>
          </b-table>
       
        </div>
      </div>

      <div class="w-25">
        <h5 class="mb-3">Add Students</h5>
        <div class="top_box">
           <b-table hover :items="students" bordered :fields="field2">
            <template v-slot:cell(student_list)="data">
             
                <span  @click="selectStudent(data.item.id,data.item.name)">{{data.item.name}}</span>
              
            </template>
          </b-table>
        
        </div>
      </div>
    </div>
   
   <div  v-if="current !=''">
        <div class=" d-flex my-3 px-3">
          <b-button variant="secondary" type="button" class="mr-3" @click="save">Add</b-button>
          <b-button variant="outline-secondary" type="button" @click="remove" v-if="data.length > 1">Remove</b-button>
        </div>
        <div class="bottom_box">
        
      <div class="px-3 text-center" v-for="(item,idx) in data" :key="idx">
        <table class="table text-center table-bordered table-hover">
          <thead class="thead-light">
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

      <b-form-group>
        <b-button type="button" class="my-3" @click="submit">Save all</b-button>
      </b-form-group>
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
      ],
      field1:['class_list'],
      field2:['student_list']
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
        this.$toasted.info("Added already",{
          icon:{
            name:''
          }
        });
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
        this.$toasted.info("Added already");
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