<template>
  <div class="main_container">
    <div class="square">
      <div class="mini_square_1"></div>
      <div class="mini_square_2"></div>
      <div class="square_text">
        <div class="main_text josefin">
          EDUCATION
          <br />IN IMO
          <br />HAS A NEW FACE
        </div>
        <div class="sub_text">
          <router-link to="/auth" v-if="!auth">
            <button v-waves.button v-waves.float v-waves.light class="bg-white">
              <span class="mr-2 sec_color">Enroll Now</span>
              <i class="fa fa-long-arrow-right sec_color" aria-hidden="true"></i>
            </button>
          </router-link>
          <div
          v-if="auth" >
            <button v-waves.button v-waves.float v-waves.light class="bg-white" @click="redirect">
              <span class="mr-2 sec_color">Enter classroom</span>
              <i class="fa fa-long-arrow-right sec_color" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="circle_1 rounded-circle">
      <img src="/images/2.jpg" alt="1" />
    </div>
    <div class="circle_2 rounded-circle">
      <img src="/images/5.jpg" alt="2" />
    </div>
    <div class="circle_3 rounded-circle">
      <img src="/images/3.jpg" alt="3" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
      bizUser:{}
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("myUser"));
    let bizUser = JSON.parse(localStorage.getItem("bizUser"));
    if (user !== null) {
      this.auth = true;
    } else {
      this.auth = false;
    }
    if (bizUser !== null) {
      this.bizUser = bizUser 
    }
  },
  methods: {
    redirect(){
  
      window.location.href=`http://localhost:8000/ilc?name=${this.bizUser.name}&email= ${this.bizUser.email} &phone= ${this.bizUser.phone} &school= ${this.bizUser.school} &faculty= ${this.bizUser.faculty}
        &department= ${this.bizUser.department} &course_level= ${this.bizUser.course_level} &mat_no= ${this.bizUser.mat_no}&gender= ${this.bizUser.gender}&level_of_edu= ${this.bizUser.level_of_edu} `
   
    }
  },
};
</script>

<style scoped>
.main_container {
  width: 100%;
  height: 100vh;
  position: relative;
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
  overflow: hidden;
}

.square {
  width: 60%;
  height: 100%;
  position: relative;
  z-index: 4;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.square_text {
  color: white;
  width: 100%;
  min-height: 45%;
  display: grid;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
}

.main_text {
  font-weight: 700;
  font-size: 60px;
  color: #333333;
}
.sub_text {
  color: white;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.mini_square_1,
.mini_square_2 {
  width: 150px;
  height: 250px;
  background: yellow;
  position: absolute;
  transform: rotate(-45deg);
}
.mini_square_1 {
  top: 0;
  right: 0;
  top: -95px;
  right: -50px;
}
.mini_square_2 {
  bottom: -95px;
  left: -50px;
}
.circle_1,
.circle_2 {
  width: 500px;
  height: 500px;
  position: absolute;
  right: 20%;
  border: 6px solid white;
  overflow: hidden;
}
.circle_3 {
  width: 600px;
  height: 600px;
  background: white;
  position: absolute;
  right: -10%;
  top: 50%;
  margin-top: -300px;
  z-index: 2;
  border: 6px solid white;
  overflow: hidden;
}
.rounded_circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.circle_1 {
  background: orange;
  top: -5%;
  z-index: 1;
}
.circle_2 {
  background: green;
  bottom: -5%;
  z-index: 3;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .circle_3 {
    width: 450px;
    height: 450px;
    top: 70%;
  }
  .circle_1,
  .circle_2 {
    width: 350px;
    height: 350px;
  }
  .circle_1 {
    top: 14%;
  }
  .circle_2 {
    bottom: 0%;
  }
  .main_text {
    font-size: 40px;
  }
  .mini_square_2,
  .mini_square_1 {
    width: 100px;
  }
}

@media (max-width: 768px) {
  .circle_3 {
    width: 350px;
    height: 350px;
    top: 70%;
  }
  .circle_1,
  .circle_2 {
    width: 250px;
    height: 250px;
  }
  .circle_1 {
    top: 14%;
  }
  .circle_2 {
    bottom: 0%;
  }
  .main_text {
    font-size: 38px;
  }
  .square_text{
    min-width: 35%;
  }
}
@media (max-width: 425px) {
  .square {
    width: 100%;
  }
  .square_text {
    padding-left: 25px;
  }
  .mini_square_2,
  .mini_square_1 {
    width: 80px;
  }
  .circle_3 {
    width: 350px;
    height: 350px;
    top: 70%;
    right: -45%;
  }
  .circle_1,
  .circle_2 {
    width: 200px;
    height: 200px;
    right: 5%;
  }
  .circle_1 {
    top: 10%;
  }
  .circle_2 {
    bottom: -2%;
    width: 250px;
    height: 250px;
  }
  .main_text {
    font-size: 24px;
  }
  .sec_color {
    font-size: 16px;
  }
}
@media (max-width: 375px) {
  .square {
    width: 100%;
  }
  .square_text {
    padding-left: 25px;
  }
  .mini_square_2,
  .mini_square_1 {
    width: 80px;
  }
  .circle_3 {
    width: 300px;
    height: 300px;
    top: 70%;
    right: -45%;
  }
  .circle_1,
  .circle_2 {
    width: 200px;
    height: 200px;
    right: 1%;
  }
  .circle_1 {
    top: 10%;
  }
  .circle_2 {
    bottom: -2%;
    width: 250px;
    height: 250px;
  }
  .main_text {
    font-size: 22px;
  }
  .sec_color {
    font-size: 16px;
  }
}
</style>