<template>
  <div class>
    <Navigation />
    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="10000">
          <div class="overlay"></div>
          <img src="/images/annie-spratt-O1TNdLNvJLM-unsplash.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-interval="10000">
          <div class="overlay"></div>
          <img src="/images/bg-image-1.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <div class="overlay"></div>
          <img src="/images/bg-image-2.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <div class="carousel-control">
        <a class href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-prev" aria-hidden="true">
            <img src="/images/chevron-prev.png" alt="prev" />
          </span>
          <span class="sr-only">Previous</span>
        </a>
        <a class href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-next" aria-hidden="true">
            <img src="/images/chevron-next.png" alt="nxt" />
          </span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="carousel-txt">
        <h1>
          EDUCATION IN IMO STATE
          <br />HAS A NEW FACE
        </h1>

        <router-link to="/school/register">
          <button v-waves.button v-waves.float v-waves.light class="sec_color">
            <span>ENROLL</span>
            <!-- <i class="fa fa-long-arrow-right sec_color" aria-hidden="true"></i> -->
          </button>
        </router-link>
      </div>
    </div>

    <div class="container">
      <div class="row mid-section">
        <div class="col-md-6 mid-section-text">
          <div class="text-center heading mb-5">
            <h2 class="mb-0">About Us</h2>
            <img src="/images/after-img.png" class="img-fluid" alt />
          </div>
          <p>
            Education in imo state has brought a new face with the help of the goverment we hop in achiveing great thing with student ,
            tutors and parents alike. we hope that this new face achieves great things and put the students of imo state at the forefront of education in nigeria.
            God bless the people of imo state
          </p>
        </div>
        <div class="col-md-6">
          <img src="/images/mid-section-img.png" class alt />
        </div>
      </div>
    </div>

    <div class="who-can-section">
      <div class="text-center heading mb-5">
        <h2 class="mb-0">Who Can Use The Service</h2>
        <img src="/images/after-img.png" class="img-fluid" alt />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card who-card shadow-sm">
              <img src="/images/school-svg.png" class="img-fluid" alt />
              <div class="who-card-inner">
                <h3>Schools</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <a href class="card-btn text-center">Get Started</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card who-card shadow-sm">
              <img src="/images/tutors-svg.png" class="img-fluid" alt />
              <div class="who-card-inner">
                <h3>Tutors</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <a href class="card-btn text-center">Get Started</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card who-card shadow-sm">
              <img src="/images/school-svg.png" class="img-fluid" alt />
              <div class="who-card-inner">
                <h3>Students</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <a href class="card-btn">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="video-section container mb-5">
      <img src="/images/play-svg.png" alt />
    </div>
    <div class="sponsors">
      <div class="text-center heading mb-5">
        <h2 class="mb-0">Our Sponsors</h2>
        <img src="/images/after-img.png" class="img-fluid" alt />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img src="/images/sponsor-img-1.png" alt />
          </div>
          <div class="col-md-3">
            <img src="/images/sponsor-img-2.png" alt />
          </div>
          <div class="col-md-3">
            <img src="/images/sponsor-img-1.png" alt />
          </div>
          <div class="col-md-3">
            <img src="/images/sponsor-img-2.png" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="pricing">
      <div class="text-center heading mb-5">
        <h2 class="mb-0">Pricing Plan</h2>
        <img src="/images/after-img.png" class="img-fluid" alt />
      </div>
      <b-container>
        <b-row>
          <b-col>
            <b-card>
              <div class="pricing-header text-center">
                <h5>Private</h5>
                <p class="pricing-amount">N5000</p>
                <p>per month</p>
              </div>
              <b-list-group>
                <b-list-group-item>Admin Dashboard</b-list-group-item>
                <b-list-group-item>Student Dashboard</b-list-group-item>
                <b-list-group-item>Teachers Dashboard</b-list-group-item>
                <b-list-group-item>Discussion Forum</b-list-group-item>
                <b-list-group-item>Schedule Planning</b-list-group-item>
               
              </b-list-group>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <div class="pricing-header text-center">
                <h5>Faith Based</h5>
                <p class="pricing-amount">N5000</p>
                <p>per month</p>
              </div>
              <b-list-group>
              <b-list-group-item>Admin Dashboard</b-list-group-item>
                <b-list-group-item>Student Dashboard</b-list-group-item>
                <b-list-group-item>Teachers Dashboard</b-list-group-item>
                <b-list-group-item>Discussion Forum</b-list-group-item>
                <b-list-group-item>Schedule Planning</b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <div class="pricing-header text-center">
                <h5>Public</h5>
                <p class="pricing-amount">N5000</p>
                <p>per month</p>
              </div>

              <b-list-group>
              <b-list-group-item>Admin Dashboard</b-list-group-item>
                <b-list-group-item>Student Dashboard</b-list-group-item>
                <b-list-group-item>Teachers Dashboard</b-list-group-item>
                <b-list-group-item>Discussion Forum</b-list-group-item>
                <b-list-group-item>Schedule Planning</b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="footer">
      <div class="footer-inner container">
        <img src="/images/footer-logo.png" alt />
        <h5>About Us</h5>
        <p>This is an initiative of the federal ministry of education imo state</p>
        <img src="/images/footer-divider.png" class="img-fluid" alt />
        <div class="footer-end">
          <div class="footer-end-right">
            <img src="/images/phone-ilc.png" alt />
            <p>+239000000000</p>
          </div>
          <div class="footer-end-right">
            <img src="/images/mail-ilc.png" alt />
            <p>imlc@yahoo.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../navigation/navigation";
export default {
  components: {
    Navigation,
  },
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}

.card {
  background-color: #f7f8fa;
  border: none;
}
.sec_color {
  background-color: var(--primary-btn);
  color: #fff;
  font-size: 18px;
}
</style>