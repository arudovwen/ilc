<template>
  <div class="body">
    <nav class="mb-5">
      <b-button class=" shadow-sm" @click="multiDrop">
       Multi-Drop
        
      </b-button>
      <b-button class=" shadow-sm hiden">
     Create Group
        
      </b-button>

      <b-button class=" shadow-sm hiden">
     Assign Course
        
      </b-button>

      <div class=" shadow-sm hiden">
     Assign Level
        
      </div>
    </nav>

    <div class="d-flex justify-content-between">
      <table class="table table-hover  table-bordered ">
        <thead class="thead-light">
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
            <td class="toCaps chat " @click="gotoGroup(item.id)">{{item.name}}  <i class="fa fa-comment-o" aria-hidden="true"></i></td>

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
    </div>
  </div>
</template>


<script>
export default {
  props: ["student"],
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
        .post("/api/student-group", data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
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
        .put(`/api/student-group/${this.data.id}`, this.data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
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
    gotoGroup(id) {
      this.$router.push(`/student/group/${id}`);
    },
    edit(id) {
      axios
        .get(`/api/student-group/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
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
        .get("/api/student-group", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
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
          .delete(`/api/student-group/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`
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
      if (del) {
        axios
          .post("/api/multi-student-group-drop", this.items, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`
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
.table .thead-light th {
    color: white;
    background-color: rgba(19, 166, 153, 0.9);
    border-color: rgba(19, 166, 153, 0.9);
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
  font-size: 15.5px;
}
.chat{
  cursor: pointer;
}
</style>