<template>
  <div class="W-100">
     <b-row class="my-1">
        <b-col cols="12 text-right">
          <vue-countdown-timer
            @start_callback="startCallBack()"
            @end_callback="endCallBack()"
            :start-time="details.start"
            :end-time="details.end"
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
      </b-row>
    <b-form @submit.prevent="submit" class="border shadow-lg p-5">
      <section v-if="num < template.length">
        <b-form-row>
          <b-col cols="12">
            <h5>{{template[num].title}}</h5>
            <p v-html="template[num].description"></p>
          </b-col>
        </b-form-row>
        <b-form-row>
          <ol class="w-100">
            <li class="text-center">
              <b-col cols="12">
                <b-form-group v-if="template[num].question[quest].answer_format=='text box'">
                  <label for>{{template[num].question[quest].title}}</label>
                  <small
                    class="form-text"
                    v-if="template[num].question[quest].guide"
                  >{{template[num].question[quest].guide}}</small>

                  <b-form-input
                    type="text"
                    :disabled="showScores"
                    @change="calcAnswer(quest,template[num].question[quest],$event)"
                    v-model="template[num].question[quest].answer"
                    :placeholder="template[num].question[quest].placeholder"
                    :max="template[num].question[quest].limit"
                  ></b-form-input>
                </b-form-group>

                <b-form-group v-if="template[num].question[quest].answer_format=='number'">
                  <label for>{{template[num].question[quest].title}}</label>
                  <small
                    class="form-text"
                    v-if="template[num].question[quest].guide"
                  >{{template[num].question[quest].guide}}</small>
                  <b-form-input
                    type="number"
                    :disabled="showScores"
                    @change="calcAnswer(quest,template[num].question[quest],$event)"
                    v-model="template[num].question[quest].answer"
                    :placeholder="template[num].question[quest].placeholder"
                    :max="template[num].question[quest].limit"
                  ></b-form-input>
                </b-form-group>

                <b-form-group v-if="template[num].question[quest].answer_format=='long text'">
                  <label for>{{template[num].question[quest].title}}</label>
                  <small
                    class="form-text"
                    v-if="template[num].question[quest].guide"
                  >{{template[num].question[quest].guide}}</small>
                  <b-form-textarea
                    :disabled="showScores"
                    @change="calcAnswer(quest,template[num].question[quest],$event)"
                    :placeholder="template[num].question[quest].placeholder"
                    v-model="template[num].question[quest].answer"
                  ></b-form-textarea>
                </b-form-group>

                <b-form-group v-if="template[num].question[quest].answer_format=='multi choice'">
                  <label for>{{template[num].question[quest].title}}</label>
                  <small
                    class="form-text"
                    v-if="template[num].question[quest].guide"
                  >{{template[num].question[quest].guide}}</small>

                  <b-form-checkbox
                    :disabled="showScores"
                    @change="calcAnswer(quest,template[num].question[quest],$event)"
                    v-model="template[num].question[quest].answers"
                    v-for="(opt,id) in template[num].question[quest].options"
                    :key="id"
                    :value="opt.name"
                  >{{opt.name}}</b-form-checkbox>
                </b-form-group>

                <b-form-group v-if="template[num].question[quest].answer_format=='single choice'">
                  <label for>{{template[num].question[quest].title}}</label>
                  <small
                    class="form-text"
                    v-if="template[num].question[quest].guide"
                  >{{template[num].question[quest].guide}}</small>
                  <b-form-radio
                    :disabled="showScores"
                    @change="calcAnswer(quest,template[num].question[quest],$event)"
                    v-model="template[num].question[quest].answer"
                    v-for="(opt,id) in template[num].question[quest].options"
                    :key="id"
                    :value="opt.name"
                  >{{opt.name}}</b-form-radio>
                </b-form-group>
              </b-col>

              <!-- <b-row class="justify-content-between px-3 my-3">
                <b-col>
                  <b-button @click="prevQuest">Previous Qustion</b-button>
                </b-col>
                <b-col>
                  <b-button
                    v-if="quest < template[num].question.length"
                    @click="nextQuest"
                  >Next Question</b-button>
                </b-col>
              </b-row>-->
              <b-col class="text-left">
                <b-img :src="template[num].question[quest].media" v-if="template[num].question[quest].media" width="80px"></b-img>
              </b-col>
            </li>
          </ol>
        </b-form-row>
      </section>

      <b-row class="justify-content-center px-3 my-3">
        <!-- <b-button @click="prev">Previous Round</b-button> -->
        <!-- <b-button v-if="quest == template[num].question.length-1" @click="next">Next Round</b-button> -->

        <div v-if=" quest == template[num].question.length - 1 && num == template.length - 1">
          <b-button type="submit">Submit</b-button>
        </div>
      </b-row>
      <b-modal id="completed" size="lg" hide-footer>
        <div class="text-center">
          <b-button variant="outline-darkgreen" @click="closeForm">Close</b-button>
        </div>
      </b-modal>

      <b-modal id="round" size="md" hide-footer>
        <div class="text-center mb-2">
          Your score is
          <br />
          <span class="display-4">{{total_scores}}</span>
        </div>
        <div class="text-center my-2">
          <b-icon class="blue" icon="hand-thumbs-up" style="width: 40px; height: 40px;"></b-icon>
        </div>
        <div v-if="num == template.length-1">
          <b-button type="button" @click="submit">Submit</b-button>
        </div>
        <div class="text-center" v-else>
          <b-button v-if="quest == template[num].question.length-1" @click="next">Next Round</b-button>
        </div>
      </b-modal>

      <b-modal id="response" size="md" hide-footer>
        <div class="text-center">
          <div class="mb3">
            <span v-if="!wrong">
              CORRECT ANSWER
              <br />
              <b-icon class="green" icon="check2-circle" style="width: 80px; height: 80px;"></b-icon>
            </span>
            <span v-if="!right">
              WRONG ANSWER
              <br />
              <b-icon class="red" icon="x-circle" style="width: 80px; height: 80px;"></b-icon>
            </span>
          </div>
          <div class="mb-4" v-if="!wrong">Right Answer is {{right}}</div>
          <div class="mb-4" v-if="!right">Right Answer is {{wrong}}</div>
        </div>
        <div class="text-center">
          <b-button v-if="quest < template[num].question.length" @click="nextQuest">Next Question</b-button>
        </div>
      </b-modal>
    </b-form>
       <b-modal id="ended" size="lg" hide-footer>
      <div class="text-center">
        This Assessment has ended 
       
      </div>
     
      <div class="text-center">
        <b-button variant="outline-darkgreen" @click="closeForm">Close</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Upload from "../../miniupload";

