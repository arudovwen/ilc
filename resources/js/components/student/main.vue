<template>
    <div>
       <nav class="shadow-sm p-3"> <h3>Student Dashboard</h3></nav>
        <transition name="slide-fade">
         <router-view></router-view>
       </transition>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>

</style>