<template>
  <div class="container">
       <div class="back">
      <router-link to="/">Back Home </router-link>
    </div>
    <div class="row h-100 justify-content-center align-items-center">
      <div class="main_box">
        <div class="col-md-12 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Summary</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0 toCaps">{{packages.name}}</h6>
                <small class="text-muted">{{packages.desc}}</small>
              </div>
              <span class="text-muted">&#8358;{{packages.price}}</span>
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
              <strong>&#8358;{{packages.price}}</strong>
            </li>
          </ul>

          <div class="card p-2">
            <Paystack  :package='packages'/>
             
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Paystack from './paystack';
export default {
  components: {
    Paystack
  },
  data() {
    return {
      
      packages:{}
    };
  },
  computed: {
  
  },
  created() {
     
  },
  mounted() {
    this.packages = JSON.parse(localStorage.getItem("cart"));
  },
  methods: {
    
   
  }
};
</script>
<style scoped lang="scss">
.back{
  position: absolute;
  top:20px;
  left:20px;
}
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

.container {
  height: 100vh;
  position: relative;
}
.main_box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f8fa;
  padding: 15px;
}
</style>