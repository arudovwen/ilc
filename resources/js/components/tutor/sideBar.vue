<template>
   <div>
        <div class="logo">
       <p> {{tutor.name}}</p>
    </div>
        <nav>
        <ul>
            <router-link to="/tutor/profile"> <li>Home</li></router-link>
            <router-link to="/tutor/profile"> <li>Profile</li></router-link>
            <router-link to="/tutor/resources"> <li>Resources</li></router-link>
            <router-link to="/tutor/syllabus"> <li>Curriculum & Syllabus</li></router-link>
              <router-link to="/tutor/times-table"> <li>TinesTable</li></router-link>
                <router-link to="/tutor/groups"> <li>Groups</li></router-link>
            <router-link to="/tutor/profile"> <li>Assessments</li></router-link>              
            <router-link to="/tutor/profile"> <li>Activities</li></router-link>
            <router-link to="/tutor/profile"> <li>Attendance Sheet</li></router-link>
            <router-link to="/tutor/profile"> <li>Grade Book</li></router-link>
         

                <router-link to="/tutor/profile"> <li>Virtual Classroom</li></router-link>

            <li @click="logout"> Logout </li>
        </ul>
      
    </nav>
   </div>
</template>


<script>
export default {
    props:['tutor'],
    methods: {
        logout(){
            localStorage.removeItem('typeTutor')
            this.$router.push('/auth')
        }
    },
}
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