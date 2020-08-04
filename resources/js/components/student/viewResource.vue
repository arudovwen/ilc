<template>

  <!-- <div class>
    <div class="view-resource-header mx-auto">
      <h2>Mathematics</h2>
      <h6>First Term</h6>
      <p class="subject-description">
        Lorem ipsum dolor sit amet
        <br />Veniam rem eligendi at provident dolor iste molestiae
        <br />cupiditate, adipisci vero distinctio sed quam? Natus in doloribus ullam.
      </p>
      <div class="resource-btn">
        <button class="btn">Add to Library</button>
        <button class="btn">Share</button>
      </div>
      <p>
        Created by
        <strong>John Doe</strong>
      </p>
      <p>Last Updated 20/07/2020</p>
    </div>
    <div class="container">
      <div class="what-you-will-learn container">
        <h3>What You Will Learn:</h3>
        <ul>
          <li>You will understand the basis of all topic attached to the subject</li>
          <li>You will understand the basis of all topic attached to the subject</li>
          <li>You will understand the basis of all topic attached to the subject</li>
          <li>You will understand the basis of all topic attached to the subject</li>
        </ul>
      </div>
      <div class="what-you-will-learn container">
        <h3>Requirements:</h3>
        <ul>
          <li>You need to have completed last term topic on mathematics</li>
          <li>You will understand the basis of all topic attached to the subject</li>
        </ul>
      </div>
      <div class="description container">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />Rerum totam fugit perferendis debitis praesentium officiis voluptate in est nulla,
          <br />provident labore dignissimos aspernatur iusto optio cumque. Possimus sunt aperiam totam.
        </p>
      </div>
      <div class="sutdent-assessed container">
        <h3>How will student be Assessed</h3>
        <p>Students Performance will be assessed based on:</p>
        <ul>
          <li>You will understand the basis of all topic attached to the subject</li>
          <li>You will understand the basis of all topic attached to the subject</li>
        </ul>
      </div>
      <div class="course-content">
        <h3>Course Content</h3>
      </div>

      <div class="review">
        <h3>Review</h3>
        <div class="featured-review">
          <div class="active-review">
            <div class="featured-review-top">
              <div class="featured-review-inner-top">
                <b-avatar src="/images/profile-img.jpg"></b-avatar>
                <p>
                  <strong>Nkechi Onuha</strong>
                </p>
              </div>
              <img src="/images/five-star.png" class="img-fluid" alt />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br />Exercitationem molestias explicabo sit.
              <br />Tenetur veniam aperiam qui quis ducimus ipsum ipsa? Ad nesciunt quas quia cum,.
            </p>
          </div>
          <div class="input-review container">
            <b-form-row>
              <b-col lg="10"><b-form-textarea id="textarea-small" size="sm" placeholder="Write a Review"></b-form-textarea></b-col>
              <b-col lg="2"><button class="btn-review">Add</button></b-col>
            </b-form-row>
          </div>
        </div>
      </div>
    </div>
  </div> -->

