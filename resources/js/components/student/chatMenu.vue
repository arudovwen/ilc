<template>
  <b-col md="4">
    <b-card class="online-presence">
      <div class="online-presence-top">
        <b-form-input placeholder="Search to start chat"></b-form-input>
        <span class="px-2">
          <b-icon icon="three-dots-vertical" id="popover-button-event" font-scale="2"></b-icon>
        </span>
        <b-popover ref="popover" target="popover-button-event">
          <ul class="pop">
            <li @click="online">Who's Online?</li>
          </ul>
        </b-popover>
      </div>
      <hr />

      <div class="online-tag">
        <div class="mb-3">
          <strong class="text-muted">Groups</strong>
        </div>
        <div
          class="single-online-tag"
          v-for="(group,idx) in groups"
          :key="idx"
          @click="switchGroup('group',group.id,group.name)"
            :class="{active:group.name==active}"
        >
          <div class="inner-single">
            <div class="message-info">
              <b-avatar class="mr-3"></b-avatar>
              <strong class="toCaps">{{group.name}}</strong>
            </div>
            <div>
              <!-- <b-badge variant="success">3</b-badge> -->
            </div>
          </div>
        </div>
        <hr />
        <div class="mb-3">
          <strong class="text-muted">Classmates</strong>
        </div>
        <div
          class="single-online-tag border-bottom"
          @click="switchGroup('private',mate.id, mate.name)"
          v-for="(mate,index) in classmates"
          
          :class="{active:mate.name==active}"
        >
          <div class="inner-single">
            <div class="message-info">
              <div class="mr-3">
                <b-avatar></b-avatar>
              </div>
              <div>
                <strong class="toCaps mb-1">{{mate.name}}</strong> 
                <br>
                <small
                  class="lastmessage"
                  v-if="getLastMessage(mate.id).length"
                >{{getLastMessage(mate.id)[getLastMessage(mate.id).length-1].message}}</small>
              </div>
            </div>
            <div>
              <small
                v-if="getLastMessage(mate.id).length"
              >{{getLastMessage(mate.id)[getLastMessage(mate.id).length-1].created_at | moment('h:mm A')}}</small>
              <!-- <b-badge variant="success">3</b-badge> -->
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: ["student", "groups", "classmates", "receiver_id", "privateMessages"],
 data() {
   return {
     active:""
   }
 },
 mounted() {
 setTimeout(()=>{
    this.highlight()
 },1000)
 },

  methods: {
    switchGroup(name, id,val) {
      this.$emit("switchGroup", name, id);
      this.active = val
    },
    online() {
      this.$emit("online");
          this.$refs.popover.$emit('close')
    },
    highlight(){
       this.active = this.$props.classmates[0].name
    },
    getLastMessage(id) {
      
      return this.$props.privateMessages.filter(
        (item) => (item.receiver_id == id) | (item.user_id == id)
      );
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
.pop{
  margin: 0;
}
.pop li{
  padding: 10px 0;
}
.single-online-tag {
  padding: 8px 10px;
}
.single-online-tag.active {
  background-color: #fff;
  border-left: 3px solid #ccc;
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
  justify-content: space-between;
}
.message-info {
  display: flex;
  padding-left: 20px;
  align-items: center;
}
/* .message-info h6 {
  margin-bottom: 0;
  line-height: 0;
} */
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
strong{
  font-size:14px;
}
</style>