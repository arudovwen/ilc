<template>
  <div class="body">
    <b-container fluid class="bg-white">
      <b-row class="justify-content-center mb-4">
        <b-col>
          <h3 class="toCaps text-center">{{subject}}</h3>
        </b-col>
      </b-row>
      <b-row class="justify-content-between align-items-center mb-3">
        <b-col>
          <h6 class="toCaps" v-if="session">
            <span class="text-muted">Term :</span>
            {{session}}
          </h6>
        </b-col>
        <b-col>
          <h6 class="toCaps" v-if="myclass">
            <span class="text-muted">Level :</span>
            {{myclass}}
          </h6>
        </b-col>
        <b-col>
          <h6 class="toCaps" v-if="title">
            <span class="text-muted">Title :</span>
            {{title}}
          </h6>
        </b-col>
        <b-col>
          <strong class="mb-4">
            <span class="text-muted"></span>
            Start : {{duration.start_time | moment('hh:mm A')}}
            <br />
            End : {{duration.end_time | moment('hh:mm A')}}
          </strong>
        </b-col>
      </b-row>

      <b-row class="my-3">
        <b-col cols="12 text-center">{{description}}</b-col>
      </b-row>
      <!-- <b-row class="my-1">
        <b-col cols="12 text-right">
          <vue-countdown-timer
            @start_callback="startCallBack()"
            @end_callback="endCallBack()"
            :start-time="duration.start_time"
            :end-time="duration.end_time"
            :interval="1000"
            :start-label="'Until start:'"
            :end-label="'Until end:'"
            label-position="begin"
            :end-text="'Event ended!'"
            :day-txt="''"
            :hour-txt="'hrs'"
            :minutes-txt="'mins'"
            :seconds-txt="'secs'"
          ></vue-countdown-timer>
        </b-col>
      </b-row> -->

      <b-row class="W-100">
        <b-col cols="12">
          <Others
            :template="assessment"
            :total="total_score"
            :details="details"
            v-if="type !== 'quiz'"
          />
          <quiz
            :template="assessment"
            :total="total_score"
            :details="details"
            v-if="type == 'quiz'"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import quiz from "./quizView";
import Others from "./viewOthers";

export default {
  data() {
    return {
      total_score: 0,
      type: "",
      session: "",
      title: "",
      description: "",

      myclass: null,
      duration: {
        time: "",
        type: null,
      },
      subject: null,
      assessment: [],
      details: [],
    };
  },
  components: {
    Others,
    quiz,
 
  },
  created() {
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
            this.details = res.data;
            this.assessment = JSON.parse(res.data.assessment);
            this.type = res.data.type;
            this.subject = res.data.subject;
            this.session = res.data.session;
            this.title = res.data.title;
            this.tutor_id = res.data.tutor_id;
            this.myclass = res.data.level;
            this.description = res.data.description;

            this.duration = JSON.parse(res.data.duration);
            this.totalScore(this.assessment);
          }
        })
        .catch();
    },
    totalScore(arr) {
      var score = [];
      var newArr = [];
      arr.forEach((item) => {
        item.question.forEach((ite) => {
          newArr.push(ite);
        });
      });
      newArr.forEach((item) => {
        score.push(item.score);
      });

      this.total_score = score.reduce((a, b) => {
        return a + b;
      }, 0);
    },
    calcAnswer() {
      this.total_score = 0;
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

      this.storeRecord();
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
        .post("/api/student-assessment-result", data, {
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
.container-fluid {
  padding: 20px;
  margin: 0 auto;
  height: 100%;
}
form {
}
.bod {
  background: #f7f8fa;
}
</style>