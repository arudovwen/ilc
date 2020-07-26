<template>
  <!-- <div> -->
    <!-- <nav class="shadow-sm p-3">
      <h5>Tutor Dashboard</h5>
       <b-row class="align-items-center">
       <b-col>
          <div id="notification">
          <div class="icon" @click="toggleNotification">
            <i class="fas fa-bell"></i>
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
       </b-col>
        
       <b-col>
        <div>   <b-avatar src="" ></b-avatar></div>
       </b-col>
      
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
  background: #f7f8fa;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#notification {
  position: relative;
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
  top: -40%;
  left: 50%;
  background: red;
  color: white;
  font-size: 14px;
}

.list-group-item {
  font-size: 14px;
}
.fa-bell {
  font-size: 18px;
}
</style>