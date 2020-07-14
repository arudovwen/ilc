<template>
  <div class="container">
   <form @submit.prevent="register" class="mx-auto register-right">
      
      <!-- Student starts here   -->
     
          <legend>Register Student</legend>
           
              <div class="form-group">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Full Name *"
                  v-model="student.name"
                />
              </div>

              <div class="form-group">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Password *"
                  v-model="student.password"
                />
              </div>

              <div class="form-group">
                <div class="maxl">
                  <label class="radio inline">
                    <input required type="radio" value="male" checked v-model="student.gender" />
                    <span>Male</span>
                  </label>
                  <label class="radio inline">
                    <input required type="radio" value="female" v-model="student.gender" />
                    <span>Female</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <input
                  required
                  type="email"
                  class="form-control"
                  placeholder="Your Email *"
                  v-model="student.email"
                />
              </div>
               <div class="form-group">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Your address *"
                  v-model="student.address"
                />
              </div>
              
              <div class="form-group">
                <input
                  required
                  type="text"
                  minlength="11"
                  maxlength="11"
                  class="form-control"
                  placeholder="Your Phone *"
                  v-model="student.phone"
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
  data() {
    return {
     
        student: {
          name: "",
          password: "",
          email: "",
          phone: "",
          gender: "",
          address:"",
          profile:""
      
       
      },
      spin: false,
      
    };
  },
  methods: {
    register() {
        let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios.post("/api/register", this.student,{headers:{
          Authorization: `Bearer ${admin.access_token}`
      }}).then(res => {
        if (res.status == 201) {
          this.$toasted.info("Successful");
          this.$router.push("/admin/home");
        }
      });
    },
   
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form{
    width:50%
}
</style>