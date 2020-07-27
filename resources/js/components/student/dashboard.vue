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
}
.side{
    width: 15%;
    height: 100vh;
    background: #fbc233;
    
}
.main{
    width:85%;
    height: 100vh;
    overflow: scroll;
}
</style>