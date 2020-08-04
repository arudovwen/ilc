<template>
  <div class="side-bar">
     <div class="logo">
     
           <p class="bg-white text-center rounded px-3 py-2"> {{admin.abbreviation}}</p> 
  
         <small>SCHOOL</small>
    </div> 
    <nav class="side-menu">
      <ul class="admin-dashboard-nav">
        <router-link to="/admin" class="nav-item "><i class="icon-dashboard"></i><li>Dashboard</li></router-link>
          <router-link to="/admin/administrators" class="nav-item "><i class="icon-admin"></i><li>Admin</li></router-link>
            <router-link to="/admin/tutors" class="nav-item "><i class="icon-teacher"></i><li>Teacher</li></router-link>
              <router-link to="/admin/students" class="nav-item "><i class="icon-students"></i><li>Student</li></router-link>
                <router-link to="/admin/courses" class="nav-item "><i class="icon-edit"></i><li>Subject</li></router-link>
                  <router-link to="/admin/classes/years" class="nav-item "><i class="icon-education"></i><li>Classes</li></router-link>
                    <router-link to="/admin/curriculum/home" class="nav-item "><i class="icon-edit"></i><li>Curriculum</li></router-link>
                      <router-link to="/admin/syllabus/home" class="nav-item "><i class="icon-education"></i><li>Syllabus</li></router-link>
                         <router-link to="/admin/assessment" class="nav-item "><i class="icon-edit"></i><li>Assessments</li></router-link>
                      
                        <router-link to="/admin/time-table/home" class="nav-item "><i class="icon-calendar"></i><li>Time Table</li></router-link>
                         <router-link to="/h"><i class="icon-logout"></i><li @click="logout" > Logout</li>  </router-link>
                         
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
</style>