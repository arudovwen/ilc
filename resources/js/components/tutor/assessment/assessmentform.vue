<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="text-center">
          <h6 class="text-center">{{option.title}}</h6>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col class="bg-white right-bar" md="9">
          <b-form @submit.prevent="submit">
            <b-container fluid>
              <b-row class="py-3">
                <b-button size="sm" @click="addSection" class="m-0">
                  Section
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </b-button>
              </b-row>
              <b-row>
                <section v-for="(section,index) in form" :key="index" class="border p-2 mb-2 w-100">
                  <div class="py-2 d-flex justify-content-between">
                    <h5>{{section.title==''?'Section':section.title}}</h5>

                    <div>
                      <span
                        @click="hideSection(index)"
                        class="mr-2 cpointer"
                      >{{opened.includes(index)?'Hide':'Show'}}</span>

                      <span @click="removeSection(index)">
                        <i class="fa fa-times-circle cpointer" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>

                  <div v-if="opened.includes(index)" class="m-3">
                    <b-row class="mb-3 border-bottom">
                      <b-col cols="12">
                        <b-form-group>
                          <label for="section">Section Title</label>
                          <b-form-input
                            label="section"
                            v-model="section.title"
                            placeholder="Enter title"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                          <label for="section">Section Description</label>
                          <app-editor
                            v-model="section.description"
                            apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
                            :init="{
                         selector: 'textarea',
                            toolbar_mode: 'floating',
                            plugins: 'advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ',
                            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table',
                            image_title: true,
                            height: 150,
                            file_picker_types: 'image',
                            automatic_uploads:false,
                            relative_urls:false,
                           convert_urls:false,
                           images_upload_handler: function (blobInfo, success, failure) {
                                 upload_handler( blobInfo, success, failure)
                           },
                            file_picker_callback:function(callback, value, meta) {
                                  loadFile(callback, value,meta)

                        },
                        images_dataimg_filter: function(img) {
                            return img.hasAttribute('internal-blob');
                            }
                      }"
                            class="form-control"
                          ></app-editor>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12" class="p-0">
                        <h5>Questions</h5>
                      </b-col>
                    </b-row>
                    <b-row class="py-3">
                      <b-button size="sm" @click="addQuestion(index)" class="mr-3">
                        <i class="fas fa-plus-circle" aria-hidden="true"></i>
                      </b-button>
                      <b-button size="sm" @click="removeQuestion(index)">
                        <i class="fas fa-times-circle" aria-hidden="true"></i>
                      </b-button>
                    </b-row>
                    <b-row v-for="(question,idx) in section.question" :key="idx" class="border p-2">
                      <b-col cols="12" class="d-flex justify-content-between">
                        <div v-if="!openedQuestion.includes(idx)">{{idx+1}} {{question.title}}</div>
                        <div @click="toggleQuestion(idx)" class="ml-auto">
                          <i class="fa fa-minus-circle" aria-hidden="true"></i>
                        </div>
                      </b-col>
                      <div v-if="openedQuestion.includes(idx)" class="d-flex w-100">
                        <b-col cols="3">
                          <b-form-row>
                            <b-col cols="12">
                              <b-form-group>
                                <label for>Type Question</label>
                                <b-textarea placeholder="Question" v-model="question.title"></b-textarea>
                              </b-form-group>
                            </b-col>
                            <b-col>
                              <b-form-group>
                                <label for>Question guide (Optional)</label>
                                <b-form-input placeholder="Question guide" v-model="question.guide"></b-form-input>
                              </b-form-group>
                            </b-col>
                          </b-form-row>
                        </b-col>
                        <b-col cols="3">
                          <b-form-group>
                            <label for>Answer Format</label>
                            <b-form-select v-model="question.answer_format">
                              <b-form-select-option value>Select Format</b-form-select-option>
                              <b-form-select-option value="multi choice">Multi Choice</b-form-select-option>
                              <b-form-select-option value="single choice">Single Choice</b-form-select-option>
                              <b-form-select-option value="text box">Text box</b-form-select-option>
                              <b-form-select-option value="long text">Long Text</b-form-select-option>
                              <b-form-select-option value="number">Number</b-form-select-option>
                              <b-form-select-option value="multi text">Multi Text</b-form-select-option>
                              <b-form-select-option value="date">Date</b-form-select-option>
                              <b-form-select-option value="time">Time</b-form-select-option>
                              <b-form-select-option value="email">Email</b-form-select-option>
                              <!-- <b-form-select-option value="lga">Lga</b-form-select-option> -->
                            </b-form-select>
                          </b-form-group>
                          <!-- multi choice options  -->
                          <b-form-group
                            v-if="question.answer_format=='text box' || question.answer_format=='number'"
                          >
                            <label for>Placeholder value</label>
                            <b-form-input
                              placeholder="Placeholder value"
                              v-model="question.placeholder"
                            ></b-form-input>
                          </b-form-group>
                          <div
                            v-if="question.answer_format=='text box' || question.answer_format=='number'"
                          >
                            <b-form-input
                              type="number"
                              placeholder="Character limit"
                              v-model="question.limit"
                            ></b-form-input>
                          </div>
                          <div
                            v-if="question.answer_format=='multi choice' || question.answer_format=='single choice'"
                          >
                            <div v-for="(option,idxx) in question.options" :key="idxx">
                              <b-form-input placeholder="Options" v-model="option.name"></b-form-input>
                            </div>
                            <b-row class="p-3">
                              <b-button size="sm" @click="addOption(index,idx)" class="mr-3">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                              </b-button>
                              <b-button size="sm" @click="removeOption(index,idx)">
                                <i class="fa fa-times-circle" aria-hidden="true"></i>
                              </b-button>
                            </b-row>
                          </div>
                        </b-col>
                        <b-col cols="6">
                          <label>Select Tool</label>
                          <div role="tablist">
                            <b-card no-body class="mb-1">
                              <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button
                                  size="sm"
                                  block
                                  v-b-toggle="idx.toString()"
                                  variant="info"
                                >Tools</b-button>
                              </b-card-header>
                              <b-collapse
                                :id="idx.toString()"
                                accordion="my-accordion"
                                role="tabpanel"
                              >
                                <b-card-body>
                                  <b-row>
                                    <b-col cols="12">
                                      <b-form-row>
                                        <b-col>
                                          <b-form-checkbox
                                            v-model="question.tools"
                                            value="table"
                                          >Table</b-form-checkbox>
                                        </b-col>
                                        <b-col>
                                          <b-form-checkbox
                                            v-model="question.tools"
                                            value="docs"
                                          >Document</b-form-checkbox>
                                        </b-col>
                                        <b-col>
                                          <b-form-checkbox
                                            v-model="question.tools"
                                            value=" media"
                                          >Media</b-form-checkbox>
                                        </b-col>
                                      </b-form-row>
                                      <div v-if="question.tools.includes('table')">
                                        <b-input-group>
                                          <b-form-input placeholder="Table field" v-model="field"></b-form-input>

                                          <b-input-group-append>
                                            <b-button
                                              size="sm"
                                              @click="addField(field,index,idx)"
                                              class="mr-3"
                                            >
                                              <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                            </b-button>
                                          </b-input-group-append>
                                        </b-input-group>

                                        <b-form-group class="p-2 py-3">
                                          <b-row>
                                            <b-col
                                              cols="3"
                                              class="border text-center"
                                              v-for="(field,idxxx) in question.fields"
                                              :key="idxxx"
                                            >
                                              {{field}}
                                              <i
                                                class="fa fa-times-circle"
                                                @click="removeField(index,idx,idxxx)"
                                                aria-hidden="true"
                                              ></i>
                                            </b-col>
                                          </b-row>
                                        </b-form-group>

                                        <b-row class="p-2">
                                          <b-button
                                            size="sm"
                                            class
                                            @click="handleTable(index,idx)"
                                          >Submit fields</b-button>
                                        </b-row>
                                      </div>
                                    </b-col>

                                    <b-col cols="12">
                                      <b-form-group>
                                        <label for>Tool Description</label>
                                        <app-editor
                                          v-model="question.tools_description"
                                          apiKey="a0iyq87xxk4jqc1rf2kj55kr8pu9pol61qt32jccfldibgd7"
                                          :init="{
                             selector: 'textarea',
                            toolbar_mode: 'floating',
                            plugins: 'advlist autolink lists link image imagetools charmap print preview anchor insertdatetime media table paste code help wordcount  autolink lists media    table  ',
                            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |image help | a11ycheck addcomment showcomments casechange checklist code formatpainter  table',
                            image_title: true,
                            height: 200,
                            file_picker_types: 'image',
                            automatic_uploads:false,
                            relative_urls:false,
                           convert_urls:false,
                           images_upload_handler: function (blobInfo, success, failure) {
                                 upload_handler( blobInfo, success, failure)
                           },
                            file_picker_callback:function(callback, value, meta) {
                                  loadFile(callback, value,meta)

                        },
                        images_dataimg_filter: function(img) {
                            return img.hasAttribute('internal-blob');
                            }
                      }"
                                          class="form-control"
                                        ></app-editor>
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                </b-card-body>
                              </b-collapse>
                            </b-card>
                          </div>
                        </b-col>
                      </div>
                      <hr>
                      <b-col cols="6" v-if="openedQuestion.includes(idx)">
                        <div
                          class="bottom-box mb-3"
                          v-if="question.answer_format == 'multi choice'"
                        >\ <h6 class="text-center">Answer</h6>
                          <div label="Answer"
                            v-for="(value,i) in question.real_answers"
                            :key="i"
                            class="p-0 m-0"
                          >
                            <b-form-input v-model="value.answer" :placeholder="'Answer '+(i+1)"></b-form-input>
                          </div>
                          <b-button class="mx-auto my-2" size="sm" @click="addAns(index,idx)">Add</b-button>
                          <b-button
                            class="mx-auto my-2"
                            size="sm"
                            @click="removeAns(index,idx)"
                          >Remove</b-button>
                        </div>
                        <div class="mb-3" v-else>
                         <h6 class="text-center">Answer</h6>
                            <b-form-input v-model="question.real_answer" placeholder="Answer"></b-form-input>
                          
                        </div>
                      </b-col>
                      <b-col cols="6" v-if="openedQuestion.includes(idx)">
                        <div class="score-box mb-3">
                          <h6 class="text-center">Select score</h6>
                          <b-form-select v-model="question.score" :options="scoreOptions"></b-form-select>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </section>
              </b-row>
            </b-container>
          </b-form>
        </b-col>
        <b-col md="3">
          <div class="action-side">
            <div class="save">
              <div class="btn btn-save mb-2" @click="saveDraft">Save Draft</div>
              <div class="btn btn-submit" @click="submit">Submit</div>
            </div>
          </div>
          <div class="preview">
            <h6 class>Publish</h6>
            <hr />
            <b-form-group label="Deadline for Submission">
              <datetime format=" DD-MM-YYYY" v-model="form.deadline" placeholder="Select Date"></datetime>
            </b-form-group>
            <div class="action-btn text-center">
              <div class="btn btn-preview" v-b-modal.modal-1>
                <i class="fa fa-eye" aria-hidden="true"></i>
                <span>Preview</span>
              </div>
              <div class="btn btn-trash">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                <span>Move to Trash</span>
              </div>
            </div>
            <hr />
            <div class="publish-btn">
              <div class="btn btn-publish">PUBLISH</div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <b-modal id="modal-1" title="Preview" size="lg" hide-footer>
        <Preview :options="option" :form="form" />
      </b-modal>
    </div>
  </div>
