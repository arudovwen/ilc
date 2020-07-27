<template>
  <div class="body">
    <b-container class>
      <b-row class="justify-content-center">
        <h3 class="toCaps text-center mb-3">{{subject}}</h3>
      </b-row>
      <b-row class="justify-content-between align-items-center">
        <h6 class="toCaps" v-if="session">
          <span class="text-muted">Term :</span>
          {{session}}
        </h6>
        <h6 class="toCaps" v-if="myclass">
          <span class="text-muted">Level :</span>
          {{myclass}}
        </h6>
        <h6 class="toCaps" v-if="title">
          <span class="text-muted">Title :</span>
          {{title}}
        </h6>
        <strong class="mb-4" v-if="duration.time">
          <span class="text-muted">Duration :</span>
          {{duration.time}}{{duration.type}}
        </strong>
      </b-row>

      <b-row>
        <b-col>
          <b-form @submit.prevent="calcAnswer" v-if="assessment.length" class="form">
            <ol>
              <li v-for="(item,idx) in assessment" :key="idx" class="mb-3">
                <b-row v-if="item.question !==''">
                  <b-col>
                    <b-form-group v-if="item.type == 'multi-choice'">
                      <label>
                        {{item.question}}
                        <b-button
                          v-if="item.note"
                          size="sm"
                          variant="outline-secondary"
                          pill
                          v-b-tooltip.hover
                          :title="item.note"
                        >
                          <i class="fa fa-info" aria-hidden="true"></i>
                        </b-button>
                      </label>
                      <div v-if="item.answer_type == 'single'">
                        <b-form-radio
                          v-for="(value,i) in item.values"
                          :value="value.value"
                          v-model="item.student_answer"
                          :key="i"
                        >{{value.value}}</b-form-radio>
                      </div>
                      <div v-if="item.answer_type == 'multi'">
                        <b-form-checkbox
                          v-for="(value,i) in item.values"
                          :value="value.value"
                          v-model="item.student_answers"
                          :key="i"
                        >{{value.value}}</b-form-checkbox>
                      </div>
                    </b-form-group>

                    <b-form-group v-if="item.type == 'True/False'">
                      <label>
                        {{item.question}}
                        <b-button
                          v-if="item.note"
                          size="sm"
                          variant="outline-secondary"
                          pill
                          v-b-tooltip.hover
                          :title="item.note"
                        >
                          <i class="fa fa-info" aria-hidden="true"></i>
                        </b-button>
                      </label>
                      <div>
                        <b-form-radio value="true" v-model="item.student_answer">True</b-form-radio>
                        <b-form-radio value="false" v-model="item.student_answer">False</b-form-radio>
                      </div>
                    </b-form-group>

                    <b-form-group v-if="item.type == 'theory'">
                      <label>
                        {{item.question}}
                        <b-button
                          v-if="item.note"
                          size="sm"
                          variant="outline-secondary"
                          pill
                          v-b-tooltip.hover
                          :title="item.note"
                        >
                          <i class="fa fa-info" aria-hidden="true"></i>
                        </b-button>
                      </label>
                      <div>
                        <b-form-textarea v-model="item.student_answer" rows="3"></b-form-textarea>
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>
              </li>
            </ol>

            <b-row>
              <b-col>
                <b-button type="submit">Submit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      type: "",
      session: "",
      title: "",
      total_score: 0,
      myclass: null,
      duration: {
        time: "",
        type: null,
      },
      subject: null,
      assessment: [
        {
          note: "",
          question: "",
          student_answer: "",
          student_answers: [],
          answer: "",
          answers: [
            {
              answer: "",
            },
          ],
          type: null,
          answer_type: "single",
          score: null,
          values: [
            {
              value: "",
            },
            {
              value: "",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getAssessment();
  },
  methods: {
    getAssessment() {
      let student = JSON.parse(localStorage.getItem("typeStudent"));
      axios
        .get(`/api/student-assessment/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.assessment = JSON.parse(res.data.assessment);
            this.type = res.data.type;
            this.subject = res.data.subject;
            this.session = res.data.session;
            this.title = res.data.title;
             this.tutor_id = res.data.tutor_id;
            this.myclass = res.data.level;

            this.duration = JSON.parse(res.data.duration);
          }
        })
        .catch();
    },
    calcAnswer() {
       this.total_score = 0
      this.assessment.forEach((element) => {
        if (element.answer_type == "single") {
          if (
            element.answer.toLowerCase() == element.student_answer.toLowerCase()
          ) {
            this.total_score = this.total_score + element.score;
          
          } else {
            element.answers.forEach((ele) => {
              element.student_answers.forEach((ele1) => {
                if (ele.toLowerCase() == ele1.toLowerCase()) {
                  this.total_score =
                    this.total_score + element.answers / element.score;
                }
              });
            });
          }
        }
      });
      
     this.storeRecord()
    },
    storeRecord() {
      let student = JSON.parse(localStorage.getItem("typeStudent"));
      let data = {
        subject: this.subject,
        type: this.type,
        title: this.title,
         tutor_id: this.tutor_id,
        total_score: this.total_score,
        record: this.assessment,
      };
      axios
        .post("/api/assessment-result", data, {
          headers: { Authorization: `Bearer ${student.access_token}` },
        })
        .then((res) => {
          if (res.status == 201) {
             this.$router.push("/student/assessment");
          }
          if (res.status == 200) {
             this.$router.push("/student/assessment");
          }
        });
    },
  },
};
</script>

<style scoped>
.btn-sm {
  padding: 0.1rem 0.4rem;
  font-size: 0.4rem;
  line-height: 1.5;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.bod {
  background: #f7f8fa;
}
</style>