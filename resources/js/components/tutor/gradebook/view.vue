<template>
  <div >
    <b-container>
      <b-row class="mb-4"><strong>{{$route.params.subject}} > {{$route.params.id}}</strong></b-row>
      <b-row>
        <b-col>
          <b-table :fields="fields" :items="items" responsive>
            <template v-slot:cell(student_name)="data">{{data.item.user.name}}</template>
              <template v-slot:cell(total_score)="data">{{data.item.total_score}}%</template>
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
        { key: "student_name", sortable: true },
        { key: "total_score", sortable: true },
        { key: "test", sortable: true },

        { key: "quiz", sortable: true },

        { key: "assignment", sortable: true },

        { key: "examination", sortable: true },
      ],
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let data = {
        level: this.$route.params.id.replace(/-/g, " "),
        subject: this.$route.params.subject.replace(/-/g, " "),
      };
      axios
        .post(`/api/tutor-grade-book/`, data, {
          headers: { Authorization: `Bearer ${tutor.access_token}` },
        })
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data.data;
          }
        });
    },
  },
};
</script>
<style scoped>
</style>