</template>
<script>
import datetime from "vuejs-datetimepicker";
import Editor from "@tinymce/tinymce-vue";
import Preview from "./preview";
export default {
  props: ["option"],
  components: { datetime, "app-editor": Editor, Preview },
  data() {
    return {
      total_score: 0,
      subject: null,
      obj: {},
      field: "",
      busy: true,
      opened: [],
      openedQuestion: [],
      form: [
        {
          title: "",
          description: "",
          deadline: "",
          term: "",

          question: [
            {
              title: "",
              guide: "",
              answer_format: "",
              answer: "",
              real_answer: "",
              real_answers: [
                {
                  answer: "",
                },
              ],
              answers: [{ answer: "" }],
              limit: "",
              score: "",
              placeholder: "",

              options: [
                {
                  name: "",
                },
              ],
              tools: [],
              tools_description: "",
              fields: [],
              items: [],
              documents: [
                {
                  name: "",
                  file: "",
                },
              ],
            },
          ],
        },
      ],
      scoreOptions: [
        { value: "", text: "Please select score", disabled: true },
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

      subjects: [],
      allClass: [],
    };
  },
  mounted() {
    this.type = this.$route.params.type;
    this.getSubjects();
    this.getCLasses();
    this.form.term = this.$props.option.term;
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

    cancelOption(id) {
      this.assessment[id].values.pop();
    },
    cancelAnswer(id) {
      this.assessment[id].answers.pop();
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
    processUpload(file) {
      let that = this;
      this.start = true;
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      var cloudName = this.cloudinary.cloudName;
      var upload_preset = this.cloudinary.uploadPreset;
      formData.append("file", file);
      formData.append("resource_type", "auto");
      formData.append("upload_preset", upload_preset); // REQUIRED
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/" + cloudName + "/upload"
      );
      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          that.progress = Math.round((e.loaded / e.total) * 100) + "%";
        }
      };
      xhr.upload.onloadstart = function (e) {
        this.progress = "Starting...";
      };
      xhr.upload.onloadend = function (e) {
        this.progress = "Completing..";
      };
      xhr.onload = (progressEvent) => {
        if (xhr.status === 200) {
          // Success! You probably want to save the URL somewhere
          this.progress = "Completed";
          setTimeout(() => {
            this.start = false;
          }, 1000);
          var response = JSON.parse(xhr.response);
          this.uploadedFileUrl = response.secure_url; // https address of uploaded file
          this.post.coverImage = response.secure_url;
        } else {
          this.start = false;
          alert("Upload failed. Please try again.");
        }
      };
      xhr.send(formData);
    },
    upload_handler(blobInfo, success, failure) {
      var xhr, formData;
      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", "/api/image-upload");
      xhr.onload = function () {
        var json;

        if (xhr.status != 200) {
          failure("HTTP Error: " + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != "string") {
          failure("Invalid JSON: " + xhr.responseText);
          return;
        }
        success(json.location);
      };
      formData = new FormData();
      formData.append("file", blobInfo.blob());
      xhr.send(formData);
    },
    loadFile(cb, value, mt) {
      var input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.onchange = function () {
        var file = this.files[0];

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          var id = "blobid" + new Date().getTime();
          var blobCache = tinymce.activeEditor.editorUpload.blobCache;
          var base64 = reader.result.split(",")[1];
          var blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);
          cb(blobInfo.blobUri(), { title: file.name });
        };
      };
      input.click();
    },
    submit() {
      let ask = confirm("Are you done?");
      if (ask) {
        let tutor = JSON.parse(localStorage.getItem("typeTutor"));
        let data = {
          subject: this.$props.option.subject,
          session: this.$props.option.session,
          title: this.$props.option.title,
          type: this.$props.option.type,
          level: this.$props.option.myclass,
          duration: JSON.stringify(this.$props.option.duration),
          start: this.$props.option.duration.start_time,
          end: this.$props.option.duration.end_time,
          assessment: this.form,
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
    saveDraft() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let data = {
        subject: this.$props.option.subject,
        session: this.$props.option.session,
        title: this.$props.option.title,
        type: this.$props.option.type,
        level: this.$props.option.myclass,
        duration: JSON.stringify(this.$props.option.duration),
        assessment: this.form,
        start: this.$props.option.duration.start_time,
        end: this.$props.option.duration.end_time,
        total_score: this.total_score,
      };
      axios
        .post("/api/draft-assessment", data, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 201) {
            this.$toasted.success("Saved to draft");
          }
        })
        .catch();
    },
    addSection() {
      this.form.push({
        title: "",
        description: "",

        question: [
          {
            title: "",
            guide: "",
            answer_format: "",
            answer: "",
            answers: [{ answer: "" }],
            limit: "",
            placeholder: "",
            score: "",

            options: [
              {
                name: "",
              },
            ],
            tools: [],
            tools_description: "",
            fields: [],
            items: [
              {
                key: "",
              },
            ],
            documents: [
              {
                name: "",
                file: "",
              },
            ],
          },
        ],
      });

      // this.opened.push(this.form.length - 1);
    },
    removeSection(index) {
      this.form.splice(index, 1);
      let ele = this.opened.indexOf(index);
      this.opened.splice(ele, 1);
    },
    hideSection(id) {
      if (this.opened.includes(id)) {
        let ele = this.opened.indexOf(id);

        this.opened.splice(ele, 1);
      } else {
        this.opened.push(id);
      }
    },
    toggleQuestion(id) {
      if (this.openedQuestion.includes(id)) {
        this.openedQuestion.splice(this.openedQuestion.indexOf(id), 1);
      } else {
        this.openedQuestion.push(id);
      }
    },
    addQuestion(index) {
      // this.openedQuestion.push(index);
      this.form[index].question.push({
        title: "",
        guide: "",
        answer_format: "",
        answer: "",
        answers: [{ answer: "" }],
        limit: "",
        placeholder: "",

        options: [
          {
            name: "",
          },
        ],
        tools: [],
        tools_description: "",
        fields: [],
        items: [
          {
            key: "",
          },
        ],
        documents: [
          {
            name: "",
            file: "",
          },
        ],
      });
    },
    removeQuestion(index) {
      this.form[index].question.pop();
    },
    addOption(index, id) {
      this.form[index].question[id].options.push({
        name: "",
      });
    },
    removeOption(index,id) {
      this.form[index].question[id].options.pop();
    },
    removeAns(index,id) {
      this.form[index].question[id].real_answers.pop();
    },
    addField(e, index, id) {
      if (this.field !== "") {
        this.form[index].question[id].fields.push(e);
        this.field = "";
      } else {
        this.$toasted.error("Field empty");
      }
    },
    addAns(index, id) {
      this.form[index].question[id].real_answers.push({
        answer: "",
      });
    },
    handleTable(index, id) {
      this.obj = {};
      this.form[index].question[id].items = [];
      this.form[index].question[id].fields.forEach((item) => {
        this.obj[item] = "";
      });
      this.form[index].question[id].items.push(this.obj);
      this.$toasted.info("Table fields created");
    },
    removeField(index, id, i) {
      this.form[index].question[id].fields.splice(i, 1);
    },
  },
};
</script>

<style scoped>
.container-fluid {
  width: 97%;
}
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
.right-bar {
  margin-top: 2rem;
}
.bottom-box {
  margin: 0 auto;
  background: white;
}
.form-group {
  margin: 0;
  margin-bottom: 1rem;
}
.hide {
  height: 120px;
  overflow: hidden;
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

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.save {
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: 2rem;
}

.btn-save {
  background: #0a4065;
  color: #fff;
}
.btn-submit {
  background: transparent;
  border: 1px solid #0a4065;
  color: #0a4065;
}
.preview {
  background: #fff;
  margin-top: 1.5rem;
  border-radius: 10px;
  padding: 10px;
}
.btn-trash {
  color: red;
}
.action-btn {
}
.btn-preview {
  background: #ced4da;
  border-radius: 5px;
}
.publish-btn {
  display: flex;
  justify-content: flex-end;
}
.btn-publish {
  background: #0a4065;
  color: #fff;
}
.main-box {
  padding: 20px;
  background: #f7f8fa;
  position: relative;
}
section {
  background: #fff;
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
</style>