<template>
  <div>
    <b-container v-if="form">
      <b-form>
        <legend class="text-center mb-5">{{options.title}}</legend>
        <b-row class="mb-5">
        
          <b-col sm="3">
            <strong class="toCaps">Level : {{options.level}}</strong>
          </b-col>
          <b-col sm="3">
            <strong class="toCaps">Subject : {{options.subject}}</strong>
          </b-col>
         <b-col>
            <div class="text-center">
                 <div>Your Score</div>
           <div class="display-4">  {{options.total_score}}</div>
            </div>
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
            
              <div
             
              >Student score : {{question.student_score}}</div>
             
            </b-col>
          </b-form-row>
        </section>
    <b-row class="justify-content-between my-3">
          <b-button @click="prev" v-if="num > 0 && num <form.length">Previous</b-button>
          <b-button v-if="num <form.length - 1" @click="next" class="ml-auto">Next</b-button>
        
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>

export default {
  props: [ "form", "options"],
  data() {
    return {
      lgas: [],
      num: 0,
      show: false,
      totalScores: 0,
      showSubmit: false,
    };
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
    
  },
};
</script>

<style scoped>
.multi {
  width: 50px;
}
</style>