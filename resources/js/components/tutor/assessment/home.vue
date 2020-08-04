<template>
  <div class="body">
    <nav class="mb-5">
      <router-link to="/tutor/quiz">
        <b-button block class="shadow-sm reg-btn text-center">Quiz</b-button>
      </router-link>

      <router-link to="/tutor/exam">
        <b-button block class="shadow-sm reg-btn text-center">Examination</b-button>
      </router-link>
      <router-link to="/tutor/assignment">
        <b-button block class="shadow-sm reg-btn text-center">Assignment</b-button>
      </router-link>
      <router-link to="/tutor/test">
        <b-button block class="shadow-sm reg-btn text-center">Tests</b-button>
      </router-link>
    </nav>

    <div class="content">
      <b-row>
        <b-col class="text-center">
          <h5>Quiz</h5>
          <b-table :fields="fields" :items="quiz" bordered>
            <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
        <b-col class="text-center">
          <h5>Assignment</h5>
          <b-table :fields="fields" :items="assignment" bordered>
             <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
        <b-col class="text-center">
          <h5>Examinations</h5>
          <b-table :fields="fields" :items="examination" bordered>
             <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
        <b-col class="text-center">
          <h5>Tests</h5>
          <b-table :fields="fields" :items="test" bordered>
             <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
      </b-row>
    </div>
  </div>

 
</template>


<script>
export default {
  props: ["admin"],
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
        {
          key: "title",
          sortable: true,
        },
        "status",
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
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/assessment`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
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
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getAdmins();
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
              Authorization: `Bearer ${this.$props.admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getAdmins();
            }
          })
          .catch((err) => {
            console.log("del -> err", err);
          });
      }
    },
    edit(id) {
      this.$router.push(`/admin/tutor/update/${id}`);
    },
    view(id) {
      this.$router.push(`/admin/tutor/view/${id}`);
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
</style>