<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/admin/tutor/create">
        <b-button block class="shadow-sm reg-btn text-center">Create Tutor</b-button>
      </router-link>

      <router-link to="/admin/tutor/assign">
        <b-button block class="shadow-sm reg-btn text-center">
          Tutor
          <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
           Courses
        </b-button>
      </router-link>
      <router-link to="/admin/head/assign">
        <b-button block class="shadow-sm reg-btn text-center">
          Tutor
          <i class="fa fa-arrows-h mx-2" aria-hidden="true"></i>
 Head Tutor
        </b-button>
      </router-link>
      <b-button block class="shadow-sm reg-btn text-center" @click="multiDrop">Multi-Drop</b-button>
    </nav>

    <b-table bordered hover responsive :busy="busy" :items="tutors" :fields="fields">
      <template v-slot:cell(sn)="data">{{data.index+1}}</template>
      <template v-slot:cell(drop)="data">
        <b-form-checkbox :value="data.item.id" v-model="items"></b-form-checkbox>
      </template>
       <template v-slot:table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(actions)="data">
        <span @click="view(item.id)" class="mr-3">
          <i class="fas fa-eye"></i>View
        </span>
        <span class="mr-3" @click="drop(data.item.id)">
          <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
        </span>
        <span @click="edit(data.item.id)">
          <i class="fas fa-edit"></i>Update
        </span>
      </template>
    </b-table>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      tutors: [],
      busy:true,
      items: [],
      item: false,
      fields: [
        "Sn",
        { key: "name", sortable: true },
        "email",
        { key: "gender", sortable: true },
        "phone",
        "actions",
        "drop"
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
        this.tutors.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    getAdmins() {
      axios
        .get("/api/tutor", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.tutors = res.data;
            this.busy= false
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/tutor/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getTutors();
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
          .post("/api/multi-tutor-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getTutors();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.$router.push(`/admin/tutor/update/${id}`);
    },
    view(id) {
      this.$router.push(`/admin/tutor/view/${id}`);
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

.body {
  padding: 20px 20px 50px;
  height: 100%;
}
</style>