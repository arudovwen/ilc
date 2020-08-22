<template>
  <div>
    <b-container v-if="form">
      <b-form>
        <legend class="text-center mb-5">{{options.title}}</legend>
        <b-row class="mb-5">
          <b-col class="mb-3" cols="12">
            Student Name :
            <strong class="toCaps">{{name.name}}</strong>
          </b-col>
          <b-col sm="3">
            <strong class="toCaps">Level : {{options.level}}</strong>
          </b-col>
          <b-col sm="3">
            <strong class="toCaps">Subject : {{options.subject}}</strong>
          </b-col>
          <b-col sm="3">
            <strong class="toCaps">Student Total : {{totalScores}} / {{overall}}</strong>
          </b-col>
          <b-col sm="3">
            <b-button @click="submit" v-if="showSubmit">Submit Assessment</b-button>
          </b-col>
        </b-row>
        <section v-if=" num < form.length">
          <b-form-row>
            <b-col cols="12" class="mb-4">
              <h5>{{form[num].title}}</h5>
              <p v-html="form[num].description"></p>
            </b-col>
          </b-form-row>
          <b-form-row
            class="mb-4 border-bottom pb-3"
            v-for="(question,idx) in form[num].question"
            :key="idx"
          >
            <b-col cols="8">
              <b-form-group v-if="question.answer_format=='text box'">
                <label for>{{question.title}}</label>
                <small class="form-text">{{question.guide}}</small>
                <b-form-input
                  disabled
                  type="text"
                  v-model="question.answer"
                  :placeholder="question.placeholder"
                  :max="question.limit"
                ></b-form-input>
              </b-form-group>
              <!-- <b-form-group >
                            <label for=""></label>
                            <b-form-input type="tel" placeholder=""></b-form-input>
              </b-form-group>-->

              <b-form-group v-if="question.answer_format=='email'">
                <label for>{{question.title}}</label>
                <small class="form-text">{{question.guide}}</small>
                <b-form-input
                  disabled
                  type="email"
                  v-model="question.answer"
                  :placeholder="question.placeholder"
                ></b-form-input>
              </b-form-group>
              <b-form-group v-if="question.answer_format=='number'">
                <label for>{{question.title}}</label>
                <small class="form-text">{{question.guide}}</small>
                <b-form-input
                  disabled
                  type="number"
                  v-model="question.answer"
                  :placeholder="question.placeholder"
                  :max="question.limit"
                ></b-form-input>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='long text'">
                <label for>{{question.title}}</label>
                <b-form-textarea
                  disabled
                  :placeholder="question.placeholder"
                  v-model="question.answer"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='multi choice'">
                <label for>{{question.title}}</label>
                <small class="form-text">{{question.guide}}</small>
                <b-form-checkbox
                  disabled
                  v-model="question.answers"
                  v-for="(opt,id) in question.options"
                  :key="id"
                  :value="opt.name"
                >{{opt.name}}</b-form-checkbox>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='single choice'">
                <label for>{{question.title}}</label>
                <small class="form-text">{{question.guide}}</small>
                <b-form-radio
                  disabled
                  v-model="question.answer"
                  v-for="(opt,id) in question.options"
                  :key="id"
                  :value="opt.name"
                >{{opt.name}}</b-form-radio>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='date'">
                <label for>{{question.title}}</label>
                <small class="form-text">{{question.guide}}</small>
                <br />
                <b-form-datepicker disabled v-model="question.answer"></b-form-datepicker>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='time'">
                <label for>{{question.title}}</label>
                <small class="form-text">{{question.guide}}</small>
                <br />
                <b-form-timepicker disabled v-model="question.answer"></b-form-timepicker>
              </b-form-group>

              <b-form-group v-if="question.answer_format=='multi text'">
                <div v-for="(item,i) in question.answers" :key="i">
                  <b-form-input disabled v-model="item.answer"></b-form-input>
                </div>
              </b-form-group>
            </b-col>
            <b-col class="text-right" cols="3">
              <div>Score : {{question.score}}</div>
              <div
                v-if="question.answer_format == 'single choice' || question.answer_format =='multi choice'"
              >Student score : {{question.student_score}}</div>
              <div v-else>
                Student score :
                <b-form-select size="sm" class="multi" v-model="question.student_score">
                  <b-form-select-option value="0">0</b-form-select-option>
                  <b-form-select-option
                    v-for="(n,idx) in question.score"
                    :value="n"
                    :key="idx"
                  >{{n}}</b-form-select-option>
                </b-form-select>
              </div>
            </b-col>
          </b-form-row>
        </section>

        <b-row class="justify-content-between my-3">
          <b-button @click="prev" v-if="num > 0 && num <form.length">Previous</b-button>
          <b-button v-if="num <form.length - 1" @click="next" class="ml-auto">Next</b-button>
          <b-button v-if="num == form.length -1" @click="calcTotal" class="ml-auto">Calculate</b-button>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Upload from "../../miniupload";

export default {
  props: ["id", "name", "overall", "form", "options"],
  data() {
    return {
      lgas: [],
      num: 0,
      show: false,
      totalScores: 0,
      showSubmit: false,
    };
  },
  components: {
    Upload,
  },
  mounted() {},
  methods: {
    handleShow() {
      this.show = !this.show;
    },
    next() {
      this.num++;
    },
    prev() {
      if (this.num !== 0) {
        this.num--;
      }
    },
    calcTotal() {
      this.showSubmit = true;
      let temp = [];
      this.$props.form.forEach((item) => {
        item.question.forEach((i) => {
          temp.push(i.student_score);
        });
      });
      this.totalScores = temp.reduce((a, b) => {
        return a + b;
      }, 0);
    },
    submit() {
      let con = confirm("Are you sure you are done assigning scores ?");
      if (con) {
        let tutor = JSON.parse(localStorage.getItem("typeTutor"));
        let data = {
          id: this.$props.id,
          subject: this.$props.options.subject,
          overall: this.$props.overall,
          type: this.$props.options.type,
          title: this.$props.options.title,
          tutor_id: tutor.id,
          total_score: this.totalScores,
          record: this.$props.form,
        };
        axios
          .put(`/api/approve-assessment-result/${this.$props.id}`, data, {
            headers: { Authorization: `Bearer ${tutor.access_token}` },
          })
          .then((res) => {
            if (res.status == 201) {
              this.$toasted.success("Assessment submitted");
              this.$bvModal.hide("content");
              this.$emit("refresh");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.multi {
  width: 50px;
}
</style>