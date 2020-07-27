<template>
  <div class="body">
    <nav class="mb-5">
      <b-button class="shadow-sm hiden">Create Class</b-button>

      <b-button class="shadow-sm hiden">Assign Course</b-button>

      <b-button class="shadow-sm hiden">Assign Level</b-button>
      <b-button class="shadow-sm" @click="multiDrop">Multi-Drop</b-button>
    </nav>

   <h3 class="mb-4">All Classes</h3>
    <div class="d-flex justify-content-between">
      <b-table :items="classes" :fields="fields" hover bordered>
        <template v-slot:cell(action)="data">
          <span class="mr-3" @click="drop(data.item.id)">
            <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
          </span>
          <span @click="edit(data.item.id)">
            <i class="fas fa-edit"></i>Edit
          </span>
        </template>

        <template v-slot:cell(drop)="data">
          <b-form-checkbox :value="data.item.id" v-model="items"></b-form-checkbox>
        </template>
      </b-table>

      <div class="add border p-2 w-25">
        <form @submit.prevent="addClass" class="mb-5">
          <div class="form-group">
            <label for>Class name</label>
            <input
              type="text"
              class="form-control"
              v-model="data.class_name"
              aria-describedby="helpId"
              placeholder="Pearl"
            />
          </div>
          <div class="form-group">
            <label for>Sub Class(Optional)</label>
            <input
              type="text"
              class="form-control"
              v-model="data.sub_class"
              aria-describedby="helpId"
              placeholder="pearl 1, pearl 2 "
            />
          </div>

          <b-button v-if="!update" type="submit">Create</b-button>
          <div v-else class="d-flex justify-content-between">
            <b-button type="button" @click="updateN">Update</b-button>
            <b-button type="button" variant="outline-secondary" @click="cancel">Cancel</b-button>
          </div>
        </form>

        <div class="mx-auto">
          <table class="table table-bordered table-hover" v-if="heads.length">
            <thead class="thead-dark">
              <tr>
                <th>Head Teacher</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,idx) in heads" :key="idx">
                <td>{{item.tutor.name}}</td>
                <td scope="row">{{item.class.class_name}}</td>
              </tr>
            </tbody>
          </table>
          <div class="form-control" v-else>No Class Head</div>
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
      classes: [],
      heads: [],
      data: {
        class_name: "",
        sub_class: ""
      },
      items: [],
      item: false,
      update: false,
      fields: ["class_name", "sub_class", "action", "drop"]
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getclasses();
    this.getHeads();
  },
  methods: {
    getHeads() {
      axios
        .get("/api/tutor-class", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.heads = res.data.data;
            console.log("getHeads -> this.heads", this.heads);
          }
        });
    },
    cancel() {
      this.update = false;
      this.data = {
        name: "",
        code: ""
      };
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.classes.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    addClass() {
      axios
        .post("/api/classes", this.data, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 201) {
            this.data = {
              name: "",
              code: ""
            };
            this.getclasses();
          }
        });
    },
    updateN() {
      axios
        .put(`/api/classes/${this.data.id}`, this.data, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.getclasses();
            this.update = false;
            this.data = {
              name: "",
              code: ""
            };
          }
        });
    },
    edit(id) {
      axios
        .get(`/api/classes/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.data = res.data;
            this.update = true;
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
            this.classes = res.data;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/classes/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getclasses();
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
          .post("/api/multi-classes-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getclasses();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
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

td {
  text-transform: capitalize;
}
.hiden {
  opacity: 0;
}

.add {
  background-color: #f7f8fa;
}

table {
  font-size: 14.5px;
}
</style>