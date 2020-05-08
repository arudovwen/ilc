<template>
  <div id="navigation" class="animated" :class="{'bg-white':show_white, slideInRight:show_nav_bar}">
    <div class="mobile_nav">
      <router-link to="/">
        <div class="logo">
          <div class="logo_image">
            <img src="/images/logo.jpg" alt srcset />
          </div>
          <div class="logo_text josefin_bold">
            Imo State
            <br />Learning Center
          </div>
        </div>
      </router-link>
      <div class="mobile">
        <button
          class="hamburger hamburger--collapse"
          @click="showNav"
          tabindex="0"
          aria-controls="navigation"
          aria-label="Menu"
          role="button"
          :class="{'is-active':show_nav_bar}"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="nav">
      <nav class="ml-auto" v-if="show_nav_bar">
        <ul class="logged_in" v-if="auth">
          <li>
            <span class="name">
              <i class="fa fa-user-circle-o mc-dark fa-2x" aria-hidden="true"></i>
              Hi {{name}}
            </span>
          </li>
          <li>
            <span @click="logOut">
              Logout
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </span>
          </li>
        </ul>
        <ul class="logg" v-if="!auth">
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
      name: "",
      show_nav_bar: true,
      show_white: false,
      user: {}
    };
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.show_nav_bar = false;
      this.show_white = false;
    }
    let user = JSON.parse(localStorage.getItem("myUser"));
    if (user !== null) {
      this.name = user.name;
    }

    this.update();
  },
  watch: {
    $route: "update",
    "$route.query.authType": "closeNav"
  },
  methods: {
    update() {
      let user = localStorage.getItem("myUser");
      if (user !== null) {
        this.auth = true;
      } else {
        this.auth = false;
      }
      this.closeNav();
    },
    showNav() {
      this.show_nav_bar = !this.show_nav_bar;
      this.show_white = !this.show_white;
    },
    closeNav() {
      if (window.innerWidth < 768) {
        this.show_nav_bar = false;
        this.show_white = false;
      }
    },
    logOut() {
      localStorage.removeItem("myUser");
      localStorage.removeItem("bizUser");
      window.location.reload();
    }
  }
};
</script>

<style scoped>
#navigation {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 10px;
}
.mobile_nav a {
  text-decoration: none;
}
.mobile {
  display: none !important;
}
.logo_image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.logo_image img {
  width: 100%;
  height: 100%;
}
.logo_text {
  font-weight: 700;
  color: #333;
  font-size: 22px;
}
ul {
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
  padding: 5px 15px;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
}
.nav nav ul li:hover a {
  color: #333333;
  border-bottom: 2px solid white;
}
.logged_in {
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
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 425px) {
  #navigation {
    display: block;
  }
  nav {
    width: 100%;
  }
  .mobile_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logg {
  }
  .nav ul li a {
    color: #333333;
  }
  ul li span {
    color: #333;
  }
  .mobile {
    display: block !important;
    padding: 0 15px;
  }
  .nav ul li {
    display: block;
  }
  .logo_image {
    width: 60px;
    height: 60px;
  }
  .logo_text {
    font-weight: 700;
    color: #333;
    font-size: 18px;
  }
}
</style>