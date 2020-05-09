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
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in educations"
                    :key="idx"
                  >{{item.education_level}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.school">
                  <option class="hidden" value="selected" disabled>Select School</option>
                  <option :value="item.id" v-for="(item ,idx) in schools" :key="idx">{{item.school}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.faculty">
                  <option class="hidden" value="selected" disabled>Select Faculty</option>
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in faculties"
                    :key="idx"
                  >{{item.faculty}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.department">
                  <option class="hidden" value="selected" disabled>Select Department</option>
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in departments"
                    :key="idx"
                  >{{item.department}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.student.course_level">
                  <option class="hidden" value="selected" disabled>Select Course Level</option>
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in levels"
                    :key="idx"
                  >{{item.course_level}}</option>
                </select>
              </div>

              <button v-waves.button v-waves.float v-waves.light type="submit" class="btnRegister">
                <span v-if="spin" class="spinner-border spinner-border-sm"></span> Register
              </button>
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
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in educations"
                    :key="idx"
                  >{{item.education_level}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.tutor.school">
                  <option class="hidden" value="selected" disabled>Select School</option>
                  <option :value="item.id" v-for="(item ,idx) in schools" :key="idx">{{item.school}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.tutor.faculty">
                  <option class="hidden" value="selected" disabled>Select Faculty</option>
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in faculties"
                    :key="idx"
                  >{{item.faculty}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required class="form-control" v-model="user.tutor.department">
                  <option class="hidden" value="selected" disabled>Select Department</option>
                  
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in departments"
                    :key="idx"
                  >{{item.department}}</option>
                </select>
              </div>
              <div class="form-group">
                <select required multiple class="form-control" v-model="user.tutor.course_level">
                  <option class="hidden" value="selected" disabled>Select Course Level</option>
                  <option
                    :value="item.id"
                    v-for="(item ,idx) in levels"
                    :key="idx"
                  >{{item.course_level}}</option>
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
          course_level: "selected"
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
      },
      spin: false,
      educations: [],
      schools: [],
      depts: [],
      faculties: [],
      levels: []
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    departments(){
      return this.depts.filter(item=>{
       if (this.user.type === 'student') {
           return  item.faculty_id == this.user.student.faculty;
       }else{
          return  item.faculty_id == this.user.tutor.faculty;
       }
    })
    }
  },
  methods: {
    getData() {
      axios.get(`/api/get-edulevel`).then(res => {
        this.educations = res.data;
      });
      axios.get(`/api/get-level`).then(res => {
        this.levels = res.data;
      });
      axios.get(`/api/get-schools`).then(res => {
        this.schools = res.data;
      });
      axios.get(`/api/get-faculties`).then(res => {
        this.faculties = res.data;
      });
      axios.get(`/api/get-dept`).then(res => {
        this.depts = res.data;
      });
    },
    login(value) {
      this.$emit("login", value);
    },
    changeType(value) {
      this.user.type = value;
    },
    submit() {
      this.spin = true;
      if (this.user.type == "student") {
        this.user.student.type = "student";
        axios
          .post("/api/register", this.user.student)
          .then(response => {
            if (response.status == 201) {
              this.spin = false;
              this.$toasted.success("Registered successfully");
              this.$router.push("/auth?authType=login");
              this.$router.push(
                "/auth?authType=login&redirect_from=register&level=student"
              );
            }
          })
          .catch(error => {
            this.spin = false;
            this.$toasted.error("Something is not right");
          });
      } else {
        this.user.tutor.type = "tutor";
        axios.post("/api/register-tutor", this.user.tutor).then(response => {
          if (response.status == 201 || response.status == 200) {
            this.spin = false;
            this.$toasted.success("Registered successfully");
            this.$router.push({
              name: Auth,
              query: {
                authType: "login",
                redirect_from: "register",
                level: "student"
              }
            });
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