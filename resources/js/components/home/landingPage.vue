<template>
    <div class="">
        <div class="">
                <b-navbar toggleable="lg" type="light" variant="faded">
                    <b-navbar-brand href="#"><img src="/images/ilc-logo.png" class="d-inline-block align-top" alt="logo"></b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="mx-auto">
                        <b-nav-item href="#">Home</b-nav-item>
                        <b-nav-item href="#" >About</b-nav-item>
                        <b-nav-item href="#" >Sponsors</b-nav-item>
                        <b-nav-item href="#" >Contact</b-nav-item>
                    </b-navbar-nav>
                    <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item href="#" class="login-btn" >LOGIN</b-nav-item>
                            <b-nav-item href="#" class="reg-btn" >REGISTER</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
            </b-navbar>
        </div>
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="10000">
                        <div class="overlay"></div>
                        <img src="/images/annie-spratt-O1TNdLNvJLM-unsplash.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-interval="10000">
                        <div class="overlay"></div>
                        <img src="/images/bg-image-1.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <div class="overlay"></div>
                        <img src="/images/bg-image-2.png" class="d-block w-100" alt="...">
                        </div>
                </div>
               <div class="carousel-control">
                    <a class="" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-prev" aria-hidden="true"><img src="/images/chevron-prev.png" alt="prev"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-next" aria-hidden="true"><img src="/images/chevron-next.png" alt="nxt"></span>
                    <span class="sr-only">Next</span>
                </a>
               </div>
                    <div class="carousel-txt">
                        <h1>EDUCATION IN IMO STATE <br>
                        HAS A NEW FACE
                        </h1>
                        <button class="reg-btn">ENROLL NOW</button>
                    </div>
            </div>
       
       <div class="container">
           <div class="row mid-section">
                   <div class="col-md-6 mid-section-text">
                   <h2>About Us</h2>
                   <p>Education in imo state has brought a new face with the help of the goverment we hop in achiveing great thing with student ,
                        tutors and parents alike. we hope that this new face achieves great things and put the students of imo state at the forefront of education in nigeria.
                         God bless the people of imo state</p>

               </div>
               <div class="col-md-6">
                  <img src="/images/mid-section-img.png" class="" alt="">
               </div>
           </div>
       </div>

       <div class="who-can-section">
           <h2 class="text-center">Who Can Use The Service</h2>
           <div class="container">
               <div class="row">
                   <div class="col-md-4">
                       <div class="card who-card">
                           <img src="/images/school-svg.png" class="img-fluid" alt="">
                           <div class="who-card-inner">
                            <h3>Schools</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s,
                                </p>
                                <a href="" class="card-btn text-center">Get Started</a>
                           </div>

                       </div>
                   </div>
                    <div class="col-md-4">
                       <div class="card who-card">
                           <img src="/images/tutors-svg.png" class="img-fluid" alt="">
                           <div class="who-card-inner">
                               <h3>Tutors</h3>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's 
                               standard dummy text ever since the 1500s,
                            </p>
                            <a href="" class="card-btn text-center">Get Started</a>
                           </div>

                       </div>
                   </div>
                    <div class="col-md-4">
                       <div class="card who-card">
                           <img src="/images/school-svg.png" class="img-fluid" alt="">
                           <div class="who-card-inner">
                               <h3>Students</h3>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's 
                               standard dummy text ever since the 1500s,
                            </p>
                            <a href="" class="card-btn">Get Started</a>
                           </div>

                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div class="video-section container">
           <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>
       </div>
       <div class="sponsors"></div>

    <div class="footer">
        <div class="overlay">
            <img src="" alt="">
        </div>
    </div>
    </div> 
</template>

<script>
export default {
    
}
</script>