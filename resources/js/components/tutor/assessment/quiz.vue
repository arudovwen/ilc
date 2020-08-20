<template>
  <div class="body">
    <b-row>
      <b-col>
        <h3>Quizzes</h3>
      </b-col>
    </b-row>
   <b-row class="justify-content-end">
      <b-col cols="4">
        <b-input-group>
          <b-form-input placeholder="Search quiz title"></b-form-input>
          <b-input-group-append>
            <router-link to="/tutor/assessment/create/exam">
              <div class="create-btn">
                <div class="btn btn-create">New Quiz</div>
              </div>
            </router-link>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-container>
      <div class="filter-table">
        <div class="filter-container">
          <div class="filter-btn btn" @click="toggleFilter">
            <span>Filter</span>
            <i class="icon-sort"></i>
          </div>
        </div>
        <b-navbar toggleable="lg" type="dark" variant="info" v-if="filterShow">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Sort By:</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="mx-auto">
              <b-form-select class="mr-3" v-model="myclass">
                <b-form-select-option value disabled>-- Class --</b-form-select-option>
                <b-form-select-option value="all">-- All --</b-form-select-option>
                <b-form-select-option
                  :value="item.class_name"
                  v-for="(item,idx) in classess"
                  :key="idx"
                >{{item.class_name}}</b-form-select-option>
              </b-form-select>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-form class="ml-auto">
                <b-form-input size="sm" class="mr-sm-2 search rounded-pill" placeholder="Search"></b-form-input>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <b-row>
        <b-col>
          <div class="bd-table">
            <b-table :fields="fields" :items="sorted">
              <template v-slot:cell(action)="data">
                <div class="options">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <div class="option shadow">
                    <ul>
                       <li>
                          <span @click="publish(true,data.item.id)" v-if="data.item.publish_status== false">Publish</span>
                     <span @click="publish(false,data.item.id)" v-else>Unpublish</span>
                      </li>
                      <li @click="drop(data.item.id)">Drop</li>
                    </ul>
                  </div>
                </div>
              </template>
                <template v-slot:cell(title)="data">
                <div class="main-title">
                  <div class="title">{{data.item.title}}</div>
                 <div class="text-muted">{{data.item.description}}</div>
                </div>
              </template>
               <template v-slot:cell(publish_status)="data">
                   <span  v-if="data.item.publish_status== true">Published</span>
                     <span v-else>Unpublished</span>
                 </template>
                 
              <template
                v-slot:cell(created_at)="data"
              >{{data.item.created_at | moment('MMM D YYYY')}}</template>
              <template v-slot:cell(Sn)="data">{{data.index+1}}</template>
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: "title", sortable: true },
        "session",
        { key: "subject", sortable: true },
    

        "level",
        "publish_status",
        "status",
        "action",
      ],
      items: [],
      filterShow: false,
    };
  },
  mounted() {
    this.getData();
  },
 
  computed: {
    sorted(){
      return this.items.filter(i=>{
        return i.title.toLowerCase().includes(this.search.toLowerCase())
      
      })
    }
  },
  methods: {
      publish(name,id){
       let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let data = {
        stat:name
      }
       axios
        .put(`/api/publish-assessment/${id}`, data, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        }).then(res=>{
          if (res.status == 200) {
            this.getData()
          }
        })
    },
    getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/assessment/quiz`, {
          headers: {
            Authorization: `Bearer ${tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data;
          }
        })
        .catch();
    },
    drop(id) {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/assessment/${id}`, {
            headers: {
              Authorization: `Bearer ${tutor.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getData();
            }
          });
      }
    },
    toggleFilter() {
      this.filterShow = !this.filterShow;
    },
  },
};
</script>

<style scoped>
.body {
  font-family: "Montserrat";
}
.options {
  position: relative;
}
.main-title{
  width: 350px;
}
.title{
  font-weight: bold;
  color:#56cee3;
}
ul{
  margin: 0;
}
.option {
  display: none;
  position: absolute;
  padding: 10px;
  bottom: 80%;
  right: 12px;
  background: white;
}
.options:hover .option {
  display: block;
}
.option li {
  padding: 4px 15px;
  cursor: pointer;
}
ul {
  list-style: none;
}
.create-btn {
  display: flex;
  justify-content: flex-end;
}
/* .btn {
  padding: 10px 20px;
  border-radius: 5px;
} */
.btn-create {
  background: #56cee3;
  color: #fff;
}
.search {
  width: 250px;
  border-color: #41cee2;
}

.rounded-pill {
  border-radius: 50rem !important;
}
.filter-container {
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
}
.filter-btn {
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
.filter-btn span {
  font-family: "Montserrat";
  font-weight: bold;
}
.filter-btn i {
  padding-left: 3px;
}
.sort-section {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
}
.bg-info {
  background: #fff !important;
  box-shadow: 5px 4px 13px rgba(249, 247, 240, 0.25);
  margin-top: 20px;
  border-radius: 10px;
}

.nav-link {
  color: #000 !important;
}
</style>