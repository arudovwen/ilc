<template>
  <div class="body">
    <nav class="mb-5">
      <div class="nav_box shadow-sm">
        <p class="mx-auto" @click="multiDrop">Multi-Drop</p>
        <hr />
      </div>
      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Create Class</p>
        <hr />
      </div>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Assign Course</p>
        <hr />
      </div>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Assign Level</p>
        <hr />
      </div>
    </nav>

    <div class="d-flex justify-content-between">
      <table class="table table-striped table-inverse table-bordered mr-4 w-75">
        <thead class="thead-inverse">
          <tr>
            <th>Class Name</th>
            <th>Sub-Classes</th>
            <th>Action</th>
            <th>
              <input type="checkbox" v-model="item" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in classes" :key="idx">
            <td>{{item.class_name}}</td>
            <td>{{item.sub_class}}</td>
            <td class="d-flex justify-content-around">
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

          <button v-if="!update" type="submit" class="btn btn-primary">Create</button>
          <div v-else class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary" @click="updateN">Update</button>
            <button type="button" class="btn btn-primary" @click="cancel">Cancel</button>
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
      update: false
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
      if (del) {
        axios
          .post("/api/multi-classes-drop", this.items, {
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
.nav_box {
  background-color: #f7f8fa;
  display: flex;
  text-align: center;
  padding: 10px 15px;
}
.add {
  background-color: #f7f8fa;
}
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
table {
  font-size: 14.5px;
}
</style>