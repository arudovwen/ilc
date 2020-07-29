<template>
  <!-- <div>
    <div class="logo mb-4">
     
           <p class="bg-white text-center rounded px-3 py-2"> {{student.abbreviation}}</p> 
  
         <small>SCHOOL</small>
    </div> 

    <nav>
      <ul>
        <router-link to="/student">
          <li>
            <i class="fa fa-home pr-2" aria-hidden="true"></i> Home
          </li>
        </router-link>
        <router-link to="/student/profile">
          <li>
            <i class="fa fa-user pr-2" aria-hidden="true"></i> Profile
          </li>
        </router-link>
        <router-link to="/student/explore">
          <li>
            <i class="fa fa-venus-mars pr-2" aria-hidden="true"></i> Explore
          </li>
        </router-link>
        <router-link to="/student/library">
          <li>
            <i class="fas fa-box-open pr-2"></i> Library
          </li>
        </router-link>
      
           <router-link to="/student/assessment">
          <li>
            <i class="fa fa-book pr-2" aria-hidden="true"></i> Assessments
          </li>
        </router-link>
        <router-link to="/student/groups">
          <li>
            <i class="fa fa-users pr-2" aria-hidden="true"></i> Groups
          </li>
        </router-link>
     <router-link to="/">
          <li>
            <i class="fa fa-list-alt pr-2" aria-hidden="true"></i> Grade Book
          </li>
        </router-link>
        <router-link to="/">
          <li>
            <i class="fa fa-calendar pr-2" aria-hidden="true"></i> Activities
          </li>
        </router-link>
     
        <router-link to="/">
          <li>
            <i class="fas fa-chalkboard-teacher pr-2"></i> Virtual Classroom
          </li>
        </router-link>

        <li @click="logout">
          <i class="fa fa-sign-out pr-2" aria-hidden="true"></i> Logout
        </li>
      </ul>
    </nav>
  </div>-->
  <div>
    <div class="logo">
          
      <h6> {{student.abbreviation}}</h6>
    </div>
    <nav>
      <ul>
        <router-link to="/student">
          <li>
            <i class="icon-home-1" aria-hidden="true"></i> Home
          </li>
        </router-link>
        <router-link to="/student/explore">
          <li>
            <i class="icon-refresh" aria-hidden="true"></i> Explore
          </li>
        </router-link>
        <router-link to="/student/library">
          <li>
            <i class="icon-open-book" aria-hidden="true"></i> Library
          </li>
        </router-link>
        <router-link to="/student/assessment">
          <li>
            <i class="icon-hour" aria-hidden="true"></i> Assessment
          </li>
        </router-link>
        <router-link to="/student/groups">
          <li>
            <i class="icon-group-1" aria-hidden="true"></i> Groups
          </li>
        </router-link>
        <router-link to="/student/groups">
          <li>
            <i class="icon-score" aria-hidden="true"></i> Grade Books
          </li>
        </router-link>
        <router-link to="/student/activities">
          <li>
            <i class="icon-market" aria-hidden="true"></i> Activities
          </li>
        </router-link>
        <router-link to="/student/virtual">
          <li>
            <i class="icon-business-class" aria-hidden="true"></i> Virtual Class
          </li>
        </router-link>

         <li @click="logout">
          <i class="fa fa-sign-out pr-2" aria-hidden="true"></i> Logout
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  props: ["student"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    logout() {
      localStorage.removeItem("typeStudent");
      this.$router.push("/auth");
    },
  },
};
</script>


<style scoped>
ul {
  margin: auto;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
ul a {
  color: #565454;
  font-size: 12px;
  font-family: "Montserrat";
}
ul i {
  font-size: 20px;
}
 .logo{
    padding: 10px 20px;
    margin-bottom:20px;
    text-align:center;
    font-weight: bold;
    font-family: 'Josefin Sans';
    font-size: 32px;
}
.logo h6{
    font-weight: bold;
    font-family: 'Josefin Sans';
    font-size: 24px;
    text-align:center;
    color:#ffd708;
    margin:0;
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
/* .router-link-exact-active li{
background:#f7f8fa ;
border-top-left-radius:10px;
border-bottom-left-radius:10px
} */
</style>