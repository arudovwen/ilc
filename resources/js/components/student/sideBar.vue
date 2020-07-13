<template>
    <div>
       <p @click="logout"> Logout</p>
    </div>
</template>


<script>
export default {
    methods: {
        logout(){
            localStorage.removeItem('typeStudent')
            this.$router.push('/student/auth/login')
        }
    },
}
</script>

<style scoped>

</style>