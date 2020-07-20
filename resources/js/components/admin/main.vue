<template>
    <div>
       <nav class="shadow-sm p-3"> <h5>Admin Dashboard</h5></nav>
       <transition name="slide-fade">
         <router-view :admin='admin' class="semi-white"></router-view>
       </transition>
    </div>
</template>


<script>
export default {
    data() {
      return {
        admin:{}
      }
    },
    created() {
       this.admin = JSON.parse(localStorage.getItem("typeAdmin"));
    },
}
</script>

<style scoped>
.semi-white{
  background: #f7f8fa;
}
</style>