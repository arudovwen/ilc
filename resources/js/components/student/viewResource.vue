<template>
  <div class="main-b">
    <div class="view-resource-header mx-auto">
      <h2 class="toCaps">{{subject}}</h2>
      <!-- <h6 class="toCaps">{{subject}}</h6> -->
      <p class="subject-description toCaps">{{syllabus.grade_level}}</p>

      <p>
        Created by
        <strong>{{tutor.name}}</strong>
      </p>
      <p>Last Updated {{time | moment('MMM D')}}</p>
      <div class="resource-btn">
        <button class="btn" @click="addtolibrary">Add to Library</button>
        <button class="btn">Share</button>
      </div>
    </div>
    <div class="container">
      <div class="what-you-will-learn">
        <h4>What You Will Learn:</h4>
        <ul>
          <li v-for="(item,idx) in curriculum.learner_outcome" :key="idx">{{item.name}}</li>
        </ul>
      </div>
      <div class="what-you-will-learn">
        <h4>Requirements:</h4>
        <ul v-if="!syllabus.requirements">
          <li>You need to have completed last term topic on mathematics</li>
          <li>You will understand the basis of all topic attached to the subject</li>
        </ul>
        <ul v-else>
          <li v-for="(item,idx) in syllabus.requirements" :key="idx">{{item.name}}</li>
        </ul>
      </div>
      <div class="description">
        <h4>Description</h4>
        <p>{{syllabus.description}}</p>
      </div>
      <div class="sutdent-assessed">
        <h4>How will student be Assessed</h4>
        <p>Students Performance will be assessed based on:</p>
        <ul>
          <li v-for="(item,idx) in syllabus.assessments" :key="idx">{{item.name}}</li>
        </ul>
      </div>
      <div class="course-content">
        <b-row class="mb-5">
          <b-col>
            <h4 class="text-dark">Course Content</h4>

            <small>{{modules.length}} sections • {{ totalVideos + totalDocs + totalAudio }} lectures • {{totalMedia | time}} total length</small>
            <div role="tablist" v-for="(item,idx) in modules" :key="idx">
              <b-card no-body class>
                <b-card-header header-tag="header" class="p-1 text-left d-flex" role="tab">
                  <div
                    block
                    v-b-toggle="item.module.replace(/[^a-z0-9]/gi, '').replace(/\$/g, '')"
                    variant="secondary"
                    class="text-left d-flex justify-content-between align-items-center w-100"
                  >
                    <span>
                      <b-icon
                        icon="chevron-up"
                        class="mr-2 content-open"
                        style="width: 13px; height: 13px;"
                      ></b-icon>
                      <b-icon
                        icon="chevron-down"
                        class="mr-2 content-close"
                        style="width: 13px; height: 13px;"
                      ></b-icon>
                      {{item.module}}
                    </span>
                    <small
                      class="ml-auto"
                      v-if="getModuleDuration(JSON.parse(item.content))>0"
                    >{{getModuleDuration(JSON.parse(item.content)) | time}}</small>
                  </div>
                </b-card-header>
                <b-collapse
                  :id="item.module.replace(/[^a-z0-9]/gi, '').replace(/\$/g, '')"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>{{item.excerpt}}</b-card-text>
                    <b-card-text>
                      <div class="mod">
                        <ul>
                          <li v-for="(content,index) in JSON.parse(item.content)" :key="index">
                            <span
                              @click="handleToggle(content.title.replace(/[^a-z0-9]/gi, '').replace(/\$/g, ''))"
                              class="d-flex justify-content-between align-items-center"
                            >
                              <div>
                                <span class="ml-3">
                                  <i
                                    class="fa fa-play-circle"
                                    v-if="content.type=='video'"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    class="fa fa-file-pdf-o"
                                    v-if="content.type=='pdf'"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    class="fa fa-volume-up"
                                    v-if="content.type=='audio'"
                                    aria-hidden="true"
                                  ></i>
                                  <i
                                    class="fa fa-file-powerpoint-o"
                                    v-if="content.type=='ppt'"
                                    aria-hidden="true"
                                  ></i>
                                  <i class="fas fa-file-csv" v-if="content.type=='csv'"></i>
                                </span>
                                {{content.title}}
                              </div>
                              <small
                                v-if="(content.type=='video' || content.type=='audio') && content.duration"
                              >{{content.duration | time }}</small>
                              <small
                                v-if="(content.type=='video' || content.type=='audio') && !content.duration"
                              >-:-</small>
                            </span>

                            <b-modal
                              :id="content.title.replace(/[^a-z0-9]/gi, '').replace(/\$/g, '')"
                              :title="content.title"
                              hide-footer
                            >
                              <p class="my-4">{{content.overview}}</p>
                            </b-modal>
                          </li>
                        </ul>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-row class="mb-5">
        <b-col>
          <h4>Frequently Asked Questions</h4>
          <div role="tablist" v-for="(item,idx) in syllabus.faqs" :key="idx">
            <b-card no-body class>
              <b-card-header header-tag="header" class="p-2" role="tab">
                <div
                  block
                  v-b-toggle="item.question.replace(/[^a-z0-9]/gi, '').replace(/\$/g, '')"
                  variant="secondary"
                  class="text-left d-flex-center"
                >
                  <b-icon
                    icon="chevron-up"
                    class="mr-2 content-open"
                    style="width: 13px; height: 13px;"
                  ></b-icon>
                  <b-icon
                    icon="chevron-down"
                    class="mr-2 content-close"
                    style="width: 13px; height: 13px;"
                  ></b-icon>
                  {{item.question}}
                </div>
              </b-card-header>
              <b-collapse
                :id="item.question.replace(/[^a-z0-9]/gi, '').replace(/\$/g, '')"
                accordion="my-accordion"
                role="tabpanel"
              >
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
      <div class="review">
        <div class="featured-review p-3">
          <h4>Featured Review</h4>
          <div class="active-review">
            <div class="featured-review-top">
              <div class="featured-review-inner-top">
                <b-avatar src="/images/profile-img.jpg"></b-avatar>
                <p class="mb-0">
                  <strong>Nkechi Onuha</strong>
                </p>
              </div>
              <ratings :value="5" :disabled="true"></ratings>
            </div>
            <p>
              I had an easy time learning this course with the materials giving.
              <br />Easy to understand and grasp.
            </p>
          </div>
        </div>

        <div>
          <form @submit.prevent="rate" class="input-review p-3">
            <b-form-row>
              <b-col class="d-flex align-items-center">
                <p class="mb-2">Ratings :</p>
                <ratings
                  @handleRating="handleRating"
                  :value="rating"
                  :disabled="false"
                  class="ml-2"
                ></ratings>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col lg="10">
                <b-form-textarea
                  id="textarea-small"
                  size="md"
                  rows="4"
                  v-model="comment"
                  required
                  maxlength="250"
                  placeholder="Write a Review"
                ></b-form-textarea>
              </b-col>
              <b-col lg="2">
                <b-button type="submit" variant="secondary">Add</b-button>
              </b-col>
            </b-form-row>
          </form>
        </div>

        <hr />

        <div class="p-3 all-review">
          <h5>Reviews</h5>
          <div class="border-bottom" v-for="(item,id) in reviews" :key="id">
            <div class="active-review">
              <div class="featured-review-top">
                <div class="featured-review-inner-top">
                  <b-avatar :src="item.user.profile"></b-avatar>
                  <p class="mb-0">
                    <strong class="toCaps">{{item.user.name}}</strong>
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <ratings :value="item.rating" :disabled="true" class="mr-2"></ratings>
                <small>{{item.created_at | moment('MMM DD')}}</small>
              </div>
              <p>{{item.comment}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-col cols="5" v-if="modules.length">
      <b-card
        :title="subject"
        :img-src="cover_image"
        img-alt="Image"
        img-top
        style="width: 22rem;"
        class="mb-2 floating-bar shadow-lg toCaps"
      >
        <b-card-text>
          <strong>This includes:</strong>
        </b-card-text>
        <b-card-text class="border-bottom">
          <b-icon icon="folder-symlink" class="mr-2"></b-icon>
          {{ totalVideos + totalDocs + totalAudio }} downloadable resources
        </b-card-text>
        <b-card-text class="border-bottom" v-if="totalVideos">
          <b-icon icon="collection-play" class="mr-2"></b-icon>
          {{ totalVideos }} videos
        </b-card-text>
        <b-card-text class="border-bottom" v-if="totalAudio">
          <b-icon icon="file-music" class="mr-2"></b-icon>
          {{ totalAudio }} audios
        </b-card-text>
        <b-card-text class="border-bottom" v-if="totalDocs">
          <b-icon icon="file-earmark-arrow-down" class="mr-2"></b-icon>
          {{ totalDocs }} Documents
        </b-card-text>

        <b-button href="#" block variant="secondary">Total reviews : {{reviews.length}}</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
import Ratings from "../starRatings";
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
      cover_image: "",
      show: true,
      reviews: [],
      modules: [],
      rating: 0,
      comment: "",
    };
  },
  components: {
    Ratings,
  },
  mounted() {
    this.getResource();
  },
  methods: {
    rate() {
      let data = {
        course_id: this.$route.params.id,
        comment: this.comment,
        rating: this.rating,
      };
      axios
        .post("/api/rating", data, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 201) {
            this.comment = "";
            this.getRating();
            this.$toasted.success("Successful");
          }
        })
        .catch();
    },
    handleRating(val) {
      this.rating = val;
    },
    handleToggle(title) {
      this.$bvModal.show(title);
    },
    addtolibrary() {
      let data = {
        id: this.id,
        subject: this.subject,
        title: this.title,
        content: this.content,
        excerpt: this.excerpt,
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
    getRating() {
      axios
        .get(`/api/rating/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.reviews = res.data;
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

            axios
              .get(
                `/api/get-module/${this.subject}/${this.$props.student.level}`
              )
              .then((res) => {
                if (res.status == 200) {
                  this.modules = res.data;
                  this.getRating();
                }
              });
          }
        });
    },
    getModuleDuration(arr) {
      var newArr = [];
      arr.filter((item) => {
        if (item.type == "video" || item.type == "audio") {
          newArr.push(Number(item.duration));
        }
      });

      let sum = newArr.reduce(function (a, b) {
        return a + b;
      }, 0);

      return sum;
    },
  },
  computed: {
    totalVideos() {
      var vid = [];
      this.modules.filter((element) => {
        JSON.parse(element.content).filter((item) => {
          if (item.type == "video") {
            vid.push(item);
          }
        });
      });

      return vid.length;
    },
    totalDocs() {
      var doc = [];
      this.modules.filter((element) => {
        JSON.parse(element.content).filter((item) => {
          if (item.type == "pdf" || item.type == "csv" || item.type == "ppt") {
            doc.push(item);
          }
        });
      });
      return doc.length;
    },
    totalAudio() {
      var aud = [];
      this.modules.filter((element) => {
        JSON.parse(element.content).filter((item) => {
          if (item.type == "audio") {
            aud.push(item);
          }
        });
      });
      return aud.length;
    },
    totalMedia() {
      var media = [];
      this.modules.filter((element) => {
        JSON.parse(element.content).filter((item) => {
          if (item.type == "audio" || item.type == "video") {
            if (item.duration) {
              media.push(Number(item.duration));
            }
          }
        });
      });

      return media.reduce((a, b) => {
        return a + b;
      }, 0);
    },
  },
};
</script>

<style scoped>
.d-flex-center {
  display: flex;
  align-items: center;
}
.yellow-bg {
  color: gold;
}
.all-review {
  max-height: 500px;
  overflow: auto;
}
.jumb {
  width: 100%;
  position: relative;
  background: transparent;
}
.mod ul {
  list-style: none;
}
.mod ul li {
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}
.top_n {
  position: relative;

  object-fit: cover;
}
.excerpt {
  width: 60%;
}
.text-left:focus {
  outline: none !important;
}
.subject-description {
  width: 65%;
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
  top: 20%;
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
  /* margin-top: 2rem; */
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

.collapsed > span > .content-open,
.not-collapsed > span > .content-close {
  display: none;
}

.collapsed > .content-open,
.not-collapsed > .content-close {
  display: none;
}

.what-you-will-learn {
  margin-top: 2rem;
  background: #f7f8fa;
  padding: 15px;
  border: 1px solid #ccc;
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
.description {
  margin-top: 2rem;
  background: #f7f8fa;
  padding: 15px;
  border: 1px solid #ccc;
}
.sutdent-assessed {
  margin-top: 2rem;
  background: #f7f8fa;
  padding: 15px;
  border: 1px solid #ccc;
}
/* .course-content {
  color: #13a699;
} */
.featured-review {
  background: #f7f8fa;
}
.featured-review-inner-top {
  display: flex;
  padding: 15px 0;
  align-items: center;
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
  border-radius: 5px;
  margin-bottom: 10px;
}
.btn-review {
  background-color: #13a699;
  color: #fff !important;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
}
.btn-secondary {
  color: #fff !important;
  background-color: #13a699 !important;
  border-color: #13a699;
}
.btn-secondary:hover {
  color: #13a699 !important;
  background-color: #fff !important;
}
.container {
  width: 60%;
  margin-right: 40%;
  padding: 20px 30px 40px;
}
.course-content {
  margin-top: 2rem;
}
.card {
  border-radius: 0;
}
</style>