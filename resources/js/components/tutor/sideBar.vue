<template>
   <div>
        <div class="logo">
       <p> {{tutor.name}}</p>
    </div>
        <nav>
        <ul>
           <router-link to="/tutor/groups"> <li>Groups</li></router-link>
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
            this.$router.push('/tutor/auth/login')
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