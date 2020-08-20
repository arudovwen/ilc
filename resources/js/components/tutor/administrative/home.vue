<template>
    <div>
    <b-container>
        <b-row>
            <b-col class="text-center"><router-link to="/tutor/curriculum">
                <div class="box">
                Curriculums</div></router-link></b-col>
           <b-col  class="text-center"><router-link to="/tutor/syllabus">
                <div class="box">
                Syllabuses</div></router-link></b-col>
                <b-col  class="text-center"><router-link to="/tutor/times-table">
                <div class="box">
                TimesTables</div></router-link></b-col>
        </b-row>
    </b-container>

        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    height: 100vh;
    width: 100%;
}
.row{
    height: 100%;
    width:100%;
    justify-content: center;
    align-items: center;
}
.box{
   
    height: 250px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
   font-weight: bold;
   color: #333333;
}
</style>