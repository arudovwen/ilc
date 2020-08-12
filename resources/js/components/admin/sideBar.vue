<template>
  <div class="side-bar bar">
     <div class="logo">
     
           <p class="bg-white text-center rounded px-3 py-2"> {{admin.abbreviation}}</p> 
  
         <small>SCHOOL</small>
    </div> 
    <nav class="side-menu" :class="{'pl-0':sideBar}">
      <ul class="admin-dashboard-nav">
        <router-link to="/admin" class="nav-item "><i class="icon-dashboard"></i> <li><span v-if="!sideBar">Dashboard</span> </li></router-link>
          <router-link to="/admin/administrators" class="nav-item "><i class="icon-admin"></i> <li><span v-if="!sideBar">Admin</span> </li></router-link>
            <router-link to="/admin/tutors" class="nav-item "><i class="icon-teacher"></i> <li><span v-if="!sideBar">Teacher</span> </li></router-link>
              <router-link to="/admin/students" class="nav-item "><i class="icon-students"></i> <li><span v-if="!sideBar">Student</span> </li></router-link>
                <router-link to="/admin/courses" class="nav-item "><i class="icon-edit"></i> <li><span v-if="!sideBar">Subject</span> </li></router-link>
                  <router-link to="/admin/classes/years" class="nav-item "><i class="icon-education"></i> <li><span v-if="!sideBar">Classes</span> </li></router-link>
                    <router-link to="/admin/curriculum/home" class="nav-item "><i class="icon-edit"></i> <li><span v-if="!sideBar">Curriculum</span> </li></router-link>
                      <router-link to="/admin/syllabus/home" class="nav-item "><i class="icon-education"></i> <li><span v-if="!sideBar">Syllabus</span> </li></router-link>
                         <router-link to="/admin/assessment" class="nav-item "><i class="icon-edit"></i> <li><span v-if="!sideBar">Assessments</span> </li></router-link>
                      
                        <router-link to="/admin/time-table/home" class="nav-item "><i class="icon-calendar"></i> <li><span v-if="!sideBar">Time Table</span> </li></router-link>
                         <router-link to="#" ><i class="icon-logout" @click="logout"></i> <li @click="logout"><span v-if="!sideBar"> Logout</span> </li>  </router-link>
                         
      </ul>
    </nav>
      <div class="min-nav" @click="minimise">
        <i class="fas fa-compress-alt   fa-1x "></i> 
    </div>
  </div>
</template>


<script>
export default {
  props:[ "sideBar"],
  data() {
    return {
      admin: {},
    };
  },
  mounted() {
    this.admin = JSON.parse(localStorage.getItem("typeAdmin"));
  },
  methods: {
    logout() {
      localStorage.removeItem("typeAdmin");
      this.$router.push("/admin/auth/login");
    },
     minimise() {
      this.$emit("minimise");
    },
  },
};
</script>
<style scoped>
.bar{
    position: relative;
}
.min-nav{
    position: absolute;
    text-align: center;
    right: 20px;
    bottom: 40px;
}
.logo{
    padding: 10px 20px;
    margin-bottom:20px;
    text-align:center;
}
.logo p{
    font-weight: bold;
    font-family: 'Josefin Sans';
    font-size: 24px;
    text-align:center;
    color:#008E3A;
    margin:0;
}
.logo small{
 
  font-size:18px;
    color:white

}
ul{
    list-style:none;
}

nav{
    padding-left:20px;
}
a i{
  font-size: 24px;
}
a li{
  padding-top: 2px;
  color: #fff;
}
.router-link-exact-active {
background:#f7f8fa ;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
 color:#008E3A;
}
a:hover{
  color: #fff !important;
}
.router-link-exact-active li{

 color:#008E3A;
}
.router-link-exact-active i{
  font-size: 24px;
 color:#008E3A;
}
li span{
  font-size:17px;
}
</style>