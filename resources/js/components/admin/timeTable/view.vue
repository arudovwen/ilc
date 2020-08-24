<template>
  <div class="body">
    <nav class="mb-5">
      <b-button class=" shadow-sm" @click="drop($route.params.id)">
       Drop table
       
      </b-button>
      <b-button class=" shadow-sm hiden">
       Create Class
       
      </b-button>

      <b-button class=" shadow-sm hiden">
       Assign Course
       
      </b-button>

      <b-button class=" shadow-sm hiden">
       Assign Level
       
      </b-button>
    </nav>

    <div class="table-responsive">
      <div class="form-group">
      
        <h5 class="toCaps">{{myclass}}</h5>
      </div>
      <table class="table table-bordered">
        <thead class="thead-light">
          <tr>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tab,index) in table" :key="index" >
            <td class="toCaps day">{{tab.day}}</td>
            <td class="d-flex justify-content-between p-0">
             
              <table class="w-100">
                <tr class="w-100 ">
                  <td class="text-center" v-for="(item,idx) in tab.courses" :key="idx">
                     <div class="">
                  {{item.start | time}} - {{item.end | time}}
                </div>
                <div>{{item.subject}}</div>
                 <div>{{item.tutor}}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  props: ["admin"],
  data() {
    return {
      days: [
        "monday",
        "tuesday",
        "wedenessday",
        "thursday",
        "friday",
        "saturday"
      ],
      subjects: [],
      classes: [],
      myclass: "",
      table: [
        {
          day: "monday",
          courses: [
            {
              start: "",
              end: "",
              subject: ""
            }
          ]
        }
      ],

      items: [],
      item: false
    };
  },
  watch: {
    item: "selectAll"
  },
  mounted() {
    this.getTable();
  },
  methods: {
    getTable() {
      axios
        .get(`/api/times-table/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.table = JSON.parse(res.data.table);
            this.myclass = res.data.myclass;
          }
        });
    },

    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/subject/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.admin.access_token}`
            }
          })
          .then(res => {
            if (res.status == 200) {
              this.getTutors();
            }
          });
      }
    },

    edit(id) {
      this.$router.push(`/admin/subject/edit/${id}`);
    }
  }
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
}
.hiden {
  opacity: 0;
}

.add {
  background-color: #f7f8fa;
}
.body {
  padding: 20px 20px 50px;
  height: 100%;
}
table {
  font-size: 14px;
}

</style>