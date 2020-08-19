<template>
  <!-- <div>
    <b-container>
      <b-row>
        <b-col class="p-2">
          <b-table :items="classes" :fields="field1" hover>
            <template v-slot:cell(class_name)="data"  >
              <span @click="selectClass(data.item.class_name)">{{data.item.class_name}}</span>
            </template>
          </b-table>
        </b-col>
        <b-col class="p-2">
           <b-table :items="subjects" :fields="field2" hover>
            <template v-slot:cell(name)="data">
              <span @click="selectSubject(data.item.name)">{{data.item.name}}</span>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row class="justify-content-center flex-column align-items-center">
       
        <table class="table table-bordered w-25">
          
          <tbody>
            <tr>
              <td scope="row">{{name}}</td>
              <td>{{subject}}</td>
             
            </tr>
            
           
          </tbody>
        </table>
        <b-button @click="viewBook">View</b-button>
       
      </b-row>
    </b-container>
  </div> -->
  <div>
 <div class="outer-grade-book container">
     <div class="grade-book">
     <div class="sort-table">
      <b-container>
         <b-row>
         <b-col md="2">
           <p><strong>Assignment Grades</strong></p>
         </b-col>
         <b-col md="8">
           <b-container>
             <b-row>
               <b-col md="3"> <b-form-select v-model="selected" :options="assessmentType"></b-form-select></b-col>
               <b-col md="3"> <b-form-select v-model="selected" :options="assessmentClass"></b-form-select></b-col>
               <b-col md="3"> <b-form-select v-model="selected" :options="assessmentSubject"></b-form-select></b-col>
               <b-col md="3"><b-form-select v-model="selected" :options="assessmentTerm"></b-form-select></b-col>
             </b-row>
           </b-container>
         </b-col>
         <b-col md="2">
            <b-form-input placeholder="Search Student " class="search rounded-pill"></b-form-input>
         </b-col>
       </b-row>
      </b-container>
        
     </div>
     <hr>
      <div class="gradebook-table">
      <b-table striped hover  :items="tableitems"></b-table>
    </div>
   </div>
        
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
      subjects:[],
      subject:'',
      name:'',
      field1:[
       'class_name'
        ],
         field2:[
       'name'
        ],
         tableitems: [
          { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70, module1:30, module2:40, module3:10, module4:15, module5:30, module5:40, modlue7:30, module8:22, module9:40, module10:20, module11:50,module12:12, module13:50,module14:40, module15:1,module16:2, module17:17, module18:18, module19:19 },
         { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
         { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
          { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
          { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
           { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
            { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
             { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
              { name: 'sucess ahon', assignment: '20', quiz: '35', test: 40, examination:70 },
        ],
               assessmentType: [
          { value: null, text: ' Select Assessment' },
          { value: 'a', text: 'Assignment' },
          { value: 'b', text: 'Quiz' },
          { value: 'c', text: 'Test',},
          { value: 'd', text: 'Examination',}
        ],
                assessmentClass: [
          { value: null, text: 'Select Class' },
          { value: 'a', text: 'Assignment' },
          { value: 'b', text: 'Quiz' },
          { value: 'c', text: 'Test',},
          { value: 'd', text: 'Examination',}
        ],
                assessmentSubject: [
          { value: null, text: 'Select Subject' },
          { value: 'a', text: 'Assignment' },
          { value: 'b', text: 'Quiz' },
          { value: 'c', text: 'Test',},
          { value: 'd', text: 'Examination',}
        ],
                assessmentTerm: [
          { value: null, text: 'Select Term' },
          { value: 'a', text: 'First' },
          { value: 'b', text: 'Second' },
          { value: 'c', text: 'Third',},
         
        ]
    };
  },
  mounted() {
    this.getData();
    this.getClasses();
    this.getSubjects()
  },
  methods: {
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
    selectClass(name){
      this.name = name
    },
    selectSubject(name){
     this.subject = name
    },
    viewBook(){
      this.$router.push(`/tutor/gradebook/view/${this.subject.replace(/ /g, '-')}/${this.name.replace(/ /g, '-')}`)
    }
  },
};
</script>
<style scoped>

.gradebook-table{
  font-family: "Montserrat";
  
}

.grade-book{
  background: #fff;
  padding: 15px;

}
.outer-grade-book{
  padding-top: 20px;
}
.search{
  /* width:250px; */
  border-color:#41cee2
}
.sort-table p{
  font-size: 14px;
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