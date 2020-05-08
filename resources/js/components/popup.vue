<template>
  <div class="overlay">
    <div class="overlay_box">
      <div class="overlay_text">
           <!-- <div class="close" >
                <div class="fa-stack">
                    <i class="fa fa-circle fa-stack-2x mc-dark" aria-hidden="true"></i>
                    <i class="fa fa-times fa-stack-1x text-white" aria-hidden="true"></i>
                </div>
            </div> -->
        <div class="sub_text">
             <div class="my_text mb-4">
                <p>Well done ! You're all set to get started </p>
              <p class="quote"><em>"The beautiful thing about learning is that no one can take it away from you"</em></p>
              <small><strong>-B.B. King</strong></small>
             </div>
      
           <div> <button @click="redirect" v-waves.button v-waves.float v-waves.light class="get_started">
              <span class="mr-2 ">Go to classroom</span>
              <i class="fa fa-long-arrow-right " aria-hidden="true"></i>
            </button></div>
         
        </div>
      </div>
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
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay_box {
  position: relative;
  width: 60%;
  height: 60%;
  background: #fff;
  border-radius: 5px;
}
.overlay_text{
  display:grid;
  justify-content:center;
  align-items: center;
  padding:15px;
  height: 100%;
}
.quote{
  color:#006600;
  font-size: 20px;
}
.get_started{
    background: #333;
    color: white !important;
    margin: 0 auto;
    
}
.sub_text{
    text-align: center;
}
.close{
    position:absolute;
    top:-15px;
    right:-15px;
}
@media(max-width:425px){
  .overlay_box {
  position: relative;
  width: 90%;
  height: 60%;
  background: #fff;
}
}
</style>