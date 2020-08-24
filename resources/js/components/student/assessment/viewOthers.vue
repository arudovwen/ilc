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
    <b-form @submit.prevent="submit" class="border p-5">
      <section v-if="num < template.length">
        <div class="total">
          Total Questions : {{details.questions}} <br/>
          Total score :
          <strong>{{total}}</strong>
          <br />
          <!-- <span v-if="showScores">
            Your score :
            <strong>{{total_scores}}</strong>
          </span> -->
        </div>
        <b-form-row>
          <b-col cols="12">
            <h5>{{template[num].title}}</h5>
            <p v-html="template[num].description"></p>
          </b-col>
        </b-form-row>
        <b-form-row>
          <ol class="w-100">
            <li v-for="(question,idx) in template[num].question" :key="idx">
              <b-col cols="12">
                <b-form-group v-if="question.answer_format=='text box'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>

                  <b-form-input
                    type="text"
                    :disabled="showScores"
                  
                    v-model="question.answer"
                    :placeholder="question.placeholder"
                    :max="question.limit"
                  ></b-form-input>
                </b-form-group>

                <b-form-group v-if="question.answer_format=='email'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>
                  <b-form-input
                    :disabled="showScores"
                    type="email"
                  
                    v-model="question.answer"
                    placeholder="example@email.com"
                  ></b-form-input>
                </b-form-group>
                <b-form-group v-if="question.answer_format=='number'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>
                  <b-form-input
                    type="number"
                    :disabled="showScores"
                    @change="calcAnswer(idx,question)"
                    v-model="question.answer"
                    :placeholder="question.placeholder"
                    :max="question.limit"
                  ></b-form-input>
                </b-form-group>

                <b-form-group v-if="question.answer_format=='long text'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>
                  <b-form-textarea
                    :disabled="showScores"
                  
                    :placeholder="question.placeholder"
                    v-model="question.answer"
                  ></b-form-textarea>
                </b-form-group>

                <b-form-group v-if="question.answer_format=='multi choice'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>

                  <b-form-checkbox
                    :disabled="showScores"
                    v-model="question.answers"
                    @change="calcAnswer(idx,question,$event)"
                    v-for="(opt,id) in question.options"
                    :key="id"
                    :value="opt.name"
                  >{{opt.name}}</b-form-checkbox>
                </b-form-group>

                <b-form-group v-if="question.answer_format=='single choice'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>
                  <b-form-radio
                    :disabled="showScores"
                    @change="calcAnswer(idx,question,$event)"
                    v-model="question.answer"
                    v-for="(opt,id) in question.options"
                    :key="id"
                    :value="opt.name"
                  >{{opt.name}}</b-form-radio>
                </b-form-group>

                <b-form-group v-if="question.answer_format=='date'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>
                  <br />
                  <b-form-datepicker
                    :disabled="showScores"
                    @change="calcAnswer(idx,question,$event)"
                    v-model="question.answer"
                  ></b-form-datepicker>
                </b-form-group>

                <b-form-group v-if="question.answer_format=='time'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks)</span></label>
                  <small class="form-text" v-if="question.guide">{{question.guide}}</small>
                  <br />
                  <b-form-timepicker
                    :disabled="showScores"
                    @change="calcAnswer(idx,question,$event)"
                    v-model="question.answer"
                  ></b-form-timepicker>
                </b-form-group>

                <b-form-group v-if="question.answer_format=='multi text'">
                  <label for>{{question.title}} (<span class="scores">{{question.score}} marks</span>)</label>
                  <small class="form-text mb-2" v-if="question.guide">{{question.guide}}</small>
                  <div v-for="(item,i) in question.answers" :key="i">
                    <b-form-input
                      :disabled="showScores"
                      @change="calcAnswer(idx,question,$event)"
                      v-model="item.answer"
                    ></b-form-input>
                  </div>

                  <div>
                    <b-button @click="addMore(idx)" class="mr-3">
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    </b-button>
                    <b-button @click="removeMore(idx)" v-if="question.answers.length> 1">
                      <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    </b-button>
                  </div>
                </b-form-group>
              </b-col>
              <b-col class="text-left">
                <b-img :src="question.media" v-if="question.media" width="80px"></b-img>
              </b-col>
            </li>
          </ol>
        </b-form-row>
      </section>

      <b-row class="justify-content-between px-3 my-3">
        <b-button @click="prev">Previous</b-button>
        <b-button v-if="num < template.length-1" @click="next">Next</b-button>

        <div v-if="num == template.length-1">
          <b-button type="submit">Submit</b-button>
        </div>
      </b-row>
    </b-form>

    <b-modal id="completed" size="lg" hide-footer>
      <div class="text-center">
        You have completed this Assessment
        <!-- <br />your score is
        <br />
        <span class="display-4">{{total_scores}}</span> -->
      </div>
      <div class="text-center">{{details.feedback}}</div>
      <div class="text-center">
        <b-button variant="outline-darkgreen" @click="closeForm">Close</b-button>
      </div>
    </b-modal>

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
      temp_score:0,
      num: 0,
      show: false,
      option: [],
      total_scores: 0,
      submitCount: 0,
      showScores: false,
      newAns:[]
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
      // this.$router.push('/student/assessment')
    },
    submit() {
      if (!this.showScores) {
        // this.total_scores += this.sectionAnswer();

        this.showScores = true;

        let student = JSON.parse(localStorage.getItem("typeStudent"));
        let data = {
          subject: this.$props.details.subject,
          type: this.$props.details.type,
          title: this.$props.details.title,
          tutor_id: this.$props.details.tutor_id,
          total_score: this.total_scores,
          record: this.$props.template,
          overall:this.$props.total
        };
        axios
          .post("/api/student-assessment-result", data, {
            headers: { Authorization: `Bearer ${student.access_token}` },
          })
          .then((res) => {
            if (res.status == 201) {
            }
          });
      }
      this.$bvModal.show("completed");
    },

    closeForm() {
      this.$router.go(-1);
    },

    getUploadDetails(index, res,id) {
      this.template[this.num].question[index].documents[index].file =
        res.secure_url;
    },
    next() {
      if (!this.showScores) {
        this.total_scores += this.sectionAnswer();
      }

      this.scores = [];
      this.num++;
    },
    prev() {
      if (this.num !== 0) {
        this.num--;
      }
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
    calcAnswer(id, answer, e) {
      var score = 0;
      var result = {};
      this.template[this.num].question[id].student_score=0
      if (this.scores.length > 0) {
        this.scores.forEach((item, index) => {
          if (item["id"] == id) {
            this.scores.splice(index, 1);
          }else{
            this.temp_score = 0
          }
        });
      }
      if (answer.answer_format !== "multi choice") {
        if (e == answer.real_answer) {
          score = answer.score;
           this.template[this.num].question[id].student_score = answer.score
        }
      } else {
        this.newAns = [];
       let p_score = Number(answer.score / answer.real_answers.length);

        answer.real_answers.forEach((item) => {
           this.newAns.push(item.answer);
        });
        if ( this.newAns.includes(e)) {
         
         this.temp_score += p_score
        }
         score = this.temp_score;
           this.template[this.num].question[id].student_score =  this.temp_score
        
      }
      this.scores.push({
        id: id,
        score: score,
      });
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
  },
};
</script>

<style scoped>
.container {
  min-height: 70vh;
  padding: 50px 0;
}
section {
  position: relative;
}
.total {
  position: absolute;
  right: 15px;
  top: 15px;
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
li {
   margin-left: 1rem;
  margin-bottom:50px;
}
.form-text {
  margin-bottom: 0.25rem;
  margin-top: 0;
  color: blue;
}
.scores{
  font-size:11px;
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