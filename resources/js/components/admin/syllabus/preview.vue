<template>
  <div class="body">
    <!-- form starts here  -->
    <form @submit.prevent="toggleNote" v-if="!afterSubmit">
      <legend class="text-center">Preview Syllabus</legend>

      <div class="border p-3 my-4">
        <h3>Class Information</h3>
        <div class="form-group">
          <h5 class="toCaps">
            <span class="text-muted">{{termType?'Semester':'Term'}} :</span>
            {{syllabus.term}}
          </h5>
        </div>
        <div class="form-group">
          <h5 class="toCaps">
            <span class="text-muted">Grade Level :</span>
            {{syllabus.grade_level}}
          </h5>
        </div>
      </div>

      <div class="border p-3 my-4">
        <h3>Subject Information</h3>

        <div class="form-group">
          <h5 class="toCaps">
            <span class="text-muted">Subject :</span>
            {{syllabus.subject}}
          </h5>
        </div>

        <div class="form-group">
          <label for>Description</label>
          <small
            class="form-text text-muted"
          >Provide a brief description of the subject, for the specific student profile</small>
          <textarea readonly class="form-control" rows="3" v-model="syllabus.description"></textarea>
        </div>

        <div class="form-group">
          <label for>Frequency</label>
          <input
            readonly
            type="text"
            v-model="syllabus.frequency"
            class="form-control w-50"
            aria-describedby="helpId"
            placeholder="e.g Once a week "
          />
        </div>
      </div>

      <div class="border p-3 my-4">
        <h3>Overarching Learner Outcome</h3>

        <div class="form-group">
          <small
            id="helpId"
            class="form-text text-muted"
          >What do you intend for students to learn at the end of the session?</small>
          <span v-for="(item,idx) in syllabus.learner_outcome" :key="idx" class="mb-2 d-flex">
            <span class="mr-3">{{idx+1}}.</span>
            <input
              readonly
              type="text"
              class="form-control mb-2"
              aria-describedby="helpId"
              v-model="item.name"
              placeholder
            />
          </span>
        </div>
      </div>
      <div class="border p-3 my-4">
        <h3>Target skills to be learned</h3>
        <small
          id="helpId"
          class="form-text text-muted"
        >What skills do you expect your students to pick up by the end of the session</small>

        <span v-for="(item,idx) in syllabus.target_skills" :key="idx" class="mb-2 d-flex">
          <span class="mr-3">{{idx+1}}.</span>
          <input
            readonly
            type="text"
            class="form-control w-25 mb-2"
            aria-describedby="helpId"
            v-model="item.name"
            placeholder
          />
        </span>
      </div>
      <div class="border p-3 my-4">
        <h3>Required Modules</h3>
        <small
          id="helpId"
          class="form-text text-muted"
        >What modules/subjects are your students required to cover under this subject</small>
        <span v-for="(item,idx) in syllabus.modules" :key="idx" class="mb-2 d-flex">
          <span class="mr-3">{{idx+1}}.</span>
          <input
            readonly
            type="text"
            class="form-control w-25 mb-2"
            aria-describedby="helpId"
            v-model="item.name"
            placeholder
          />
        </span>
      </div>
      <div class="border p-3 my-4">
        <h3>Delivery Methods</h3>
        <small
          id="helpId"
          class="form-text text-muted"
        >What delivery methods are the teachers expected to employ in teaching the students?</small>

        <span v-for="(item,idx) in syllabus.delivery_methods" :key="idx" class="mb-2 d-flex">
          <span class="mr-3">{{idx+1}}.</span>
          <input
            readonly
            type="text"
            class="form-control w-25 mb-2"
            aria-describedby="helpId"
            v-model="item.name"
            placeholder
          />
        </span>
      </div>
      <div class="border p-3 my-4">
        <h3>Assessment</h3>
        <small id="helpId" class="form-text text-muted">How will the students be assessed?</small>

        <span v-for="(item,idx) in syllabus.assessments" :key="idx" class="mb-2 d-flex">
          <span class="mr-3">{{idx+1}}.</span>
          <input
            readonly
            type="text"
            class="form-control w-25 mb-2"
            aria-describedby="helpId"
            v-model="item.name"
            placeholder
          />
        </span>

        <div class="d-flex">
          <b-button class="mr-3" @click="addNew(5)">Add</b-button>
          <b-button class @click="remove(5)" v-if="syllabus.assessments.length > 1">Remove</b-button>
        </div>
      </div>
      <div>
        <h3>FAQs (Optional)</h3>

        <div v-for="(item,idx) in syllabus.faqs" :key="idx" class="mb-3">
          <span class="d-flex mb-2">
            <label for="Question" class="side-label">Question</label>
            <input
              readonly
              v-model="item.question"
              type="text"
              class="form-control w-75 mb-2"
              aria-describedby="helpId"
              placeholder="Question"
            />
          </span>
          <span class="d-flex">
            <label for class="side-label">Answer</label>
            <input
              readonly
              v-model="item.answer"
              type="text"
              class="form-control w-75"
              aria-describedby="helpId"
              placeholder="Answer"
            />
          </span>
          <hr v-if="syllabus.faqs.length > 1" />
        </div>
      </div>
      <div class="border p-3 my-4">
        <h3>Course Availability</h3>

        <div class="form-group">
          <label for></label>
          <select readonly disabled class="custom-select w-25" v-model="syllabus.availability">
            <option selected value disabled>Select one</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      <div class="border p-3 my-4">
        <h3>Comments</h3>
        <div class="form-group">
          <textarea
            readonly
            class="form-control"
            v-model="syllabus.comments"
            rows="3"
            placeholder="write comment here ..."
          ></textarea>
        </div>
      </div>
      <div class="my-5 d-flex">
        <b-button type="submit" class="btn btn-primary mr-3">Submit</b-button>
        <b-button type="button" variant="outline-secondary" @click="cancel">Cancel</b-button>
      </div>
    </form>
    <!-- form ends here  -->
    <div class="suggestion-box" v-else>
      <div class="close" @click="close">
        <i class="fas fa-minus-circle" aria-hidden="true"></i>
      </div>
      <p class="josefin">Leave a note</p>

      <div class="form-group w-75">
        <textarea
          class="form-control"
          v-model="comment"
          rows="3"
          placeholder="write note here ..."
        ></textarea>
      </div>

      <b-button type="submit" class="btn btn-primary my-4" @click="submit">Submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["admin", "syllabus"],
  data() {
    return {
      afterSubmit: false,
      termType: false,
      comment: ""
    };
  },
  watch: {
    comment: "updateComment"
  },
  methods: {
    updateComment() {
      this.$emit("updateComment", this.comment);
    },
    toggleNote() {
      this.afterSubmit = true;
    },
    submit() {
      this.$emit("submit");
    },
    close() {
      this.afterSubmit = false
    },
    cancel() {
      this.$emit("cancelToggle");
      
    },
    goTo(value) {
      if (value == 1) {
        this.$router.push("/admin/syllabus");
      } else {
        this.$router.push("/admin/syllabus/home");
      }
    }
  }
};
</script>

<style scoped>
.body {
 
  position: relative;
  height: 100%;
}
.popup-overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  top: 0;
  left: 0;
}
.suggestion-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 5px;
  height: 300px;
  width: 50%;
  padding: 15px;
  position: absolute;
  bottom: 50%;
  transform: translate(50%, 50%);
  right: 50%;
}
.suggestion-box p {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.close {
  position: absolute;
  right: 5px;
  top: 5px;
}
form {
  padding: 20px;
  padding-bottom: 60px;
  background: white;
  font-size: 14px;
}
h3 {
  margin-bottom: 24px;
  font-size: 1.4em;
}
.side-label {
  width: 150px;
}
.form-text {
  margin-bottom: 18px;
}
</style>