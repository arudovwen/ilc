<template>
    <div class="my-container d-flex">
       <Side  class="side" :student ='student'/> 
       <Main class="main" :student ='student'/>
    </div>
</template>


<script>
import Side from './sideBar'
import Main from "./main";
export default {
    data() {
        return {
            student:{}
        }
    },
    components:{
        Main,
        Side
    },
     created() {
       this.student = JSON.parse(localStorage.getItem("typeStudent"));
    },
}
</script>

<style scoped>
.my-container{
    widows: 100vw;
    width: 100%;
    background: rgba(255, 247, 237, 0.68);
}
.side{
    width: 15%;
    height: 100vh;
   background: #FFFFFF;
box-shadow: 0px 4px 9px rgba(128, 128, 128, 0.25);
border-radius: 0px 15px 15px 0px;
position: fixed;
    
}
.main{
    width:85%;
    position: absolute;
    right: 0;
    background: rgba(255, 247, 237, 0.68);
    height: 100vh;
    overflow: auto;
   
}
</style>