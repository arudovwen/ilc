<template>
    <div class="my-container d-flex">
       <Side  class="side" :sideBar='sideBar' @minimise="minimise" :tutor='tutor'  :class="{'min-side':sideBar}"/> 
       <Main class="main"  :tutor='tutor' :class="{'min-main':sideBar}"/>
    </div>
</template>


<script>
import Side from './sideBar'
import Main from "./main";
export default {
    data() {
        return {
            tutor:'',
            sideBar:false
        }
    },
    components:{
        Main,
        Side
    },
     created() {
       this.tutor = JSON.parse(localStorage.getItem("typeTutor"));
    },
    methods: {
        minimise(){
            this.sideBar = !this.sideBar
        }
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
.min-side{
width: 4% !important;
}
.min-main{
width: 96% !important;
}

 
</style>