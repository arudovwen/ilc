<template>
  <div class="body">
    <div class>
      <div class="p-3">
        <h4>Syllabus</h4>
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
        <div class="bd-table syllabus-table">
          <table class="table table-hover table-bordered">
            <thead class="thead-darkblue">
              <tr>
                <th>Class</th>
                <th>Subject</th>

                <th class="d-flex justify-content-around">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,idx) in sorted" :key="idx">
                <td scope="row" class="toCaps">{{item.myclass}}</td>
                <td scope="row" class="toCaps">{{item.subject}}</td>
                <td class="d-flex justify-content-around">
                  <span class="mr-3 view-link" @click="view(item.id)">
                    <i class="fa fa-eye" aria-hidden="true"></i> View
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tutor"],
  data() {
    return {
      curriculum: [],
      syllabus: [],
      subjects: [],
      classess: [],
      subject: '',
      myclass: '',
      term: '',
      filterShow: false,
    };
  },
  mounted() {
    this.getSyllabus();
    this.getCurriculum();
    this.getClasses();
    this.getSubjects();
  },
  computed: {
    sorted() {
      return this.syllabus.filter((item) => {
        if (this.subject.toLowerCase() == item.subject.toLowerCase() || this.myclass.toLowerCase() == item.myclass.toLowerCase()) {
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
    toggleFilter() {
      this.filterShow = !this.filterShow;
    },
    getCurriculum() {
      axios
        .get("/api/tutor-curriculum", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.curriculum = res.data;
          }
        });
    },
    getSyllabus() {
      axios
        .get("/api/tutor-syllabus", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.syllabus = res.data;
          }
        });
    },
    view(id) {
      this.$router.push(`/tutor/syllabus/view/${id}`);
    },
    viewCurriculum(id) {
      this.$router.push(`/tutor/curriculum/view/${id}`);
    },
  },
};
</script>

<style scoped>
.body {
  height: 100%;
}
.table .thead-dark th {
  background-color: #22cade;
  border-color: #22cade;
}
.view-link {
  cursor: pointer;
}
.view-link:hover {
  color: #22cade;
}
.search {
  width: 250px;
  border-color: #41cee2;
}

.rounded-pill {
  border-radius: 50rem !important;
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
.syllabus-table {
  padding-top: 20px;
}
</style>