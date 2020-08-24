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
                  <b-col md="5">
                    <b-container>
                      <b-row>
                        <b-col md="4">
                         <b-form-select v-model="my_class">
                            <b-form-select-option
                              :value="item.class_name.toLowerCase()"
                              v-for="(item,idx) in all_class"
                              class="toCaps"
                              :key="idx"
                            >{{item.class_name}}</b-form-select-option>
                          </b-form-select>
                        </b-col>
                        <!-- <b-col md="4">
                          <b-form-select v-model="selected"></b-form-select>
                        </b-col>
                        <b-col md="4">
                          <b-form-select v-model="selected"></b-form-select>
                        </b-col> -->
                      </b-row>
                    </b-container>
                  </b-col>
                  <b-col md="5">
                    <b-container>
                      <b-row>
                        <b-col md="8">
                          <b-form-input placeholder="Search Student name" v-model="overall_search" class="search rounded-pill"></b-form-input>
                        </b-col>
                        <b-col md="4">
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
            <b-table striped hover :fields="grade_fields" :items="sortGrades">
              <template v-slot:cell(name)="data">
                <div>
                  {{data.item.user.name}}
                </div>
              </template>
            </b-table>
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
                         <b-col md="2">
                          <b-form-select v-model="my_class">
                            <b-form-select-option
                              :value="item.class_name.toLowerCase()"
                              v-for="(item,idx) in all_class"
                              class="toCaps"
                              :key="idx"
                            >{{item.class_name}}</b-form-select-option>
                          </b-form-select>
                        </b-col>
                     
                        <b-col md="3">
                          <b-form-select v-model="type" :options="assessmentType"></b-form-select>
                        </b-col>
                         <b-col md="3">
                          <b-form-select v-model="subject">
                            <b-form-select-option value="">Select subject</b-form-select-option>
                            <b-form-select-option
                              :value="item.name.toLowerCase()"
                              v-for="(item,idx) in subjects"
                              class="toCaps"
                              :key="idx"
                            >{{item.name}}</b-form-select-option>
                          </b-form-select>
                        </b-col>
                        <b-col md="2">
                          <b-form-select ></b-form-select>
                        </b-col>
                         <b-col md="2">
                         <span @click="refresh"> Reset <i class="fa fa-refresh" aria-hidden="true"></i></span>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-col>
                  <b-col md="2">
                    <b-form-input placeholder="Search Student" v-model="search" class="search rounded-pill"></b-form-input>
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
      overall_search:'',
      search:'',
      subject: "",
      my_class: "",
      subjects: [],
      type:'',
      all_class: [],
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
     
      assessmentType: [
        { value: '', text: " Select Assessment" },
        { value: "assignment", text: "Assignment" },
        { value: "quiz", text: "Quiz" },
        { value: "test", text: "Test" },
        { value: "examination", text: "Examination" },
      ],
     
      ass: [],
      names: [],
      grade_book:[],
      grade_fields:[
        {key:'name',sortable:true},
        'participation',
        'attendance',
        'quiz',
        'assignment',
        'test',
        'examination',
        'total_score'
      ]
    };
  },
  mounted() {
       this.getBook()
    this.getData();
    this.getClasses();
    this.getSubjects();
    this.getResult();
 
  },
  computed:{
    sortData(){
     var search = this.result.filter(d=>{
      return  d.user.name.toLowerCase().includes(this.search.toLowerCase())
      })
      var level=  search.filter(sub=>{
      return  sub.level.toLowerCase().includes(this.my_class.toLowerCase())
      })

       var subject = level.filter(sub=>{
      return  sub.subject.toLowerCase().includes(this.subject.toLowerCase())
      })
     var type = subject.filter(sub=>{
      return  sub.type.toLowerCase().includes(this.type.toLowerCase())
      })
      return type
    },
     sortGrades(){
     var search = this.grade_book.filter(d=>{
      return  d.user.name.toLowerCase().includes(this.overall_search.toLowerCase())
      })
      var level=  search.filter(sub=>{
      return  sub.level.toLowerCase().includes(this.my_class.toLowerCase())
      })

    //    var subject = level.filter(sub=>{
    //   return  sub.subject.toLowerCase().includes(this.subject.toLowerCase())
    //   })
    //  var type = subject.filter(sub=>{
    //   return  sub.type.toLowerCase().includes(this.type.toLowerCase())
    //   })
      return level
    },
  },
   watch: {
      sortData(newValue){
         this.handleData(newValue)
       
      }
    },
  
   
  methods: {
    refresh(){
        this.subject = this.my_class = this.search = this.type =''
    },
    getSubjects() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/tutor-all-subjects`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.subjects = res.data;
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
            this.all_class = res.data;
            this.my_class = res.data[0].class_name.toLowerCase()
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
    handleData(arr){
       var obj = {};
       this.ass = []
       this.assessmentField=['name']
       arr.forEach((item) => {
              this.assessmentField.push(item.title);
              if (this.ass.length == 0) {
                obj[item.title] = item.total_score;
                obj.name = item.user.name;

                this.ass.push(obj);
              } else {
                this.ass.forEach((ite, index) => {
                  obj = {};
                  if (Object.values(ite).includes(item.user.name)) {
                    ite[item.title] = item.total_score;
                  } else {
                    obj[item.title] = item.total_score;
                    obj.name = item.user.name;

                    return obj;
                  }
                  return obj;
                });

                if (Object.keys(obj).length !== 0) {
                  this.ass.push(obj);
                }
              }
            });
    },
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
           

            this.result = res.data;
            this.result.sort(function (a, b) {
              return a.user_id - b.user_id;
            });

          // this.handleData()
          }
        });
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
    getBook() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
     
      axios
        .get(`/api/tutor-grade-books`, {
          headers: { Authorization: `Bearer ${tutor.access_token}` },
        })
        .then((res) => {
          if (res.status == 200) {
            this.grade_book = res.data;
          }
        });
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