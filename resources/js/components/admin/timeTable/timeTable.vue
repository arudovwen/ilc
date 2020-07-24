<template>
  <div class="body">
    <h4 class="mb-4">Times Table</h4>
    <div class="mb-3">
      <label for>Choose Class</label>
      <br />
      <select class="custom-select w-25" v-model="myclass">
        <option value disabled>Select class</option>
        <option
          v-for="(item,idx) in classes"
          :key="idx"
          :value="item"
          class="toCaps"
        >{{item.toLowerCase()}}</option>
      </select>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tab,index) in table" :key="index">
            <td class="toCaps day">
              <select class="form-control" v-model="tab.day">
                <option v-for="(item,idx) in days" :key="idx" :value="item" class="toCaps">{{item}}</option>
              </select>
              <div class="d-flex justify-content-between mt-3">
                <b-button @click="addDay">Add</b-button>
                <b-button @click="removeDay">Remove</b-button>
              </div>
            </td>
            <td class="d-flex">
              <div
                class="form-group mr-3"
                style="width:350px"
                v-for="(item,idx) in tab.courses"
                :key="idx"
              >
                <span class="d-flex">
                  <div class="w-50">
                    <label for>Start</label>

                    <b-form-timepicker size="sm" v-model="item.start" locale="en"></b-form-timepicker>
                  </div>
                  <div class="w-50">
                    <label for>End</label>

                    <b-form-timepicker size="sm" v-model="item.end" locale="en"></b-form-timepicker>
                  </div>
                </span>

                <select class="form-control" v-model="item.subject">
                  <option value disabled>Select Subject</option>
                  <option
                    v-for="(item,idx) in subjects"
                    :key="idx"
                    :value="item.name"
                    class="toCaps"
                  >{{item.name}}</option>
                </select>
                <select class="form-control" v-model="item.tutor">
                  <option value disabled>Select Tutor</option>
                  <option
                    v-for="(item,idx) in tutors"
                    :key="idx"
                    :value="item.name"
                    class="toCaps"
                  >{{item.name}}</option>
                </select>
              </div>
              <div class style="width:160px">
                <b-button class="mr-2" @click="addCourse(index)">Add</b-button>
                <b-button @click="removeCourse(index)">Remove</b-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <b-button class="my-4" @click="createTimeTable">Create</b-button>
    </div>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      tutors: [],
      days: [
        "monday",
        "tuesday",
        "wednessday",
        "thursday",
        "friday",
        "saturday"
      ],
      subjects: [],
      classes: [],
      myclass: "",
      table: [
        {
          day: "monday",
          courses: [
            {
              start: "",
              end: "",
              subject: "",
              tutor: ""
            }
          ]
        }
      ],

      items: [],
      item: false
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getSubjects();
    this.getclasses();
    this.getAdmins();
  },
  methods: {
    createTimeTable() {
      let data = {
        myclass: this.myclass,
        table: this.table
      };
      axios
        .post("/api/times-table", data, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 201) {
            this.$toasted.info(" Created");
            this.table = [
              {
                day: "monday",
                courses: [
                  {
                    start: "",
                    end: "",
                    subject: "",
                    tutor: ""
                  }
                ]
              }
            ];
          } else {
            this.$toasted.info("Already created");
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
    },
    getclasses() {
      axios
        .get("/api/classes", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            res.data.forEach(item => {
              if (item.sub_class !== "") {
                item.sub_class.split(",").forEach(i => {
                  this.classes.push(i);
                });
              } else {
                this.classes.push(item.class_name);
              }
            });
          }
        });
    },
    addDay() {
      this.table.push({
        day: "",
        courses: [
          {
            start: "",
            end: "",
            subject: ""
          }
        ]
      });
    },
    getAdmins() {
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
    removeDay() {
      this.table.pop();
    },
    addCourse(id) {
      this.table[id].courses.push({
        start: "",
        end: "",
        subject: ""
      });
    },
    removeCourse(id) {
      this.table[id].courses.pop();
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.subjects.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },

    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/times-table/${id}`, {
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
      if (del) {
        axios
          .post("/api/multi-subjects-drop", this.items, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getsubjects();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.$router.push(`/admin/subject/edit/${id}`);
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
.nav_box {
  background-color: #f7f8fa;
  display: flex;
  text-align: center;
  padding: 10px 15px;
}
.add {
  background-color: #f7f8fa;
}

table {
  font-size: 14px;
}
.day .form-control {
  width: 150px;
}
</style>