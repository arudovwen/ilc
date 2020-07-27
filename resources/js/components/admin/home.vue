<template>
  <div>
        
          <div>
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <div class="admin-dashboard-top-cards">
                    <b-card>
                      <div class="inner-top-cards">
                        <img src="/images/teacher-green.png" class="img-fluid" alt />
                        <div class="inner-top-cards-text pl-2">
                          <p>
                            <strong>{{tutors.length}}+</strong>
                          </p>
                          <p>Teachers</p>
                        </div>
                      </div>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="admin-dashboard-top-cards">
                    <b-card>
                      <div class="inner-top-cards">
                        <img src="/images/teacher-green.png" class="img-fluid" alt />
                        <div class="inner-top-cards-text pl-2">
                          <p>
                            <strong>{{students.length}}+</strong>
                          </p>
                          <p>Students</p>
                        </div>
                      </div>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="admin-dashboard-top-cards">
                    <b-card>
                      <div class="inner-top-cards">
                        <img src="/images/teacher-green.png" class="img-fluid" alt />
                        <div class="inner-top-cards-text pl-2">
                          <p>
                            <strong>{{classes.length}}+</strong>
                          </p>
                          <p>Classes</p>
                        </div>
                      </div>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
            </b-container>

            <div class="chart">
              <column-chart
                :data="[['Basic 1', 32], ['Basic 2', 46], ['Basic 3', 28], ['Basic 4', 10], ['Basic 5', 18], ['Basic 6', 20], ['Basic 7', 28], ['Basic 8', 38]]"
              ></column-chart>
            </div>
            <b-container>
              <b-row>
                <b-col>
                  <div class="dashboard-bottom-cards">
                    <b-card>
                      <h6 class>Up Coming Lessons</h6>
                      <div class="bottom-card-details">
                        <b-avatar text="e"></b-avatar>
                        <div class="bottom-cards-text">
                          <p>English Language</p>
                          <p>
                            <span>10AM Bascic 2</span>
                          </p>
                        </div>
                      </div>
                      <div class="bottom-card-details">
                        <b-avatar text="e"></b-avatar>
                        <div class="bottom-cards-text">
                          <p>Economics</p>
                          <p>
                            <span>1PM Bascic 8</span>
                          </p>
                        </div>
                      </div>
                      <div class="bottom-card-details">
                        <b-avatar text="m"></b-avatar>
                        <div class="bottom-cards-text">
                          <p>Music</p>
                          <p>
                            <span>10AM Bascic 5</span>
                          </p>
                        </div>
                      </div>
                      <p class="bottom-card-link pull-right">View all Lessons</p>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="dashboard-bottom-cards">
                    <b-card>
                      <div class="note-card-top">
                        <h6>Syllabus</h6>
                        <router-link to="/admin/syllabus" class="mb-2">
                          <b-button variant="outline-primary">Add Syllabus</b-button>
                        </router-link>
                      </div>
                      <div class="note-card-details">
                        <b-table :items="syllabus" :fields="fields" hover>
                          <template v-slot:cell(class)="data">{{data.item.myclass}}</template>
                        </b-table>
                      </div>
                    </b-card>
                  </div>
                </b-col>
                <b-col>
                  <div class="dashboard-bottom-cards">
                    <b-card>
                      <div class="note-card-top">
                        <h6>Curriculum</h6>
                        <router-link to="/admin/curriculum/create" class="mb-2">
                          <b-button variant="outline-primary">Add Curriculum</b-button>
                        </router-link>
                      </div>
                      <div class="note-card-details">
                        <b-table :items="curriculum" :fields="field" hover>
                          <template v-slot:cell(class)="data">{{data.item.subject}}</template>
                        </b-table>
                      </div>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      tutors: [],
      students: [],
      classes: [],
      syllabus: [],
      curriculum: [],
      fields: ["class", "subject"],
      field: ["class"],
    };
  },
  mounted() {
    this.getStudents();
    this.getClasses();
    this.getTutors();
    this.getSyllabus();
    this.getCurriculum();
  },
  methods: {
    getStudents() {
      axios
        .get("/api/admin-get-students", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.students = res.data;
          }
        });
    },
    getCurriculum() {
      axios
        .get("/api/curriculum", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.curriculum = res.data;
          }
        });
    },
    getTutors() {
      axios
        .get("/api/tutor", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tutors = res.data;
          }
        });
    },
    getClasses() {
      axios
        .get("/api/classes", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.classes = res.data;
          }
        });
    },
    getSyllabus() {
      axios
        .get("/api/syllabus", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.syllabus = res.data;
          }
        });
    },
  },
};
</script>

<style scoped>
</style>