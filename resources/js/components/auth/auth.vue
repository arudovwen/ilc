<template>
  <div class="main">
    <navigation></navigation>
    <div v-if="login" class="login">
      <login @register="switchAuth"></login>
    </div>
    <div v-if="registration" class="register">
      <registration @login="switchAuth"></registration>
    </div>
    <div class="mini_box_1"></div>
    <div class="mini_box_2"></div>
  </div>
</template>

<script>
import login from "./login";
import registration from "./registration";
import navigation from "../navigation/navigation";
export default {
  data() {
    return {
      login: false,
      registration: true
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$route.query.authType === "login") {
        vm.switchAuth("login");
        next();
      } else {
        vm.switchAuth("register");
        next();
      }
    });
  },

  components: {
    registration,
    login,
    navigation
  },
  watch: {
    "$route.query.authType": {
      handler: function(newValue, oldValue) {
        this.switchAuth(newValue);
      }
    }
  },

  methods: {
    switchAuth(value) {
      switch (value) {
        case "login":
          this.login = true;
          this.registration = false;
          break;
        case "register":
          this.login = false;
          this.registration = true;
          break;
      }
    }
  }
};
</script>


<style scoped>
.main {
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
  height: 100vh;
  position: relative;
  overflow: hidden;
}
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
  background: #333333;
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
  }
  .mini_box_1 {
    top: -12%;
    right: -20%;
  }
}
</style>