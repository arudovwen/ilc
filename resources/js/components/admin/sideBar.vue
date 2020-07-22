<template>
  <div class="side-bar">
    <div class="admin-dashboard-logo text-center">
       <p> {{admin.school}}</p>
       <p>Schools</p>
    </div>
    <nav class="">
      <ul class="admin-dashboard-nav">
      <router-link to="/admin"> <div class="nav-item"><span><img src="/images/size-1.png" class="img-fluid" alt=""></span>  <li>Dashboard</li></div></router-link>
       <router-link to="/admin"> <div class="nav-item"><span><img src="/images/admin-svg.png" class="img-fluid" alt=""></span>  <li>Admin</li></div></router-link>
        <router-link to="/admin"> <div class="nav-item"><span><img src="/images/teacher-svg.png" class="img-fluid" alt=""></span>  <li>Teachers</li></div></router-link>
         <router-link to="/admin"> <div class="nav-item"><span><img src="/images/stu-svg.png" class="img-fluid" alt=""></span>  <li>Students</li></div></router-link>
          <router-link to="/admin"> <div class="nav-item"><span><img src="/images/class-svg.png" class="img-fluid" alt=""></span>  <li>Classes</li></div></router-link>
           <router-link to="/admin"> <div class="nav-item"><span><img src="/images/subject-svg.png" class="img-fluid" alt=""></span>  <li>Subject</li></div></router-link>
       <!-- <router-link to="/admin/administrators"> <li>Administrators</li></router-link>
       <router-link to="/admin/tutors"> <li>Tutors</li></router-link>
       <router-link to="/admin/students"> <li>Students</li></router-link>
         <router-link to="/admin/classes/years"> <li>Classes & Years</li></router-link>
            <router-link to="/admin/courses"> <li>Courses / Subjects</li></router-link>
              <router-link to="/admin/curriculum/home"> <li>Curriculum </li></router-link>
              <router-link to="/admin/syllabus/home"> <li>Syllabus </li></router-link>
                 <router-link to="/admin/time-table/home"> <li>Time Table </li></router-link> -->
      
        <div class="nav-item"><span><img src="/images/log-out-svg.png" alt=""></span><li @click="logout">Logout</li></div>
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