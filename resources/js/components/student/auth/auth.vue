<template>
    <div>
        <Login  v-if="$route.params.type == 'login'"/>
            <Register  v-if="$route.params.type == 'register'"/>
        
    </div>
</template>


<script>
import Login from './login'
import Register from './register'
export default {
    components:{
        Login,
        Register
    }
}
</script>

<style scoped>

</style>