<template>
  <div class="body">
    <b-container>
      <b-row class="justify-content-between">
        <h3 class="toCaps">{{$route.params.type}}</h3>
        <b-button @click="saveAssessment">Save</b-button>
      </b-row>
      <b-row class="mb-5">
        <b-col cols="11" class="d-flex">
          <b-form-group>
            <label for="Session">Session</label>
            <b-form-input label="session" v-model="session" placeholder="Enter session">Session</b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="Session">Subject</label>
            <b-form-select v-model="subject">
              <b-form-select-option :value="null">Select</b-form-select-option>
              <b-form-select-option
                :value="item.name"
                v-for="(item,index) in subjects"
                :key="index"
              >{{item.name}}</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group>
            <label for="myclass">Class Level</label>
            <b-form-select v-model="myclass">
              <b-form-select-option :value="null">Select</b-form-select-option>
              <b-form-select-option
                :value="item"
                v-for="(item,index) in allClass"
                :key="index"
              >{{item}}</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group>
            <label for="Session">Title</label>
            <b-form-input label="session" v-model="title" placeholder="Enter title">Title</b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="Session">Duration</label>
            <b-input-group>
              <b-form-input placeholder="Enter time" v-model="duration.time"></b-form-input>
              <template v-slot:append>
                <b-form-select :options="times" v-model="duration.type"></b-form-select>
              </template>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <h5>Question</h5>

          <div
            class="main-box mb-4"
            v-for="(item,idx) in assessment"
            :key="idx"
            :class="{hide:opened.includes(idx)}"
          >
            <div class="top-buttons d-flex justify-content-between">
              <div>
                <i
                  class="fas fa-plus-circle"
                  @click="show(idx)"
                  aria-hidden="true"
                  v-if="opened.includes(idx)"
                ></i>
                <i class="fas fa-minus-circle" @click="hideNow(idx)" aria-hidden="true" v-else></i>
              </div>
              <div>
                <i
                  class="fas fa-times-circle"
                  @click="cancel(idx)"
                  v-if="assessment.length > 1"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <b-row class="mb-3">
              <b-col>
                <h6>Select question type</h6>
                <b-form-select v-model="item.type" :options="typeOptions"></b-form-select>
              </b-col>
            </b-row>
            <div class="top-box mb-3">
              <b-form-textarea
                :disabled="item.type==null"
                v-model="item.question"
                placeholder="Write your question "
                rows="3"
              ></b-form-textarea>

              <b-form-input
                placeholder="Enter note"
                :disabled="item.type==null"
                v-model="item.note"
              ></b-form-input>
            </div>
            <b-row class="middle-box mb-3" v-if="item.type == 'multi-choice'">
              <b-col class="text-center">
                <b-form-radio
                  label="Single answer"
                  value="single"
                  v-model="item.answer_type"
                  :disabled="item.type==null"
                >Single answer</b-form-radio>
              </b-col>
              <b-col class="text-center">
                <b-form-radio
                  label="Multi answer"
                  value="multi"
                  v-model="item.answer_type"
                  :disabled="item.type==null"
                >Multi answer</b-form-radio>
              </b-col>
            </b-row>
            <div class="bottom-box mb-3" v-if="item.type == 'multi-choice'">
              <b-form-group v-for="(value,i) in item.values" :key="i" class="p-0 m-0">
                <b-form-input
                  :disabled="item.type==null"
                  v-model="value.value"
                  :placeholder="'Option '+(i+1)"
                ></b-form-input>
              </b-form-group>
              <b-button class="mx-auto my-2" @click="addOption(idx)">Add</b-button>
            </div>
            <div class="mb-3" v-if="(item.type == 'multi-choice'|| item.type == 'True/False')  && item.answer_type == 'single'">
              <b-form-group class="p-0 m-0">
                <b-form-input
                  :disabled="item.type==null"
                  v-model="item.answer"
                  placeholder="Answer"
                ></b-form-input>
              </b-form-group>
            </div>
            <div
              class="bottom-box mb-3"
              v-if="item.type == 'multi-choice' && item.answer_type == 'multi'"
            >
              <b-form-group v-for="(value,i) in item.answers" :key="i" class="p-0 m-0">
                <b-form-input
                  :disabled="item.type==null"
                  v-model="value.answer"
                  :placeholder="'Answer '+(i+1)"
                ></b-form-input>
              </b-form-group>
              <b-button class="mx-auto my-2" @click="addAns(idx)">Add</b-button>
            </div>
            <div class="score-box mb-3">
              <h6 class="text-center">Select score</h6>
              <b-form-select :disabled="item.type==null" v-model="item.score" :options="options"></b-form-select>
            </div>
            <div class="button-box text-center">
              <b-button @click="addNew(idx)" v-if="idx+1 == assessment.length">
                <i class="fas fa-plus-circle" aria-hidden="true"></i>
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col>
          <h5 class="text-center">Preview</h5>

          <b-form @submit.prevent v-if="assessment.length" class="bg-white p-4">
              <legend class="toCaps text-center">{{subject}}</legend>
            <h6 class="toCaps" v-if="session"><span class="text-muted">Term :</span> {{session}}</h6>
            <h6 class="toCaps" v-if="myclass"><span class="text-muted">Level :</span> {{myclass}}</h6>
           <h6 class="toCaps" v-if="title"><span class="text-muted">Title :</span> {{title}}</h6>
           <strong class="mb-4" v-if="duration.time"><span class="text-muted">Duration : </span>{{duration.time}}{{duration.type}}</strong>
            <ol>
              <li v-for="(item,idx) in assessment" :key="idx" class="mb-3">
                <b-row v-if="item.question !==''">
                  <b-col>
                    <b-form-group v-if="item.type == 'multi-choice'">
                      <label>
                        {{item.question}}
                        <b-button
                          v-if="item.note !== ''"
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
                          v-if="item.note !== ''"
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
                          v-if="item.note !== ''"
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
      type: "",
      session: "",
      title: "",
      myclass: null,
      duration: {
        time: "",
        type: null,
      },
      total_score:0,
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
      options: [
        { value: null, text: "Please select score", disabled: true },
        { value: 1, text: "1" },
        { value: 2, text: "2" },
        { value: 3, text: "3" },
        { value: 4, text: "4" },
        { value: 5, text: "5" },
        { value: 6, text: "6" },
        { value: 7, text: "7" },
        { value: 8, text: "8" },
        { value: 9, text: "9" },
        { value: 10, text: "10" },
      ],
      typeOptions: [
        { value: null, text: "Please select type", disabled: true },
        { value: "multi-choice", text: "Multi Choice" },
        { value: "theory", text: "Theory" },
        { value: "True/False", text: "True/False" },
      ],
      opened: [],
      subjects: [],
      allClass: [],
      times: [
        { value: null, text: "Select Duration" },
        { value: "seconds", text: "seconds" },
        { value: "minutes", text: "minutes" },
        { value: "hours", text: "hours" },
      ],
    };
  },
  mounted() {
    this.type = this.$route.params.type;
    this.getSubjects();
    this.getCLasses();
  },
  methods: {
    getCLasses() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get("/api/all-classes", {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            res.data.forEach((item) => {
              this.allClass.push(item.class_name);
              if (item.sub_class !== "") {
                item.sub_class.split(",").forEach((i) => {
                  this.allClass.push(i);
                });
              }
            });
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
    cancel(id) {
      this.assessment.splice(id, 1);
      if (this.opened.includes(id)) {
        let ele = this.opened.indexOf(id);

        this.opened.splice(ele);
      }
    },
    hideNow(id) {
      this.opened.push(id);
    },
    cancelOption(id) {
      this.assessment[id].values.pop();
    },
    cancelAnswer(id) {
      this.assessment[id].answers.pop();
    },
    addNew(id) {
      this.opened.push(id);

      this.assessment.push({
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
      });
    },
    addAns(id) {
      this.assessment[id].answers.push({
        answer: "",
      });
    },
    addOption(id) {
      this.assessment[id].values.push({
        value: "",
      });
    },
    show(id) {
      if (this.opened.includes(id)) {
        let ele = this.opened.indexOf(id);

        this.opened.splice(ele);
      }
    },
    saveAssessment() {
      let ask = confirm("Are you done?");
      if (ask) {
        let tutor = JSON.parse(localStorage.getItem("typeTutor"));
        let data = {
          subject: this.subject,
          session: this.session,
          title: this.title,
          type: this.type,
          level: this.myclass,
          duration: JSON.stringify(this.duration),
          assessment: this.assessment,
          total_score:this.total_score
        };
        axios
          .post("/api/assessment", data, {
            headers: {
              Authorization: `Bearer ${tutor.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 201) {
              this.$toasted.success('Created successfully')
              this.$router.go(-1)
            }
          })
          .catch();
      }
    },
  },
};
</script>

<style scoped>
.main-box {
  padding: 20px;
  background: lightblue;
  position: relative;
}
.top-box {
  margin: 0 auto;
  background: white;
  height: auto;
}
.bottom-box {
  margin: 0 auto;
  background: white;
}
.hide {
  height: 120px;
  overflow: hidden;
}
.btn-sm {
  padding: 0.1rem 0.4rem;
  font-size: 0.4rem;
  line-height: 1.5;
}
</style>