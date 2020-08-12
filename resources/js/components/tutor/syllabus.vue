<template>
  <div class="body">
    <div class>
      <div class="p-3">
        <h4>Syllabus</h4>
        <div class="filter-table">
          <div class="filter-container">
            <div class="filter-btn">
              <span>Filter</span>
              <i class="icon-sort"></i>
            </div>
          </div>
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#">Sort By:</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="mx-auto">
                <b-form-select class="mr-3" :options="subjects" v-model="subject">
                  <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Subject --</b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-select class="mr-3" :options="classess" v-model="myclass">
                  <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Class --</b-form-select-option>
                  </template>
                </b-form-select>
                <b-form-select :options="term" v-model="term">
                  <template v-slot:first>
                    <b-form-select-option :value="null" disabled>-- Term --</b-form-select-option>
                  </template>
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
        <div class="syllabus-table">
          <table class="table table-hover table-bordered">
            <thead class="thead-darkblue">
              <tr>
                <th>Class</th>
                <th>Subject</th>

                <th class="d-flex justify-content-around">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,idx) in syllabus" :key="idx">
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
    };
  },
  mounted() {
    this.getSyllabus();
    this.getCurriculum();
  },
  methods: {
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