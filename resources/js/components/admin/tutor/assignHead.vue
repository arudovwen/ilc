<template>
  <div class="p-3">
      <h3>Assign Head Teachers</h3>
    <div class="d-flex mb-5">
      <div class="w-25 mr-3">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Tutor List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in tutors" :key="idx">
              <td scope="row" @click="selectTutor(item.id,item.name)">{{item.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-25">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Class List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in classes" :key="idx">
              <td scope="row" @click="selectSubject(item.id,item.class_name)">{{item.class_name}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-50 px-3 text-center">
        <table class="table text-center table-bordered table-hover" v-if="data.tutor.name !== ''">
          <thead class="thead-dark">
            <tr>
              <th class="text-center">{{data.tutor.name}}</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td scope="row" class="text-center">{{data.class.name}}</td>
            </tr>
          </tbody>
        </table>
        <div class="form-control" v-else>No Tutor Selected</div>
        <div class="my-3" >
          <button type="button" @click="submit">Submit</button>
        </div>
      </div>
    </div>

     <div class="w-50 px-3  mx-auto">
        <table class="table table-bordered table-hover" v-if="heads.length" >
          <thead class="thead-dark">
            <tr >
              <th >Head Teacher</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idx) in heads" :key="idx">
                <td> {{item.tutor.name}} </td>
              <td scope="row">{{item.class.class_name}}</td>
              <td>
                  <span><i class="fa fa-minus-circle pr-1" aria-hidden="true"></i> Drop</span>

              </td>
            </tr>
          </tbody>
        </table>
        <div class="form-control" v-else>No Class Head</div>
        
      </div>
  </div>
</template>

<script>
export default {
  props: ["admin"],
  data() {
    return {
      tutors: [],
      classes: [],
       heads:[],
      data: {
        tutor: {
          id: "",
          name: ""
        },
        class: {
            id:'',
            name:''
        },
       
      }
    };
  },
  mounted() {
    this.getTutors();
    this.getClasses();
    this.getHeads()
  },
  methods: {
    submit() {
        let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios.post("/api/tutor-class", this.data,{headers:{
          Authorization: `Bearer ${admin.access_token}`
      }}).then(res => {
        if (res.status == 201) {
          this.$toasted.info("Successful");
        //   this.$router.push("/admin/tutors");
        }else if(res.status == 200){
              this.$toasted.info("Already Assigned to a class")
        }
      });
    },
    selectSubject(id, name) {
      if (this.data.tutor.name !== "") {
        let data = {
          id: id,
          name: name
        };
       this.data.class.name = name;
      this.data.class.id = id;
      } else {
        this.$toasted.info("Select Tutor");
      }
    },
    selectTutor(id, name) {
      this.data.tutor.name = name;
      this.data.tutor.id = id;
    },
    getHeads() {
      axios
        .get("/api/tutor-class", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.heads = res.data.data;
            console.log("getHeads -> this.heads", this.heads)
          }
        });
    },
     getTutors() {
      axios
        .get("/api/tutor", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.tutors = res.data;
          }
        });
    },
    getClasses() {
      axios
        .get("/api/classes", {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.classes = res.data;
          }
        });
    }
  }
};
</script>
<style scoped>
</style>