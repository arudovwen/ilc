<template>
  <div class="body">
    <div class="chat-body">
      <div class="message-body">
        <ul>
          <li class="message" v-for="(item,idx) in messages" :key="idx"  :class="{'text-right':item.sender_id == student.id}" >{{item.message}} </li>
        </ul>
      </div>
      <div class="send-tab">
        <button class="button px-2" @click="openEmoji">
          <i class="fa fa-smile-o" aria-hidden="true"></i>
        </button>
        <VEmojiPicker @select="selectEmoji" v-if="showEmoji" class="emoji" />
        <div class="form-group w-75 m-0">
          <input
            type="text"
            class="form-control"
            v-model="message"
            aria-describedby="helpId"
            placeholder
          />
          <i class="fa fa-paperclip" aria-hidden="true"></i>
        </div>

        <button class="button" @click="submit">Send</button>
      </div>
    </div>
    <div class="online">
      <div class="form-control">Online Students</div>
      <ul>
        <li v-for="(user,idx) in users" :key="idx">{{user.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
export default {
  props: ["student"],
  data() {
    return {
      messages: [],
      message: "",
      users: [],
      myText: "",
      showEmoji: false
    };
  },
  components: {
    VEmojiPicker
  },
  created() {
    this.getMessages();
    axios
      .get(`/api/student-group/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.$props.student.access_token}`
        }
      })
      .then(res => {
        if (res.status == 200) {
              
          Echo.join(
            res.data.name + this.$route.params.id + res.data.tutor_id)
            .here(users => {
              this.users = users;
             
            })
            .joining(user => {
              this.users.push(user);
            
            })
            .listen("GroupMessageSent", e => {
          
              this.messages.push(e.message);
            })
            .leaving(user => {
              console.log(user.name);
            });
        }
      });
  },
  methods: {
    openEmoji() {
      this.showEmoji = !this.showEmoji;
    },
    selectEmoji(emoji) {
      this.message =this.message + emoji.data;
       this.showEmoji = false
    },
    submit() {
        this.showEmoji = false
      let data = {
        message: this.message,
        group_id: this.$route.params.id
      };
      axios
        .post("/api/send-student-message", data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.message = "";
          }
        });
    },
    getMessages() {
      axios
        .get(`/api/get-student-messages/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.messages = res.data;
          }
        });
    }
  }
};
</script>
<style scoped>
.body {
  background: white;
  position: relative;
  display: flex;
  height: 100vh;
}

.chat-body {
  width: 80%;
  height: 100%;
  background: #f7f8fa;
  padding:20px 0;
  position: relative;
}
.online {
  height: 100%;
  width: 20%;
  border: 2px solid;
}
.send-tab {
  position: fixed;
  bottom: 0;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  background: white;
  display: flex;
}
.message{
    font-size:15px;
    padding:0 15px;
}
.emoji {
  position: absolute;
  bottom: 100%;
  overflow: hidden !important;
}
.online ul li {
  font-size: 15px;
  padding: 10px 15px;
}
.form-group {
  position: relative;
}
.fa-paperclip {
  position: absolute;
  font-size: 16px;
  right: 10px;
  top: 50%;
  margin-top: -8px;
}
</style>