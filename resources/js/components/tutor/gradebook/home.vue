<template>
  <div>
    <div class="outer-grade-book container">
      <b-tabs>
        <b-tab title="Overall Grades" class="overall">
          <div class="grade-book">
            <div class="sort-table">
              <b-container>
                <b-row>
                  <b-col md="2">
                    <p>
                      <strong>Overall Grades</strong>
                    </p>
                  </b-col>
                  <b-col md="6">
                    <b-container>
                      <b-row>
                        <b-col md="4">
                          <b-form-select v-model="selected"></b-form-select>
                        </b-col>
                        <b-col md="4">
                          <b-form-select v-model="selected"></b-form-select>
                        </b-col>
                        <b-col md="4">
                          <b-form-select v-model="selected"></b-form-select>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-col>
                  <b-col md="4">
                    <b-container>
                      <b-row>
                        <b-col md="6">
                          <b-form-input placeholder="Search Student " class="search rounded-pill"></b-form-input>
                        </b-col>
                        <b-col md="6">
                          <div class="export">
                            <div class="btn btn-export">
                              Export
                              <i class="fa fa-external-link"></i>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
          <hr />
          <div class="overallgradebook-table">
            <b-table striped hover :items="overalltableitems"></b-table>
          </div>
        </b-tab>
        <b-tab title="Assessment Grades">
          <div class="grade-book">
            <div class="sort-table">
              <b-container>
                <b-row>
                  <b-col md="2">
                    <p>
                      <strong>Assignment Grades</strong>
                    </p>
                  </b-col>
                  <b-col md="8">
                    <b-container>
                      <b-row>
                        <b-col md="3">
                          <b-form-select v-model="selected" :options="assessmentType"></b-form-select>
                        </b-col>
                        <b-col md="3">
                          <b-form-select v-model="selected" :options="assessmentClass"></b-form-select>
                        </b-col>
                        <b-col md="3">
                          <b-form-select v-model="selected" :options="assessmentSubject"></b-form-select>
                        </b-col>
                        <b-col md="3">
                          <b-form-select v-model="selected" :options="assessmentTerm"></b-form-select>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-col>
                  <b-col md="2">
                    <b-form-input placeholder="Search Student " class="search rounded-pill"></b-form-input>
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <hr />
            <div class="gradebook-table">
              <b-table striped hover sticky-header :fields="assessmentField" :items="ass"></b-table>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      items: [],
      classes: [],
      subjects: [],
      subject: "",
      name: "",
      result: [],
      assessmentField: ["name"],
      field1: ["class_name"],
      fields: { Participation: "participate", Attendance: "attendance" },
      items: [
        { participate: "Joe", attendance: 33 },
        { participate: "Sue", attendance: 77 },
      ],

      field2: ["name"],
      overalltableitems: [
        {
          name: "success ahon",
          participation: 20,
          attendance: 10,
          quiz: 20,
          assignment: 20,
          test: 20,
          examination: 60,
          total: 80,
        },
        {
          name: "success ahon",
          participation: 20,
          attendance: 10,
          quiz: 20,
          assignment: 20,
          test: 20,
          examination: 60,
          total: 80,
        },
      ],
      tableitems: [
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
          module1: 30,
          module2: 40,
          module3: 10,
          module4: 15,
          module5: 30,
          module5: 40,
          modlue7: 30,
          module8: 22,
          module9: 40,
          module10: 20,
          module11: 50,
          module12: 12,
          module13: 50,
          module14: 40,
          module15: 1,
          module16: 2,
          module17: 17,
          module18: 18,
          module19: 19,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
        {
          name: "sucess ahon",
          assignment: "20",
          quiz: "35",
          test: 40,
          examination: 70,
        },
      ],
      assessmentType: [
        { value: null, text: " Select Assessment" },
        { value: "a", text: "Assignment" },
        { value: "b", text: "Quiz" },
        { value: "c", text: "Test" },
        { value: "d", text: "Examination" },
      ],
      assessmentClass: [
        { value: null, text: "Select Class" },
        { value: "a", text: "Assignment" },
        { value: "b", text: "Quiz" },
        { value: "c", text: "Test" },
        { value: "d", text: "Examination" },
      ],
      assessmentSubject: [
        { value: null, text: "Select Subject" },
        { value: "a", text: "Assignment" },
        { value: "b", text: "Quiz" },
        { value: "c", text: "Test" },
        { value: "d", text: "Examination" },
      ],
      assessmentTerm: [
        { value: null, text: "Select Term" },
        { value: "a", text: "First" },
        { value: "b", text: "Second" },
        { value: "c", text: "Third" },
      ],
      ass: [],
      names: [],
    };
  },
  mounted() {
    this.getData();
    this.getClasses();
    this.getSubjects();
    this.getResult();
  },
  methods: {
    getResult() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get("/api/get-tutor-assessment", {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            var obj = {};

            this.result = res.data;
            this.result.sort(function(a, b){
                return a.user_id-b.user_id
            })

            this.result.forEach((item) => {
              var obj = {};
              this.assessmentField.push(item.title);
              if (this.ass.length == 0) {
                obj[item.title] = item.total_score;
                obj.name = item.user.name;

                this.ass.push(obj);
              } else {
                this.ass.forEach((ite, index) => {
                  if (ite.name == item.user.name) {
                    ite[item.title] = item.total_score;
                  } else {
                    obj[item.title] = item.total_score;
                    obj.name = item.user.name;
                      console.log("getResult -> obj", obj)
                     
                         this.ass.push(obj);
                      
                   
                  
                  }
                });
              }
            });
  
            // console.log("getResult -> this.ass", this.ass);
            //    let jsonObject = this.ass.map(JSON.stringify);
            // let uniqueSet = new Set(jsonObject);
            // let perCourse = Array.from(uniqueSet).map(JSON.parse);
            // console.log("getResult -> perCourse", perCourse)
          }
        });
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
            this.classes = res.data;
          }
        });
    },
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
    getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/tutor-assessment-result`, {
          headers: { Authorization: `Bearer ${tutor.access_token}` },
        })
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data.data;
          }
        });
    },
    selectClass(name) {
      this.name = name;
    },
    selectSubject(name) {
      this.subject = name;
    },
    viewBook() {
      this.$router.push(
        `/tutor/gradebook/view/${this.subject.replace(
          / /g,
          "-"
        )}/${this.name.replace(/ /g, "-")}`
      );
    },
  },
};
</script>
<style scoped>
.overallgradebook-table {
  font-family: "Montserrat";
}
.gradebook-table {
  font-family: "Montserrat";
}

.grade-book {
  background: #fff;
  padding: 15px;
}
.overall {
  background: #fff;
}
.outer-grade-book {
  padding-top: 20px;
}
.search {
  /* width:250px; */
  border-color: #41cee2;
}
.sort-table p {
  font-size: 14px;
}
.btn-export {
  border: 1px solid #c4c4c4;
}
.b-table-sticky-header {
  max-height: 80vh;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(34, 202, 222, 0.25);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>