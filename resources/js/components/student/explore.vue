<template>
  <!-- <div class="body">
    <h3 class="text-center mb-4">Available Resources</h3>
    <div class="main-content">
      <div v-for="(item,idx) in resources" :key="idx" class="mb-3" @click="gotoHer(item.id)">
        <div class="top_box d-flex justify-content-between align-items-center p-3">
          <p class="m-0 toCaps">{{item.module}}</p>
          <div class="d-flex align-items-center">
            <p class="m-0 mr-5 toCaps">{{item.subject}}</p>
            <i class="fa fa-plus-circle"  aria-hidden="true"></i>
          </div>
        </div>
        <div class="py-2 px-3 border" v-if="opened.includes(idx)">
          <ul class="bg-white">
            <li v-for="(content,index) in JSON.parse(item.content)" :key="index" class="border-bottom">
              <div><span>{{content.title}}</span>
              <span class="ml-3"> <i class="fa fa-play-circle" v-if="content.type=='video'" aria-hidden="true"></i>
          <i class="fa fa-file-pdf-o" v-if="content.type=='pdf'" aria-hidden="true"></i>
          <i class="fa fa-volume-up" v-if="content.type=='audio'" aria-hidden="true"></i>
          <i class="fa fa-file-powerpoint-o" v-if="content.type=='ppt'" aria-hidden="true"></i>
          <i class="fas fa-file-csv" v-if="item.content=='csv'"></i></span></div>
              <div class="px-3">
                <strong>Overview</strong>
                <p>{{content.overview}}</p>
              </div>
            </li>
          </ul>
          <div class="text-right">
            <button type="button" class="btn btn-primary" @click="addtolibrary(idx)">Add to library</button>
          </div>
        </div>
      </div>
    </div>
  </div>-->
  <div class="student-resource">
    <h3>English Language Resource</h3>
    <ul class="breadcrumb">
      <li>
        <a href="#">English Language</a>
      </li>
      <li>Module 1.1</li>
    </ul>
    <h2>
      1.1
      <span>COMPREHENSION/UNDERSTANDING</span>
    </h2>
    <img src="/images/english-lit.jpg" class="text-center img-fluid" alt="english" />

    <b-container>
      <div class="what-you will learn">
        <h4>Within this lesson you will learn:</h4>
        <ul>
          <li>User-Centered Design</li>
          <li>User-Centered Design</li>
          <li>User-Centered Design</li>
          <li>User-Centered Design</li>
        </ul>
      </div>
      <div class="module-overview">
        <p>
          Hi and welcome to Lesson 1 of User Experience: The Beginners Guide!
          In this lesson, we will provide you with an introduction to 'User Experience' and its key concepts.
          Here, we will give you an overview of what user experience is, and why you should care about it. We will explain what is covered by the term ‘user experience’ as well as introduce you to what it means to work in a user-centered process.
          This sounds very straightforward – but, unfortunately, there are as many opinions about the definition of 'User Experience' as there are definitions of the meaning of life...
          We think it’s counterproductive to try to find the authoritative definition of 'User Experience'. It would be much more productive to find a definition that works well for yourself and the specific product you are designing.
          In order to help you on your way with developing your own understanding of UX, we’ll provide you with a proper overview of some of the best definitions and key terms. During this first lesson, we introduce some of the key terms and concepts as well as a bit about the history of UX.
        </p>
      </div>

      <div class="resource-question">
        <h4>Answer These Question</h4>
        <h6 class="question">in this lesson we will provide you with?</h6>
        <div>
          <b-form-group label>
            <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
          </b-form-group>
          <b-button>SUBMIT</b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      resources: [],
      opened: [],
      current: "",
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    gotoHer(id) {
      this.$router.push(`/student/resource/view/${id}`);
    },
    addtolibrary(id) {
      let data = {
        id: this.resources[id].id,
        subject: this.resources[id].subject,
        title: this.resources[id].module,
        content: this.resources[id].content,
        worksheet_id: this.resources[id].worksheet_id,
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
    getResources() {
      axios
        .get("/api/student-resources", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if ((res.status = 200)) {
            this.resources = res.data;
          }
        });
    },
    view(id) {
      this.current = id;
      if (this.opened.includes(id)) {
        let ele = this.opened.indexOf(id);

        this.opened.splice(ele);
      } else {
        this.opened.push(id);
      }
    },
  },
};
</script>

<style scoped>
.body {
  padding: 40px 20px 60px;
}
.main-content {
  width: 80%;
  margin: 0 auto;
}
.top_box {
  background: #f7f8fa;
}
ul,
ol {
  list-style: none;
}
ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
</style>