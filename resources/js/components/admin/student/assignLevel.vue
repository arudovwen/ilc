<template>
  <div class="body">
    <div class="mb-5 d-flex top-side border p-3">
      <div class="w-50">
        <h6 class="mb-3">Choose Class</h6>
        <div class="mr-3 top_box">
          <b-table hover :items="allClass" bordered :fields="field1" head-variant="light">
            <template v-slot:cell(class_list)="data">
              <div @click="selectClass(data.item.class_name)">{{data.item.class_name}}</div>
            </template>
          </b-table>
        </div>
      </div>

      <div class="w-50">
        <h6 class="mb-3">Choose Sub Class</h6>
        <div class="mr-3 top_box">
          <b-table hover :items="sortedClass" bordered :fields="field1" head-variant="light">
            <template v-slot:cell(class_list)="data">
              <div @click="chooseSubClass(data.item)">{{data.item}}</div>
            </template>
          </b-table>
        </div>
      </div>
    </div>

    <div class="border p-3">
      <h6 class="text-center mb-3">
        Student
        <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i> Class
      </h6>
      <div class="d-flex">
        <div class="w-25" v-if="mySubClass !=''">
          <div class="top_box">
            <b-table hover :items="sortedStudents" bordered :fields="field2" head-variant="light">
              <template v-slot:cell(student_list)="data">
                <div @click="selectStudent(data.item.id,data.item.name)">{{data.item.name}}</div>
              </template>
            </b-table>
          </div>
        </div>
        <div v-if="mySubClass !=''" class="text-center w-75">
          <b-container v-for="(item,idx) in data" :key="idx">
            <b-row class="p-2">
              <b-col class="top-head p-3">{{item.my_class.toUpperCase()}}</b-col>
            </b-row>
            <b-row class="p-2">
              <b-col cols="6" class="single-student" v-for="(item,id) in item.students" :key="id">
                {{item.name}}
                <b-icon @click="removeName(idx,id)" class="ml-3" icon="x"></b-icon>
              </b-col>
            </b-row>
          </b-container>

          <b-form-group class="my-3">
            <div class="text-align">
              <b-button type="button" @click="submit">Save</b-button>
            </div>
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
      allClass: [],
      mySubClass: "",
      current: "",
      data: [
        {
          my_class: "",
          students: [],
        },
      ],
      field1: ["class_list"],
      field2: ["student_list"],
      sub_class: [],
    };
  },
  mounted() {
    this.getStudents();
    this.getCLasses();
  },
  computed: {
    sortedClass() {
      var sub = [];
      this.allClass.forEach((item) => {
        if (item.class_name == this.current) {
          if (item.sub_class !== "") {
            item.sub_class.split(",").forEach((i) => {
              sub.push(i);
            });
          }
          return sub;
        }
        return sub;
      });
      return sub;
    },
    sortedStudents() {
      return this.students.filter((item) => {
        if (item.student_level.toLowerCase() == this.current.toLowerCase()) {
          return item;
        }
      });
    },
  },
  methods: {
    removeName(index, id) {
      this.data[index].students.splice(id, 1);
    },
    toggleModal() {
      this.$emit("toggleModal", "student-create");
    },
    submit() {
      if (this.data[0].students.length) {
        let admin = JSON.parse(localStorage.getItem("typeAdmin"));
        let data = {
          data: this.data,
          level: this.current,
          subclass: this.mySubClass,
        };
        axios
          .post("/api/class-student", data, {
            headers: {
              Authorization: `Bearer ${admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 201) {
              this.$toasted.info("Successful");
              this.toggleModal();
              this.data = []
               this.data.push({
                  my_class: "",
                  students: []
                })
              
            }
          });
      } else {
        this.$toasted.error("Fill all fields");
      }
    },
    getSubclass() {
      this.sub_class = [];
      this.allClass.forEach((item) => {
        if (item.class_name == this.current) {
          // if (item.sub_class !== "") {
          item.sub_class.split(",").forEach((i) => {
            this.sub_class.push(i);
          });
          // }
        }
      });
    },
    chooseSubClass(name) {
      let arr = [];
      this.mySubClass = name;
      this.data.forEach((item) => {
        arr.push(item.my_class);
      });
      if (arr.includes(name)) {
        this.$toasted.info("Added already", {
          icon: {
            name: "",
          },
        });
      } else {
        this.data[this.data.length - 1].my_class = name;
      }
    },
    selectClass(name) {
      this.current = name;
    },
    selectStudent(id, name) {
      let arr = [];
      let array = [];

      this.data.forEach((item) => {
        item.students.forEach((i) => {
          array.push(i.id);
        });
      });

      if (array.includes(id)) {
        this.$toasted.info("Added already");
      } else {
        this.data[this.data.length - 1].students.push({
          id: id,
          name: name,
        });
      }
    },
    getStudents() {
      axios
        .get("/api/admin-get-students", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
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
            Authorization: `Bearer ${admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.allClass = res.data;
          }
        });
    },
    save() {
      this.data.push({
        my_class: "",
        students: [],
      });
    },
    remove() {
      this.data.pop();
    },
  },
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
  max-height: 300px;
  overflow: auto;
}
.left-side {
  width: 40%;
  padding: 15px;
}
.right-side {
  width: 60%;
  padding: 15px;
}
.table .thead-light th {
  color: white;
  background-color: rgba(19, 166, 153, 0.9);
  border-color: rgba(19, 166, 153, 0.9);
}
.single-student {
  border: 1px solid #ccc;
  color: rgb(0, 0, 0, 0.74);
  padding: 11px;
}
.top-head {
  color: white;
  background-color: rgba(19, 166, 153, 0.9);
  border-color: rgba(19, 166, 153, 0.9);
}
</style>