<template>
    <div>
        <h4>Tutor Information</h4>

        
    </div>
</template>

<script>
export default {
     props:['admin'],
    data() {
        return {
            tutor:{}
        }
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        getInfo(){
            axios.get(`/api/tutor/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        }).then(res=>{
            if (res.status == 200) {
                this.tutor = res.data
            }
        })
        }
    },
}
</script>

<style scoped>

</style>