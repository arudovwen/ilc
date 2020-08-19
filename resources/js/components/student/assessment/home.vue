<template>
 
  <div class="student-assessment">
   
      <b-tabs>
        <b-tab title="Assignment" active>
            <b-table :fields="fields" :items="assignment" class="main-table">
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(title)="data">
                <span @click="view(data.item.id)">{{data.item.title}}</span>
              </template>
            </b-table>
        
        </b-tab>
         <b-tab title="Quiz" >
            <b-table :fields="fields" :items="quiz" class="main-table">
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(title)="data">
                <span @click="view(data.item.id)">{{data.item.title}}</span>
              </template>
            </b-table>
        
        </b-tab>
         <b-tab title="Test" >
            <b-table :fields="fields" :items="test" class="main-table">
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(title)="data">
                <span @click="view(data.item.id)">{{data.item.title}}</span>
              </template>
            </b-table>
        
        </b-tab>
         <b-tab title="Examination" >
            <b-table :fields="fields" :items="examination" class="main-table" >
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
              <template v-slot:cell(title)="data">
                <span @click="view(data.item.id)">{{data.item.title}}</span>
              </template>
            </b-table>
        
        </b-tab>
      </b-tabs>
  

  </div>
</template>


<script>
export default {
  props: ["student"],
  data() {
    return {
      tutors: [],
      busy: true,
      items: [],
      item: false,
      quiz: [],
      test: [],
      assignment: [],
      examination: [],
      fields: [
        "Sn",
        "subject",
        {
          key: "title",
          sortable: true,
        },
        "status"
      ],
    };
  },
  watch: {
    item: "selectAll",
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
        .catch();
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
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.$router.push(`/student/tutor/update/${id}`);
    },
    view(id) {
      this.$router.push(`/student/assessment/view/${id}`);
    },
  },
};
</script>

<style scoped>
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
  margin-top: 20px;
}
.student-assessment{
  padding:40px 20px;
}

</style>