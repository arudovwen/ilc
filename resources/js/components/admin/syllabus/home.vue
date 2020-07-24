<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/admin/syllabus">
        <b-button class=" shadow-sm">
         Create Syllabus     
        </b-button>
      </router-link>
      <b-button class=" shadow-sm"  @click="multiDrop">
       Multi-Drop
      
      </b-button>
     
        <b-button class=" shadow-sm hiden">
         Assign Course
        
        </b-button>
      
     
        <b-button class=" shadow-sm hiden">
         Assign Level
        
        </b-button>
     
    </nav>

  
      <b-table :items="syllabus" :fields="fields" hover bordered>
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
         {{data.item.myclass}}
        </template>
      </b-table>
  
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      syllabus: [],
      items: [],
      item: false,
        fields:['class','subject','action','drop']
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getSyllabus();
  },
  methods: {
    selectAll() {
      if (this.item) {
        this.items = [];
        this.syllabus.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    getSyllabus() {
      axios
        .get("/api/syllabus", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.syllabus = res.data;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
       
          axios.delete(`/api/syllabus/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        }).then(res => {
            if (res.status == 200) {
              this.getSyllabus();
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
          .post("/api/multi-syllabus-drop",data , {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
          .then(res => {
            if (res.status == 200) {
              this.getSyllabus();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
        this.$router.push(`/admin/syllabus/edit/${id}`)
    },
     view(id) {
        this.$router.push(`/admin/syllabus/view/${id}`)
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

.body {
  padding: 20px 20px 50px;
  height: 100%;
}
</style>