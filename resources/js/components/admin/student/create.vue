<template>
  <div class="container">
   <b-form @submit.prevent="register" class="mx-auto register-right">
      
      <!-- Student starts here   -->
     
          <legend class="text-center">Register Student</legend>
           
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
            <label for>Choose Class Level</label>
            <select class="custom-select" v-model="student.student_level">
              <option selected value>Select Class</option>
              <option :value="item.class_name.toLowerCase()" v-for="(item,idx) in allClass" :key="idx">{{item.class_name}}</option>
            </select>
          </div>

   <b-form-group class="mb-3">
        <b-row>
           <b-col>
              <b-button variant="outline-secondary"  @click="toggleModal" block type="button">Cancel</b-button>
           </b-col>
             <b-col>
                <b-button variant="success" block type="submit">Register</b-button>
             </b-col>
        </b-row>
      </b-form-group>
           
       
      

      
    </b-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
     
        student: {
          name: "",        
          email: "",
          gender: "male",
          student_level:'',  
      },
      spin: false,
       allClass: []
      
    };
  },
  mounted() {
    this.getCLasses()
  },
  methods: {
      toggleModal(){
   this.$emit('toggleModal','student-create')
    },
    register() {
        let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios.post("/api/register", this.student,{headers:{
          Authorization: `Bearer ${admin.access_token}`
      }}).then(res => {
        if (res.status == 201) {
          this.$toasted.info("Successful");
          this.toggleModal()
        }
      });
    },
     getCLasses() {
         let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios
        .get("/api/classes", {
          headers: {
            Authorization: `Bearer ${admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
           this.allClass = res.data
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

}
form{
    width:100%
}
.form-group{
  margin-bottom: 24px;
}
</style>