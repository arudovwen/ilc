<template>
  <b-container>
    <b-card no-body class="assess">
      <b-tabs card justified>
        <b-tab title="Assignment" active>
          <b-row class="justify-content-end my-5">
            <b-col cols="4">
              <b-input-group>
                <b-form-input  v-model="search" placeholder="Search title"></b-form-input>
                <b-input-group-append>
                
                    <div class="create-btn">
                      <div class="btn btn-create">Search</div>
                    </div>
                  
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
          <b-card-text>
            <b-table :fields="fields" :items="sortedAss" >
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(action)="data">
                <span @click="checkPresence(data.item)">View</span>
              </template>
                <template v-slot:cell(title)="data">
                <div class="main-title">
                  <div class="title">{{data.item.title}}</div>
                 <div class="text-muted">{{data.item.description}}</div>
                </div>
              </template>
              <template v-slot:cell(deadline)="data">
                <span>{{data.item.end | moment('DD MMM, hh:mm A')}}</span>
              </template>
              <template v-slot:cell(status)="data">
                <span>{{data.item.end |timeStatus}}</span>
              </template>
            </b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="Quiz">
            <b-row class="justify-content-end my-5">
            <b-col cols="4">
              <b-input-group>
                <b-form-input  v-model="search" placeholder="Search quiz title"></b-form-input>
                <b-input-group-append>
                
                    <div class="create-btn">
                      <div class="btn btn-create">Search</div>
                    </div>
                  
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
          <b-card-text>
            <b-table :fields="fields" :items="sortedQuiz" >
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(action)="data">
                <span @click="checkPresence(data.item)">View</span>
              </template>
                <template v-slot:cell(title)="data">
                <div class="main-title">
                  <div class="title">{{data.item.title}}</div>
                 <div class="text-muted">{{data.item.description}}</div>
                </div>
              </template>
              <template v-slot:cell(deadline)="data">
                <span>{{data.item.end | moment('DD MMM, hh:mm A')}}</span>
              </template>
              <template v-slot:cell(status)="data">
                <span>{{data.item.end |timeStatus}}</span>
              </template>
            </b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="Test">
           <b-row class="justify-content-end my-5">
            <b-col cols="4">
              <b-input-group>
                <b-form-input  v-model="search" placeholder="Search Test title"></b-form-input>
                <b-input-group-append>
                
                    <div class="create-btn">
                      <div class="btn btn-create">Search</div>
                    </div>
                  
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
          <b-card-text>
            <b-table :fields="fields" :items="sortedTest" >
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(action)="data">
                <span @click="checkPresence(data.item)">View</span>
              </template>
              <template v-slot:cell(deadline)="data">
                <span>{{data.item.end | moment('DD MMM, hh:mm A')}}</span>
              </template>
                <template v-slot:cell(title)="data">
                <div class="main-title">
                  <div class="title">{{data.item.title}}</div>
                 <div class="text-muted">{{data.item.description}}</div>
                </div>
              </template>
              <template v-slot:cell(status)="data">
                <span>{{data.item.end |timeStatus}}</span>
              </template>
            </b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="Examination">
           <b-row class="justify-content-end my-5">
            <b-col cols="4">
              <b-input-group>
                <b-form-input v-model="search" placeholder="Search title"></b-form-input>
                <b-input-group-append>
                
                    <div class="create-btn">
                      <div class="btn btn-create">Search</div>
                    </div>
                  
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>
          <b-card-text>
            <b-table :fields="fields" :items="sortedExam" >
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(action)="data">
                <span @click="checkPresence(data.item)">View</span>
              </template>
       <template v-slot:cell(title)="data">
                <div class="main-title">
                  <div class="title">{{data.item.title}}</div>
                 <div class="text-muted">{{data.item.description}}</div>
                </div>
              </template>
              <template v-slot:cell(deadline)="data">
                <span>{{data.item.end | moment('DD MMM, hh:mm A')}}</span>
              </template>
              <template v-slot:cell(status)="data">
                <span>{{data.item.end |timeStatus}}</span>
              </template>
            </b-table>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>


<script>
export default {
  props: ["student"],
  data() {
    return {
      search:'',
      tutors: [],
      busy: true,
      items: [],
      item: false,
      quiz: [],
      test: [],
      assignment: [],
      examination: [],
      fields: [
       {
          key: "title",
          sortable: true,
        },
        "subject",
        {
          key: "title",
          sortable: true,
        },
        "deadline",
        "status",
        "action",
      ],
    };
  },
  watch: {
    item: "selectAll",
  },
   computed: {
    sortedExam(){
      return this.examination.filter(i=>{
        return i.title.toLowerCase().includes(this.search.toLowerCase())
      
      })
    },
    sortedTest(){
      return this.test.filter(i=>{
        return i.title.toLowerCase().includes(this.search.toLowerCase())
      
      })
    },
    sortedAss(){
      return this.assignment.filter(i=>{
        return i.title.toLowerCase().includes(this.search.toLowerCase())
      
      })
    },
    sortedQuiz(){
      return this.quiz.filter(i=>{
        return i.title.toLowerCase().includes(this.search.toLowerCase())
      
      })
    },

  },
  mounted() {
    this.getData();
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
              if (item.type == "examination") {
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
    selectAll() {
      if (this.item) {
        this.items = [];
        this.tutors.forEach((it) => {
          this.items.push(it.id);
        });
      } else {
        this.items = [];
      }
    },

    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/tutor/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getstudents();
            }
          });
      }
    },
    multiDrop() {
      let del = confirm("Are you sure about this?");
      let data = {
        data: this.items,
      };
      if (del) {
        axios
          .post("/api/multi-tutor-drop", data, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getstudents();
            }
          })
          .catch((err) => {
            console.log("del -> err", err.response.data);
          });
      }
    },
    edit(id) {
      this.$router.push(`/student/tutor/update/${id}`);
    },
    checkPresence(info) {
      let data = {
        subject: info.subject,
        type: info.type,
        title: info.title,
      };

      axios
        .post("/api/check-assessment", data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.status == "begin") {
              this.view(info.id, info.end);
            } else {
              
              this.$toasted.error("Assessment already submitted");
            }
          }
        });
    },
    view(id, num) {
      let today = Date.parse(new Date());
      let d = Date.parse(num);
      if (d < today) {
        this.$toasted.error("Assessment deadline reached");
      } else {
        this.$router.push(`/student/assessment/view/${id}`);
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 50px;
  padding-bottom: 70px;
}
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
}

.hiden {
  opacity: 0;
}
.overall-tab {
  padding-top: 20px;
}
.main-table {
  padding-top: 20px;
}
.student-assessment {
  padding: 40px 20px;
}
.card-header {
  background-color: green;
}
.btn-create {
  background: rgba(19, 166, 153, 0.9) !important;
  color: #fff;
}
.title{
  color: rgba(19, 166, 153, 0.9) ;
  font-weight:bold;
}
</style>