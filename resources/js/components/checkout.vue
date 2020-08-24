<template>
  <div class="main">
    <div class="back">
      <router-link to="/">Back Home</router-link>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">1</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0 toCaps">{{packages.name}}</h6>
                <small class="text-muted">{{packages.desc}}</small>
              </div>
              <span class="text-muted">{{packages.price  | currency}}</span>
            </li>
           
            <!-- <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li> -->
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (&#8358;)</span>
              <strong>{{packages.price  | currency}}</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Promo code" />
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing address(Optional)</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder value required />
                <div class="invalid-feedback">Valid first name is required.</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder value required />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
            </div>

            <div class="mb-3">
              <label for="username">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                <div class="invalid-feedback" style="width: 100%;">Your username is required.</div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">
                Email
                <span class="text-muted">(Optional)</span>
              </label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" />
              <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div class="invalid-feedback">Please enter your shipping address.</div>
            </div>

            <div class="mb-3">
              <label for="address2">
                Address 2
                <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country" required>
                  <option value>Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">Please select a valid country.</div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value>Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">Please provide a valid state.</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder required />
                <div class="invalid-feedback">Zip code required.</div>
              </div>
            </div>
            <hr class="mb-4" />
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address" />
              <label
                class="custom-control-label"
                for="same-address"
              >Shipping address is the same as my billing address</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info" />
              <label
                class="custom-control-label"
                for="save-info"
              >Save this information for next time</label>
            </div>
            <hr class="mb-4" />

            <hr class="mb-4" />
            <button
              class="btn btn-primary btn-lg btn-block"
              @click="gotoSummary"
              type="button"
            >Continue</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkout",
  data() {
    return {
      packages: {},
      user: {},
      school_id: null
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      if (this.$route.query.redirection_from == "registration") {
        this.user = JSON.parse(localStorage.getItem("regDetails"));
       
        this.getPackage(1);
      } else {
        this.user = JSON.parse(localStorage.getItem("adminDetails"));
        t
        this.getPackage(this.$route.params.id);
      }
    },
    getPackage(id) {
      axios.get(`/api/package/${id}`).then(res => {
        this.packages = res.data;
      });
    },

    gotoSummary() {
      let cart = {
        name: this.packages.name,
        desc:this.packages.description,
        start: this.$moment().format("L"),
        end: this.$moment()
          .add("years", 1)
          .format("L"),
        price: Number(this.packages.price),
        status: "pending",
        school_id: this.user.school_id,
        amount: Number(this.packages.price),
        email: this.user.email
      };

      localStorage.setItem("cart", JSON.stringify(cart));
      this.$router.push("/summary");
    }
  }
};
</script>

<style scoped>
.main {
  background: #f7f8fa;
  font-size: 14px;
  position: relative;
}
.back {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>