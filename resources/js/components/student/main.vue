<template>
    <div>
       <nav class="shadow-sm p-3"> <h3>Student Dashboard</h3></nav>
        <transition name="slide-fade">
         <router-view :student='student'></router-view>
       </transition>
    </div>
</template>


<script>
export default {
  props:['student']
    
}
</script>

<style scoped>

</style>