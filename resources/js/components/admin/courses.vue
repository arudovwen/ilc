<template>
  <div class="body">
    <b-modal id="classes" scrollable hide-footer>
      <div class="add border p-2">
        <form @submit.prevent="addSubjects">
          <h5 class="text-center">Add Subject</h5>

          <div class="form-group">
            <label for>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="subject.name"
              aria-describedby="helpId"
              placeholder="Mathematics"
            />
          </div>
          <div class="form-group">
            <label for>Code</label>
            <input
              type="text"
              class="form-control"
              v-model="subject.code"
              aria-describedby="helpId"
              placeholder="MTH"
            />
          </div>

          <b-form-group>
            <b-button v-if="!update" type="submit" class="btn btn-primary btn-block">Create</b-button>
            <div v-else class=" w-100">
            <b-form-row>
              <b-col>
                  <b-button type="button" block @click="updateN">Update</b-button>
            
              </b-col>
              <b-col>
                  <b-button type="button" block variant="outline-secondary" @click="cancel">Cancel</b-button>
              </b-col>
            </b-form-row>
            </div>
          </b-form-group>

          
        </form>
      </div>
    </b-modal>
    <nav class="mb-5">
      <b-button class="shadow-sm" @click="multiDrop">Multi-Drop</b-button>
    
        <b-button class="shadow-sm" v-b-modal.classes>Add Subject</b-button>
    

      <div class="shadow-sm hiden">
        <b-button class="mx-auto">Assign Course</b-button>
      </div>

      <div class="shadow-sm hiden">
        <p class="mx-auto">Assign Level</p>
      </div>
    </nav>

    <h3 class="mb-4">All Subjects</h3>
    <div class="d-flex justify-content-between">
      <b-table :items="subjects" :fields="fields" hover bordered>
            <template v-slot:cell(action)="data">
          <div class="options">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            <div class="option shadow">
              <ul>
               
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
        <template v-slot:cell(subject)="data">{{data.item.name}}</template>
      </b-table>
    </div>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      subjects:[],
      subject: {
        name: "",
        code: "",
      },
      subjects: [],
      items: [],
      item: false,
      update: false,
      fields: ["code", "subject", "action", "drop"],
    };
  },
  watch: {
    item: "selectAll",
  },
  mounted() {
    this.getSubjects();
  },
  methods: {
    cancel() {
      this.update = false;
      this.subject = {
        name: "",
        code: "",
      };
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.subjects.forEach((it) => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    addSubjects() {
      axios
        .post("/api/subject", this.subject, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 201) {
            this.$toasted.success('Created')
            this.subject = {
              name: "",
              code: "",
            };
            this.getSubjects();
               this.$bvModal.show("classes");
          }
        });
    },
    updateN() {
      axios
        .put(`/api/subject/${this.subject.id}`, this.subject, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
              this.$toasted.success('Updated')
            this.getSubjects();
            this.update = false;
               this.$bvModal.show("classes");
            this.subject = {
              name: "",
              code: "",
            };
          }
        });
    },
    edit(id) {
      axios
        .get(`/api/subject/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.subject = res.data;
            this.update = true;
            this.$bvModal.show("classes");
          }
        });
    },
    getSubjects() {
      axios
        .get("/api/subject", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/subject/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getSubjects();
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
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getsubjects();
            }
          })
          .catch((err) => {
            console.log("del -> err", err);
          });
      }
    },
  },
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
}
td {
  text-transform: uppercase;
}
.hiden {
  opacity: 0;
}

.add {
  background-color: #f7f8fa;
}
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
.form-group{
  margin-bottom:24px;
}
</style>