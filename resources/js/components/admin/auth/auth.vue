<template>
    <div>
        <Login />
            <!-- <Register  v-if="$route.params.type == 'register'"/> -->
        
    </div>
</template>


<script>

const Login = () => import('./login');
// const Register = () => import('./register');

export default {
    components:{
        Login,
        // Register
    }
}
</script>

<style scoped>

</style>