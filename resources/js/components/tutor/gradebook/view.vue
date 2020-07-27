<template>
  <div>
    <b-container>
      <b-row class="mb-4">Subject > Grades</b-row>
      <b-row>
        <b-col>
          <b-table :fields="fields" :items="items" responsive>
              <template v-slot:cell(student_name)="data">
                {{data.item.user.name}}
                      
                  
              </template>
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
      

        { key: "Examination", sortable: true },
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
      axios
        .get(`/api/tutor-grade-book/${this.$route.params.id}`, {
          headers: { Authorization: `Bearer ${tutor.access_token}` },
        })
        .then((res) => {
            if (res.status == 200) {
                this.items = res.data.data
            }
        });
    },
  },
};
</script>
<style scoped>
</style>