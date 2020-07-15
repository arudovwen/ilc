<template>
  <div class="body">
    <nav class="mb-5">
      <div class="nav_box shadow-sm">
        <p class="mx-auto" @click="multiDrop">Multi-Drop</p>
        <hr />
      </div>
      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Create Group</p>
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
            <th>Group Name</th>

            <th>Action</th>
            <th>
              <input type="checkbox" v-model="item" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in groups" :key="idx">
            <td class="toCaps" @click="gotoGroup(item.id)">{{item.name}}  <i class="fas enter fa-sign-in-alt    "></i></td>

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
            <label for>Group name</label>
            <input
              type="text"
              class="form-control"
              v-model="name"
              aria-describedby="helpId"
              placeholder="Pearl"
            />
          </div>

          <button v-if="!update" type="submit" class="btn btn-primary">Create</button>
          <div v-else class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary" @click="updateN">Update</button>
            <button type="button" class="btn btn-primary" @click="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["tutor"],
  data() {
    return {
      groups: [],
      heads: [],
      name: "",
      items: [],
      item: false,
      update: false
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getgroups();
  },
  methods: {
    cancel() {
      this.update = false;

      this.name = "";
    },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.groups.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    addClass() {
      let data = {
        name: this.name
      };
      axios
        .post("/api/group", data, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 201) {
            this.name = "";
            this.getgroups();
          }
        });
    },
    updateN() {
      axios
        .put(`/api/group/${this.data.id}`, this.data, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.getgroups();
            this.update = false;
            this.name = "";
          }
        });
    },
    gotoGroup(id){
this.$router.push(`/tutor/group/${id}`)
    },
    edit(id) {
      axios
        .get(`/api/group/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.name = res.data.name;
            this.update = true;
          }
        });
    },
    getgroups() {
      axios
        .get("/api/group", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.groups = res.data;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/group/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.tutor.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getgroups();
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
          .post("/api/multi-group-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.tutor.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getgroups();
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
  position:relative;
}
.enter{
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -10px;
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