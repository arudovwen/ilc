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
                    <li >

                    <span  @click="verify(data.item.id,'approved')" v-if="data.item.status=='pending'">Approve</span>
                      <span  @click="verify(data.item.id,'declined')" v-if="data.item.status=='pending'">Decline</span>
                    </li>
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
          .delete(`/api/admin-drop-assessment/${id}`, {
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
     verify(id,name) {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      let del = confirm("Are you sure?");
      if (del) {
        let data={
          status :name
        }
        axios
          .put(`/api/admin-verify-assessment/${id}`, data,{
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


</style>