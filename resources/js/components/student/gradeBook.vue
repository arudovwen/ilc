<template>
  <div>
    <b-container>
    
      <b-row>
        <b-col>
          <b-card no-body>
            <b-tabs card vertical end>
              <b-tab title="Overall" active>
                <div class="grade_book overall-gradebook-student">
                  <h5 class="mb-5">Overall Grades</h5>
                


                  <b-table-simple>
                    <b-thead>
                      <b-tr>
                        <b-th></b-th>
                       
                          <b-th>Average percentage</b-th>
                      </b-tr>
                    </b-thead>
                    <b-tbody v-if="overall.length">
                      <b-tr>
                        <b-th>Attendance</b-th>
                        <b-td>{{handleAttendance() }}%</b-td>
                     
                      </b-tr>
                       <b-tr>
                        <b-th>Participation</b-th>
                        <b-td>{{handleParticipation()}}%</b-td>
                         
                      </b-tr>
                       <b-tr>
                        <b-th>Assignment</b-th>
                        <b-td>  {{handleAss('assignment').toFixed()}}%</b-td>
                      
                      </b-tr>
                       <b-tr>
                        <b-th>Quiz</b-th>
                        <b-td>  {{handleAss('quiz').toFixed()}}%</b-td>
                         
                      </b-tr>
                       <b-tr>
                        <b-th>Test</b-th>
                        <b-td>  {{handleAss('test').toFixed()}}%</b-td>
                            
                      </b-tr>
                       <b-tr>
                        <b-th>Examination</b-th>
                        <b-td>  {{handleAss('exam').toFixed()}}%</b-td>
                         
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </div>
              </b-tab>
                 <b-tab title="Attendance">
                <div class="grade_book">
                  <h5 class="mb-5">Attendance Grades</h5>
                  <b-table :items="attendances" :fields="att" bordered>
                   
                  </b-table>
                </div>
              </b-tab>
              <b-tab title="Participation">
                <div class="grade_book">
                  <h5 class="mb-5">Participation Grades</h5>
                  <b-table :items="attendances" :fields="parts" bordered>
                    <template v-slot:cell(score)="data">
                      <div>
                        {{data.item.participation_score}}
                      </div>
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
                         <template v-slot:cell(average_percent)="data">
                          <div>{{(((data.item.total_score/data.item.overall)* 100).toFixed(2)) || 0}}%</div>
                        </template>

                        <template v-slot:cell(action)="data">
                          <div class="cpointer" @click="preview(data.item)">View Result</div>
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
     <b-modal id="preview" size="lg" title="Result" hide-footer>
     <Preview :form="form" :options="options"/>
  </b-modal>
  </div>
</template>
<script>
import Preview from "./preview";
export default {
  props: ["student"],
  data() {
    return {
       participation_percent: 0.1,
      att_percent: 0.1,
      test_percent: 0.1,
      ass_percent: 0.1,
      quiz_percent: 0.1,
      exam_percent: 0.5,
      quiz:[],
      test:[],
      examination:[],
      assignment:[],
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
        "Average_percent",
        "action",
      ],
      
      parts: ["day", "subject", "score"],
      att: ["day", 'subject',"score"],
      assessmentType: [
        { value: "", text: "  Type" },
        { value: "assignment", text: "Assignment" },
        { value: "quiz", text: "Quiz" },
        { value: "test", text: "Test" },
        { value: "exam", text: "Examination" },
      ],
      options:{},
      form:[],
      part:[],
      partsum:0,
      attendances:[],
      sumAttendance:[]
    };
  },
  components: {
    Preview,
  },
  computed: {
    participation() {
      return this.ass_result.filter((item) => item.type == "participation");
    },
    attendance() {
      return this.ass_result.filter((item) => item.type == "attendance");
    },
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
    this.getPart()
    this.getAttendance()
    this.getData()
  },
  methods: {
     getData() {
      let student = JSON.parse(localStorage.getItem("typeStudent"));
      axios
        .get(`/api/student-assessments/${student.level}`, {
          headers: {
            Authorization: `Bearer ${student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data;
            this.items.forEach((item) => {
              if (item.type == "quiz") {
                this.quiz.push(item);
              }
              if (item.type == "test") {
                this.test.push(item);
              }
              if (item.type == "assignment") {
                this.assignment.push(item);
              }
              if (item.type == "exam") {
                this.examination.push(item);
              }
            });
          }
        })
        .catch((err) => {
          err.response.data;
          console.log(" err.response.data", err.response.data);
        });
    },
    handleAss(type){
      var arr = []
       this.ass_result.forEach(item=>{
         if(item.type == type){
        let div =   item.total_score/item.overall
        let times = div * 100
        if (times) {
             arr.push(times)
        }
   
         }
       })

       var sum = arr.reduce((a,b)=>{
       
         return a  + b 
       },0)
      
       if (type== 'assignment') {
          return sum/this.assignment.length || 0
       }
       if (type== 'exam') {
          return sum/this.examination.length || 0
       }
       if (type== 'test') {
          return sum/this.test.length || 0
       }
       if (type== 'quiz') {
          return sum/this.quiz.length || 0
       }
      
    },
     handleParticipation(id) {
      var newarr = [];
      this.attendances.forEach((item) => {
       
          newarr.push(item.participation_score);
        
      });

      var sum = newarr.reduce((a, b) => {
        return a + b;
      }, 0);
     
      return( sum / newarr.length) || 0;
    },
    handleAttendance(id) {
      var newarr = [];
      var arr = [];
      this.attendances.forEach((item) => {
       
          arr.push(item.score);
        
      });

      var sum = arr.reduce((a, b) => {
        return a + b;
      }, 0);
     
      return( (sum / arr.length)  * 100) || 0 ;
    },
    preview(val) {
    
      this.options.title = val.title
      this.options.level = val.level
        this.options.subject = val.subject
         this.options.total_score = val.total_score
           this.options.overall = val.overall
        this.form = JSON.parse(val.record)
        this.$bvModal.show('preview')
      
    },
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
     getPart() {
      axios
        .get(`/api/student-part`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
            this.part = res.data
            let score =[]
          res.data.forEach(item=>{
         score.push(item.score)
          })
          this.partsum = score.reduce((a,b)=>{
           return a+b
          },0)
        });
    },
     getAttendance() {
      axios
        .get(`/api/student-sorted-attendance`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.attendances = res.data;

       

          }
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
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c4c4c4;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>