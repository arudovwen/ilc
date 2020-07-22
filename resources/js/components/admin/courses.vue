<template>
  <div class="body">
    <nav class="mb-5">
      <b-button class=" shadow-sm"  @click="multiDrop">
        Multi-Drop
       
      </b-button>
      <div class=" shadow-sm hiden">
        <p class="mx-auto">Create Class</p>
       
      </div>

      <div class=" shadow-sm hiden">
        <p class="mx-auto">Assign Course</p>
       
      </div>

      <div class=" shadow-sm hiden">
        <p class="mx-auto">Assign Level</p>
       
      </div>
    </nav>

    <div class="d-flex justify-content-between">
          <b-table :items="subjects" :fields="fields" hover bordered>
        <template v-slot:cell(action)="data">
          <span class="mr-3" @click="drop(data.item.id)">
            <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
          </span>
          <span @click="edit(data.item.id)">
            <i class="fas fa-edit"></i>Edit
          </span>
        </template>

        <template v-slot:cell(drop)="data">
          <b-form-checkbox :value="data.item.id" v-model="items"></b-form-checkbox>
        </template>
         <template v-slot:cell(subject)="data">
        {{data.item.name}}
        </template>
      </b-table>
    
      <div class="add border p-2">
        <form @submit.prevent="addSubjects">
          <h5 class="text-center">Add Subject</h5>
      

            <div class="form-group">
              <label for>Name</label>
              <input
                type="text"
                class="form-control"
                v-model="subject.name"
                aria-describedby="helpId"
                placeholder="Mathematics"
              />
            </div>
            <div class="form-group">
              <label for>Code</label>
              <input
                type="text"
                class="form-control"
                v-model="subject.code"
                aria-describedby="helpId"
                placeholder="MTH"
              />
            </div>
         

         <b-form-group>
            <b-button v-if="!update" type="submit" class="btn btn-primary">Create</b-button>
         <div v-else class="d-flex justify-content-between">
               <b-button  type="button" class=" mr-2" @click="updateN">Update</b-button>
                 <b-button type="button" variant="outline-secondary"  @click="cancel" >Cancel</b-button>
         </div>
         </b-form-group>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      subject: {
        name: "",
        code: ""
      },
      subjects: [],
      items: [],
      item: false,
      update: false,
      fields:['code','subject','action','drop']
    };
  },
  watch: {
    item: "selectAll",
   
  },
  mounted() {
    this.getSubjects();
  },
  methods: {
      cancel(){
          this.update = false
           this.subject = {
              name: "",
              code: ""
            };
      },
    selectAll() {
      if (this.item) {
        this.items = [];
        this.subjects.forEach(it => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },
    addSubjects() {
      axios
        .post("/api/subject", this.subject, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 201) {
              this.subject = {
              name: "",
              code: ""
            };
            this.getSubjects();
            
          }
        });
    },
    updateN() {
      axios
        .put(`/api/subject/${this.subject.id}`, this.subject, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.getSubjects();
            this.update = false;
            this.subject = {
              name: "",
              code: ""
            };
          }
        });
    },
    edit(id) {
      axios
        .get(`/api/subject/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.subject = res.data;
            this.update = true;
          }
        });
    },
    getSubjects() {
      axios
        .get("/api/subject", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/subject/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getSubjects();
            }
          });
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
      if (del) {
        axios
          .post("/api/multi-subjects-drop", this.items, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getsubjects();
            }
          })
          .catch(err => {
            console.log("del -> err", err);
          });
      }
    },
   
  }
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
}
td{
  text-transform: uppercase;
}
.hiden {
  opacity: 0;
}

.add {
  background-color: #f7f8fa;
}
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
</style>