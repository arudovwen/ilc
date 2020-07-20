<template>
    <div>
        <h4>Student Information</h4>

        
    </div>
</template>

<script>
export default {
     props:['admin'],
    data() {
        return {
            student:{}
        }
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        getInfo(){
            axios.get(`/api/admin-get-user/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        }).then(res=>{
            if (res.status == 200) {
                this.student = res.data
            }
        })
        }
    },
}
</script>

<style scoped>

</style>