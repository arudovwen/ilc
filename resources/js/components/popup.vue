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
           
      
           <a href="https://bizguruh.com/courses"> <button v-waves.button v-waves.float v-waves.light class="get_started">
              <span class="mr-2 ">Get Started</span>
              <i class="fa fa-long-arrow-right " aria-hidden="true"></i>
            </button></a>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {



    methods: {
        redirect(){
           window.location.href('bizguruh.com/courses?from=ilc&user=student')
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
</style>