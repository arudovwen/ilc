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
      <table class="table  table-bordered">
        <thead class="thead-inverse">
          <tr>
            <th>Course / Subject</th>
            <th>Syllabus</th>
            <th>Action</th>
            <th>
              <input type="checkbox" v-model="item" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(subject,index) in subjects" :key="index">
            <td>
             
              <div class="form-group">
                <select class="form-control" v-model="subject.subject">
                <option disabled>Select Subject</option>
              </select>
              </div>

              <div class="d-flex justify-content-between">
                  <button @click="addSubject">Add Subject</button>
               <button @click="removeSubject">Remove Subject</button>
              </div>
            </td>
            <td>
              <div class="d-flex w-100">
                <div class="form-group w-25">
                  <label for>Week</label>
                  <span v-for="(item,idx) in subject.syllabus" :key="idx">
                    <input type="text" class="form-control" v-model="item.week" />
                  </span>
                </div>
                <div class="form-group w-75">
                  <label for>Title</label>
                  <span v-for="(item,idx) in subject.syllabus" :key="idx">
                    <input type="text" class="form-control" v-model="item.title" />
                  </span>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <button type="button " @click="addCourse(index)">Add</button>
                <button type="button" @click="removeCourse(index)">Remove</button>
              </div>
            </td>
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
    </div>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      subjects: [
        {
          subject: "",
          syllabus: [
            {
              week: null,
              title: ""
            }
          ]
        }
      ],

      items: [],
      item: false
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getSubjects();
  },
  methods: {
    addSubject() {
      this.subjects.push({
        subject: "",
        syllabus: [
          {
            week: null,
            title: ""
          }
        ]
      });
    },
    removeSubject() {
      this.subjects.pop();
    },
    addCourse(id, idx) {
      this.subjects[id].syllabus.push({
        week: null,
        title: ""
      });
    },
    removeCourse(id) {
      this.subjects[id].syllabus.pop();
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
              this.getTutors();
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
    edit(id) {
      this.$router.push(`/admin/subject/edit/${id}`);
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
.add {
  background-color: #f7f8fa;
}
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
</style>