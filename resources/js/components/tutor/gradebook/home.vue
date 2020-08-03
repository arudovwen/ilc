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
  <div></div>
</template>

<script>
export default {
  data() {
    return {
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
</style>