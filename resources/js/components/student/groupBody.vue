<template>
     <div class="chat-body" v-chat-scroll>
            <div class="message-body">
              <ul>
                <li class="message mb-4" v-for="(message,idx) in groupMessage" :key="idx">
                  <div
                    class="shadow-sm rounded-pill chat-message"
                    v-if=" message.user"
                    :class="{'ml-auto':message.user.id == student.id }"
                  >
                    <strong class="text-muted">{{message.user.name}}</strong>

                    <br />
                    <span v-if="message.message" class="mr-3">{{message.message}}</span>
                    <a v-else :href="message.attachment" download class="mr-3">
                      <b-img :src="message.attachment" class="attach" fluid width="120"></b-img>
                    </a>
                    <small class="text-muted">{{message.created_at | moment('h:mm a')}}</small>
                  </div>
                  <div class="shadow-sm rounded-pill chat-message" v-if="message.tutor">
                    <strong class="text-muted">{{message.tutor.name}}</strong>
                    <br />
                    <span v-if="message.message" class="mr-3">{{message.message}}</span>
                    <a v-else :href="message.attachment" download class="mr-3">
                      <b-img :src="message.attachment" fluid width="60"></b-img>
                    </a>
                    <small class="text-muted">{{message.created_at | moment('h:mm a')}}</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
</template>

<script>
export default {
    props:["student", "onlineMembers", "groupMessage",]
}
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