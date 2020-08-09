<template>
  <div>
    <b-container>
      <b-row>
        <b-col class md="8">
          <h5 class="text-center">Question</h5>

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
                <b-form-group label="Select Question Type">
                  <b-form-select v-model="item.type" :options="typeOptions"></b-form-select>
                </b-form-group>
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
            <div
              class="mb-3"
              v-if="(item.type == 'multi-choice'|| item.type == 'True/False')  && item.answer_type == 'single'"
            >
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
            <div class="upload-btn-wrapper text-center">
              
              <button class="btn"> <i class="fa fa-upload"></i> <span>Upload a File</span> </button>
              <input type="file" name="myfile" />
            </div>
            <div class="score-box mb-3">
              <b-form-group label="Select Score">
                <b-form-select :disabled="item.type==null" v-model="item.score" :options="options"></b-form-select>
              </b-form-group>
            </div>
            <div class="button-box text-center">
              <b-button @click="addNew(idx)" v-if="idx+1 == assessment.length">
                <i class="fas fa-plus-circle" aria-hidden="true"></i>
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="action-side">
          <div class="save">
            <div class="btn btn-save">SAVE TO DRAFT</div>
            <div class="btn btn-submit">SUBMIT</div>
          </div>
         </div>
         <div class="preview">
            <h6 class="">Publish</h6>
            <hr>
            <b-form-group label="Deadline for Submission">
              <datetime format=" DD-MM-YYYY" v-model="val" placeholder="Select Date"></datetime>
            </b-form-group>
            <div class="action-btn">
              <div class="btn btn-trash"><i class="fa fa-trash-o" aria-hidden="true"></i><span>Move to Trash</span></div>
              <div class="btn btn-preview"><i class="fa fa-eye" aria-hidden="true"></i><span>Preview</span> </div>
            </div>
            <hr>
           <div class="publish-btn">
              <div class="btn btn-publish">PUBLISH</div>
           </div>
          </div>
          <!-- <h5 class="text-center">Preview</h5>

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
          </b-form>-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import datetime from "vuejs-datetimepicker";
export default {
  components: { datetime },
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
      total_score: 0,
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
          total_score: this.total_score,
        };
        axios
          .post("/api/assessment", data, {
            headers: {
              Authorization: `Bearer ${tutor.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 201) {
              this.$toasted.success("Created successfully");
              this.$router.go(-1);
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
  background: #fff;
  border-radius: 10px;
  position: relative;
  box-shadow: 5px 4px 11px rgba(249, 247, 240, 0.25);
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
.custom-select {
  display: inline-block !important;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  /* background: #fff; */
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  /* -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; */
  background: #fff url(/images/down-chevron.png) no-repeat right 0.75rem
    center/8px 10px;
}
.right-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
  margin-top: 25px;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
}

.upload-btn-wrapper .btn {
  border: 1px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  border-style: dotted;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.save{
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction:column;
  padding: 15px;
  margin-top: 2rem;
}
.btn{
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
}
.btn-save{
  background: #0a4065;
  color: #fff;
}
.btn-submit{
  background: transparent;
  border: 1px solid #0a4065;
  color: #0a4065;
}
.preview{
  background: #fff;
  margin-top: 1.5rem;
  border-radius: 10px;
  padding: 10px;
}
.btn-trash{
  color: red;
}
.action-btn{
  display: flex;
}
.btn-preview{
  background: #ced4da;
  border-radius: 5px;
}
.publish-btn{
  display: flex;
  justify-content: flex-end;
}
.btn-publish{
 background: #0a4065;
  color: #fff;
 
}
</style>