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
        <ul>
          <li>You need to have completed last term topic on mathematics</li>
          <li>You will understand the basis of all topic attached to the subject</li>
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
            <div role="tablist" v-for="(item,idx) in modules" :key="idx">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1 text-left" role="tab">
                  <b-button
                    block
                    v-b-toggle="item.module.replace(/[^a-z0-9]/gi, '').replace(/\$/g, '')"
                    variant="secondary"
                    class="text-left"
                  >{{item.module}}</b-button>
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
                            >
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
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-2" role="tab">
                <div
                  block
                  v-b-toggle="item.question.replace(/[^a-z0-9]/gi, '').replace(/\$/g, '')"
                  variant="secondary"
                  class="text-left"
                >{{item.question}}</div>
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
        <h4>Review</h4>
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
              I had an easy time learning this course with the materials giving.
              <br />
Easy to understand and grasp.
            </p>
          </div>
          <div class="input-review">
            <b-form-row>
              <b-col lg="10">
                <b-form-textarea id="textarea-small" size="sm" placeholder="Write a Review"></b-form-textarea>
              </b-col>
              <b-col lg="2">
                <button class="btn-review">Add</button>
              </b-col>
            </b-form-row>
          </div>
        </div>
      </div>
    </div>
    <b-col cols="5">
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
        <b-card-text
          class="border-bottom"
          v-for="(module,idx) in modules"
          :key="idx"
        >{{module.module}} - {{JSON.parse(module.content).length}} downloadable resources</b-card-text>

        <b-button href="#" block variant="primary">Views : 24</b-button>
      </b-card>
    </b-col>
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
      cover_image: "",
      show: true,
      review: [1, 2, 3, 4, 5],
      modules: [],
    };
  },
  mounted() {
    this.getResource();
  },
  methods: {
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

             axios.get(`/api/get-module/${this.subject}/${this.$props.student.level}`).then((res) => {
        if (res.status == 200) {
          this.modules = res.data;
        }
      });
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
.mod ul{
  list-style: none;
}
.mod ul li{
  padding:10px 20px;
  border-bottom:1px solid #ccc;
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
  top: 30%;
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
}
</style>