<template>
  <div class>
    <div class="p-3">
      <b-card no-body class="group-chat">
        <Chat
          :student="student"
          :groups="groups"
          :groupMessage="groupMessage"
          :onlineMembers="onlineMembers"
          @addGroupMessage="addGroupMessage"
          @switchGroup="switchGroup"
          :currentChat="currentChat"
          :group_id="group_id"
          :classmates="classmates"
          :showChat="showChat"
          :privateMessages="privateMessages"
           @addPrivateMessage="addPrivateMessage"
            :receiver_id="receiver_id"
        />
      </b-card>
    </div>
  </div>
</template>



<script>
import Chat from "./chat";
import PrivateChat from "./privateChat";
export default {
  props: [
    "student",
    "onlineMembers",
    "groupMessage",
    "groups",
    "currentChat",
    "group_id",
    "classmates",
    "showChat",
    "privateMessages",
    "receiver_id"
  ],
  data() {
    return {};
  },
  components: {
    Chat,
    PrivateChat,
  },

  methods: {
   switchGroup(name,id) {
      this.$emit("switchGroup",name, id);
    },

    addGroupMessage(message, attachment) {
      this.$emit("addGroupMessage", message, attachment);
    },
     addPrivateMessage(message, attachment) {
   
      this.$emit("addPrivateMessage", message, attachment);
    },
  },
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
}
.table .thead-light th {
  color: white;
  background-color: rgba(19, 166, 153, 0.9);
  border-color: rgba(19, 166, 153, 0.9);
}
td {
  text-transform: capitalize;
}
.hiden {
  opacity: 0;
}

.add {
  background-color: #f7f8fa;
}

table {
  font-size: 16px;
  text-align: center;
}
.chat {
  cursor: pointer;
}
.card-header {
  padding: 0;
}
li {
  width: 150px;
}
</style>