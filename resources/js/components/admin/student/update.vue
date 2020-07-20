<template>
  <div class="container">
    <form @submit.prevent="register" class="mx-auto register-right">
      <!-- Student starts here   -->

      <legend>Update Info</legend>

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

      <button v-waves.button v-waves.float v-waves.light type="submit" class="btnRegister">
        <span v-if="spin" class="spinner-border spinner-border-sm"></span> Register
      </button>
    </form>
  </div>
</template>


<script>
export default {
  props:['admin'],
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
    register() {
        let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios.put(`/api/update-user/${this.$route.params.id}`, this.student,{headers:{
          Authorization: `Bearer ${admin.access_token}`
      }}).then(res => {
        if (res.status == 200) {
          this.$toasted.info("Successful");
          this.$router.push("/admin/students");
        }
      });
    },
    getStudent(){
          axios
        .get(`/api/admin-get-user/${this.$route.params.id}`, {
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
.container {

  padding:70px 0;
}
form {
  width: 70%;
  margin:0 auto
}
</style>