<template>
    <div>
       <nav class="shadow-sm p-3"> <h3>Tutor Dashboard</h3></nav>
         <transition name="slide-fade">
         <router-view :tutor='tutor'></router-view>
       </transition>
    </div>
</template>


<script>
export default {
  props:['tutor']
    
}
</script>

<style scoped>

</style>