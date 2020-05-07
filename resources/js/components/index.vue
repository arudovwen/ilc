<template>
    <div class="main">
        <app-navigation></app-navigation>
        <app-banner></app-banner>
        
    </div>
</template>

<script>
import navigation from './navigation/navigation'
import banner from './home/banner'
export default {
    
    components:{
        'app-navigation':navigation,
        'app-banner':banner
    }
}
</script>

<style scoped>
.main{
    position: relative;
}
</style>