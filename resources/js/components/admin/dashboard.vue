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
  widows: 100%;
}
.side {
  width: 20%;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
}
.main {
  width: 80%;
  height: 100vh;
}
</style>