<template>
  <div >
      <div class="">
                <b-navbar toggleable="lg" type="light" variant="faded">
                    <b-navbar-brand ><img src="/images/ilc-logo.png" class="d-inline-block align-top" alt="logo"></b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="mx-auto">
                        <b-nav-item href="/" >Home</b-nav-item>
                           <router-link to=""> <b-nav-item  >About</b-nav-item></router-link>
                          <router-link to="">  <b-nav-item  >Sponsors</b-nav-item></router-link>
                          <router-link to=""> <b-nav-item  >Contact</b-nav-item></router-link>
                    </b-navbar-nav>
                    <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                           <router-link to="/auth?authType=login" class="mr-3" > <button v-waves.button v-waves.float v-waves.light class="login-btn nav-link">
              <span >LOGIN </span>
             
            </button></router-link>
                           <router-link to="/school/register" > <button v-waves.button v-waves.float v-waves.light class="sec_color">
              <span >REGISTER </span>
             
            </button></router-link>
                        </b-navbar-nav>
                    </b-collapse>
            </b-navbar>
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

</script>
<style scoped lang="scss">
a{
    text-decoration: none;
}
.login-btn{
    padding-left: 20px !important;
     padding-right: 20px !important;
     font-size: 15px;
}

.reg-btn{
    padding-left: 20px !important;
     padding-right: 20px !important;
     font-size: 15px;

}
.card{
    background-color: #f7f8fa;
    border: none;
}
.sec_color{
    background-color: var(--primary-btn);
    color: #fff;
    font-size: 16px;
}
.login-btn{
   border: 1px solid #002A06;
}
</style>