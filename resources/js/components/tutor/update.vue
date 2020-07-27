<template>
  <div class="container">
    <form @submit.prevent="register">
      <legend>Update Tutor</legend>
      <div class="form-group">
        <label for>Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          v-model="tutor.name"
          aria-describedby="helpId"
          placeholder="John Doe"
        />
      </div>
      <div class="form-group">
        <label for>Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          v-model="tutor.email"
          aria-describedby="helpId"
          placeholder="example@email.com"
        />
      </div>
       <div class="form-group">
        <label for>Password</label>
        <input
          type="password"
          class="form-control"
          name="pasword"
          id="password"
          v-model="tutor.password"
          aria-describedby="helpId"
          placeholder="*******"
        />
      </div>
     <div class="form-group">
        <label for>Phone</label>
        <input
          type="phone"
          class="form-control"
          name="phone"
          id="email"
          v-model="tutor.phone"
          aria-describedby="helpId"
          placeholder="0910*******"
        />
      </div>
      <div class="form-group">
        <label for>Gender</label>
        <select class="form-control" v-model="tutor.gender">
          <option value disabled>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

       <div class="form-group">
        <label for>Qualification</label>
       
        <input type="text"  class="form-control" v-model="tutor.subjects" placeholder="Bachelor's Degree ...">
      </div>
       <div class="form-group">
        <label for>Faculty</label>
        <input
          type="text"
          class="form-control"
          name="faculty"
          id="faculty"
          v-model="tutor.faculty"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
       <div class="form-group">
        <label for>Department</label>
        <input
          type="text"
          class="form-control"
          name="department"
          id="department"
          v-model="tutor.department"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
       <div class="form-group">
        <label for>Address</label>
        <input
          type="text"
          class="form-control"
          name="address"
          id="address"
          v-model="tutor.address"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
       <div class="form-group">
        <label for>DOB</label>
        <input
          type="date"
          class="form-control"
          name="dob"
          id="dob"
          v-model="tutor.dob"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
    
       <div class="form-group">
        <label for>Lga</label>
        <input
          type="text"
          class="form-control"
          name="lga"
          id="lga"
          v-model="tutor.lga"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
       <div class="form-group">
        <label for>State</label>
        <input
          type="text"
          class="form-control"
          name="state"
          id="state"
          v-model="tutor.state"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
       <div class="form-group">
        <label for>Bank Name</label>
        <input
          type="text"
          class="form-control"
          name="bank_name"
          id="bank_name"
          v-model="tutor.bank_name"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>

       <div class="form-group">
        <label for>Bank No</label>
        <input
          type="text"
          class="form-control"
          name="bank_no"
          id="bank_no"
          v-model="tutor.bank_no"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
       <div class="form-group">
        <label for>Bvn</label>
        <input
          type="text"
          class="form-control"
          name="bvn"
          id="bvn"
          v-model="tutor.bvn"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
    
       <div class="form-group">
        <label for>Area of Specialization</label>
        <input
          type="text"
          class="form-control"
          name="area_of_specialization"
          id="area_of_specialization"
          v-model="tutor.area_of_specialization"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
      <Upload :id="$route.params.id"  @getUploadDetails="getUploadDetails"/>

      <button class="button-blue" type="submit">Register</button>
    </form>
  </div>
</template>


<script>
import Upload from '../uploadComponent'
export default {
  data() {
    return {
      tutor: {
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        level_of_edu: "",
        subjects: "",
        faculty: "",
        department: "",
        course_level: "",
        address: "",
        dob: "",
        lga: "",
        state: "",
        bank_name: "",
        bank_no: "",
        bvn: "",
        area_of_specialization: "",
        profile:''
      },

      spin: false
    };
  },
  components:{
    Upload
  },
  mounted() {
    this.getTutor()
  },
   methods: {
     getUploadDetails(id,res){
       console.log("getUploadDetails -> res", res)
       this.tutor.profile = res.secure_url
     },
    register() {
        let tutor = JSON.parse(localStorage.getItem('typeTutor'))
      axios.put(`/api/tutors/${tutor.id}`, this.tutor,{headers:{
          Authorization: `Bearer ${tutor.access_token}`
      }}).then(res => {
        if (res.status == 200) {
          this.$toasted.info("Successful");
          this.$router.push("/tutor/profile");
        }
      });
    },
    getTutor(){
       let tutor = JSON.parse(localStorage.getItem('typeTutor'))
          axios
        .get(`/api/tutorDetails`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.tutor = res.data;
          }
        });
    }
    
  }
};
</script>

<style scoped>
.container {
  
}
form {
  width: 70%;
  margin:0 auto;
  padding:70px 0;
}
</style>