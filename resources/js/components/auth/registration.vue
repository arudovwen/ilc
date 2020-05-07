<template>
  <div class="container-fluid register">
    <form @submit.prevent="submit" class="mx-auto register-right">
      <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            @click="changeType('student')"
          >Student</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            @click="changeType('tutor')"
          >Tutor</a>
        </li>
      </ul>

      <!-- Student starts here   -->
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
          v-if="user.type == 'student'"
        >
          <h3 class="register-heading">Apply as a Student</h3>
          <div class="row register-form">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Full Name *"
                  v-model="user.student.name"
                />
              </div>

              <div class="form-group">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Password *"
                  v-model="user.student.password"
                />
              </div>

              <div class="form-group">
                <div class="maxl">
                  <label class="radio inline">
                    <input required type="radio" value="male" checked v-model="user.student.gender" />
                    <span>Male</span>
                  </label>
                  <label class="radio inline">
                    <input required type="radio" value="female" v-model="user.student.gender" />
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
                  v-model="user.student.email"
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
                  v-model="user.student.phone"
                />
              </div>
            </div>

            <!-- For tertiry students  -->
            <div class="col-md-6">
              <div class="form-group">
                <input
                  required
                  type="text"
                  minlength="10"
                  maxlength="10"
                  class="form-control"
                  placeholder="Your Mat No"
                  v-model="user.student.mat_no"
                />
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.level_of_edu">
                  <option
                    class="hidden"
                    value="selected"
                    disabled
                  >Please select your Level of Education</option>
                  <option>Professional</option>
                  <option>Tertiary</option>
                  <option>Secondary</option>
                  <option value>Primary</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.school">
                  <option class="hidden" value="selected" disabled>Select School</option>
                  <option>Alvan Ikoku College of Education</option>
                  <option>Eastern Palm University, Ogboko, Ideato</option>
                  <option>Imo State Polytechnic, Umuagwo</option>
                  <option>Imo State University, Owerri (IMSU)</option>
                  <option>Technological Skills Acquisition Institute, Orlu</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.faculty">
                  <option class="hidden" value="selected" disabled>Select Faculty</option>
                  <option>Faculty Of Agriculture & Veterinary Medicine</option>
                  <option>Faculty Of Business Administration</option>
                  <option>Faculty Of Education</option>
                  <option>Faculty Of Engineering</option>
                  <option>Faculty Of Environmental Science</option>
                  <option>Faculty Of Health Science</option>
                  <option>Faculty Of Humanitieso</option>
                  <option>Faculty Of Law</option>
                  <option>Faculty Of Medicine</option>
                  <option>Faculty Of Science</option>
                  <option>Faculty Of Social Science</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.department">
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
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.course_level">
                  <option class="hidden" value="selected" disabled>Select Course Level</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option >400</option>
                  <option >600</option>
                  <option >700</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                v-waves.button
                v-waves.float
                v-waves.light
                type="submit"
                class="btnRegister"
              >Register</button>
            </div>
          </div>
        </div>

        <!-- student starts here  -->
        <div
          class="tab-pane fade show"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
          v-if="user.type == 'tutor'"
        >
          <h3 class="register-heading">Apply as a Tutor</h3>
          <div class="row register-form">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="Full Name *"
                  v-model="user.tutor.name"
                />
              </div>

              <div class="form-group">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Password *"
                  v-model="user.tutor.password"
                />
              </div>

              <div class="form-group">
                <div class="maxl">
                  <label class="radio inline">
                    <input required type="radio" value="male" checked v-model="user.tutor.gender" />
                    <span>Male</span>
                  </label>
                  <label class="radio inline">
                    <input required type="radio" value="female" v-model="user.tutor.gender" />
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
                  v-model="user.tutor.email"
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
                  v-model="user.tutor.phone"
                />
              </div>
            </div>

            <!-- For tertiry students  -->
            <div class="col-md-6">
              <div class="form-group">
                <input
                  required
                  type="text"
                  minlength="10"
                  maxlength="10"
                  class="form-control"
                  placeholder="Your Id No"
                  v-model="user.tutor.id_no"
                />
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.tutor.level_of_edu">
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
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.tutor.school">
                  <option class="hidden" value="selected" disabled>Select School</option>
                  <option>Alvan Ikoku College of Education</option>
                  <option>Eastern Palm University, Ogboko, Ideato</option>
                  <option>Imo State Polytechnic, Umuagwo</option>
                  <option>Imo State University, Owerri (IMSU)</option>
                  <option>Technological Skills Acquisition Institute, Orlu</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.tutor.faculty">
                  <option class="hidden" value="selected" disabled>Select Faculty</option>
                  <option>Faculty Of Agriculture & Veterinary Medicine</option>
                  <option>Faculty Of Business Administration</option>
                  <option>Faculty Of Education</option>
                  <option>Faculty Of Engineering</option>
                  <option>Faculty Of Environmental Science</option>
                  <option>Faculty Of Health Science</option>
                  <option>Faculty Of Humanitieso</option>
                  <option>Faculty Of Law</option>
                  <option>Faculty Of Medicine</option>
                  <option>Faculty Of Sciencesu</option>
                  <option>Faculty Of Social Science</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.tutor.department">
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
              </div>
              <div class="form-group">
                <select required multiple class="form-control" v-model="user.tutor.course_level">
                  <option class="hidden" value="selected" disabled>Select Course Level</option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option >400</option>
                  <option >600</option>
                  <option >700</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                v-waves.button
                v-waves.float
                v-waves.light
                type="submit"
                class="btnRegister"
              >Register</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        type: "student",
        student: {
          name: "",
          password: "",
          email: "",
          phone: "",
          gender: "",
          mat_no: "",
          level_of_edu: "selected",
          school: "selected",
          faculty: "selected",
          department: "selected",
          course_level: "selected",
     
        },
        tutor: {
        
          name: "",
          password: "",
          email: "",
          phone: "",
          gender: "",
          id_no: "",
          level_of_edu: "selected",
          school: "selected",
          faculty: "selected",
          department: "selected",
          course_level: []
        }
      }
    };
  },
  methods: {
    login(value) {
      this.$emit("login", value);
    },
    changeType(value) {
      this.user.type = value;
    },
    submit() {
      if (this.user.type == "student") {
        this.user.student.type = 'student'
        axios.post("/api/register", this.user.student).then(response => {
          if (response.status == 201) {
            this.$toasted.success("Registered successfully");
            this.$router.push("/auth?authType=login");
          }
        }).catch(error=>{
          
        }) ;
      } else {
         this.user.tutor.type = 'tutor'
        axios.post("/api/register-tutor", this.user.tutor).then(response => {
          if (response.status == 201 || response.status == 200) {
            this.$toasted.success("Registered successfully");
            this.$router.push("/auth?authType=login");
          }
        });
      }
    }
  }
};
</script>


<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  height: 85%;
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
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 4%;
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
  color: #fff;
  font-weight: 600;
  width: 50%;
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