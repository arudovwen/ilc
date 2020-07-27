<template>
  <div class="admin-body">
    <b-container>
      <b-row>
        <b-col cols="10" class="dashboard-content-side">
          <div class="table-side">
            <h2>ADMINISTRATORS</h2>
            <b-table striped hover :items="items"></b-table>
            <h1>Testing table page</h1>
          </div>
        </b-col>
        <b-col cols="2" class="notification-side">
          <div class="notify-side">
            <div class="notify-modal">
              <b-button v-b-modal.modal-1 class="reg-btn">ADD ADMIN</b-button>
              <b-modal id="modal-1" title="Create Admin">
                <b-form>
                  <b-container>
                    <b-form-group id="input-group-1" label="Name" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder></b-form-input>
                    </b-form-group>

                    <b-form-row>
                      <b-col>
                        <b-form-group id="input-group-6" label="Email" label-for="input-6">
                          <b-form-input
                            id="input-6"
                            type="email"
                            required
                            placeholder
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group id="input-group-4" label="Phone" label-for="input-4">
                          <b-form-input
                            id="input-4"
                            type="text"
                            placeholder
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-form-row>
                    <b-form-group id="input-group-1" label="Role" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder></b-form-input>
                    </b-form-group>
                  </b-container>
                </b-form>
              </b-modal>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- <nav class="mb-5">
      <router-link to="/admin/add">
    
          <b-button variant="success">Create Administrator</b-button>
     
      </router-link>
    -->
    <!-- <b-button variant="success" @click="multiDrop">Multi-Drop</b-button>
    -->
    <!-- <div class="nav_box shadow-sm hiden"></div>
      <div class="nav_box shadow-sm hiden"></div>
    </nav>-->

    <!-- <b-table :items="admins" hover :fields="fields" :busy='busy' class="admin-table">
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
    </b-table>-->
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      admins: [],
      busy: true,
      items: [],
      item: false,
      fields: [
        "Sn",
        { key: "name", sortable: true },
        "email",
        { key: "role", sortable: true },
        "Action",
      ],
    };
  },
  watch: {
    item: "selectAll",
  },
  mounted() {
    this.getAdmins();
  },
  methods: {
    selectAll() {
      if (this.item) {
        this.items = [];
        this.admins.forEach((it) => {
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
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.admins = res.data;
            this.busy = false;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/admin/${id}`, {
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
          .post("/api/multi-admin-drop", data, {
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
      this.$router.push(`/admin/edit/${id}`);
    },
  },
};
</script>

<style scoped>
.hiden {
  opacity: 0;
}
.nav_box {
  background-color: #f7f8fa;
  display: flex;
  text-align: center;
  padding: 10px 15px;
}
</style>