<template>
  <div>
    <!-- <nav class="shadow-sm p-3"> <h5>Admin Dashboard</h5></nav>
    <transition name="slide-fade">  </transition>-->
    <div class="dashboard-top-nav">
      <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-top">
        <b-navbar-brand href="#">
          <div class="dashboard-brand text-center">
            <h3>{{admin.school}}</h3>
              <!-- <p>Schools</p> -->
          </div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
         
          <!-- Right aligned nav items -->
          <b-navbar-nav class="mx-auto">
            <b-nav-form>
              <b-form-input size="sm" class placeholder="Search"></b-form-input>
            </b-nav-form>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <b-avatar size="2em" src="https://placekitten.com/300/300"></b-avatar>
            </b-nav-item>
            <b-nav-item>
              <div class="user-name">
                <h6 class="toCaps">{{admin.name}}</h6>
              </div>
            </b-nav-item>
            <b-nav-item>
              <img src="/images/bells-svg.png" alt />
            </b-nav-item>
            <b-nav-item>
              <img src="/images/menu-svg.png" alt />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view :admin="admin" class="semi-white"></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      admin: {},
    };
  },
  created() {
    this.admin = JSON.parse(localStorage.getItem("typeAdmin"));
  },
};
</script>

<style scoped>
.semi-white {
  background: #f0f1f1;
 margin-top:66px;
}
</style>