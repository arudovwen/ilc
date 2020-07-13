<template>
  <div class="body">
    <div class="chat-body">
      <div class="message-body">
        <ul>
          <li v-for="(item,idx) in messages" :key="idx">{{item.message}}</li>
        </ul>
      </div>
      <div class="send-tab">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="message"
            aria-describedby="helpId"
            placeholder
          />
          <button class="button" @click="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      messages: [],
      message: ""
    };
  },
  created() {},
  mounted() {
    this.getMessages();
    axios
      .get(`/api/group/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${this.$props.tutor.access_token}`
        }
      })
      .then(res => {
        if (res.status == 200) {

          Echo.join(res.data.name + this.$route.params.id + this.$props.tutor.id )
            .here(users => {
              console.log("created -> users", users);
            })
            .joining(user => {
              console.log(user.name);
            })
            .listen("GroupMessageSent", e => {
            console.log("created -> e", e)
            
            })
            .leaving(user => {
              console.log(user.name);
            });
        }
      });
  },
  methods: {
    submit() {
      let data = {
        message: this.message,
        group_id: this.$route.params.id
      };
      axios
        .post("/api/send-message", data, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 201) {
            this.getMessages();
          }
        });
    },
    getMessages() {
      axios
        .get(`/api/get-messages/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
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
}
.chat-body {
  width: 80%;
  height: 100%;
  background: #f7f8fa;
  padding: 0;
  position: relative;
}
.send-tab {
  position: fixed;
  bottom: 0;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  background: white;
}
</style>