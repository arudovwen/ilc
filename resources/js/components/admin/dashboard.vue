<template>
    <div class="my-container d-flex">
       <Side  class="side"/> 
       <Main class="main"/>
    </div>
</template>


<script>
import Side from './sideBar'
import Main from "./main";
export default {
    components:{
        Main,
        Side
    }
}
</script>

<style scoped>
.my-container{
    widows: 100vw;
}
.side{
    width: 20%;
    height: 100vh;
    background: chartreuse;
}
.main{
    width:80%;
    height: 100vh;
    overflow: scroll;
}
</style>