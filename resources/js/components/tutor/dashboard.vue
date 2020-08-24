<template>
  <div class="my-container d-flex">
    <Side
      class="side"
      :sideBar="sideBar"
      @minimise="minimise"
      :tutor="tutor"
      :class="{'min-side':sideBar}"
    />
    <Main
      class="main"
      :tutor="tutor"
      :class="{'min-main':sideBar}"
      :onlineStaffs="onlineStaffs"
      :staffsMessages="staffsMessages"
      @addStaffMessage="addStaffMessage"
      :onlineGroupMembers="onlineGroupMembers"
      :groupMessages="groupMessages"
      @addGroupMessage="addGroupMessage"
      :groups="groups"
      :group_id="group_id"
      @switchGroup="switchGroup"
      :showChat="showChat"
      @updateChat ="updateChat"
    />
  </div>
</template>


<script>
import Side from "./sideBar";
import Main from "./main";
export default {
  data() {
    return {
      tutor: "",
      sideBar: false,
      onlineStaffs: [],
      staffsMessages: [],
      groups: [],
      group_id: null,
      groupMessages: [],
      onlineStudents: [],
      onlineGroupMembers: [],
      showChat:'staff'
    };
  },
  components: {
    Main,
    Side,
  },
  created() {
    this.tutor = JSON.parse(localStorage.getItem("typeTutor"));
    this.joinGroup("staff-chat");
    this.getgroups();
    this.getMessages();
  },
  methods: {
    updateChat(){
        this.getgroups();
    },
    addStaffMessage(message, attachment) {
   
      this.staffsMessages.push({
        message: message,
        tutor: this.tutor,
        attachment: attachment,
         created_at:new Date()
      });
    },
    addGroupMessage(message, attachment) {
      console.log("addGroupMessage -> message savage", message);
      this.groupMessages.push({
        message: message,
        tutor: this.tutor,
        attachment: attachment,
         created_at:new Date()
      });
    },
    getGroupMessages(id) {
      axios
        .get(`/api/get-messages/${id}`, {
          headers: {
            Authorization: `Bearer ${this.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.groupMessages = res.data;
          }
        });
    },
    getgroups() {
      axios
        .get("/api/group", {
          headers: {
            Authorization: `Bearer ${this.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.length) {
              this.groups = res.data;
              this.group_id = this.groups[0].id
              this.getGroupMessages(this.groups[0].id);
             res.data.forEach((group) => {
                this.joinClassGroup(group.name, group.id);
              });
            }
          }
        });
    },

    joinClassGroup(name, id) {
      axios
        .get(`/api/student-group/${id}`, {
          headers: {
            Authorization: `Bearer ${this.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            Echo.join(name + id + this.tutor.id)
              .here((users) => {
                this.onlineGroupMembers = users;
              })
              .joining((user) => {
                if (!this.users.includes(user)) {
                  this.onlineGroupMembers.push(user);
                }
              })
              .listen("GroupMessageSent", (e) => {
                this.groupMessages.push({
                  message: e.message.message,
                  user: e.user,
                  tutor: e.tutor,
                   created_at:e.message.created_at,
                       attachment:e.message.atttachment
                });
              })
              .leaving((user) => {
                this.onlineGroupMembers = this.onlineGroupMembers.filter(
                  (u) => u.id != user.id
                );
              });
          }
        });
    },
    getMessages() {
      axios
        .get(`/api/staff-message`, {
          headers: {
            Authorization: `Bearer ${this.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.staffsMessages = res.data;
          }
        });
    },
    minimise() {
      this.sideBar = !this.sideBar;
    },
    joinGroup(name) {
      Echo.join(name)
        .here((users) => {
          this.onlineStaffs = users;
        })
        .joining((user) => {
          this.onlineStaffs.push(user);
        })
        .listen("StaffMessageSent", (e) => {
          this.staffsMessages.push({
            message: e.message.message,
            tutor: e.tutor,
             created_at:e.message.created_at,
                       attachment:e.message.atttachment
          });
        })
        .leaving((user) => {
          this.onlineStaffs = this.onlineStaffs.filter((u) => u.id != user.id);
        });
    },
    switchGroup(id) {
        if (id =='staff-chat') {
           this.showChat = 'staff' 
        }else{
            this.showChat = 'group'
               this.group_id = id;
           this.getGroupMessages(id);
        }
   
    },
  },
};
</script>

<style scoped>
.my-container {
  widows: 100vw;
}
.side {
  width: 15%;
  height: 100vh;
  background: #41cee2;
  color: white;
  position: fixed;
}
.main {
  width: 85%;
  height: 100%;
  position: absolute;
  right: 0;
  /* background:#fff7ed ; */
}
.min-side {
  width: 4% !important;
}
.min-main {
  width: 96% !important;
}
</style>