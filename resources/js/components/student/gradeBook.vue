<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card no-body>
            <b-tabs card vertical end>
              <b-tab title="Overall" active>
                <div class="grade_book">
                  <h5 class="mb-5">Overall Grades</h5>
                  <b-table stacked :items="overall" :fields="grade_fields" bordered>
                    <template v-slot:cell(name)="data">
                      <div>{{data.item.user.name}}</div>
                    </template>
                     <template v-slot:cell(quiz)="data">
                      <div>{{data.item.average_quiz?Math.round(data.item.quiz/data.item.average_quiz):0}}</div>
                    </template>
                     <template v-slot:cell(assignment)="data">
                       <div>{{data.item.average_assignment?Math.round(data.item.assignment/data.item.average_assignment):0}}</div>
                    </template>
                     <template v-slot:cell(test)="data">
                      <div>{{data.item.average_test?Math.round(data.item.test/data.item.average_test):0}}</div>
                    </template>
                  </b-table>
                </div>
              </b-tab>
               <b-tab title="Participation" >
                <div class="grade_book">
                  <h5 class="mb-5">Overall Grades</h5>
                  <b-table stacked :items="overall" :fields="grade_fields" bordered>
                    <template v-slot:cell(name)="data">
                      <div>{{data.item.user.name}}</div>
                    </template>
                  </b-table>
                </div>
              </b-tab>
               <b-tab title="Attendance" >
                <div class="grade_book">
                  <h5 class="mb-5">Overall Grades</h5>
                  <b-table stacked :items="overall" :fields="grade_fields" bordered>
                    <template v-slot:cell(name)="data">
                      <div>{{data.item.user.name}}</div>
                    </template>
                  </b-table>
                </div>
              </b-tab>
              <b-tab title="Assessments">
                <div class="grade_book">
                  <h5>Assessment Grades</h5>
                  <b-row>
                    <b-col md="9">
                      <b-container>
                        <b-row>
                          <b-col md="3">
                            <b-form-select v-model="type" :options="assessmentType"></b-form-select>
                          </b-col>
                          <b-col md="3">
                            <b-form-select v-model="subject">
                              <b-form-select-option value>Subject</b-form-select-option>
                              <b-form-select-option
                                :value="item.name.toLowerCase()"
                                v-for="(item,idx) in subjects"
                                class="toCaps"
                                :key="idx"
                              >{{item.name}}</b-form-select-option>
                            </b-form-select>
                          </b-col>
                          <b-col md="2">
                            <b-form-select></b-form-select>
                          </b-col>
                          <b-col md="2">
                            <span @click="refresh">
                              Reset
                              <i class="fa fa-refresh" aria-hidden="true"></i>
                            </span>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-col>
                    <b-col md="3">
                      <b-form-input
                        placeholder="Search title"
                        v-model="search"
                        class="search rounded-pill"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-table
                        id="table-transition-example"
                        sticky-header
                        :fields="fields1"
                        head-variant="light"
                        :items="sortData"
                        :tbody-transition-props="transProps"
                        primary-key="id"
                      >
                        <template v-slot:cell(score)="data">
                      <div>{{Math.round(data.item.total_score)}}</div>
                    </template>
                      <template v-slot:cell(total_mark)="data">
                      <div>{{Math.round(data.item.overall)}}</div>
                    </template>
                      </b-table>
                    </b-col>
                  </b-row>
                </div>
              </b-tab>
              
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ["student"],
  data() {
    return {
      transProps: {
        // Transition name
        name: "flip-list",
      },
      type: "",
      overall: [],
      search: "",
      subjects: [],
      subject: "",
      ass_result: [],
      result: "",
      fields1: [
        { key: "subject", sortable: true },
        { key: "type", sortable: true },
        { key: "title", sortable: true },
        { key: "score", sortable: true },
        "total_mark",
      ],
      grade_fields: [
        { key: "name", sortable: true },
        "participation",
        "attendance",
        "quiz",
        "assignment",
        "test",
        "examination",
        // "total_score",
      ],
      assessmentType: [
        { value: "", text: "  Type" },
        { value: "assignment", text: "Assignment" },
        { value: "quiz", text: "Quiz" },
        { value: "test", text: "Test" },
        { value: "examination", text: "Examination" },
      ],
    };
  },
  computed: {
    sortData() {
      var search = this.ass_result.filter((d) => {
        return d.title.toLowerCase().includes(this.search.toLowerCase());
      });

      var subject = search.filter((sub) => {
        return sub.subject.toLowerCase().includes(this.subject.toLowerCase());
      });
      var type = subject.filter((sub) => {
        return sub.type.toLowerCase().includes(this.type.toLowerCase());
      });
      return type;
    },
  },
  mounted() {
    this.getSubjects();
    this.getAss();
    this.getOverall();
  },
  methods: {
    refresh() {
      this.subject = this.search = this.type = "";
    },
    getSubjects() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/student-all-subjects`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.subjects = res.data;
          }
        });
    },
    getAss() {
      axios
        .get(`/api/get-assessment-result`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          this.ass_result = res.data;
        });
    },
    getOverall() {
      axios
        .get(`/api/student-grade-book/${this.$props.student.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          this.overall = res.data;
        });
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 50px;
  padding-bottom: 70px;
}

.grade_book {
  max-height: 80vh;
  overflow: auto;
}
</style>