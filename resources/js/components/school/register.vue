<template>
  <div class>
    <div class="register-section">
      <div class="img-side">
        <div class="header-logo text-center">
          <img src="/images/logo-ilc-single.png" alt />
           <h6>IMO STATE LEARNING CENTER</h6>
           
        </div>
        <h2>Welcome!!!!!</h2>
        <div>&copy; Copyright 2020 Couer</div>
      </div>
      <div class="form-side">
        <h2 class="text-center">REGISTER</h2>
        <b-container class="bv-example-row">
          <b-form @submit.prevent="register">
            <b-form-row>
              <b-col lg="12">
                <b-form-group id="input-group-1" label="School Name" label-for="input-1">
                  <b-form-input type="text" id="input-1" v-model="admin.name" required placeholder="Howard Intl Schools"></b-form-input>
                </b-form-group>
              </b-col>
            
            </b-form-row>

            <b-form-row>
                <b-col>
                <b-form-group id="input-group-2" label="Email " label-for="input-2">
                  <b-form-input id="input-8" type="email" v-model="admin.email" required placeholder="example@email.com"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="input-group-6" label="Address" label-for="input-6">
                  <b-form-input id="input-6" type="text" required v-model="admin.address" placeholder="1,abc road"></b-form-input>
                </b-form-group>
              </b-col>
             
            </b-form-row>
            <b-form-row>
               <b-col>
                <b-form-group id="input-group-4" label="Abbreviation" label-for="input-4">
                  <b-form-input id="input-4" type="text"  v-model="admin.abbreviation" placeholder="HS Shools"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <b-form-group id="input-group-5" label="Phone" label-for="input-5">
                  <b-form-input id="input-5" type='number' maxlength="11" required placeholder="0910xxxxxxx"></b-form-input>
                </b-form-group>
              </b-col>
             
            </b-form-row>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              required
              v-model="check"
            >I agree to <span><a href="">terms</a> </span> and <span><a href="">condition</a></span></b-form-checkbox>
            <button class="reg-btn" type="submit">REGISTER  <b-spinner
                          variant
                          small
                          label="small spinner"
                          type="grow"
                          class="ml-2"
                          v-if="spin"
                        ></b-spinner></button>
           <p class="form-txt my-3">Tutor or Student? <span><a href="">Login</a></span></p> 
          </b-form>
        </b-container>
      </div>
    </div>
  </div>
 
</template>


<script>
export default {
  data() {
    return {
      admin: {
        name: "",
        abbreviation: "",
        email: "",
        phone: null,
        address: "",
        password: "password"
      },
      check:false,
      spin: false
    };
  },
  methods: {
    register() {
      this.spin = true
      axios.post("/api/school-register", this.admin).then(res => {
        if (res.status == 201) {
          const regDetails = {};
          regDetails.email = res.data.email;
          regDetails.name = res.data.schools;
          regDetails.school_id = res.data.id;
          localStorage.setItem("regDetails", JSON.stringify(regDetails));

          this.$toasted.info("Registered Successfully",{
            icon:{
              name:'check'
              
            }
          });
          this.$router.push(`/subscribe/institute?id=${res.data.id}&redirection_from=registration`);
        }

         if (res.status == 200) {
          const regDetails = {};
          regDetails.email = res.data.data.email;
          regDetails.name = res.data.data.schools;
          regDetails.school_id = res.data.data.id;
          localStorage.setItem("regDetails", JSON.stringify(regDetails));

          this.$toasted.info("Continue  subscription",{
            icon:{
              name:'info'
              
            }
          });
          this.$router.push(`/subscribe/institute?id=${res.data.data.id}&redirection_from=registration`);
          
        }
      }).catch(err=>{
        this.spin = false
        this.$toasted.error(err.data.message)
      });
    }
  }
};
</script>
