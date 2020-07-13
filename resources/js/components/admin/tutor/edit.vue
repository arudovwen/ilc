<template>
  <div class="container">
    <form @submit.prevent="register">
      <legend>Register Tutor</legend>
      <div class="form-group">
        <label for>Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          v-model="tutor.name"
          aria-describedby="helpId"
          placeholder="John Doe"
        />
      </div>
      <div class="form-group">
        <label for>Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          v-model="tutor.email"
          aria-describedby="helpId"
          placeholder="example@email.com"
        />
      </div>
      <div class="form-group">
        <label for>Password</label>
        <input
          type="password"
          class="form-control"
          name="pasword"
          id="password"
          v-model="tutor.password"
          aria-describedby="helpId"
          placeholder="******"
        />
      </div>

        <div class="form-group">
        <label for>Phone</label>
        <input
          type="number"
          class="form-control"
          name="phone"
          id="phone"
          maxlength="11"
          v-model="tutor.phone"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
       <!-- <div class="form-group">
        <label for>School</label>
        <select class="form-control"  v-model="tutor.school_id">
          <option value="" disabled>Select </option>
          <option :value="item.id" v-for="(item,idx) in schools" :key="idx">{{item.name}}</option>
        
        </select>
      </div> -->

      <div class="form-group">
        <label for>Gender</label>
        <select class="form-control"  v-model="tutor.gender">
          <option value="" disabled>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button class="button-blue" type="submit">Update</button>
    </form>
  </div>
</template>


<script>
export default {
    props: ["admin"],
  data() {
    return {
      tutor: {
        'name' :'', 
        'email' :'', 
        'password' :'',
        'phone' :null,
        'gender' :'',
        'school_id':''
      },
   
      spin: false
    };
  },
  mounted() {
      this.getTutor()
  },
  methods: {
    register() {
        let admin = JSON.parse(localStorage.getItem('typeAdmin'))
      axios.post(`/api/tutor/${this.$route.params.id}`, this.tutor,{headers:{
          Authorization: `Bearer ${admin.access_token}`
      }}).then(res => {
        if (res.status == 200) {
          this.$toasted.info("Successful");
          this.$router.push("/admin/tutor");
        }
      });
    },
    getTutor(){
          axios
        .get(`/api/tutor/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.tutor = res.data;
          }
        });
    }
    
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form{
    width:50%
}
</style>