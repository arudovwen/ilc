<template>
  <div id="navigation">
    <div class="logo"></div>
    <div class="nav">
      <nav class="ml-auto">
        <ul class="logged_in" v-if="auth">
          <li>
            <span class="name"><i class="fa fa-user-circle-o " aria-hidden="true"></i> Hi {{name}}</span>
          </li>
          <li>
            <span>Logout <i class="fa fa-sign-out" aria-hidden="true"></i></span>
          </li>
        </ul>
        <ul v-else>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link
              :to="{
                name:'Auth',
                query:{
                    'authType':'login'
                }
            }"
            >Login</router-link>
          </li>
          <li>
            <router-link
              :to="{
                name:'Auth',
                query:{
                    'authType':'register'
                }
            }"
            >Register</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
      name: "Success"
    };
  }
};
</script>

<style scoped>
#navigation {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 5;
}
.logo {
}
ul{
  position: relative;
}
.nav {
  padding: 10px;
}
.nav ul li {
  display: inline-block;
}
.nav ul li a {
  color: white;
  padding: 10px 25px;
  font-size: 15px;
  cursor: pointer;
}
.nav nav ul li:hover a {
  color: #333333;
}
.logged_in{
  margin-left: auto;
}
ul li span {
  color: white;
  padding: 10px 15px;
  font-size: 15px;
  cursor: pointer;
}
.nav nav ul li:hover span {
  color: #333333;
}

</style>