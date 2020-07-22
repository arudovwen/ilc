<template>
   <div>
        <div class="logo">
       <p> {{student.name}}</p>
    </div>
        <nav>
        <ul>
             <router-link to="/student"> <li>Home</li></router-link>
              <router-link to="/student/profile"> <li>Profile</li></router-link>
               <router-link to="/student/explore"> <li>Explore</li></router-link>
               <router-link to="/student/library"> <li>Library</li></router-link>
                <router-link to="/student/profile"> <li>Grade Book</li></router-link>
           <router-link to="/student/groups"> <li>Groups</li></router-link>
   <router-link to="/student/profile"> <li>Activities</li></router-link>
     <router-link to="/student/profile"> <li>Assessments</li></router-link>
                <router-link to="/student/profile"> <li>Virtual Classroom</li></router-link>

            <li @click="logout"> Logout </li>
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
}
</style>