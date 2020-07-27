<template>
   <div>
        <div class="logo">
     
           <p class="bg-white text-center rounded px-3 py-2"> {{tutor.abbreviation}}</p> 
  
         <small>SCHOOL</small>
    </div> 
        <nav>
        <ul>
            <router-link to="/tutor"> <li><i class="fa fa-home pr-2" aria-hidden="true"></i> Home</li></router-link>
            <router-link to="/tutor/profile"> <li><i class="fa fa-user  pr-2" aria-hidden="true"></i> Profile</li></router-link>
            <router-link to="/tutor/resources"> <li><i class="fas fa-box   pr-2  "></i> Resources</li></router-link>
            <router-link to="/tutor/syllabus"> <li><i class="fas fa-briefcase  pr-2   "></i> Curriculum & Syllabus</li></router-link>
              <router-link to="/tutor/times-table"> <li><i class="fa fa-clock-o  pr-2" aria-hidden="true"></i> TimesTable</li></router-link>
                <router-link to="/tutor/groups"> <li><i class="fa fa-comments  pr-2" aria-hidden="true"></i> Groups</li></router-link>
            <router-link to="/tutor/assessment"> <li><i class="fa fa-list-alt  pr-2" aria-hidden="true"></i> Assessments</li></router-link>              
            <router-link to="/"> <li><i class="fa fa-mars-stroke  pr-2" aria-hidden="true"></i> Activities</li></router-link>
            <router-link to="/"> <li><i class="fas fa-file-invoice   pr-2  "></i> Attendance Sheet</li></router-link>
            <router-link to="/tutor/gradebook"> <li><i class="fa fa-book  pr-2" aria-hidden="true"></i> Grade Book</li></router-link>
                <router-link to="/"> <li><i class="fas fa-chalkboard-teacher  pr-2  "></i> Virtual Classroom</li></router-link>

            <li @click="logout"><i class="fa fa-sign-out pr-2" aria-hidden="true"></i> Logout </li>
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
    margin-bottom:20px;
    text-align:center;
}
.logo p{
    font-weight: bold;
    font-family: 'Josefin Sans';
    font-size: 24px;
    text-align:center;
    color:#41cee2;
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
.router-link-exact-active li{
background:#0a4065 ;
border-top-left-radius:10px;
border-bottom-left-radius:10px
}
</style>