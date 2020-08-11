<template>
  <div class="body">
    <div class>
      <div class="p-3">
        <h4>Syllabus</h4>
       <div class="bd-table">
            <table class="table table-hover table-bordered">
          <thead class="thead-darkblue">
            <tr>
              <th>Class</th>
              <th>Subject</th>

              <th class= "d-flex justify-content-around">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in syllabus" :key="idx">
              <td scope="row" class="toCaps">{{item.myclass}}</td>
              <td scope="row" class="toCaps">{{item.subject}}</td>
              <td class="d-flex justify-content-around">
                <span class="mr-3 view-link" @click="view(item.id)">
                  <i class="fa fa-eye" aria-hidden="true"></i> View
                </span>
              </td>
            </tr>
          </tbody>
        </table>
       </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tutor"],
  data() {
    return {
      curriculum: [],
      syllabus: [],
    };
  },
  mounted() {
    this.getSyllabus();
    this.getCurriculum();
  },
  methods: {
    getCurriculum() {
      axios
        .get("/api/tutor-curriculum", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.curriculum = res.data;
          }
        });
    },
    getSyllabus() {
      axios
        .get("/api/tutor-syllabus", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.syllabus = res.data;
          }
        });
    },
    view(id) {
      this.$router.push(`/tutor/syllabus/view/${id}`);
    },
    viewCurriculum(id) {
      this.$router.push(`/tutor/curriculum/view/${id}`);
    },
  },
};
</script>

<style scoped>
.body {
  height: 100%;
}
.table .thead-dark th{
    background-color:  #22CADE;
    border-color: #22CADE;
}
.view-link{
  cursor: pointer;
}
.view-link:hover{
  color:#22CADE ;
}
</style>