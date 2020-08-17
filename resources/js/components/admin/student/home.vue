<template>
  <div>
    <b-modal id="student-create" scrollable hide-footer>
      <div>
        <Add @toggleModal="toggleModal" />
      </div>
    </b-modal>
    <b-modal id="student-edit" scrollable title="Update Student" size="lg" hide-footer>
      <div>
        <Edit @toggleModal="toggleModal" :id="id" :admin="admin" />
      </div>
    </b-modal>
    <b-modal id="student-assign" scrollable title="Assign Class" size="lg" hide-footer>
      <div>
        <Assign @toggleModal="toggleModal" :admin="admin" />
      </div>
    </b-modal>
    <b-modal id="assign-class" scrollable title="Assign Class " size="lg" hide-footer>
      <div>
        <AssignLevel @toggleModal="toggleModal" :admin="admin" />
      </div>
    </b-modal>
    <b-modal id="student-view" scrollable size="lg" hide-footer>
      <div>
        <ViewStudent @toggleModal="toggleModal" :admin="admin" :id="id" />
      </div>
    </b-modal>
    <div class="view">
      <div class="left-side">
        <b-row>
          <b-col>
            <h4 class="toCaps mb-4">Showing : {{current== ''? 'All': current.toLowerCase()}}</h4>
          </b-col>
          <b-col>
            <b-form-select v-model="current">
              <b-form-select-option value disabled>Select Level</b-form-select-option>
              <b-form-select-option value>All</b-form-select-option>
              <b-form-select-option
                :value="item.class_name"
                v-for="(item,idx) in allClass"
                :key="idx"
              >{{item.class_name}}</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>

        <b-table :items="sortedStudents" :fields="fields" hover bordered responsive>
          <template v-slot:table-busy>
            <div class="text-center my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
          <template v-slot:cell(action)="data">
            <div class="options">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <div class="option shadow">
                <ul>
                  <li>
                    <span @click="view(data.item.id)" class="mr-3">
                      <i class="fas fa-eye"></i>View
                    </span>
                  </li>
                  <li>
                    <span @click="edit(data.item.id)">
                      <i class="fas fa-edit"></i>Edit
                    </span>
                  </li>
                  <li>
                    <span class="mr-3" @click="drop(data.item.id)">
                      <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <template v-slot:cell(drop)="data">
            <b-form-checkbox :value="data.item.id" v-model="items"></b-form-checkbox>
          </template>
        </b-table>
      </div>
      <div class="nav">
        <nav class="mb-5">
          <b-button block class="shadow-sm reg-btn" v-b-modal.student-create>Add Student</b-button>

          <b-button block class="shadow-sm reg-btn" v-b-modal.student-assign>
            Students
            <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
            Subjects
          </b-button>

          <b-button block class="shadow-sm reg-btn" v-b-modal.assign-class>
            Students
            <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
            Class
          </b-button>

          <b-button block class="shadow-sm reg-btn" @click="multiDrop">Multi-Drop</b-button>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
import Add from "./create";
import Edit from "./update";
import Assign from "./assign";
import AssignLevel from "./assignLevel";
import ViewStudent from "./view";
export default {
  props: ["admin"],
  data() {
    return {
      id: null,
      busy: true,
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
        "action",
        "drop",
      ],
    };
  },
  components: {
    Add,
    Edit,
    Assign,
    AssignLevel,
    ViewStudent,
  },
  watch: {
    item: "selectAll",
  },
  mounted() {
    this.getStudents();
    this.getCLasses();
  },
  computed: {
    sortedStudents() {
      return this.students.filter((item) => {
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
    },
  },
  methods: {
    toggleModal(id) {
      this.$bvModal.hide(id);
      this.getStudents();
    },
    selectClass(value) {
      this.current = value;
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
        this.students.forEach((it) => {
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
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.students = res.data;
            this.busy = false;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/student/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getStudents();
            }
          });
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
      let data = {
        data: this.items,
      };
      if (del) {
        axios
          .post("/api/multi-student-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getStudents();
            }
          })
          .catch((err) => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.id = id;
      this.$bvModal.show("student-edit");
    },
    view(id) {
      this.id = id;
      this.$bvModal.show("student-view");
    },
  },
};
</script>

<style scoped>
.view {
  display: flex;
}
.nav {
  width: 20%;
  padding: 30px 15px;
}
.left-side {
  width: 80%;
  padding: 30px 15px;
}
.hiden {
  opacity: 0;
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