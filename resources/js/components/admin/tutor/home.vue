<template>
  <div class="view">
    <b-modal id="tutor-create" scrollable title="Create Tutor" hide-footer>
      <div>
        <Add @toggleModal="toggleModal" />
      </div>
    </b-modal>
    <b-modal id="tutor-edit" scrollable title="Update Tutor" size="lg" hide-footer>
      <div>
        <Edit @toggleModal="toggleModal" :id="id" :admin="admin" />
      </div>
    </b-modal>
    <b-modal id="tutor-assign" scrollable title="Assign Class" size="lg" hide-footer>
      <div>
        <Assign @toggleModal="toggleModal" :admin="admin" />
      </div>
    </b-modal>
    <b-modal id="assign-head" scrollable title="Assign Head " size="lg" hide-footer>
      <div>
        <AssignHead @toggleModal="toggleModal" :admin="admin" />
      </div>
    </b-modal>
    <b-modal id="tutor-view" scrollable size="lg" hide-footer>
      <div>
        <ViewTutor @toggleModal="toggleModal" :admin="admin" :id="id" />
      </div>
    </b-modal>
    <div class="left-side">
      <h4 class="mb-3">Tutors</h4>
      <b-table bordered hover  :busy="busy" :items="tutors" :fields="fields">
        <template v-slot:cell(sn)="data">{{data.index+1}}</template>
        <template v-slot:cell(drop)="data">
          <b-form-checkbox :value="data.item.id" v-model="items"></b-form-checkbox>
        </template>
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
      </b-table>
    </div>
    <nav class="mb-5">
      <b-button block class="shadow-sm reg-btn text-center mb-3" v-b-modal.tutor-create>Create Tutor</b-button>

      <b-button block class="shadow-sm reg-btn text-center mb-3" v-b-modal.tutor-assign>
        Tutor
        <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
        Courses
      </b-button>

      <b-button block class="shadow-sm reg-btn text-center mb-3" v-b-modal.assign-head>
        Tutor
        <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
        Head Tutor
      </b-button>

      <b-button block class="shadow-sm reg-btn text-center" @click="multiDrop">Multi-Drop</b-button>
    </nav>
  </div>
</template>


<script>
import Add from "./create";
import Edit from "./update";
import Assign from "./assign";
import AssignHead from "./assignHead";
import ViewTutor from "./view";
export default {
  props: ["admin"],
  data() {
    return {
      id: null,
      tutors: [],
      busy: true,
      items: [],
      item: false,
      fields: [
        "Sn",
        { key: "name", sortable: true },
        "email",
        { key: "gender", sortable: true },
        "phone",
        "action",
        "drop",
      ],
    };
  },
  watch: {
    item: "selectAll",
  },
  components: {
    Add,
    Edit,
    Assign,
    AssignHead,
    ViewTutor,
  },
  mounted() {
    this.getAdmins();
  },
  methods: {
    toggleModal(id) {
      this.$bvModal.hide(id);
      this.getAdmins();
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.tutors.forEach((it) => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    getAdmins() {
      axios
        .get("/api/tutor", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tutors = res.data;
            this.busy = false;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/tutor/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getAdmins();
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
          .post("/api/multi-tutor-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getAdmins();
            }
          })
          .catch((err) => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.id = id;
      this.$bvModal.show("tutor-edit");
    },
    view(id) {
      this.id = id;
      this.$bvModal.show("tutor-view");
    },
  },
};
</script>

<style scoped>
.view {
  display: flex;
}
nav {
  width: 20%;
  background: white;
  padding: 30px 20px;
}
.hiden {
  opacity: 0;
}
.left-side {
  width: 80%;
  padding: 30px 20px;
}
</style>