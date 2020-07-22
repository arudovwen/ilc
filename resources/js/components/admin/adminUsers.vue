<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/admin/add">
    
          <b-button variant="success">Create Administrator</b-button>
     
      </router-link>
     
          <!-- <b-button variant="success" @click="multiDrop">Multi-Drop</b-button>
       -->
      <div class="nav_box shadow-sm hiden"></div>
      <div class="nav_box shadow-sm hiden"></div>
    </nav>

    <b-table :items="admins" hover :fields="fields" :busy='busy'>
      <template v-slot:cell(Sn)="data">{{ data.index + 1 }}</template>
      <template v-slot:cell(Action)="data">
        <span class="mr-3" @click="drop(data.item.id)">
          <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
        </span>
        <span @click="edit(data.item.id)">
          <i class="fas fa-edit"></i>Edit
        </span>
      </template>
      <template v-slot:table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>

  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      admins: [],
      busy:true,
      items: [],
      item: false,
      fields: [
        "Sn",
        { key: "name", sortable: true },
        "email",
        { key: "role", sortable: true },
        "Action"
      ]
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getAdmins();
  },
  methods: {
    selectAll() {
      if (this.item) {
        this.items = [];
        this.admins.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    getAdmins() {
      axios
        .get("/api/admin", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.admins = res.data;
            this.busy = false
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/admin/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getAdmins();
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
          .post("/api/multi-admin-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getAdmins();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      
      this.$router.push(`/admin/edit/${id}`);
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
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
</style>