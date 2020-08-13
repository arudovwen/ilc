<template>
  <div class="body">
    <h5 class="mb-3">Groups</h5>
    <div class="px-5">
      <table class="table table-hover table-bordered">
        <thead class="thead-light">
          <tr>
            <th>Group Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in groups" :key="idx">
            <td class="toCaps chat">
              {{item.name}}
              <i class="fa fa-comment-o" aria-hidden="true"></i>
            </td>
            <td>
              <span @click="gotoGroup(item.id)">
                Enter
                <i class="fas fa-sign-in-alt"></i>
              </span>
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
      update: false,
    };
  },
  watch: {
    item: "selectAll",
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
        this.groups.forEach((it) => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    addClass() {
      let data = {
        name: this.name,
      };
      axios
        .post("/api/student-group", data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
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
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
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
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
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
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
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
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
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
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getgroups();
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
  font-size: 16px;
  text-align: center;
}
.chat {
  cursor: pointer;
}

</style>