<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/admin/add">
        <div class="nav_box shadow-sm">
          <p class="mx-auto">Create Administrator</p>
          <hr />
        </div>
      </router-link>
      <div class="nav_box shadow-sm">
        <p class="mx-auto" @click="multiDrop">Multi-Drop</p>
        <hr />
      </div>
      <div class="nav_box shadow-sm hiden"></div>
      <div class="nav_box shadow-sm hiden"></div>
    </nav>

    <table class="table table-striped table-inverse table-bordered">
      <thead class="thead-inverse">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
          <th>
            <input type="checkbox" v-model="item" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in admins" :key="idx">
          <td scope="row" class="toCaps">{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.role}}</td>
          <td class="d-flex justify-content-around">
            <span class="mr-3" @click="drop(item.id)">
              <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
            </span>
            <span @click="edit(item.id)">
              <i class="fas fa-edit"></i>Edit
            </span>
          </td>
          <td>
            <input type="checkbox" :value="item.id" v-model="items" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      admins: [],
      items: [],
      item: false
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
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
       
          axios.delete(`/api/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        }).then(res => {
            if (res.status == 200) {
              this.getAdmins();
            }
          });
        
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
      if (del) {
        axios
          .post("/api/multi-admin-drop", this.items , {
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
        this.$router.push(`/admin/edit/${id}`)
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
.hiden{
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