<template>
    <div class="my-container d-flex">
       <Side  class="side"  :tutor='tutor'/> 
       <Main class="main"  :tutor='tutor'/>
    </div>
</template>


<script>
import Side from './sideBar'
import Main from "./main";
export default {
    data() {
        return {
            tutor:''
        }
    },
    components:{
        Main,
        Side
    },
     created() {
       this.tutor = JSON.parse(localStorage.getItem("typeTutor"));
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
    background:#41cee2 ;
    color:white;
    position: fixed;
}
.main{
    width:85%;
 height: 100%;
position: absolute;
right: 0;
/* background:#fff7ed ; */
}

 
</style>