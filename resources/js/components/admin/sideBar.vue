<template>
  <div class="side-bar">
     <div class="logo">
     
           <p class="bg-white text-center rounded px-3 py-2"> {{admin.abbreviation}}</p> 
  
         <small>SCHOOL</small>
    </div> 
    <nav class="side-menu">
      <ul class="admin-dashboard-nav">
        <router-link to="/admin" class="nav-item "><span class="icon-dashboard"></span><li>Dashboard</li></router-link>
          <router-link to="/admin/administrators" class="nav-item "><span class="icon-admin"></span><li>Admin</li></router-link>
            <router-link to="/admin/tutors" class="nav-item "><span class="icon-teacher"></span><li>Teacher</li></router-link>
              <router-link to="/admin/students" class="nav-item "><span class="icon-students"></span><li>Student</li></router-link>
                <router-link to="/admin/courses" class="nav-item "><span class="icon-edit"></span><li>Subject</li></router-link>
                  <router-link to="/admin/classes/years" class="nav-item "><span class="icon-education"></span><li>Classes</li></router-link>
                    <router-link to="/admin/curriculum/home" class="nav-item "><span class="icon-edit"></span><li>Curriculum</li></router-link>
                      <router-link to="/admin/syllabus/home" class="nav-item "><span class="icon-education"></span><li>Syllabus</li></router-link>
                         <router-link to="/admin/assessment" class="nav-item "><span class="icon-edit"></span><li>Assessments</li></router-link>
                      
                        <router-link to="/admin/time-table/home" class="nav-item "><span class="icon-calendar"></span><li>Time Table</li></router-link>
                         <div class="nav-item" @click="logout"><li > Logout</li></div>  
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
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
  },
};
</script>
<style scoped>
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
nav ul li{
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  color:hsl(187deg 74% 95%)
}
nav{
    padding-left:20px;
}
.router-link-exact-active {
background:#f7f8fa ;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
 color:#008E3A;
}
.router-link-exact-active li{

 color:#008E3A;
}
.router-link-exact-active span{

 color:#008E3A;
}
</style>