<template>
  <div class>
   
    <div class="p-3">
    
      <b-card no-body class="group-chat">
     
        <b-tabs pills card vertical end>
          <b-tab title-item-class="group" :title="item.name"  v-for="(item,idx) in groups" :key="idx">
            <b-card-text>
              <Chat :student="student" :id="item.id" />
            </b-card-text>
          </b-tab>
           <b-tab title-item-class="group" title="Chat" >
            <b-card-text>
             <PrivateChat :student="student"/>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>



<script>
import Chat from "./chat";
import PrivateChat from './privateChat'
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
  components: {
    Chat,
    PrivateChat
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
.card-header{
  padding: 0;
}
li{
  width: 150px;
}
</style>