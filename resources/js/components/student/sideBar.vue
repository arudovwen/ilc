<template>
  <div class="bar">
    <div class="logo">
      <h6>{{student.abbreviation}}</h6>
    </div>
    <nav>
      <ul>
        <router-link to="/student">
          <li>
            <i class="icon-home-1" aria-hidden="true"></i>
            <span v-if="!sideBar">Home</span>
          </li>
        </router-link>
        <router-link to="/student/explore">
          <li>
            <i class="icon-refresh" aria-hidden="true"></i>
            <span v-if="!sideBar">Explore</span>
          </li>
        </router-link>
        <router-link to="/student/library">
          <li>
            <i class="icon-open-book" aria-hidden="true"></i>
            <span v-if="!sideBar">Library</span>
          </li>
        </router-link>
        <router-link to="/student/assessment">
          <li>
            <i class="icon-hour" aria-hidden="true"></i>
            <span v-if="!sideBar">Assessment</span>
          </li>
        </router-link>
        <router-link to="/student/groups">
          <li>
            <i class="icon-group-1" aria-hidden="true"></i>
            <span v-if="!sideBar">Groups</span>
          </li>
        </router-link>
        <router-link to="/student/groups">
          <li>
            <i class="icon-score" aria-hidden="true"></i>
            <span v-if="!sideBar">Grade Books</span>
          </li>
        </router-link>
        <router-link to="/student/activities">
          <li>
            <i class="icon-market" aria-hidden="true"></i>
            <span v-if="!sideBar">Activities</span>
          </li>
        </router-link>
        <router-link to="/student/virtual">
          <li>
            <i class="icon-business-class" aria-hidden="true"></i>
            <span v-if="!sideBar">Virtual Class</span>
          </li>
        </router-link>

        <li @click="logout">
          <i class="icon-logout" aria-hidden="true"></i>
          <span v-if="!sideBar">Log Out</span>
        </li>
      </ul>
    </nav>
    <div class="min-nav" @click="minimise">
      <i class="fas fa-compress-alt fa-1x"></i>
    </div>
  </div>
</template>


<script>
export default {
  props: ["student", "sideBar"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    logout() {
      localStorage.removeItem("typeStudent");
      this.$router.push("/auth");
    },
    minimise() {
      this.$emit("minimise");
    },
  },
};
</script>


<style scoped>
.bar {
  position: relative;
}
.min-nav {
  position: absolute;
  text-align: center;
  right: 20px;
  bottom: 40px;
}
ul {
  margin: auto;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.router-link-exact-active li {
  background: rgba(19, 166, 153, 0.2);
}
ul a {
  color: #565454;
  font-size: 12px;
  font-family: "Montserrat";
}
ul li {
  color: #565454;
  font-size: 12px;
  font-family: "Montserrat";
}
ul i {
  font-size: 20px;
}
.logo {
  padding: 10px 20px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: "Josefin Sans";
  font-size: 32px;
}
.logo h6 {
  font-weight: bold;
  font-family: "Josefin Sans";
  font-size: 24px;
  text-align: center;
  color: #ffd708;
  margin: 0;
}
/* .logo{
    padding: 10px 20px;
    margin-bottom:20px;
    text-align:center;
}
.logo h6{
    font-weight: bold;
    font-family: 'Josefin Sans';
    font-size: 24px;
    text-align:center;
    color:#ffd708;
    margin:0;
}
.logo small{
 
  font-size:18px;
    color:hsl(50deg 100% 20%)

}
ul{
    list-style:none;
}
nav ul li{
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  color:hsl(50deg 100% 20%);
}
nav{
    padding-left:20px;
} */
.router-link-exact-active {
  color: #13a699;
  font-weight: bold;
}
</style>