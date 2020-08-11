<template>
  <div>
  <nav class="shadow-sm p-3">
      <b-form-input placeholder="Search... " class="search rounded-pill"></b-form-input>
       <b-row class="align-items-center">
      
          <div id="notification" class="mx-3">
          <div class="icon" >
            <i class="fa fa-bell"></i>
           
          </div>
        
        </div>
  
        
     
     <div  class="mx-3">
         <b-avatar src="" ></b-avatar> <span class="toCaps mx-2">{{admin.name}}</span>   <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
     </div>
    
      
      </b-row>
    </nav>
    <transition name="slide-fade">
      <router-view :admin="admin"  class="semi-white"></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      admin: {},
    };
  },
  created() {
    this.admin = JSON.parse(localStorage.getItem("typeAdmin"));
  },
};
</script>
<style scoped>
.semi-white{
 
  height: 100%;
 
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#notification {
  position: relative;
  z-index: 999;
}
.notification-body {
  position: absolute;
  left: -240px;
  width: 250px;
}
.main-notify {
  max-height: 300px;
  overflow: scroll;
}
.icon {
  position: relative;
}
.badge {
  position: absolute;
  top: -10%;
  left: 50%;
  background: red;
  color: white;
  font-size: 14px;
}

.list-group-item {
  font-size: 14px;
}
.fa-bell {
  font-size: 24px;
  color:#008E3A;
}
.search{
  width:250px;
  border-color:#008E3A
}
</style>