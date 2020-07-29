<template>
  <div class="container">
    <b-form @submit.prevent="register">
   
    <b-form-group class="mb-3">
        <label for>Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          v-model="data.name"
          aria-describedby="helpId"
          placeholder="John Doe"
        />
    </b-form-group>
    <b-form-group class="mb-3">
        <label for>Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          v-model="data.email"
          aria-describedby="helpId"
          placeholder="example@email.com"
        />
      </b-form-group>

    <b-form-group class="mb-3">
        <label for>Role</label>
      
         <b-form-select v-model="data.role" :options="options"></b-form-select>
     </b-form-group>

      <b-form-group class="mb-3">
        <b-row>
           <b-col>
              <b-button variant="outline-secondary"  @click="toggleModal" block type="button">Cancel</b-button>
           </b-col>
             <b-col>
                <b-button variant="success" block type="submit">Register</b-button>
             </b-col>
        </b-row>
      </b-form-group>
     
    </b-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: {
        name: "",
        email: "",
        role: ""
      },
      spin: false,
      options:[
         {value:'',text:'Select an option',disabled:true},
        {value:'administrator',text:'Administrator'},
          {value:'principal',text:'Principal'},
      ]
    };
  },
  methods: {
    toggleModal(){
   this.$emit('toggleModal','admin-create')
    },
     register() {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
     
      axios
        .post("/api/admin",this.data, {
          headers: { Authorization: `Bearer ${admin.access_token}` }
        })
        .then(res => {
          if (res.status == 201) {
            this.$toasted.info("Created Successfully");
            this.toggleModal()
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
   position: relative;
}
form{
    width:50%
}
</style>