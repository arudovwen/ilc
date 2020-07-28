<template>
  <!-- <b-container>
    <div class="student-resource" v-for="(item,idx) in resources" :key="idx">
      <ul class="breadcrumb">
        <li>
          <a href="#" class="toCaps">{{item.subject}}</a>
        </li>
        <li>Module 1.1</li>

       <div class="ml-auto"><b-button @click="gotoHer(item.id)">View</b-button></div>
      </ul>
      <h4>
        1.1
        <span class="toCaps">{{item.module}}</span>
      </h4>

     
        <b-row class="align-items-center">
          <b-col cols="8">
            <div class="what-you-will-learn">
              <p>Within this lesson you will learn:</p>
              <strong>Content</strong>
              <ul class="px-3">
                <li v-for="(content,index) in JSON.parse(item.content)" :key="index">
                  <span>{{content.title}}</span>
                  <span class="ml-3">
                    <i class="fa fa-play-circle" v-if="content.type=='video'" aria-hidden="true"></i>
                    <i class="fa fa-file-pdf-o" v-if="content.type=='pdf'" aria-hidden="true"></i>
                    <i class="fa fa-volume-up" v-if="content.type=='audio'" aria-hidden="true"></i>
                    <i
                      class="fa fa-file-powerpoint-o"
                      v-if="content.type=='ppt'"
                      aria-hidden="true"
                    ></i>
                    <i class="fas fa-file-csv" v-if="item.content=='csv'"></i>
                  </span>
                </li>
              </ul>
            </div>
            <div class="module-overview">
              <h5>Overview</h5>
              <p>{{item.excerpt}}</p>
            </div>
          </b-col>
          <b-col cols="4">
            <img @click="gotoHer(item.id)" :src="item.cover_image" class="text-center img-fluid" alt="english" />
          </b-col>
        </b-row>
    
    </div>
  </b-container>-->

  <div>
    <h2 class="mb-3 px-3">Explore Resources</h2>

       <ul class="filter-list mb-5">
        <router-link to="">
          <li> All Subject</li>
        </router-link>
         <router-link to="">
          <li> Mathematics</li>
        </router-link>
         <router-link to="">
          <li> English Language</li>
        </router-link>
         <router-link to="">
          <li> Geography</li>
        </router-link>
       </ul>

   <div class="container explore-content">
     <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="single-content">
            <img src="/images/maths.jpg" alt />
            <div class="text-content">
              <h5>Differentiation</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              <div class="btn">Add to Library</div>
            </div>
          </div>
        </div>
         <div class="col-md-4 col-sm-6">
          <div class="single-content">
            <img src="/images/econs.jpg" alt />
            <div class="text-content">
              <h5>Market value</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              <div class="btn">Add to Library</div>
            </div>
          </div>
        </div>
         <div class="col-md-4 col-sm-6">
          <div class="single-content">
            <img src="/images/geography.jpeg" alt />
            <div class="text-content">
              <h5>How Round is the earth</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
              <div class="btn">Add to Library</div>
            </div>
          </div>
        </div>
     </div>
   </div>

   
  </div>
</template>

<script>
import Filterizr from "filterizr";

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
a{
  text-decoration: none;
  color: black;
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

ul.breadcrumb li + li:before:last-child {
  content: "";
}
.filter-list{
  display: flex;
  justify-content: space-around;
}
.single-content{
  position: relative;
  transition: .3s;
  box-shadow: 10px 20px 20px rgba(247, 248, 250, 0.8);
}
.single-content .text-content,
.single-content::after{
  position: absolute;
  left: 20px;
  right: 20px;
}

.single-content::after{
  content: "";
  display: block;
  background: #13a699;
  top: 20px;
  bottom: 20px;
  opacity: 0;
  transform: rotate3d(-1,1,0,100deg);
  transition: .4s;
}

.single-content:hover::after{
  opacity: .9;
  transform: rotate3d(0,0,0,0deg);
}
.single-content img{
  width: 350px;
  height: 250px;
}

.text-content{
  top: 45%;
  opacity: 0;
  z-index: 1;
  transform: translate(10%, -30%);
  transition: .3s;
  text-align: center;
  color: #fff;
  margin-top: 5px;
}
.text-content .btn{
  color: #fff !important;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 10px 20px;
}
.single-content:hover .text-content{
  opacity: 1;
  transform: translate(0, -50%);
  transition-delay: .3s;
}
.explore-content{
  margin-top: 15px;
}
/* .router-link-active{
  border-bottom: 2px solid #ffd708;
} */
div {
  font-family: "Montserrat";
}
</style>