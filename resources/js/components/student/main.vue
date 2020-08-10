<template>
  <!-- <div>
  <nav class="shadow-sm p-3">
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
         <b-avatar src="" ></b-avatar> <span class="toCaps mx-2">{{student.name}}</span>   <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
     </div>
    
      
      </b-row>
    </nav>
    <transition name="slide-fade">
      <router-view :student="student"  class="semi-white "></router-view>
    </transition>
  </div>-->
  <div>
    <b-nav align="right">
      <b-nav-item>
        <b-avatar to="/student/profile" :src="student.profile"></b-avatar>
      </b-nav-item>
      <b-nav-item>
        <b-form-input placeholder="Search... " class="search rounded-pill"></b-form-input>
      </b-nav-item>
      <b-nav-item>
      
          <div id="notification" class="mx-3">
          <div class="icon" @click="toggleNotification">
             <i class="icon-bell-1"></i>
            <div class="badge animated pulse" v-if="count>0">{{count}}</div>
          </div>
          <div
            class="notification-body animated fadeIn shadow-sm bg-white"
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
      </b-nav-item>
    </b-nav>
    <transition name="slide-fade">
      <router-view :student="student" class="semi-white"></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  props: ["student"],
  data() {
    return {
      showNotification: false,
      notifications: [],
      count: 0,
    };
  },
  mounted() {
    Echo.private("group-subscribed" + this.$props.student.id).listen(
      "GroupSubscribed",
      (e) => {
        this.getNotifications();
      }
    );
    Echo.private("resource-added" + this.$props.student.id).listen(
      "ResourceAdded",
      (e) => {
        this.getNotifications();
      }
    );
    Echo.private("deleted-group" + this.$props.student.id).listen(
      "DeletedGroup",
      (e) => {
        console.log("created -> e", e);
        this.getNotifications();
      }
    );
  },
  mounted() {
    this.getNotifications();
  },
  watch: {
    $route: "reset",
  },
  methods: {
    initialLoad() {
      axios
        .get("/api/student-group", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
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
    clearNotifications() {
      axios
        .get(`/api/clear-user-notifications/${this.$props.student.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.getNotifications();
            this.count = 0;
          }
        });
    },
    getNotifications() {
      axios
        .get(`/api/user-notifications/${this.$props.student.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            let count = [];
            this.notifications = res.data;
            this.notifications.forEach((item) => {
              if (!item.status) {
                count.push(item);
              }
            });
            this.count = count.length;
          }
        });
    },
  },
};
</script>
<style scoped>

.nav-item i {
  color: #808080;
  font-size: 24px;
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
/* .semi-white{

  padding:50px 20px;

}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:white;
}

.fa-bell {
  font-size: 24px;
  color:#ffd708;
} */
.search {
  width: 250px;
  background: transparent !important;
  border-color: #808080;
}
</style>