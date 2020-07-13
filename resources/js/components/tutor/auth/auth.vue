<template>
    <div>
        <Login  v-if="$route.params.type == 'login'"/>
          
        
    </div>
</template>


<script>
const Login = () => import('./login');

export default {
    components:{
        Login,

    }
}
</script>

<style scoped>

</style>