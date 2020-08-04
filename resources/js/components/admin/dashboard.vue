<template>
  <div class="my-container d-flex">
    <Side class="side" />
    <Main class="main" />
  </div>
</template>


<script>
import Side from "./sideBar";
import Main from "./main";
export default {
  components: {
    Main,
    Side
  }
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
  height: 100%;
  position: absolute;
  right: 0;
   background: #f7f8fa;
}
</style>