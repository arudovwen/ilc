<template>
    <div class="main">
        <app-navigation></app-navigation>
        <app-banner></app-banner>
        <popup v-if="showpop"   />
        
    </div>
</template>

<script>
import navigation from './navigation/navigation'
import banner from './home/banner'
import popup from './popup'
export default {

    data() {
        return {
            showpop:false
        }
    },
    
    components:{
        'app-navigation':navigation,
        'app-banner':banner,
        popup,
    },
    mounted() {
        this.show()
    },
    watch: {
        $route:'show'
    },
    methods: {
        show(){
            if (this.$route.query.show == 'popup') {
                this.showpop = true
            }
        }
    },
}
</script>

<style scoped>
.main{
    position: relative;
}
</style>