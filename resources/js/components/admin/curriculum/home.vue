<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/admin/curriculum/create">
        <b-button class="shadow-sm">
          Create Curriculum
        
        </b-button>
      </router-link>
      <b-button class="shadow-sm" @click="multiDrop">
        Multi-Drop
      </b-button>

      <div class=" shadow-sm hiden">
       Assign Course
      </div>

      <div class=" shadow-sm hiden">
       Assign Level
      
      </div>
    </nav>
  
      <b-table :items="curriculum" :fields="fields" hover bordered>
        <template v-slot:cell(action)="data">
       
         <span    class="d-flex justify-content-around">  <span class="mr-3" @click="view(data.item.id)">
              <i class="fa fa-eye" aria-hidden="true"></i> View
            </span>
         
          <span @click="edit(data.item.id)">
            <i class="fas fa-edit"></i>Edit
          </span>
           <span class="mr-3" @click="drop(data.item.id)">
            <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
          </span></span>
        </template>

        <template v-slot:cell(drop)="data">
          <b-form-checkbox :value="data.item.id" v-model="items"></b-form-checkbox>
        </template>
          <template v-slot:cell(class)="data">
         {{data.item.subject}}
        </template>
      </b-table>

  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      curriculum: [],
      items: [],
      item: false,
      fields:['class','action','drop']
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getCurriculum();
  },
  methods: {
    selectAll() {
      if (this.item) {
        this.items = [];
        this.curriculum.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    getCurriculum() {
      axios
        .get("/api/curriculum", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.curriculum = res.data;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/curriculum/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getcurriculum();
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
          .post("/api/multi-curriculum-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getcurriculum();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.$router.push(`/admin/curriculum/edit/${id}`);
    },
    view(id) {
      this.$router.push(`/admin/curriculum/view/${id}`);
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


</style>