<template>
  <b-col md="4">
    <b-card class="online-presence">
      <div class="online-presence-top">
        <b-form-input placeholder="Search to start chat"></b-form-input>
        <span class="px-2">   <b-icon icon="three-dots-vertical" @click="online" font-scale="2"></b-icon></span>
      </div>
      <hr />
      <div class="online-tag">
        <div class="single-online-tag">
          <div class="inner-single">
            <div class="avatar">
              <b-avatar></b-avatar>
            </div>
            <div
              class="message-info"
              @click="joinGroup(item.name,item.id,item.tutor_id)"
              v-for="(item,idx) in groups"
              :key="idx"
            >
              <h6 class="toCaps">{{item.name}}</h6>
              <div>
                <b-badge variant="success">3</b-badge>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: ["groups"],

  methods: {
    joinGroup(name, id, tutor) {
      this.$emit("joinGroup", name, id, tutor);
    },
    online(){
        this.$emit('online')
    }
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
label {
  margin: 0 !important;
  display: block;
}
.message {
  font-size: 14px;
  padding: 20px;
}
.chat-body {
  width: 100%;
  height: 100%;
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