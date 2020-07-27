<template>
  <div class="body">
    <!-- <router-link to="/admin/assessment/create/quiz">
      <b-button class="mb-4">Create New Quiz</b-button>
    </router-link> -->
    <b-container>
         <h3 class="mb-4">All Assessments</h3>
      <b-row>
        <b-col>
          <b-table :fields="fields" :items="items">
            <template v-slot:cell(action)="data">
              <div class="options">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <div class="option shadow">
                  <ul>
                    <li @click="verify(data.item.id)">{{data.item.status=='pending'?'Verify':'Unverify'}}</li>
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
        { key: "type", sortable: true },
         { key: "created_at", sortable: true },
        "level",
         { key: "status", sortable: true },
        "action",
      ],
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      axios
        .get(`/api/admin-assessments`, {
          headers: {
            Authorization: `Bearer ${admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data;
          }
        })
        .catch();
    },
    drop(id) {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/assessment/${id}`, {
            headers: {
              Authorization: `Bearer ${admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getData();
            }
          });
      }
    },
     verify(id) {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .get(`/api/admin-verify-assessment/${id}`, {
            headers: {
              Authorization: `Bearer ${admin.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getData();
            }
          });
      }
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