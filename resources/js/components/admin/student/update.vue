<template>
  <div class="container">
    <b-form @submit.prevent="register" class="mx-auto register-right">
      <!-- Student starts here   -->

     

      <div class="form-group">
        <label for="">Full Name</label>
        <input
          
          type="text"
          class="form-control"
          placeholder="Full Name *"
          v-model="student.name"
        />
      </div>

      <div class="form-group">
        <label for="">Password</label>
        <input
          
          type="password"
          class="form-control"
          placeholder="Password *"
          v-model="student.password"
        />
      </div>

      <div class="form-group">
        <label for="">Gender</label>
        <div class="maxl">
          <label class="radio inline">
            <input  type="radio" value="male" checked v-model="student.gender" />
            <span>Male</span>
          </label>
          <label class="radio inline">
            <input  type="radio" value="female" v-model="student.gender" />
            <span>Female</span>
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="">Email</label>
        <input
          
          type="email"
          class="form-control"
          placeholder="Your Email *"
          v-model="student.email"
        />
      </div>
      <div class="form-group">
        <label for="">Address</label>
        <input
          
          type="text"
          class="form-control"
          placeholder="Your address *"
          v-model="student.address"
        />
      </div>

      <div class="form-group">
        <label for="">Phone</label>
        <input
          
          type="text"
          minlength="11"
          maxlength="11"
          class="form-control"
          placeholder="Your Phone *"
          v-model="student.phone"
        />
      </div>

      <div class="form-group">
        <label for>Faculty</label>
        <select class="custom-select" v-model="student.faculty">
          <option selected disabled value="">Select one</option>
        
        </select>
      </div>
      <div class="form-group">
        <label for>Department</label>
        <select class="custom-select" v-model="student.department">
          <option selected disabled value="">Select one</option>
         
        </select>
      </div>

      <div class="form-group">
        <label for>Dob</label>
        <input
          type="text"
          class="form-control"
          v-model="student.dob"
          aria-describedby="helpId"
          placeholder
        />
      </div>
      <div class="form-group">
        <label for>State</label>
        <input
          type="text"
          class="form-control"
          v-model="student.state"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <div class="form-group">
        <label for>Lga</label>
        <input
          type="text"
          class="form-control"
          v-model="student.lga"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <div class="form-group">
        <label for>Guardian</label>
        <input
          type="text"
          class="form-control"
          v-model="student.guardian"
          aria-describedby="helpId"
          placeholder
        />
      </div>
      <div class="form-group">
        <label for>Guardian Phone</label>
        <input
          type="text"
          class="form-control"
          v-model="student.guardian_phone"
          aria-describedby="helpId"
          placeholder
        />
      </div>
      <div class="form-group">
        <label for>Next of kin</label>
        <input
          type="text"
          class="form-control"
          v-model="student.next_of_kin"
          aria-describedby="helpId"
          placeholder
        />
      </div>
      <div class="form-group">
        <label for>Next of kin Phone</label>
        <input
          type="phone"
          class="form-control"
          v-model="student.next_of_kin_phone"
          aria-describedby="helpId"
          placeholder
        />
      </div>
      <div class="form-group">
        <label for>Student Level</label>
        <input
          type="text"
          class="form-control"
          v-model="student.student_level"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <div class="form-group">
        <label for>Study Course</label>
        <input
          type="text"
          class="form-control"
          v-model="student.study_course"
          aria-describedby="helpId"
          placeholder
        />
      </div>

     
  <b-form-group class="mb-3">
        <b-row>
           <b-col>
              <b-button variant="outline-secondary"  @click="toggleModal" block type="button">Cancel</b-button>
           </b-col>
             <b-col>
                <b-button variant="success" block type="submit">Update</b-button>
             </b-col>
        </b-row>
      </b-form-group>
    </b-form>
  </div>
</template>


<script>
export default {
  props:['admin','id'],
  data() {
    return {
      student: {
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        gender: "",
        faculty: "",
        department: "",
        course_level: "",
        dob: "",
        state: "",
        lga: "",
        guardian: "",
        guardian_phone: null,
        next_of_kin: "",
        next_of_kin_phone: null,
        student_level: "",
        study_course: ""
      },
      spin: false
    };
  },
  mounted() {
    this.getStudent()
  },
   methods: {
        toggleModal(){
   this.$emit('toggleModal','student-create')
    },
    register() {
        let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios.put(`/api/update-user/${this.$props.id}`, this.student,{headers:{
          Authorization: `Bearer ${admin.access_token}`
      }}).then(res => {
        if (res.status == 200) {
          this.$toasted.info("Successful");
          this.toggleModal()
        }
      });
    },
    getStudent(){
          axios
        .get(`/api/admin-get-user/${this.$props.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.student = res.data;
          }
        });
    }
    
  }
};
</script>

<style scoped>

form {
  width: 70%;
  margin:0 auto
}
.form-group{
  margin-bottom: 24px;
}
</style>