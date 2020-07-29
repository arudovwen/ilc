<template>
  <paystack
    :amount="amount"
    :email="email"
    :paystackkey="paystackkey"
    :reference="reference"
    :callback="callback"
    :close="close"
    :embed="false"
  >
    <b-button class="reg-btn ml-0" block>
      <i class="fas fa-money-bill-alt"></i>
       PAY 
    </b-button>
  </paystack>
</template>
 
<script type="text/javascript">
import paystack from "vue-paystack";
export default {
  components: {
    paystack
  },
  data() {
    return {
      paystackkey: "pk_test_8047f2961e0e83a7b455b8c6644b21cccb01d900", //paystack public key
      email: "succy2010@gmail.com", // Customer email
      amount: 1000000, // in kobo
      order_id: 0
    };
  },
  mounted() {
    this.createOrder();
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },

  methods: {
    createOrder() {
      let cart = JSON.parse(localStorage.getItem("cart"));

      this.amount = cart.amount;
      this.email = cart.email;
      cart.ref = this.reference;
     
      axios.post("/api/order", cart).then(res => {
        if (res.status == 201) {
          this.order_id = res.data.id;
        }
      });
    },
    callback: function(response) {
      this.$emit("showOverlay");
      let user = JSON.parse(localStorage.getItem("regDetails"));
     
      if (response.status == "success") {
        axios.get(`/api/verify/${this.reference}`).then(res => {
          if (res.status == 200) {
            this.$toasted.info("Check your mail for your login details", {
              icon: {
                name: "check"
              }
            });
            this.$router.push("/admin");
         
          } else {
            this.$toasted.error("Something went wrong", {
              icon: {
                name: "fingerprint"
              }
            });
            this.$router.go(-1);
          }
        });
      }
    },
    close: function() {
      console.log("Payment closed");
      axios.put(`/api/order/${this.order_id}`).then(res => {
        if (res.status == 200) {
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.button-green {
  padding: 8px 32px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  border-radius: 3px;
  background: #0f7a8a;
  text-decoration: none;
  color: white;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: initial;
  position: relative;
  transition: background-color 0.6s ease;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(white, 0.1);
    border-radius: 100%;
    transition: width 0.3s ease, height 0.3s ease;
  }
  &:focus,
  &:hover {
    background: darken(#0f7a8a, 7%);
  }
  &:active {
    &:after {
      width: 200px;
      height: 200px;
    }
  }
}
</style>