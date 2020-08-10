<template>


  <div class="view">
    <!-- <h2 class="mb-3 ">Explore Resources</h2> -->

       <ul class="filter-list mb-5">
       
          <li @click="selectFilter('all')" class="cpointer mr-4"> All Subject</li>
       
          <li v-for="(item,idx) in subjects" :key="idx" @click="selectFilter(item.name)" class="toCaps cpointer mr-4"> {{item.name.toLowerCase()}}</li>

      
       </ul>

   <div class="container-fluid explore-content">
     <div class="row" v-if="filteredSubjects.length">
        <div class="col-md-3 col-sm-6 "  v-for="(item,idx) in filteredSubjects" :key="idx">
          <div class="shadow">
            <div class="single-content ">
            <img :src="item.cover_image" alt />
            <div class="text-content">
             
              <p class="excerpt">{{item.excerpt}}</p>
              <b-button variant="outline-success" @click="gotoHer(item.id)">Visit resource</b-button>
            </div>
          </div>
         <div class="bg-white p-2">
            <p class="  toCaps cpointer "><strong  @click="gotoHer(item.id)">{{item.module.toLowerCase()}}</strong></p>
           <span class=" toCaps cpointer ">{{item.subject.toLowerCase()}}</span> <br>
            <span class="toCaps cpointer ">{{item.level.toLowerCase()}}</span> <br>
             <small class="update">Last update {{item.created_at | moment('MMMM D')}}</small>

         </div>
          </div>
        </div>
       
     </div>
     <p v-else class="mx-auto text-center">No available resource yet !</p>
   </div>

   
  </div>
</template>

<script>
// import Filterizr from "filterizr";

export default {
  props: ["student"],
  data() {
    return {
      resources: [],
      opened: [],
      current: "",
      subjects:[],
      filter:'all'
    };
  },
  mounted() {
    this.getResources();
    this.getSubjects()
  },
  computed:{
  filteredSubjects(){
    return this.resources.filter(item=>{
       if (item.subject.toLowerCase() == this.filter.toLowerCase()) {
         return item;
       }
       if (this.filter.toLowerCase() == 'all') {
         return item;
       }
    })
  }
  },
  methods: {
    selectFilter(name){
        this.filter = name
        console.log("selectFilter -> name", name)
    },
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
    getSubjects() {
      axios
        .get("/api/student-all-subjects", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if ((res.status = 200)) {
            this.subjects = res.data;
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
.view {
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
  justify-content: flex-start;
font-size: 14px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
 
}
.filter-list li{
 color: rgba(0, 0, 0, .54);
   border-bottom: 2px solid transparent;
    padding: 8px 0;
}
.filter-list li:hover{
   color: rgba(0, 0, 0, .84);
   border-color: rgba(0, 0, 0, .84);
}
.single-content{
  position: relative;
  transition: .3s;
  box-shadow: 10px 20px 20px rgba(247, 248, 250, 0.8);
}
.single-content .text-content,
.single-content::after{
  position: absolute;
  left: 10px;
  right: 10px;
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
  width: 100%;
  height: 100%;
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
.excerpt{
  height: 75px;
  font-size:15px;
  overflow:hidden;
   display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -moz-line-clamp: 4;
  -ms-line-clamp: 4;
  -o-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  -o-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.update{
  background: #ffd708;
  padding: 2px;
  border-radius: 4px;
}
</style>