<template>
  <!-- <b-overlay :show="show" rounded="sm" class="h-100">
    <div v-if="!show">
    
      <div class="top_n" :style="{'background-image':`url(${cover_image})`}">
        <div class="overlay-n"></div>
        <b-jumbotron :header="title" :lead="subject" class="jumb toCaps">
          <p>{{excerpt}}</p>
          <p class="toCaps">created by {{tutors.name}}</p>
          <small>Last update {{time | moment('dddd mm ')}}</small>
          <hr />
       
          <b-button variant="secondary">Share</b-button>
          <b-button>Bookmark</b-button>
        </b-jumbotron>
      </div>
      <b-container>
        <b-row>
          <b-col cols="7" class="main-bar">
          
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

           
            <b-row class="mb-5">
              <b-col>
                <h4>Requirements</h4>
                <b-list-group>
                  <b-list-group-item>item</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>
           
            <b-row class="mb-5">
              <b-col>
                <h4>Description</h4>
                <p>{{syllabus.description}}</p>
              </b-col>
            </b-row>

           
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
          
            <b-row class="mb-5">
              <b-col>
                <h4>Course Availability</h4>
                <b-list-group>
                  <b-list-group-item>{{syllabus.availability}}</b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>
          

           
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
              img-src="https://picsum.photos/600/300/?image=25"
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
  </b-overlay>-->
  <div class="view-resource">
    <div class="view-resource-header mx-auto">
      <!--please let this be Module-->
      <h2>{{title}}</h2>
      <h6 class="toCaps">{{subject}}</h6>
      <!--please change to Class-->
      <p>JSS 1</p>
      <!-- <p class="subject-description">{{excerpt}}</p> -->

      <p>
        Created by
        <strong>{{tutor.name}}</strong>
      </p>
      <p>Last Updated {{time | moment('MMM D')}}</p>
      <div class="resource-btn mb-3">
        <b-button variant="outline-white" class="mr-3" @click="edit($route.params.id)">
          <i class="fa fa-pencil-square-o"></i> Edit
        </b-button>
        <b-button variant="outline-white">
          <i class="fa fa-share-alt"></i> Share
        </b-button>
      </div>
    </div>
    <div class="resource-content">
      <div class="resource-title"></div>
      <div class="resource-overview">
        <h4>Overview</h4>
        <p class="subject-description">{{excerpt}}</p>
      </div>

      <b-row class="mb-5">
        <b-col>
          <h4>What you will learn</h4>

          <b-list-group>
            <b-list-group-item
              v-for="(item,idx) in curriculum.learner_outcome"
              :key="idx"
            > {{item.name}}</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

      <b-row class="mb-5">
        <b-col>
          <h4>Requirements</h4>
          <b-list-group>
            <b-list-group-item>item</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

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
                    <i class="fa fa-file-powerpoint-o" v-if="item.type=='ppt'" aria-hidden="true"></i>
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

      <div class="tutors-note">
        <h5>Tutors Note</h5>
        <p>You included no notes to this resource</p>
      </div>
      <div class="student-reviews">
        <b-row class="mb-5">
          <b-col>
            <h4>Student Feedback</h4>
            <b-list-group>
              <b-list-group-item>
                <b-row>
                  <b-col cols="2" class="text-right">
                    <b-avatar></b-avatar>
                  </b-col>
                  <b-col cols="10">
                    <strong>John Enugu</strong>
                    <p>
                      Very good info and easy to understand.
                      Practical and insightful advice you can use in many situations even as an employee.
                      Obviously Chris likes to help people succeed and knows some of the barriers to success from his own experience.
                    </p>
                  </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item>
                <b-row>
                  <b-col cols="2" class="text-right">
                    <b-avatar></b-avatar>
                  </b-col>
                  <b-col cols="10">
                    <strong>Ada Nkechi</strong>
                    <p>Incredible, Amazing, Awesome. If you are this, I want to say "Thank you so much from all my heart & spirit." To love this course would be an understatement, I really learned a lot, bought this one years ago & never gone through this until recently when I took learning seriously and finished this course.</p>
                  </b-col>
                </b-row>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-col cols="5">
      <b-card
        :title="title"
        :img-src="cover_image"
        img-alt="Image"
        img-top
        style="width: 22rem;"
        class="mb-2 floating-bar shadow-lg"
      >
        <b-card-text>
          <strong>This includes:</strong>
        </b-card-text>
        <b-card-text>{{content.length}} downloadable resources</b-card-text>

        <b-button href="#" block variant="primary">Views : 24</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      tutors: {},
      syllabus: {},
      curriculum: {},
      content: [],
      title: "",
      excerpt: "",
      time: "",
      id: "",
      subject: "",
      cover_image: "",
      show: true,
      review: [1, 2, 3, 4, 5],
    };
  },
  mounted() {
    this.getResource();
  },
  methods: {
    edit(id) {
      this.$router.push(`/tutor/resource/edit/${id}`);
    },
    getResource() {
      axios
        .get(`/api/resource/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tutors = res.data.data.tutor;
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
.floating-bar {
  position: fixed;
  right: 5%;
  top: 30%;
}
.view-resource-header {
  background-image: linear-gradient(
      to bottom,
      rgba(10, 64, 101, 0.84),
      rgba(10, 64, 101, 0.84)
    ),
    url(/images/resource-bg.png);
  color: #fff;
  padding: 1.5rem;
  /* margin-top: 2rem; */
  position: relative;
}
.view-resource-header p {
  font-size: 14px;
  margin-bottom: 0.5rem !important;
}
.btn {
  background: transparent;
  border: 1px solid #fff;
  color: white !important;
  /* margin-right: 10px; */
  /* margin-bottom: 15px; */
}
.btn:hover {
  background: #fff;
  color: #0a4065 !important;
  transition: 0.3s;
  border: none;
}
.resource-content {
  padding: 20px;
  width: 60%;
}
.resource-overview {
  padding-top: 20px;
}
.resource-media-frame {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.resource-media-frame img {
  width: 50%;
  height: 300px;
}
.tutors-note {
  padding-top: 20px;
}
.student-reviews {
  padding: 20px 0;
}
.btn-secondary {
  color: #333 !important;
}
.btn-primary {
  background: #41cee2 !important;
}
</style>