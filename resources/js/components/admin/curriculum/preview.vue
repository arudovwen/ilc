<template>
  <div class="body">
    <!-- form starts here  -->
    <form @submit.prevent="submit" v-if="!afterSubmit">
      <legend class="text-center">Preview Curriculum</legend>
      <div class="form-group">
        <h4 class="toCaps">
          <span class="text-muted">Grade Level :</span>
          {{curriculum.grade_level}}
        </h4>
      </div>

      <div class="border p-3 my-4">
        <h5>Student Profile</h5>

        <div class="form-group d-flex">
          <label for class="mr-3 side-label">Target Age</label>
          <input
            readonly
            v-model="curriculum.profile.age"
            type="text"
            class="form-control w-75"
            aria-describedby="helpId"
            placeholder="1 to 5"
          />
        </div>
        <div class="form-group d-flex">
          <label for class="mr-3 side-label">Interests</label>
          <input
            readonly
            v-model="curriculum.profile.interests"
            type="text"
            class="form-control w-75"
            aria-describedby="helpId"
            placeholder="Science , Sales .."
          />
        </div>
        <div class="form-group d-flex">
          <label for class="mr-3 side-label">Learning Abilities</label>
          <input
            readonly
            type="text"
            class="form-control w-75"
            aria-describedby="helpId"
            v-model="curriculum.profile.abilities"
            placeholder
          />
        </div>
        <div class="form-group d-flex">
          <label for class="mr-3 side-label">Other Pecularities</label>

          <textarea readonly class="form-control w-75" rows="3" v-model="curriculum.profile.others"></textarea>
        </div>
      </div>

      <div class="border p-3 my-4">
        <h5>Overarching Learner Outcome</h5>

        <div class="form-group">
          <small
            id="helpId"
            class="form-text text-muted"
          >What do you intend for students to learn at the end of the session?</small>
          <span v-for="(item,idx) in curriculum.learner_outcome" :key="idx" class="mb-2 d-flex">
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
        <h5>Target skills to be learned</h5>
        <small
          id="helpId"
          class="form-text text-muted"
        >What skills do you expect your students to pick up by the end of the session</small>

        <span v-for="(item,idx) in curriculum.target_skills" :key="idx" class="mb-2 d-flex">
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
        <h5>Required subjects</h5>
        <small
          id="helpId"
          class="form-text text-muted"
        >What subjects are your students required to learn this session</small>
        <span v-for="(item,idx) in curriculum.prerequisite" :key="idx" class="mb-2 d-flex">
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
        <h5>Delivery Methods</h5>
        <small
          id="helpId"
          class="form-text text-muted"
        >What delivery methods are the teachers expected to employ in teaching the students?</small>

        <span v-for="(item,idx) in curriculum.delivery_methods" :key="idx" class="mb-2 d-flex">
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
        <h5>Assessment</h5>
        <small id="helpId" class="form-text text-muted">How will the students be assessed?</small>

        <span v-for="(item,idx) in curriculum.assessments" :key="idx" class="mb-2 d-flex">
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
      <div>
        <h5>FAQs (Optional)</h5>

        <div v-for="(item,idx) in curriculum.faqs" :key="idx" class="mb-3">
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
          <hr v-if="curriculum.faqs.length > 1" />
        </div>
      </div>
      <div class="border p-3 my-4">
        <h5>Course Availability</h5>

        <div class="form-group">
          <select class="custom-select" v-model="curriculum.availability" readonly disabled>
            <option selected value disabled>Select one</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      <div class="border p-3 my-4">
        <h5>Comments</h5>
        <div class="form-group">
          <textarea
            readonly
            class="form-control"
            v-model="curriculum.comments"
            rows="3"
            placeholder="write comment here ..."
          ></textarea>
        </div>
      </div>
      <div class="my-5">
        <b-button type="submit">Submit</b-button>
        <b-button type="button" variant="outline-secondary" @click="cancel">Cancel</b-button>
      </div>
    </form>
    <!-- form ends here  -->
    <div class="suggestion-box" v-else>
        <div class="close" @click="close">
            <i class="fas fa-minus-circle" aria-hidden="true"></i>
        </div>
        <p class="josefin">Do you wish to create a syllabus now ?</p>
          <div class="my-5 d-flex">
        <b-button type="submit" class="btn btn-primary mr-4" @click="goTo(1)">Yes</b-button>
        <b-button type="button" class="btn btn-default" @click="goTo(2)">No</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["admin", "curriculum",'afterSubmit'],
  data() {
    return {
    
    
    };
  },

  methods: {
    submit() {
       this.$emit("submit");
    
    },
    close(){

    },
    cancel() {
      this.$emit("togglePreview");
    },
    goTo(value){
        if (value == 1) {
            this.$router.push('/admin/syllabus')
        }else{
             this.$router.push('/admin/curriculum/home')
        }
    }
  }
};
</script>

<style scoped>
.body {
  padding: 40px 30px 70px;
  height: 100%;
  position: relative;
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
  height: 250px;
  width: 50%;
  padding:15px;
  position: absolute;
  bottom: 50%;
  transform: translate(50%, 50%);
  right: 50%;
}
.suggestion-box p{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}
.close{
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
h5 {
  margin-bottom: 24px;
}
.side-label {
  width: 150px;
}
.form-text {
  margin-bottom: 18px;
}
</style>