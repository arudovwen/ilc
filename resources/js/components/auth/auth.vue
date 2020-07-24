<template>
  <div class="main">
  
    <login></login>
  </div>
</template>

<script>
const login = () => import("./login");


export default {
  data() {
    return {};
  },

  components: {
    login,
  }
};
</script>


<style scoped>

.login {
}
.register {
  padding-top: 3%;
}

.mini_box_1,
.mini_box_2 {
  width: 200px;
  height: 100px;
  position: absolute;
}
.mini_box_1 {
  background: #333;
  top: -6%;
  right: -6%;
  transform: rotate(45deg);
}
.mini_box_2 {
  background: yellow;
  bottom: -6%;
  left: -6%;
  transform: rotate(45deg);
}
@media (max-width: 1024px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .register .nav-tabs {
    width: 35%;
  }
  .mini_box_2 {
    bottom: -12%;
    left: -12%;
  }
  .mini_box_1 {
    top: -12%;
    right: -12%;
  }
}
@media (max-width: 768px) {
}
@media (max-width: 425px) {
  .mini_box_2 {
    bottom: -12%;
    left: -20%;
    background: #333;
  }
  .mini_box_1 {
    top: -12%;
    right: -20%;
    background: yellow;
  }
}
</style>