export default {
  props: ["template", "total", "details"],
  data() {
    return {
      scores: [],
      template_score: 0,
      num: 0,
      quest: 0,
      show: false,
      option: [],
      total_scores: 0,
      submitCount: 0,
      showScores: false,
      right: null,
      wrong: null,
    };
  },
  components: {
    Upload,
  },
  mounted() {},
  methods: {
     startCallBack() {
      
    },
    endCallBack() {
      this.$bvModal.show('ended')
      this.$router.push('/student/assessment')
    },
    submit() {
      let student = JSON.parse(localStorage.getItem("typeStudent"));
      let data = {
        subject: this.$props.details.subject,
        type: this.$props.details.type,
        title: this.$props.details.title,
        tutor_id: this.$props.details.tutor_id,
        total_score: this.total_scores,
        record: this.$props.template,
      };
      axios
        .post("/api/student-assessment-result", data, {
          headers: { Authorization: `Bearer ${student.access_token}` },
        })
        .then((res) => {
          if (res.status == 201) {
          }
        });
      this.$bvModal.hide("round");
      this.$bvModal.show("completed");
    },

    closeForm() {
      this.$router.go(-1);
    },
    getUploadDetails(index, id, res) {
      this.template[this.num].question[index].documents[id].file =
        res.secure_url;
    },

    next() {
      if (!this.showScores) {
      }
      this.quest = 0;
      this.scores = [];
      this.num++;
      this.$bvModal.hide("round");
    },
    prev() {
      if (this.num !== 0) {
        this.num--;
      }
    },

    nextQuest() {
      if (
        this.num == this.$props.template.length - 1 &&
        this.quest == this.$props.template[this.num].question.length - 1
      ) {
        if (!this.showScores) {
          this.total_scores += this.sectionAnswer();
          this.showScores = true;
        }
        this.$bvModal.hide("response");

        this.$bvModal.show("round");
      } else {
        if (this.quest == this.$props.template[this.num].question.length - 1) {
          this.total_scores += this.sectionAnswer();

          this.$bvModal.hide("response");

          this.$bvModal.show("round");
        } else {
          this.quest++;
          this.$bvModal.hide("response");
        }
      }
    },
    prevQuest() {
      if (this.quest !== 0) {
        this.quest--;
      }
    },

    calcAnswer(id, answer, e) {
      var score = 0;
      var result = {};

      if (this.scores.length > 0) {
        this.scores.forEach((item, index) => {
          if (item["id"] == id) {
            this.scores.splice(index, 1);
          }
        });
      }
      if (answer.answer_format !== "multi choice") {
        if (e == answer.real_answer) {
          score = answer.score;
          this.right = answer.real_answer;
          this.wrong = null;
        } else {
          this.wrong = answer.real_answer;
          this.right = null;
        }
      } else {
          
      }

      this.scores.push({
        id: id,
        score: score,
      });
      this.$bvModal.show("response");
      this.sectionAnswer();
    },
    sectionAnswer() {
      var score = [];
      this.scores.forEach((item) => {
        score.push(item.score);
      });

      return score.reduce((a, b) => {
        return a + b;
      }, 0);
    },
    removeMore(id) {
      this.template[this.num].question[id].answers.pop();
    },
    addMore(id) {
      this.template[this.num].question[id].answers.push({
        answer: "",
      });
    },
    addDoc(id) {
      this.template[this.num].question[id].documents.push({
        name: "",
        file: "",
      });
    },
    removeDoc(id) {
      this.template[this.num].question[id].documents.pop();
    },
    handleObj() {},
    addRow(id) {
      //  Object.assign(this.obj,  this.template[this.num].question[id].items[0])
      let obj = {};
      this.template[this.num].question[id].fields.forEach((item) => {
        obj[item] = "";
      });
      this.template[this.num].question[id].items.push(obj);
    },
    removeRow(id) {
      this.template[this.num].question[id].items.pop();
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 70vh;
  padding: 50px 0;
}
.upload {
  background: #f7f8fa;
}
label {
  font-weight: bold;
}
.border {
  border-radius: 15px;
}
ol,
ul {
  list-style: none;
}
li {
  margin-left: 1rem;
  margin-bottom:50px;
}
.form-text {
  margin-bottom: 0.25rem;
  margin-top: 0;
  color: blue;
}
.blue {
  color: blue;
}
.red {
  color: red;
}
.green {
  color: green;
}
@media (max-width: 425px) {
  .container {
    padding: 30px 10px;
  }
  form {
    padding: 30px 10px;
  }
}
</style>