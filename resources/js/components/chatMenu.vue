<template>
  <b-col md="4">
    <b-card class="online-presence">
      <div class="online-presence-top">
        <b-form-input placeholder="Search to start chat" v-model="search"></b-form-input>
        <span class="px-2">
          
          <b-icon icon="three-dots-vertical" id="popover-button-event" font-scale="2"></b-icon>
        </span>
         <b-popover ref="popover" target="popover-button-event" >
      <ul class="pop">
        <li @click="newGroup">New Group</li>
         <li @click="online">Who's Online?</li>
      </ul>
    </b-popover>
      </div>
      <hr />
      <div class="single-online-tag" :class="{active:active=='staff-chat'}" @click="switchGroup('staff-chat')">
        <div class="inner-single">
          <div class="message-info">
            <div class="avatar mr-3">
              <b-avatar></b-avatar>
            </div>
            <strong class="toCaps">Staffs</strong>
          </div>
          <div>
            <b-badge variant="success">3</b-badge>
          </div>
        </div>
      </div>
      <hr class="m-0" />
      <div class="online-tag">
        <div

          class="single-online-tag"
          :class="{active:active==item.name}"
          @click="switchGroup(item.id,item.name)"
          v-for="(item,idx) in sortedGroups"
          :key="idx"
        >
          <div class="inner-single">
            <div class="message-info">
              <div class="avatar mr-3">
                <b-avatar></b-avatar>
              </div>
              <div>
                <strong class="toCaps">{{item.name}}  </strong>
              <small v-if="item.messages.length">{{item.messages[item.messages.length-1].message}}</small>
              </div>
            </div>
            <div>
              <b-badge variant="success"><b-icon class="" icon="x" @click="drop(item.id)"></b-icon></b-badge>
            </div>
          </div>
        </div>
        <hr class="m-0"/>
      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: ["groups"],
   data() {
     return {
       active:'',
       search:''
     }
   },
   mounted() {
     this.active="staff-chat"
   },
   computed: {
     sortedGroups(){
       return this.$props.groups.filter(item=>item.name.toLowerCase().includes(this.search.toLowerCase()))
     }
   },
  methods: {
     drop(val) {
      this.$emit("drop",val);
    },
    switchGroup(id) {
      this.active=id
      this.$emit("switchGroup", id);
    },
    online() {
       this.$refs.popover.$emit('close')
      this.$emit("online");
    },
    newGroup(){
       this.$refs.popover.$emit('close')
   this.$emit('newGroup')
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
.single-online-tag {
  padding: 15px 10px;
}
.single-online-tag.active {
  background-color: #fff;
  border-left: 3px solid #ccc;
}
.pop{
  margin: 0;
}
.pop li{
  padding: 10px 0;
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
strong{
  font-size: 15px;
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