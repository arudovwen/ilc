<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/admin/student/create">
        <b-button block class="shadow-sm">Add Student</b-button>
      </router-link>

      <router-link to="/admin/student/assign">
        <b-button block class="shadow-sm">
          Students
          <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
 Subjects
        </b-button>
      </router-link>
      <router-link to="/admin/student/assign/class">
        <b-button block class="shadow-sm">
          Students
          <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
 Class
        </b-button>
      </router-link>
      <b-button block class="shadow-sm" @click="multiDrop">
       Multi-Drop
      </b-button>
    </nav>

    <div class="classes my-5">
      <h4 class="mb-3">Class List</h4>

      <div class="class_list">
        <b-button class=" shadow-sm" @click="selectClass('')">All</b-button>
        <b-button
          class=" shadow-sm"
          @click="selectClass(item.class_name)"
          v-for="(item,idx) in allClass"
          :key="idx"
        >{{item.class_name.toLowerCase()}}</b-button>
      </div>
    </div>
    <div>
      <h4 class="toCaps mb-4">Showing : {{current== ''? 'All': current.toLowerCase()}}</h4>

      <b-table :items="sortedStudents" :fields="fields" hover bordered responsive>
       <template v-slot:table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(actions)="data">
        <span @click="view(item.id)" class="mr-3">
          <i class="fas fa-eye"></i>View
        </span>
        <span class="mr-3" @click="drop(data.item.id)">
          <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
        </span>
        <span @click="edit(data.item.id)">
          <i class="fas fa-edit"></i>Update
        </span>
      </template>
         <template v-slot:cell(drop)="data">
        <b-form-checkbox :value="data.item.id" v-model="items"></b-form-checkbox>
      </template>
      </b-table>

    </div>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      busy:true,
      students: [],
      items: [],
      item: false,
      allClass: [],
      current: "",
       fields: [
        "student_id",
        { key: "name", sortable: true },
        "email",
        { key: "gender", sortable: true },
         { key: "student_level", sortable: true },
        "phone",
        "actions",
        "drop"
      ]
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getStudents();
    this.getCLasses();
  },
  computed: {
    sortedStudents() {
      return this.students.filter(item => {
        if (
          item.student_level.toLowerCase().trim() ==
          this.current.toLowerCase().trim()
        ) {
          return item;
        }
        if (this.current == "") {
          return item;
        }
      });
    }
  },
  methods: {
    selectClass(value) {
      this.current = value;
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
            this.allClass = res.data;
            // res.data.forEach(item => {

            //   if (item.sub_class !== "") {
            //     item.sub_class.split(",").forEach(i => {
            //       this.allClass.push(i);
            //     });
            //   }else{
            //      this.allClass.push(item.class_name);
            //   }
            // });
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
            this.busy = false
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/student/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getTutors();
            }
          });
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
      let data = {
        data: this.items
      };
      if (del) {
        axios
          .post("/api/multi-student-drop", data, {
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
      this.$router.push(`/admin/student/update/${id}`);
    },
    view(id) {
      this.$router.push(`/admin/student/view/${id}`);
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
.hiden {
  opacity: 0;
}

.body {
  padding: 20px 20px 50px;
  height: 100%;
}
.class_list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
}
.single-class {
  padding: 15px;
  background: #f7f8fa;
  text-transform: capitalize;
  text-align: center;
}
</style>