<div>
   <b-overlay :show="show" rounded="sm" class="h-100">
    <div v-if="!show">
      <!-- banner  -->
      <!-- title, overview, created at, buttons share,add,bookmark -->
      <div class="top_n" :style="{'background-image':`url(${cover_image})`}">
        <div class="overlay-n"></div>
        <b-jumbotron :header="title" :lead="subject" class="jumb toCaps">
          <p class="excerpt">{{excerpt}}</p>
          <p class="toCaps">created by {{tutor.name}}</p>
          <small>Last update {{time | moment('MMM D  ')}}</small>
          <hr />
       
          <b-button variant="secondary">Share</b-button>
          <b-button>Bookmark</b-button>
        </b-jumbotron>
      </div>
      <b-container>
        <b-row>
          <b-col cols="7" class="main-bar">
            <!-- what you will learn  -->
            <b-row class="mb-5">
              <b-col>
                <h4>What you will learn</h4>

                <b-list-group>
                  <b-list-group-item
                    v-for="(item,idx) in curriculum.learner_outcome"
                    :key="idx"
                  >{{item.name}}</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>

            <!-- requirements  -->
            <b-row class="mb-5">
              <b-col>
                <h4>Requirements</h4>
                <b-list-group>
                  <b-list-group-item>item</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>
            <!-- description  -->
            <b-row class="mb-5">
              <b-col>
                <h4>Description</h4>
                <p>{{syllabus.description}}</p>
              </b-col>
            </b-row>

            <!-- who is this course for  -->
            <b-row class="mb-5">
              <b-col>
                <h4>Who is this course for?</h4>
                <b-list-group>
                  <b-list-group-item v-if="curriculum.profile.age">{{curriculum.profile.age}}</b-list-group-item>
                  <b-list-group-item
                    v-if="curriculum.profile.interest"
                  >{{curriculum.profile.interest}}</b-list-group-item>
                  <b-list-group-item
                    v-if="curriculum.profile.abilities"
                  >{{curriculum.profile.abilities}}</b-list-group-item>
                  <b-list-group-item v-if="curriculum.profile.others">{{curriculum.profile.others}}</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>

            <!-- how will the student be assessed  -->
            <b-row class="mb-5">
              <b-col>
                <h4>How will the students be assessed</h4>
                <b-list-group>
                  <b-list-group-item
                    v-for="(item,idx) in syllabus.assessment"
                    :key="idx"
                  >{{item.name}}</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>

            <!-- featured review  -->
            <b-row class="mb-5">
              <b-col>
                <h4>Featured Review</h4>
                <b-list-group>
                   <b-list-group-item>
                  <b-row>
                     <b-col>
                       <div class="mb-3">
                          <b-avatar></b-avatar>
                          <strong>Ada Nkechi</strong>
                       </div>
                        <b-row class="mb-3 ml-1"><i class="fa fa-star-o" aria-hidden="true" v-for="(item,idx) in review"  :key="idx" :id="item"></i></b-row>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio modi dolorum ex praesentium eius facilis. Illo aut quos sequi? Est modi eius consequatur veritatis atque! Optio illo accusamus maiores?</p></b-col>
                  </b-row>
                  </b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>

            <!-- course content  -->
            <b-row class="mb-5">
              <b-col>
                <h4>Course Content</h4>
                <div role="tablist" v-for="(item,idx) in content" :key="idx">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1 text-left" role="tab">
                      <b-button block v-b-toggle="item.title" variant="secondary" class="text-left">
                        {{item.title}}
                        <span class="ml-3">
                          <i class="fa fa-play-circle" v-if="item.type=='video'" aria-hidden="true"></i>
                          <i class="fa fa-file-pdf-o" v-if="item.type=='pdf'" aria-hidden="true"></i>
                          <i class="fa fa-volume-up" v-if="item.type=='audio'" aria-hidden="true"></i>
                          <i
                            class="fa fa-file-powerpoint-o"
                            v-if="item.type=='ppt'"
                            aria-hidden="true"
                          ></i>
                          <i class="fas fa-file-csv" v-if="item.item=='csv'"></i>
                        </span>
                      </b-button>
                    </b-card-header>
                    <b-collapse :id="item.title" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>{{item.overview}}</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-col>
            </b-row>

            <!-- faq  -->

            <b-row class="mb-5">
              <b-col>
                <h4>Frequently Asked Questions</h4>
                <div role="tablist" v-for="(item,idx) in syllabus.faqs" :key="idx">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button
                        block
                        v-b-toggle="item.question"
                        variant="secondary"
                        class="text-left"
                      >{{item.question}}</b-button>
                    </b-card-header>
                    <b-collapse :id="item.question" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>{{item.answer}}</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-col>
            </b-row>
            <!-- course availabilty  -->
            <b-row class="mb-5">
              <b-col>
                <h4>Course Availability</h4>
                <b-list-group>
                  <b-list-group-item>{{syllabus.availability}}</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>
            <!-- tutor  -->

            <!-- student feddback   -->
            <b-row class="mb-5">
              <b-col>
                <h4>Student Feedback</h4>
                <b-list-group>
                  <b-list-group-item>
                  <b-row>
                     <b-col cols="2" class="text-right">
                        <b-avatar></b-avatar></b-col> 
                        <b-col cols="10">
                          <strong>John Enugu</strong>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio modi dolorum ex praesentium eius facilis. Illo aut quos sequi? Est modi eius consequatur veritatis atque! Optio illo accusamus maiores?</p></b-col>
                  </b-row>
                  </b-list-group-item>
                   <b-list-group-item>
                  <b-row>
                     <b-col cols="2" class="text-right">
                        <b-avatar></b-avatar></b-col> 
                        <b-col cols="10">
                          <strong>Ada Nkechi</strong>
                          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio modi dolorum ex praesentium eius facilis. Illo aut quos sequi? Est modi eius consequatur veritatis atque! Optio illo accusamus maiores?</p></b-col>
                  </b-row>
                  </b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>

            <!-- review  -->
            <b-row class="mb-5">
              <b-col>
                <h4>Review</h4>
                <b-textarea class="mb-3" placeholder="Write a review"></b-textarea>
                <b-row class="mb-3 ml-1"><i class="fa fa-star-o" aria-hidden="true" v-for="(item,idx) in review"  :key="idx" :id="item"></i></b-row>
                <b-button type="button" variant="secondary">Submit</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="5">
            <b-card
              :title="title"
              :img-src="cover_image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="mb-2 floating-bar shadow-lg"
            >
              <b-card-text><strong>This includes:</strong></b-card-text>
              <b-card-text> {{content.length}} downloadable resources</b-card-text>

              <b-button href="#" block variant="primary" @click="addtolibrary">Add to library</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <template v-slot:overlay>
      <div class="text-center">
        <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
        <p id="cancel-label">Please wait...</p>
        <b-button
          ref="cancel"
          variant="outline-info"
          size="sm"
          aria-describedby="cancel-label"
        >Loading</b-button>
      </div>
    </template>
   </b-overlay> 
