<template>
  <div class="side-bar">
    <div class="admin-dashboard-logo text-center">
       <h3> {{admin.abbreviation}}</h3>
       <p>Schools</p>
    </div>
    <nav class="">
      <ul class="admin-dashboard-nav">
      <router-link to="/admin"> <div class="nav-item"><span><img src="/images/size-1.png" class="img-fluid" alt=""></span>  <li>Dashboard</li></div></router-link>
       <router-link to="/admin/administrators"> <div class="nav-item"><span><img src="/images/admin-svg.png" class="img-fluid" alt=""></span>  <li>Admin</li></div></router-link>
        <router-link to="/admin/tutors"> <div class="nav-item"><span><img src="/images/teacher-svg.png" class="img-fluid" alt=""></span>  <li>Teachers</li></div></router-link>
         <router-link to="/admin/students"> <div class="nav-item"><span><img src="/images/stu-svg.png" class="img-fluid" alt=""></span>  <li>Students</li></div></router-link>
          <router-link to="/admin/classes/years"> <div class="nav-item"><span><img src="/images/class-svg.png" class="img-fluid" alt=""></span>  <li>Classes</li></div></router-link>
           <router-link to="/admin/courses"> <div class="nav-item"><span><img src="/images/subject-svg.png" class="img-fluid" alt=""></span>  <li>Subject</li></div></router-link>
              <router-link to="/admin/curriculum/home"> <div class="nav-item"><span><img src="/images/subject-svg.png" class="img-fluid" alt=""></span>  <li>Curriculum</li></div></router-link>
                 <router-link to="/admin/syllabus/home"> <div class="nav-item"><span><img src="/images/subject-svg.png" class="img-fluid" alt=""></span>  <li>Syllabus</li></div></router-link>
                    <router-link to="/admin/time-table/home">  <div class="nav-item"><span><img src="/images/subject-svg.png" class="img-fluid" alt=""></span>  <li>Time Table</li></div></router-link>
                    <div class="nav-item" @click="logout"><span><img src="/images/log-out-svg.png" alt=""></span><li >Logout</li></div>
     
      
  
       
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      admin: {}
    };
  },
  mounted() {
    this.admin = JSON.parse(localStorage.getItem("typeAdmin"));
  },
  methods: {
    logout() {
      localStorage.removeItem("typeAdmin");
      this.$router.push("/admin/auth/login");
    }
  }
};
</script>

<style scoped>

</style>