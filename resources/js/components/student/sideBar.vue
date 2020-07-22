<template>
   <div>
        <div class="logo mb-4">
       <p> {{student.name}}</p>
       <small>{{student.level}}</small>
    </div>
 
        <nav>
        <ul>
             <router-link to="/student"> <li><i class="fa fa-home  pr-2" aria-hidden="true"></i> Home</li></router-link>
              <router-link to="/student/profile"> <li><i class="fa fa-user  pr-2" aria-hidden="true"></i> Profile</li></router-link>
               <router-link to="/student/explore"> <li><i class="fa fa-venus-mars  pr-2" aria-hidden="true"></i> Explore</li></router-link>
               <router-link to="/student/library"> <li><i class="fas fa-box-open   pr-2  "></i> Library</li></router-link>
                <router-link to="/student/profile"> <li><i class="fa fa-list-alt  pr-2" aria-hidden="true"></i> Grade Book</li></router-link>
           <router-link to="/student/groups"> <li><i class="fa fa-users  pr-2" aria-hidden="true"></i> Groups</li></router-link>
   <router-link to="/student/profile"> <li><i class="fa fa-calendar  pr-2" aria-hidden="true"></i> Activities</li></router-link>
     <router-link to="/student/profile"> <li><i class="fa fa-book  pr-2" aria-hidden="true"></i> Assessments</li></router-link>
                <router-link to="/student/profile"> <li><i class="fas fa-chalkboard-teacher    pr-2 "></i> Virtual Classroom</li></router-link>

            <li @click="logout"><i class="fa fa-sign-out  pr-2" aria-hidden="true"></i> Logout </li>
        </ul>
      
    </nav>
   </div>
</template>


<script>
export default {
       props:['student'],
    data() {
        return {
          
        }
    },
    mounted() {
        
    },
    methods: {
        logout(){
            localStorage.removeItem('typeStudent')
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
  color:#575965;
}
small{
    font-size:16px;
    font-weight: bold;
}
</style>