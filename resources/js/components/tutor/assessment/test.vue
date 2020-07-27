<template>
  <div class="body">
    <router-link to="/tutor/assessment/create/test">
      <b-button class="mb-4">Create New Test</b-button>
    </router-link>
    <b-container>
      <b-row>
        <b-col>
          <b-table :fields="fields" :items="items">
            <template v-slot:cell(action)="data">
              <div class="options">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <div class="option shadow">
                  <ul>
                    <li @click="drop(data.item.id)">Drop</li>
                  </ul>
                </div>
              </div>
            </template>
            <template v-slot:cell(created_at)="data">{{data.item.created_at | moment('MMM D YYYY')}}</template>
            <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "Sn",
        "session",
        { key: "subject", sortable: true },
        { key: "title", sortable: true },
        "level",
        "created_at",
        "action",
      ],
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    drop(id) {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/assessment/${id}`, {
            headers: {
              Authorization: `Bearer ${tutor.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getData();
            }
          });
      }
    },
    getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/assessment/test`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data;
          }
        })
        .catch();
    },
  },
};
</script>

<style scoped>
.options {
  position: relative;
}
.option {
  display: none;
  position: absolute;
  padding: 15px;
  bottom: 80%;
  width: 100px;
  right: 12px;
  background: white;
}
.options:hover .option {
  display: block;
}
.option li {
  padding: 4px 15px;
  cursor: pointer;
}
ul {
  list-style: none;
}
</style>