<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/admin/student/create">
        <div class="nav_box shadow-sm">
          <p class="mx-auto">Create Student</p>
          <hr />
        </div>
      </router-link>
      <div class="nav_box shadow-sm">
        <p class="mx-auto" @click="multiDrop">Multi-Drop</p>
        <hr />
      </div>
      <router-link to="/admin/student/assign">
        <div class="nav_box shadow-sm">
          <p class="mx-auto">Assign Course</p>
          <hr />
        </div>
      </router-link>
      <router-link to="/admin/add">
        <div class="nav_box shadow-sm">
          <p class="mx-auto">Assign Level</p>
          <hr />
        </div>
      </router-link>
    </nav>

 <div class="classes my-5">
<h4>Class List</h4>

<div class="class_list">
  <div class="single-class shadow-sm" @click="selectClass('')">
   All

  </div>
  <div class="single-class shadow-sm" @click="selectClass(item)" v-for="(item,idx) in allClass" :key ="idx">
    {{item.toLowerCase()}}

  </div>
</div>

 </div>
   <div>
     <h4 class="toCaps">Showing : {{current== ''? 'All': current.toLowerCase()}}</h4>
      <table class="table table-striped table-inverse table-bordered">
      <thead class="thead-inverse">
        <tr>
          <th>Student Id</th>
          <th>Name</th>
          <th>Email</th>
           <th>Level</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Action</th>
          <th>
            <input type="checkbox" v-model="item" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in sortedStudents" :key="idx">
          <td>{{item.student_id}}</td>
          <td scope="row" class="toCaps">{{item.name}}</td>
          <td>{{item.email}}</td>
           <td>{{item.student_level}}</td>
          <td class="toCaps">{{item.gender}}</td>
          <td>{{item.phone}}</td>
          <td class="d-flex justify-content-around">
             <span class="mr-3" @click="view(item.id)">
              
              <i class="fa fa-eye" aria-hidden="true"></i> View
            </span>
            <span class="mr-3" @click="drop(item.id)">
              
              <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
            </span>
            <span @click="edit(item.id)">
              <i class="fas fa-edit"></i>Update
            </span>
          </td>
          <td>
            <input type="checkbox" :value="item.id" v-model="items" />
          </td>
        </tr>
      </tbody>
    </table>
   </div>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      students: [],
      items: [],
      item: false,
        allClass: [],
        current:''
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getStudents();
    this.getCLasses()
  },
  computed: {
    sortedStudents(){
      return this.students.filter(item=>{
        if (item.student_level.toLowerCase().trim() == this.current.toLowerCase().trim()) {
          return item
        }
         if (this.current == '') {
          return item
        }
       
      })
    }
  },
  methods: {
    selectClass(value){
      this.current = value
    },
      getCLasses() {
         let admin = JSON.parse(localStorage.getItem('typeAdmin'))
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
              }else{
                 this.allClass.push(item.class_name);
              }
            });
          }
        });
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.students.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
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
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
       
          axios.delete(`/api/student/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        }).then(res => {
            if (res.status == 200) {
              this.getTutors();
            }
          });
        
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
            let data = {
        data:this.items
        }
      if (del) {
        axios
          .post("/api/multi-student-drop", data , {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
          .then(res => {
            if (res.status == 200) {
              this.getStudents();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
        this.$router.push(`/admin/student/edit/${id}`)
    },
     view(id) {
        this.$router.push(`/admin/student/view/${id}`)
    }
  }
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;

}
.hiden{
    opacity: 0;
}
.nav_box {
  background-color: #f7f8fa;
  display: flex;
  text-align: center;
  padding: 10px 15px;
}
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
.class_list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 15px;
  grid-column-gap: 15px;
}
.single-class{
  padding: 15px;
  background: #f7f8fa;
  text-transform: capitalize;
  text-align: center;
}
</style>