<template>
  <div class="body">
    <nav class="mb-5">
      <div class="nav_box shadow-sm">
        <p class="mx-auto" @click="multiDrop">Multi-Drop</p>
        <hr />
      </div>
      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Create Class</p>
        <hr />
      </div>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Assign Course</p>
        <hr />
      </div>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Assign Level</p>
        <hr />
      </div>
    </nav>

    <div class="d-flex justify-content-between">
      <table class="table table-striped table-inverse table-bordered mr-4 w-75">
        <thead class="thead-inverse">
          <tr>
            <th>Code</th>
            <th>Course / Subject</th>

            <th>Action</th>
            <th>
              <input type="checkbox" v-model="item" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in subjects" :key="idx">
            <td>{{item.code}}</td>
            <td>{{item.name}}</td>

            <td class="d-flex justify-content-around">
              <span class="mr-3" @click="drop(item.id)">
                <i class="fa fa-minus-circle" aria-hidden="true"></i> Drop
              </span>
              <span @click="edit(item.id)">
                <i class="fas fa-edit"></i>Update
              </span>
            </td>
            <td>
              <input type="checkbox" :value="item.id" v-model="items" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="add border p-2">
        <form @submit.prevent="addSubjects">
          <legend>Add Course / Subject</legend>
          <div class="form-group">
          

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
          </div>

          <button v-if="!update" type="submit" class="btn btn-primary">Create</button>
         <div v-else class="d-flex justify-content-between">
               <button  type="button" class="btn btn-primary" @click="updateN">Update</button>
                 <button type="button" class="btn btn-primary" @click="cancel" >Cancel</button>
         </div>
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
      update: false
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
.nav_box {
  background-color: #f7f8fa;
  display: flex;
  text-align: center;
  padding: 10px 15px;
}
.add {
  background-color: #f7f8fa;
}
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
</style>