</div>
  
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      tutor: {},
      syllabus: {},
      curriculum: {},
      content: [],
      title: "",
      excerpt: "",
      time: "",
      id: "",
      subject: "",
      cover_image: "/images/english-lit.jpg",
      show: true,
      review:[1,2,3,4,5]
    };
  },
  mounted() {
    this.getResource();
  },
  methods: {
    addtolibrary() {
      let data = {
        id: this.id,
        subject: this.subject,
        title: this.title,
        content: this.content,
        worksheet_id: 0,
      };
      axios
        .post("/api/library", data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 201) {
            this.$toasted.success("Added to Library", {
              icon: {
                name: "check",
                after: false,
              },
            });
          } else {
            this.$toasted.error("Already in Library", {
              icon: "ban",
              after: false,
            });
          }
        });
    },
    getResource() {
      axios
        .get(`/api/student-resource/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tutor = res.data.data.tutor;
            this.syllabus = JSON.parse(res.data.data.syllabus.syllabus);
            this.curriculum = JSON.parse(res.data.data.curriculum.curriculum);
            this.content = JSON.parse(res.data.data.content);
            this.excerpt = res.data.data.excerpt;
            this.title = res.data.data.title;
            this.time = res.data.data.time;
            this.id = res.data.data.id;
            this.cover_image = res.data.data.cover_image;
            this.subject = res.data.data.subject;
            this.show = false;
          }
        });
    },
  },
};
</script>

<style scoped>
.jumb {
  width: 100%;
  position: relative;
  background: transparent;
}
.top_n {
  position: relative;

  object-fit: cover;
}
.excerpt{
  width: 60%;
}
.overlay-n {
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  opacity: 0.85;
  background: #f7f8fa;
  backdrop-filter: blur(2px);
  position: absolute;
}
.main-bar {
  width: 70%;
  margin-right: auto;
}
.floating-bar{
  position: fixed;
  right: 5%;
  top:30%;
}
.view-resource-header {
  background-image: linear-gradient(
      to bottom,
      rgba(19, 166, 153, 0.65),
      rgba(19, 166, 153, 0.65)
    ),
    url(/images/resource-bg.png);
  color: #fff;
  padding: 1.5rem;
  margin-top: 2rem;
}
.view-resource-header p {
  margin-bottom: 0.5rem !important;
}
.btn {
  background: transparent;
  border: 1px solid #fff;
  color: white !important;
  margin-right: 10px;
  margin-bottom: 15px;
}
.btn:hover {
  background: #fff;
  color: #13a699 !important;
  transition: 0.3s;
  border: none;
}
.what-you-will-learn {
  margin-top: 2rem;
}

.what-you-will-learn ul {
  list-style-image: url("/images/checked-1.png");
  padding: 15px;
}
.what-you-will-learn ul li {
  padding-top: 10px;
}
.sutdent-assessed ul {
  list-style-image: url("/images/checked-1.png");
  padding: 10px 15px;
}
.sutdent-assessed ul li {
  padding-bottom: 10px;
}
.sutdent-assessed {
  margin-top: 2rem;
}
.course-content {
  color: #13a699;
}
.featured-review-inner-top {
  display: flex;
  padding: 15px;
}
.featured-review-top {
  display: flex;
  justify-content: space-between;
}
.featured-review-inner-top p {
  padding-left: 10px;
}
.featured-review-top img {
  height: 20px;
  width: 100px;
}

.review {
  background-color: #fff;
  border: 1px solid #808080;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.btn-review{
  background-color:#13a699 ;
  color: #fff !important;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>