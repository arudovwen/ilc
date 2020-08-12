<template>
 
  <div class="resource-main">
    <div class="resource-btn">
      <router-link to="/tutor/resource/create">
        <div class="btn btn-resource">
          <i class="fa fa-plus"></i>
          <span>ADD RESOURCE</span>
        </div>
      </router-link>
    </div>

    <div class="container">
      <div class="filter-table">
          <div class="filter-container">
            <div class="filter-btn" @click="toggleFilter">
              <span>Filter</span>
              <i class="icon-sort"></i>
            </div>
          </div>
          <b-navbar toggleable="lg" type="dark" variant="info" v-if="filterShow">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#">Sort By:</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="mx-auto">
                <b-form-select class="mr-3"  v-model="subject">
                
                    <b-form-select-option value="" disabled>-- Subject --</b-form-select-option>
                    <b-form-select-option value="all">-- All --</b-form-select-option>
                    <b-form-select-option
                      :value="item.name"
                      v-for="(item,idx) in subjects"
                      :key="idx"
                    >{{item.name}}</b-form-select-option>
                
                </b-form-select>
                <b-form-select class="mr-3" v-model="myclass">
                
                    <b-form-select-option value="" disabled>-- Class --</b-form-select-option>
                    <b-form-select-option value="all">-- All --</b-form-select-option>
                    <b-form-select-option
                      :value="item.class_name"
                      v-for="(item,idx) in classess"
                      :key="idx"
                    >{{item.class_name}}</b-form-select-option>
                
                </b-form-select>
                <b-form-select  v-model="term">
                
                    <b-form-select-option value="" disabled>-- Term --</b-form-select-option>
                 
                </b-form-select>
              </b-navbar-nav>
              <b-navbar-nav>
                <b-nav-form class="ml-auto">
                  <b-form-input size="sm" class="mr-sm-2 search rounded-pill" placeholder="Search"></b-form-input>
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
    </div>
    <div class="resource-table container bd-table">
      <table class="table table-hover table-bordered">
        <thead class="thead-darkblue">
          <tr>
            <th>S/N</th>
            <th>CLASS</th>
            <th>SUBJECT</th>
            <th>TITLE</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in sorted" :key="idx">
            <td scope="row">{{idx+1}}</td>
            <td class="toCaps">{{item.level}}</td>
            <td class="toCaps">{{item.subject}}</td>
            <td class="toCaps">{{item.module}}</td>

            <td class="options">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <div class="option-box">
                <ul>
                  <li @click="edit(item.id)">
                    <i class="fas fa-edit"></i> Edit
                  </li>
                  <li @click="view(item.id)">
                    <i class="fa fa-eye" aria-hidden="true"></i> View
                  </li>
                  <li @click="drop(item.id)">
                    <i class="fas fa-minus-circle" aria-hidden="true"></i> Drop
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      resources: [],
      subjects: [],
      classess: [],
      subject: '',
      myclass: '',
      term:'',
      filterShow:false
    };
  },
  mounted() {
    this.getResources();
      this.getClasses();
    this.getSubjects();
  },
  computed: {
    sorted() {
      return this.resources.filter((item) => {
        if (this.subject.toLowerCase() == item.subject.toLowerCase() || this.myclass.toLowerCase() == item.level.toLowerCase()) {
          return item;
        } else if(this.subject== '' || this.subject == 'all'){
          return item;
        }
      });
    },
  },
  methods: {
     getSubjects() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get("/api/tutor-all-subjects", {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        })
        .catch();
    },
    getClasses() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get("/api/all-classes", {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.classess = res.data;
            // res.data.forEach((item) => {
            //   this.allClass.push(item.class_name);
            //   if (item.sub_class !== "") {
            //     item.sub_class.split(",").forEach((i) => {
            //       this.allClass.push(i);
            //     });
            //   }
            // });
          }
        });
    },
    toggleFilter(){
      this.filterShow = !this.filterShow
    },
    sortContent(arr) {
      let ans = [];

      arr.forEach((item) => {
        ans.push(item.name);
      });

      return arr;
    },
    getResources() {
      axios
        .get(`/api/resource`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.resources = res.data;
           
          }
        });
    },
    
    edit(id) {
      this.$router.push(`/tutor/resource/edit/${id}`);
    },
    view(id) {
      this.$router.push(`/tutor/resource/view/${id}`);
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/resource/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.tutor.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getResources();
            }
          });
      }
    },
    // multiDrop() {
    //   let del = confirm("Are you sure about this?");
    //   let data = {
    //     data: this.items
    //   };
    //   if (del) {
    //     axios
    //       .post("/api/multi-resource-drop", data, {
    //         headers: {
    //           Authorization: `Bearer ${this.$props.tutor.access_token}`
    //         }
    //       })
    //       .then(res => {
    //         if (res.status == 200) {
    //           this.getgroups();
    //           this.item = false
    //         }
    //       })
    //       .catch(err => {
    //         console.log("del -> err", err);
    //       });
    //   }
    // }
  },
};
</script>

<style scoped>
.resource-main {
  padding: 20px 40px;
}
.resource-btn {
  display: flex;
  justify-content: flex-end;
}
.filter-container {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}
.filter-btn {
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
.filter-btn span {
  font-family: "Montserrat";
  font-weight: bold;
}
.filter-btn i {
  padding-left: 3px;
}
.btn-resource {
  background: #0a4065;
  box-shadow: 5px 4px 13px rgba(249, 247, 240, 0.25);
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
}
.sort-section {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
}
.bg-info {
  background: #fff !important;
  box-shadow: 5px 4px 13px rgba(249, 247, 240, 0.25);
  margin-top: 20px;
  border-radius: 10px;
}

.nav-link {
  color: #000 !important;
}

.resource-table {
  padding-top: 20px;
}
.table {
  border-radius: 10px;
}
.table .thead-dark th {
  color: #fff;
  background-color: #22cade;
  border-color: #22cade;
}
.search {
  width: 250px;
  border-color: #41cee2;
}

.rounded-pill {
  border-radius: 50rem !important;
}
.hiden {
  opacity: 0;
}

.options {
  position: relative;
  width: 10px;
}
.option-box {
  position: absolute;
  bottom: 100%;
  background: white;
  padding: 15px;
  font-size: 14px;
  width: 100px;
  display: none;
  right: 10px;
}
.options:hover .option-box {
  display: block;
}
.option-box ul {
  text-decoration: none;
  list-style: none;
}
.option-box ul li {
  padding: 5px 0;
  cursor: pointer;
}
.fa-ellipsis-v {
  cursor: pointer;
}
</style>