<template>
  <div class="form">
    <img src="/images/ilc-logo.png" class="d-inline-block align-top logo" alt="logo" />

    <b-container>
      <b-row class="justify-content-center align-items-center">
        <b-col>
          <b-form @submit.prevent class="shadow m-auto p-5">
            <legend class="text-center">SUBSCRIBE</legend>
            <b-form-row>
              <b-col cols="12">
                <b-form-group id="input-group-1" label="School Name" label-for="input-1">
                  <b-form-input
                    type="text"
                    id="input-1"
                    v-model="subscriber.name"
                    required
                    placeholder="Howards Intl Schools"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>

            <!-- <b-form-row>
              <b-col cols="6">
                <b-form-group id="input-group-6" label="Address" label-for="input-6">
                  <b-form-input
                    id="input-6"
                    type="text"
                    required
                    v-model="subscriber.address"
                    placeholder="1,abc street"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="input-group-4" label="Phone number" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    type="tel"
                    max="11"
                    v-model="subscriber.phone"
                    placeholder="0810xxxxxxx"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>-->
            <b-form-row>
              <b-col cols="12">
                <b-form-group>
                  <label for>Level</label>
                  <b-form-select v-model="subscriber.level" class="mb-3" label="Level">
                    <b-form-select-option :value="null" disabled>Please select a level</b-form-select-option>
                    <b-form-select-option value="nursery & primary">Nursery & Primary</b-form-select-option>
                    <b-form-select-option value="secondary">Secondary</b-form-select-option>
                    <b-form-select-option value="tertiary">Tertiary</b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col cols="12">
                <b-form-group>
                  <label for>Ownership</label>
                  <b-form-select v-model="subscriber.ownership" class="mb-3" label="Ownership">
                    <b-form-select-option :value="null" disabled>Please select a Ownership</b-form-select-option>
                    <b-form-select-option value="faith_based">Faith Based</b-form-select-option>
                    <b-form-select-option value="private">Private</b-form-select-option>
                    <b-form-select-option value="public">Public</b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col cols="12">
                <b-form-group>
                  <label for>LGA</label>
                  <b-form-select v-model="subscriber.lga" class="mb-3" label="LGA">
                    <b-form-select-option :value="null" disabled>Please select a lga</b-form-select-option>
                    <b-form-select-option
                      :value="item.id"
                      v-for="(item,idx) in lgas"
                      :key="idx"
                    >{{item.name}}</b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-form-row>

           <b-form-row>
             <b-col>
               <b-form-group>
                  <paystack
              :amount="amount"
              :email="email"
              :paystackkey="paystackkey"
              :reference="reference"
              :callback="callback"
              :close="close"
              :embed="false"
              class="w-100 border-0"
            >
              <b-button class="reg-btn m-0" block type="submit">PAY &#x20A6;{{amount}}</b-button>
            </paystack>
               </b-form-group>
             </b-col>
           </b-form-row>
            <!-- <b-button class="reg-btn ml-0" block type="submit" >Continue</b-button> -->
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import paystack from "vue-paystack";
export default {
  name: "checkout",
  data() {
    return {
      packages: {},
      user: {},
      school_id: null,
      lgas: [],
      subscriber: {
        name: "",
        level: null,
        ownership: null,
        lga: null,
      },
      paystackkey: "pk_test_8047f2961e0e83a7b455b8c6644b21cccb01d900", //paystack public key
      email: "succy2010@gmail.com", // Customer email
      amount: 1000000, // in kobo
      order_id: 0,
    };
  },
  components:{
  paystack
  },
  created() {
    this.getLga();
    this.getInfo();
    let user = JSON.parse(localStorage.getItem("regDetails"));
    this.email = user.email;
  },
  mounted() {
    this.createOrder()
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
  },
  methods: {
    createOrder() {
      let user = JSON.parse(localStorage.getItem("regDetails"));
      let cart = {
        amount: this.amount,
        email: this.email,
        ref: this.reference,
        school_id:user.school_id,
         name:user.name,
      };

  
      axios.post("/api/order", cart).then((res) => {
        if (res.status == 201) {
          this.order_id = res.data.id;
        }
      });
    },
    callback: function (response) {
      let user = JSON.parse(localStorage.getItem("regDetails"));

      if (response.status == "success") {
        axios.get(`/api/verify/${this.reference}`).then((res) => {
          if (res.status == 200) {
            this.$toasted.info("Check your mail for your login details", {
              icon: {
                name: "check",
              },
            });
            this.$router.push("/admin");
          } else {
            this.$toasted.error("Something went wrong", {
              icon: {
                name: "fingerprint",
              },
            });
            this.$router.go(-1);
          }
        });
      }
    },
    close: function () {
      console.log("Payment closed");
      axios.put(`/api/order/${this.order_id}`).then((res) => {
        if (res.status == 200) {
        }
      });
    },
    getLga() {
      axios
        .get("/api/lga")
        .then((res) => {
          if (res.status == 200) {
            this.lgas = res.data;
          }
        })
        .catch();
    },
    getInfo() {
      if (this.$route.query.id) {
        axios.get(`/api/school/${this.$route.query.id}`).then((res) => {
          if (res.status == 200) {
            this.subscriber = res.data;
            this.subscriber.name = res.data.schools;
          }
        });
      }

      if (this.$route.query.redirection_from == "registration") {
        this.user = JSON.parse(localStorage.getItem("regDetails"));

        this.getPackage(1);
      } else {
        this.user = JSON.parse(localStorage.getItem("adminDetails"));

        this.getPackage(this.$route.params.id);
      }
    },
    getPackage(id) {
      axios.get(`/api/package/${id}`).then((res) => {
        this.packages = res.data;
      });
    },

    gotoSummary() {
      let cart = {
        name: this.packages.name,
        desc: this.packages.description,
        start: this.$moment().format("L"),
        end: this.$moment().add("years", 1).format("L"),
        price: Number(this.packages.price),
        status: "pending",
        school_id: this.user.school_id,
        amount: Number(this.packages.price),
        email: this.user.email,
      };

      localStorage.setItem("cart", JSON.stringify(cart));
      axios
        .put(`/api/school/${this.$route.query.id}`, this.subscriber)
        .then((res) => {
          if (res.status == 200) {
            this.$router.push("/summary");
          }
        });
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
}
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.logo {
  position: absolute;
  top: 20px;
  left: 40px;
}
legend {
  font-size: 22px;
}
.row {
  width: 60%;
}
form {
  font-size: 15px;
  border-radius: 20px;
}
</style>