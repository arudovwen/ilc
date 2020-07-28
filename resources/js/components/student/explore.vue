<template>
  <b-container>
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
  </b-container>
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

ul.breadcrumb li + li:before:last-child{
  content: "";
}
img {
  margin: auto;
  display: flex;
}
.what-you-will-learn ul {
  list-style: circle;
}
div {
  font-family: "Montserrat";
}
</style>