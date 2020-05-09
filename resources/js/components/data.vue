<template>
  <div class="container-fluid register">
    <div class="mx-auto register-right">
      <!-- Student starts here   -->
     
          <div class="row register-form">
            <!-- For tertiry students  -->
            <div class="col-md-10">
              <form @submit.prevent="levelEdu" class="form-group">
                <h4>Add Education Level</h4>
                <select multiple class="form-control" v-model="user.level_of_edu">
                  <option
                    class="hidden"
                    value="selected"
                    disabled
                  >Please select your Level of Education</option>
                  <option>Professional</option>
                  <option>Tertiary</option>
                  <option>Secondary</option>
                  <option>Primary</option>
                  <option>Other</option>
                </select>

                <button
                  v-waves.button
                  v-waves.float
                  v-waves.light
                  type="submit"
                  class="btnRegister"
                >
              Create
                </button>
              </form>
              <form @submit.prevent="school" class="form-group">
                  <h4>Add School</h4>
                <select multiple class="form-control" v-model="user.school">
                  <option class="hidden" value="selected" disabled>Select School</option>
                  <option>Alvan Ikoku College of Education</option>
                  <option>Eastern Palm University, Ogboko, Ideato</option>
                  <option>Imo State Polytechnic, Umuagwo</option>
                  <option>Imo State University, Owerri (IMSU)</option>
                  <option>Technological Skills Acquisition Institute, Orlu</option>
                </select>

                <button
                  v-waves.button
                  v-waves.float
                  v-waves.light
                  type="submit"
                  class="btnRegister"
                >
              Create
                </button>
              </form>
              <form @submit.prevent="faculty" class="form-group">
                  <h4>Add Faculty</h4>
                <select multiple class="form-control" v-model="user.faculty">
                  <option class="hidden" value="selected" disabled>Select Faculty</option>
                  <option>Faculty Of Agriculture & Veterinary Medicine</option>
                  <option>Faculty Of Business Administration</option>
                  <option>Faculty Of Education</option>
                  <option>Faculty Of Engineering</option>
                  <option>Faculty Of Environmental Science</option>
                  <option>Faculty Of Health Science</option>
                  <option>Faculty Of Humanities</option>
                  <option>Faculty Of Law</option>
                  <option>Faculty Of Medicine</option>
                  <option>Faculty Of Science</option>
                  <option>Faculty Of Social Science</option>
                </select>

                <button
                  v-waves.button
                  v-waves.float
                  v-waves.light
                  type="submit"
                  class="btnRegister"
                >
              Create
                </button>
              </form>
              <form @submit.prevent="dept" class="form-group">
                 <h4>Add Department </h4>
                <div class="mb-2">
                   <select class="form-control" v-model="user.department.faculty">
                  <option class="hidden" value="selected" disabled>Select Faculty</option>
                  <option value="1">Faculty Of Agriculture & Veterinary Medicine</option>
                  <option value="2">Faculty Of Business Administration</option>
                  <option value="3">Faculty Of Education</option>
                  <option value="4">Faculty Of Engineering</option>
                  <option value="5">Faculty Of Environmental Science</option>
                  <option value="6">Faculty Of Health Science</option>
                  <option value="7">Faculty Of Humanities</option>
                  <option value="8">Faculty Of Law</option>
                  <option value="9">Faculty Of Medicine</option>
                  <option value="10">Faculty Of Science</option>
                  <option value="11">Faculty Of Social Science</option>
                </select>
                </div>
                <select multiple class="form-control" v-model="user.department.dept">
                  <option class="hidden" value="selected" disabled>Select Department</option>
                  <!-- Agriculture  -->
                  <option class="hidden" disabled>Faculty of Agriculture</option>
                  <option>Department of Agriculture Economics</option>
                  <option>Department of Extension & Rural Development</option>
                  <option>Department of Animal science and Fisheries</option>
                  <option>Department of Crop Science And Biotechnology</option>
                  <option>Department of Soil Science and Environment</option>

                  <!-- Business admin   -->
                  <option class="hidden" disabled>Faculty of Business admin</option>
                  <option>Department of Management</option>
                  <option>Department of Hospitality and Tourism Management</option>
                  <option>Department of Marketing</option>
                  <option>Department of Accountancy</option>
                  <option>Department of Banking and Finance</option>
                  <option>Department of Insurance and Actuarial Science</option>

                  <!-- Education  -->
                  <option class="hidden" disabled>Faculty of Education</option>
                  <option>Department of Arts Education</option>
                  <option>Department of Physical Science Education</option>
                  <option>Department of Life Science Education</option>
                  <option>Department of Language Education</option>
                  <option>Department of Library and information Science</option>
                  <option>Department of Foundation and Counseling</option>

                  <!-- Ø Faculty Of Engineering -->
                  <option class="hidden" disabled>Faculty of Engineering</option>
                  <option>Department of Agricultural Engineering</option>
                  <option>Department of Electrical Engineering</option>
                  <option>Department of Civil Engineering</option>
                  <option>Department of Food Science & Technology</option>
                  <option>Department of Mechanical Engineering</option>

                  <!-- Faculty Of Environmental Science  -->
                  <option class="hidden" disabled>Faculty of Environmental Science</option>
                  <option>Department of Surveying & GeoInformatics</option>
                  <option>Department of Architecture</option>
                  <option>Department of Building</option>
                  <option>Department of Urban and Regional Planning</option>
                  <option>Department of Quantity Surveying</option>
                  <option>Department of Fine & Applied Arts</option>
                  <option>Department of Estate Management</option>

                  <!-- Faculty Of Health Science -->
                  <option class="hidden" disabled>Faculty of Health Science</option>
                  <option>Department of Optometry</option>
                  <option>Department of Medical Laboratory Science</option>
                  <option>Department of Nursing Science</option>
                  <option>Department of Nutrition and Dietetics</option>

                  <!-- Faculty Of Humanities -->
                  <option class="hidden" disabled>Faculty of Humanities</option>
                  <option>Department of Religious Studies</option>
                  <option>Department of French</option>
                  <option>Department of History and International Studies</option>
                  <option>Department of Philosophy</option>
                  <option>Department of Theatre arts</option>
                  <option>Department of Linguistics and Igbo</option>
                  <option>Department of English language and Literary Studies</option>

                  <!-- Faculty Of Law -->
                  <option class="hidden" disabled>Faculty of Law</option>
                  <option>Department of Law</option>

                  <!-- Ø Faculty Of Medicine -->
                  <option class="hidden" disabled>Faculty of Medicine</option>
                  <option>Department of Anatomy</option>
                  <option>Department of Physiology</option>
                  <option>Department of Medical Biochemistry</option>
                  <option>Department of Community Medicine</option>
                  <option>Department of Medical Microbiology/ Parasitology</option>
                  <option>Department of Chemical Pathology</option>
                  <option>Department of Morbid Anatomy/ Histopathology</option>
                  <option>Department of Haematology and Blood Transfusion Medicine</option>
                  <option>Department of Medicine</option>
                  <option>Department of Surgery</option>
                  <option>Department of Obstetrics & Gynecology</option>
                  <option>Department of Pediatrics</option>
                  <option>Department of Pharmacology</option>

                  <!-- Ø Faculty Of Sciences -->
                  <option class="hidden" disabled>Faculty of Sciences</option>
                  <option>Department of Animal Science and Environmental Biology</option>
                  <option>Department of Plant Science and Biotechnology</option>
                  <option>Department of Physics/ Industrial Physics</option>
                  <option>Department of Chemistry/Industrial Chemistry</option>
                  <option>Department of Microbiology/Industrial Microbiology</option>
                  <option>Department of Biochemistry</option>
                  <option>Department of Mathematics</option>
                  <option>Department of Statistics</option>
                  <option>Department of Computer Science</option>

                  <!-- Ø Faculty Of Social Science -->
                  <option class="hidden" disabled>Faculty of Social Sciences</option>
                  <option>Department of Economics</option>
                  <option>Department of Psychology</option>
                  <option>Department of Geography & Environmental Management</option>
                  <option>Department of Political Science</option>
                  <option>Department of Sociology</option>
                  <option>Department of Mass Communication</option>
                </select>

                <button
                  v-waves.button
                  v-waves.float
                  v-waves.light
                  type="submit"
                  class="btnRegister"
                >
              Create
                </button>
              </form>
              <form @submit.prevent="level" class="form-group">
                  <h4>Add Course Level</h4>
                <select multiple class="form-control" v-model="user.course_level">
                  <option class="hidden" value="selected" disabled>Select Course Level</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>600</option>
                  <option>700</option>
                  <option>Other</option>
                </select>

                <button
                  v-waves.button
                  v-waves.float
                  v-waves.light
                  type="submit"
                  class="btnRegister"
                >
              Create
                </button>
              </form>
            </div>
          </div>
        
    
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
     
          level_of_edu: [],
          school: [],
          faculty: [],
          department: {
            dept:[],
            faculty:'selected'
          },
          course_level: []
        
      },
      spin: false
    };
  },
  methods: {
    login(value) {
      this.$emit("login", value);
    },
    changeType(value) {
      this.user.type = value;
    },
    school() {
      this.spin = true;
     
        axios
          .post("/api/add-school", this.user.school)
          .then(response => {
            if (response.status == 201) {
              this.spin = false;
              this.$toasted.success("Registered successfully");
            }
          })
          .catch(error => {
            this.spin = false;
            this.$toasted.error("Something is not right");
          });
      
    },
    faculty() {
      this.spin = true;
     
        axios
          .post("/api/add-faculty", this.user.faculty)
          .then(response => {
            if (response.status == 201) {
              this.spin = false;
              this.$toasted.success("Registered successfully");
            }
          })
          .catch(error => {
            this.spin = false;
            this.$toasted.error("Something is not right");
          });
      
    },
    dept() {
      this.spin = true;
     
        axios
          .post("/api/add-dept", this.user.department)
          .then(response => {
            if (response.status == 201) {
              this.spin = false;
              this.$toasted.success("Registered successfully");
            }
          })
          .catch(error => {
            this.spin = false;
            this.$toasted.error("Something is not right");
          });
      
    },
    level() {
      this.spin = true;
     
        axios
          .post("/api/add-level", this.user.course_level)
          .then(response => {
            if (response.status == 201) {
              this.spin = false;
              this.$toasted.success("Registered successfully");
            }
          })
          .catch(error => {
            this.spin = false;
            this.$toasted.error("Something is not right");
          });
      
    },
    levelEdu() {
      this.spin = true;
     
        axios
          .post("/api/add-edulevel", this.user.level_of_edu)
          .then(response => {
            if (response.status == 201) {
              this.spin = false;
              this.$toasted.success("Registered successfully");
            }
          })
          .catch(error => {
            this.spin = false;
            this.$toasted.error("Something is not right");
          });
      }
    
  }
};
</script>


