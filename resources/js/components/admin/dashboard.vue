<template>
  <div class="my-container d-flex">
    <Side class="side"   :sideBar='sideBar' @minimise="minimise" :class="{'min-side':sideBar}"/>
    <Main class="main" :class="{'min-main':sideBar}" />
  </div>
</template>


<script>
import Side from "./sideBar";
import Main from "./main";
export default {
  data() {
    return {
         sideBar:false
    }
  },
  components: {
    Main,
    Side
  },
   methods: {
        minimise(){
            this.sideBar = !this.sideBar
        }
    },
};
</script>

<style scoped>
.my-container {
  width: 100%;
  display: flex;
}
.side {
 width: 15%;
    height: 100vh;
    background: #008E3A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
  
  
}
.main {
  width: 85%;
  min-height: 100%;
  position: absolute;
  right: 0;
   background: #f7f8fa;
}
.min-side{
width: 4% !important;
}
.min-main{
width: 96% !important;
}

</style>