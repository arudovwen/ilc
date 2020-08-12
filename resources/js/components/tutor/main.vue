<template>
  <div>
  <nav class="shadow-sm p-3 bg-white">
      <b-form-input placeholder="Search... " class="search rounded-pill"></b-form-input>
       <b-row class="align-items-center">
      
          <div id="notification" class="mx-3">
          <div class="icon" @click="toggleNotification">
            <i class="fa fa-bell"></i>
            <div class="badge animated pulse" v-if="count>0">{{count}}</div>
          </div>
          <div
            class="notification-body animated slideInDown shadow-sm bg-white"
            v-if="showNotification"
          >
            <ul class="list-group">
              <li class="list-group-item">
                <h6>Notifications</h6>
              </li>

              <div class="main-notify">
                <li class="list-group-item" v-for="(item,idx) in notifications" :key="idx">
                  <span :class="{'text-muted':item.status}">{{item.message}}</span>
                  <small class v-if="!item.status">New</small>
                </li>
              </div>
              <li class="list-group-item bg-gray text-center">
                <small>View all</small>
              </li>
            </ul>
            
          </div>
        </div>
  
        
     
     <div  class="mx-3">
         <b-avatar to="/tutor/profile" src="" ></b-avatar> <span class="toCaps mx-2">{{tutor.name}}</span>   <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
     </div>
    
      
      </b-row>
    </nav>
    <transition name="slide-fade">
      <router-view :tutor="tutor"  class="semi-white"></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  props: ["tutor"],
  data() {
    return {
      showNotification: false,
      notifications: [],
      count: 0
    };
  },
  mounted() {
    Echo.private("group-created" + this.$props.tutor.id).listen(
      "GroupCreated",
      e => {
         this.getNotifications();
      }
    );
     this.getNotifications();
  },
  
  watch: {
    $route: "reset"
  },
  methods: {
    initialLoad() {
      axios
        .get("/api/group", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
          }
        });
    },
    reset() {
      this.showNotification = false;
    },
    toggleNotification() {
      this.showNotification = !this.showNotification;
      this.count = 0;
      if (!this.showNotification) {
        this.clearNotifications();
      }
    },
    getNotifications() {
      axios
        .get(`/api/tutor-notifications/${this.$props.tutor.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            let count = [];
            this.notifications = res.data;
            this.notifications.forEach(item => {
              if (!item.status) {
                count.push(item);
              }
            });
            this.count = count.length;
          }
        });
    },
    clearNotifications() {
      axios
        .get(`/api/clear-tutor-notifications/${this.$props.tutor.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.getNotifications();
            this.count = 0;
          }
        });
    }
  }
};
</script>

<style scoped>
.semi-white{
 background: #F9F7F0;
 max-height: 100%;
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
  color:#41cee2;
}
.search{
  width:250px;
  border-color:#41cee2
}
</style>