<template>
  <div class="container">

    <form @submit.prevent="register">
     
      <div class="form-group">
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
      </div>
      <div class="form-group">
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
      </div>
      <div class="form-group">
        <label for>Password</label>
        <input
          type="password"
          class="form-control"
          name="pasword"
          id="password"
          v-model="data.password"
          aria-describedby="helpId"
          placeholder="******"
        />
      </div>
      <div class="form-group">
        <label for>Address</label>
        <input
          type="address"
          class="form-control"
          name="address"
          id="address"
          v-model="data.address"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <b-form-group>
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
    </form>
  </div>
</template>


<script>
export default {
  props: ["admin",'id'],
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
        address: "",
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
  mounted() {
    this.getAdmin();
  },
  methods: {
     toggleModal(){
   this.$emit('toggleModal','admin-edit')
    },
    register() {
      axios.put(`/api/admin/${this.$props.id}`, this.data, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        }).then(res => {
        if (res.status == 200) {
          this.$toasted.info("Successful");
           this.toggleModal()
        }
      });
    },
    getAdmin() {
      axios
        .get(`/api/admin/${this.$props.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.data = res.data;
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
form {
  width: 50%;
}
.form-group{
  margin-bottom:24px;
}
</style>