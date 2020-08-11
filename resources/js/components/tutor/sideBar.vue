<template>
   <div>
        <div class="logo">
     
           <p class="bg-white text-center rounded px-3 py-2"> {{tutor.abbreviation}}</p> 
  
         <small>SCHOOL</small>
    </div> 
        <nav>
        <ul>
            <router-link to="/tutor"> <li><i class="icon-dashboard pr-2" aria-hidden="true"></i> Dashboard</li></router-link>
            <router-link to="/tutor/resources"> <li><i class="icon-open-book pr-2"></i> Resources</li></router-link>
            <router-link to="/tutor/syllabus"> <li><i class="icon-business-class pr-2   "></i> Syllabus</li></router-link>
             <router-link to="/tutor/curriculum"> <li><i class="icon-dashboard1  pr-2   "></i> Curriculum</li></router-link>
              <router-link to="/tutor/times-table"> <li><i class="icon-calendar  pr-2" aria-hidden="true"></i> TimesTable</li></router-link>
                <router-link to="/tutor/groups"> <li><i class="icon-group  pr-2" aria-hidden="true"></i> Groups</li></router-link>
            <router-link to="/tutor/assessment"> <li><i class="icon-hour  pr-2" aria-hidden="true"></i> Assessments</li></router-link>              
            <router-link to="#"> <li><i class="icon-market  pr-2" aria-hidden="true"></i> Activities</li></router-link>
            <router-link to="#"> <li><i class="icon-edit   pr-2  "></i> Attendance</li></router-link>
            <router-link to="/tutor/gradebook"> <li><i class="icon-score  pr-2" aria-hidden="true"></i> Grade Book</li></router-link>
                <router-link to="#"> <li><i class="icon-teacher pr-2  "></i> Virtual Class</li></router-link>

            <li @click="logout"><i class="icon-logout pr-2" aria-hidden="true"></i> Logout </li>
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