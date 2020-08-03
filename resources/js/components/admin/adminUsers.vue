<template>
  <div class>
   
  <b-modal id="admin-create" scrollable title="Create Admin" size="lg" hide-footer>
   <div>
     <Add @toggleModal="toggleModal" />
   </div>
  </b-modal>

    <b-modal id="admin-edit" scrollable title="Update Admin" size="lg" hide-footer>
   <div>
     <Edit @toggleModal="toggleModal" :id='id' :admin='admin'/>
   </div>
  </b-modal>
    <b-container>
      <b-row>
        <b-col cols="10" class="dashboard-content-side">
        
            <h5 class="mb-3">ADMINISTRATORS</h5>
            <b-table :items="admins" hover :fields="fields" :busy="busy"  class="admin-table">
              <template v-slot:cell(Sn)="data">{{ data.index + 1 }}</template>
                <template v-slot:cell(Action)="data">
              <div class="options">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <div class="option shadow">
                  <ul>
                    <li> <span @click="edit(data.item.id)">
                  <i class="fas fa-edit"></i>Edit
                </span></li>
                     <li><span class="mr-3" @click="drop(data.item.id)">
                  <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
                </span></li>
                  </ul>
                </div>
              </div>
            </template>
              
              <template v-slot:table-busy>
                <div class="text-center my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
            </b-table>
      
        </b-col>
        <b-col cols="2" class="notification-side py-3 px-2">
       
           
              <b-button variant="success" class="mt-5" block v-b-modal.admin-create>Create Administrator</b-button>
          

           
         
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import Add from './add';
import Edit from './edit'
export default {
  props: ["admin"],
  data() {
    return {
      id:null,
      admins: [],
      busy: true,
      items: [],
      item: false,
      fields: [
        "Sn",
        { key: "name", sortable: true },
       
        "email",
         'phone',
        { key: "role", sortable: true },
        "Action",
      ],
    };
  },
  watch: {
    item: "selectAll",
  },
  components:{
    Add,
    Edit
  },
  mounted() {
    this.getAdmins();
  },
  methods: {
    toggleModal(id){
 
      this.$bvModal.hide(id)
      this.getAdmins()
   
    },
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
      this.id =id
       this.$bvModal.show('admin-edit')
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  overflow: auto;
}
.hiden {
  opacity: 0;
}
.nav_box {
  background-color: #f7f8fa;

  text-align: center;
  padding: 10px 15px;
}
th{
  background: transparent;
}
</style>