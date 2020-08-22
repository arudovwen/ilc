<template>
  <!-- <div class="view">
   
    <b-form @submit.prevent="submit" class="send-tab">
      <b-input-group>
        <b-input-group-prepend>
          <b-button class="button px-2" @click="openEmoji">
            <i class="fa fa-smile-o" aria-hidden="true"></i>
          </b-button>
          <VEmojiPicker @select="selectEmoji" v-if="showEmoji" class="emoji" />
        </b-input-group-prepend>

        <div class="form-group w-75 m-0">
          <input
            type="text"
            class="form-control"
            v-model="message"
            aria-describedby="helpId"
            placeholder
            required
          />
          <label for="attachment">
            <i class="fa fa-paperclip" aria-hidden="true"></i>
          </label>
        </div>

        <input
          type="file"
          hidden
          class="form-control-file"
          @change="handleFileChange($event)"
          name="attachment"
          id="attachment"
          aria-describedby="fileHelpId"
        />

        <b-input-group-append>
          <b-button variant="secondary" type="submit">Send</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
    <div class="online">
      <div class="form-control thead-dark">Online</div>
      <ul>
        <li v-for="(user,idx) in users" :key="idx">
          <b-avatar size="sm" :src="user.profile"></b-avatar>
          {{user.name}}
        </li>
      </ul>
    </div>
  </div>-->
  <div class="chat">
    <div class="card tutor-chat">
      <b-row>
        <b-col md="8" class="chat-area">
          <GroupChat :tutor="tutor" :groupMessages="groupMessages" v-if="showChat=='group'"/>
          <staffsChat
          v-if="showChat=='staff'"
           :tutor="tutor"
            :onlineStaffs="onlineStaffs"
            :staffsMessages="staffsMessages"
          
          />
          <ChatBar @submit="submit" @attach="attach" />
        </b-col>
        <ChatMenu :groups="groups" @switchGroup="switchGroup" />
      </b-row>
    </div>

    <b-modal id="online" title="Online Users" hide-footer>
      <div class="text-center">
        <b-list-group class="text-center">
          <b-list-group-item
            v-for="(user,id) in onlineGroupMembers"
            :key="id"
            class="toCaps"
          >{{user.name}}</b-list-group-item>
        </b-list-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ChatBar from "../chatBar";
import ChatMenu from "../chatMenu";
import GroupChat from "./groupChat";
import StaffsChat from './staffsChat'
export default {
  props: ["tutor", "onlineGroupMembers", "groupMessages", "groups", "group_id",'showChat','onlineStaffs','staffsMessages'],
  data() {
    return {
      messages: [],
      message: "",
      attachment: "",
      users: [],
      myText: "",
    };
  },
  components: {
    ChatBar,
    ChatMenu,
    GroupChat,
    StaffsChat
  },

  methods: {
    switchGroup(id) {
      this.$emit("switchGroup", id);
    },
    online() {
      this.$bvModal.show("online");
    },
    attach(val) {
      this.attachment = val;
      this.submit(null);
    },

    submit(message) {
  
     if (this.$props.showChat == 'group') {
        this.$emit("addGroupMessage", message, this.attachment);
      let data = {
        message: message,
        group_id: this.$props.group_id,
        attachment: this.attachment,
      };
      axios
        .post("/api/send-message", data, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.message = "";
          }
        });
     }

     if (this.$props.showChat == 'staff') {
        this.$emit("addStaffMessage", message, this.attachment);
      let data = {
        message: message,
        attachment: this.attachment,
      };
      axios
        .post("/api/staff-message", data, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.message = "";
          }
        });
     }
    },
    
  },
};
</script>
<style scoped>
.view {
  background: white;
  position: relative;
  display: flex;
  height: 84vh;
}
.online-presence {
  background: #f5f4f4;
  height: 85vh;
}
.online-presence-top {
  display: flex;
}
.online-presence-top .fa {
  padding-left: 10px;
  padding-top: 10px;
}
.inner-single {
  display: flex;
}
.message-info {
  display: flex;
  padding-left: 20px;
  align-items: center;
}
.message-info h6 {
  margin-bottom: 0;
  line-height: 0;
}
.file-attachement {
  display: flex;
  width: 100%;
  position: relative;
}
.file-attachement span {
  position: absolute;
  right: 0;
  transform: translate(-7px);
  padding-top: 5px;
}
.progress {
  height: 15px;
}
.attach {
  border-radius: 6px;
  padding: 10px;
}
label {
  margin: 0 !important;
  display: block;
}
.message {
  font-size: 14px;
  padding: 0 20px;
}
.chat-body {
  width: 100%;
  height: 85vh;
  padding: 20px 0 60px;
  position: relative;
  overflow: auto;
}
.online {
  height: 100%;
  width: 20%;
}
.chat-area {
  position: relative;
}
.send-tab {
  position: absolute;
  bottom: 0;
  background: #cec9c9;
  display: flex;
  width: 100%;
  padding: 10px;
}

.emoji {
  position: absolute;
  bottom: 100%;
  overflow: hidden !important;
}
.online ul li {
  font-size: 15px;
  padding: 10px 5px;
}
.form-group {
  position: relative;
}

ul,
ol {
  list-style: none;
}
.chat-message {
  background: white;
  padding: 15px 20px;
  width: fit-content;
  width: max-content;
  max-width: 50%;

  text-align: left;
}
</style>