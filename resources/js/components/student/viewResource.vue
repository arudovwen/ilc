<template>

 <b-overlay :show="show" rounded="sm" class="h-100">
        <div v-if="!show">
    <!-- banner  -->
    <!-- title, overview, created at, buttons share,add,bookmark -->
    <div class="top_n"  :style="{'background-image':`url(${cover_image})`}">
      <div class="overlay-n"></div>
      <b-jumbotron :header="title" :lead="subject" class="jumb toCaps">
        <p>{{excerpt}}</p>
        <p class="toCaps">created by {{tutor.name}}</p>
        <small>Last update {{time | moment('dddd mm ')}}</small>
        <hr />
        <b-button variant="success" @click="addtolibrary">Add to Library</b-button>
        <b-button variant="secondary">Share</b-button>
        <b-button>Bookmark</b-button>
      </b-jumbotron>
    </div>

    <b-container>
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
            <b-list-group-item v-if="curriculum.profile.interest">{{curriculum.profile.interest}}</b-list-group-item>
            <b-list-group-item v-if="curriculum.profile.abilities">{{curriculum.profile.abilities}}</b-list-group-item>
            <b-list-group-item v-if="curriculum.profile.others">{{curriculum.profile.others}}</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

      <!-- how will the student be assessed  -->
      <b-row class="mb-5">
        <b-col>
          <h4>How will the students be assessed</h4>
          <b-list-group>
            <b-list-group-item v-for="(item,idx) in syllabus.assessment" :key="idx">{{item.name}}</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

      <!-- featured review  -->
      <b-row class="mb-5">
        <b-col>
          <h4>Featured Review</h4>
          <b-list-group>
            <b-list-group-item>item</b-list-group-item>
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
            <b-list-group-item>item</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>

      <!-- review  -->
      <b-row class="mb-5">
        <b-col>
          <h4>Review</h4>
          <b-textarea class="mb-3" placeholder="Write a review"></b-textarea>
          <b-button type="button" variant="secondary">Submit</b-button>
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
         
          >
            Loading
          </b-button>
        </div>
      </template>
    </b-overlay>

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
      cover_image:'/images/english-lit.jpg',
      show:true,
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
          this.show = false
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
</style>