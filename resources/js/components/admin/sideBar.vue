<template>
  <div>
    <div class="logo">
       <p> {{admin.school}}</p>
    </div>
    <nav>
      <ul>
      <router-link to="/admin">  <li>Home</li></router-link>
       <router-link to="/admin/administrators"> <li>Administrators</li></router-link>
       <router-link to="/admin/tutors"> <li>Tutors</li></router-link>
       <router-link to="/admin/students"> <li>Students</li></router-link>
         <router-link to="/admin/classes/years"> <li>Classes & Years</li></router-link>
            <router-link to="/admin/courses"> <li>Courses / Subjects</li></router-link>
              <router-link to="/admin/curriculum/home"> <li>Curriculum </li></router-link>
              <router-link to="/admin/syllabus/home"> <li>Syllabus </li></router-link>
                 <router-link to="/admin/time-table/home"> <li>Time Table </li></router-link>
      
        <li @click="logout">Logout</li>
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
.logo{
    padding: 10px 20px;
}
.logo p{
    font-weight: bold;
    font-family: 'Josefin Sans';
    font-size: 24px;
}
nav ul li{
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
}
</style>