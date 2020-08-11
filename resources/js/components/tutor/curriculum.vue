<template>
    <div class="body">
         <div class=" p-3">
       <h4 >School Curriculums</h4>
        <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Class</th>

            <th class="d-flex justify-content-around">Action</th>
           
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in curriculum" :key="idx">
            <td scope="row" class="toCaps">{{item.subject}}</td>

            <td class="d-flex justify-content-around">
              <span class="mr-3 view-link" @click="viewCurriculum(item.id)">
                <i class="fa fa-eye" aria-hidden="true"></i> View
              </span>
            </td>
          
          </tr>
        </tbody>
      </table>
     </div>
    </div>
</template>
<script>
export default {
  props: ["tutor"],
  data() {
    return {
      curriculum: [],
     
    };
  },
  mounted() {
   
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
 
    viewCurriculum(id) {
      this.$router.push(`/tutor/curriculum/view/${id}`);
    },
  },
};
</script>


<style scoped>
.body{
    height: 100%;
}
.table .thead-dark th{
    background-color:  #22CADE;
    border-color: #22CADE;
}
.view-link{
    cursor: pointer;
}
</style>