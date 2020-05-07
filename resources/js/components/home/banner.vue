<template>
  <div class="main_container">
    <div class="square">
      <div class="mini_square_1"></div>
      <div class="mini_square_2"></div>
      <div class="square_text">
        <div class="main_text josefin">
            EDUCATION <br>  IN IMO <br> HAS A    NEW FACE
        </div>
        <div class="sub_text">
        
           <router-link to="/auth"><button v-waves.button v-waves.float v-waves.light class="bg-white"> <span class="mr-2 sec_color"> Enroll Now</span> <i class="fa fa-long-arrow-right sec_color" aria-hidden="true"></i></button></router-link>
        </div>
      </div>
    </div>
    <div class="circle_1 rounded-circle"></div>
    <div class="circle_2 rounded-circle"></div>
    <div class="circle_3 rounded-circle"></div>
  </div>
</template>

<script>
export default {};
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
.square_text{
    color: white;
    width: 100%;
    min-height: 50%;
    display: grid;
    justify-content: flex-start;
    align-items: center;
    padding-left: 50px;
    
}

.main_text{
    font-weight: 700;
    font-size: 60px;
    color: #333333;
}
.sub_text{
    color:white;
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
.rounded_circle img{
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
</style>