<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.register {
  background: transparent;
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  padding-top: 4%;
}
.register-left input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #f7f8fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 28%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f7f8fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  width: 80%;
  padding: 0 15px;
}
.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 2%;
}
.btnRegister {

  margin-top: 4%;
  border: none;
  border-radius: 1.5rem;
  padding: 10px 40px;
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
  color: #fff;
  font-weight: 600;
  max-width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
  border-radius: 1.5rem;
  width: 20%;
  float: right;
  font-size: 14px;
}
.register .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  font-size: 14px;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 100px;
  color: #5fa1ac;
  border: 2px solid #5fa1ac;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
.form-group{
  border:1px solid #ccc;
  margin-bottom: 24px;
  padding: 10px;
}

@media (max-width: 1024px) {
  .register .nav-tabs {
    width: 35%;
  }
  h4.register-heading {
    font-size: 22px;
  }
  .register-form {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .register .nav-tabs {
    width: 35%;
  }
  .register-right {
    width: 90%;
  }
}
@media (max-width: 425px) {
  .register-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .register-right {
    width: 100%;
    height: 75vh;
    overflow: scroll;
    padding-top: 80%;
  }
  .register .nav-tabs {
    width: 60%;
    margin: 3% auto 0;
  }
  .register-left {
    padding-bottom: 20px;
  }
}
</style>