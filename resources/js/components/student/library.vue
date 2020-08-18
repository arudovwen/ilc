<template>
 
  <div class="library">
    <div class="continue-reading" v-if="lastRead">
      <div class="continue-word">
        <h5>You were {{lastRead.type == 'video'?'watching':'viewing'}} {{lastRead.title}}</h5>
        <h6 class="toCaps">{{lastRead.subject}}</h6>
      
        <div class="continue-reading-icon">
          <div class="continue-btn mr-1">
            <div class="">
             <b-avatar icon="eye" variant="success" size="1.2rem"></b-avatar>
            </div>
          </div>
          <p class="cpointer" @click="view(lastRead.id,lastRead.subject,lastRead.cover)">Continue {{lastRead.type == 'video'?'watching':'viewing'}}</p>
        </div>
      </div>
      <div class="continue-img">
        <img src="/images/text-book.png" alt />
      </div>
    </div>
     <div class="continue-reading" v-else>
      <div class="continue-word">
        <h5>You haven't started any subject yet, Start onre now !</h5>
       
      </div>
   
    </div>

    <div class="library-content container bg-white p-3 py-4">
      <h6>My Library</h6>
      <div class="filter-view">
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

           
              <b-navbar-nav class="mx-auto">
                <b-form-select class="mr-3" v-model="subject">
                  <b-form-select-option value disabled>-- Subjects --</b-form-select-option>
                  <!-- <b-form-select-option value="all">-- All --</b-form-select-option> -->
                  <b-form-select-option
                    :value="item.toLowerCase()"
                    v-for="(item,idx) in subjects"
                    :key="idx"
                  >{{item}}</b-form-select-option>
                </b-form-select>
              </b-navbar-nav>
              <b-navbar-nav>
                <b-nav-form class="ml-auto">
                  <b-form-input
                    size="sm"
                    v-model="search"
                    class="mr-sm-2 search rounded-pill"
                    placeholder="Search"
                  ></b-form-input>
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
        <router-link to>View all</router-link>
      </div>

    <div class="bd-table library">
        <b-tabs content-class="mt-3 ">
        <b-tab title="Home View" title-link-class="mylibrary"  active>
          <b-container class="books" title-link-class="mylibrary">
            <b-row>
              <b-col md="3" v-for="(item,idx) in sorted" :key="idx">
                <b-card
                  :title="item.subject"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2 toCaps"
                >
                  <b-card-text class="excerpt">{{item.excerpt}}</b-card-text>

                  <b-button href="#" variant="darkgreen" block @click="view(item.id,item.subject,item.cover)">View</b-button>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="Table View"  class="mylibrary">
         <table class="table table-bordered table">
        <thead class="thead-light">
            <tr>
                <th>S/n</th>
                <th>Subject</th>
                <!-- <th>Title</th> -->
                <th>Excerpts</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          
            <tr v-for="(item,idx) in library" :key="idx">
                <td scope="row">{{idx+1}}</td>
                <td>{{item.subject}}</td>
                <!-- <td>{{item.title}}</td> -->
                <td>{{item.excerpt ? item.excerpt:'-'}}</td>
                <td class="options"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
                  <div class="option shadow">
                      <ul>
                          <li @click="view(item.id,item.subject,item.cover)">View</li>
                          <li>Drop</li>
                      </ul>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
        </b-tab>
      </b-tabs>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["student"],
  data() {
    return {
      library: [],
      row_number: 0,
      total_library: 0,
      search: "",
      item: false,
      items: [],
      last_page: "",
      first_page: "",
      next_page: "",
      prev_page: "",
      current_page: 1,
      all: false,
      filterShow: false,
      subjects: [],
      subject: "",
      lastRead:{}
    };
  },
  mounted() {
    this.getLibrary();
    this.getLastRead()
  },
  watch: {
    all: "getAll",
  },
  computed: {
    sorted() {
      return this.library.filter((item) => {
        if (this.subject !== "") {
          return (item.subject = this.subject);
        } else {
          return item;
        }
      });
    },
  },
  methods: {
    getLastRead(){
      this.lastRead = JSON.parse(localStorage.getItem('lastRead'))
    },
    toggleFilter() {
      this.filterShow = !this.filterShow;
    },
    getLibrary() {
      axios
        .get("/api/library", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
            this.row_number = res.data.per_page;
            this.total_library = res.data.total;
            this.library = res.data.data;

            res.data.data.forEach((item) => {
              if (!this.subjects.includes(item.subject)) {
                this.subjects.push(item.subject);
              }
            });
          }
        });
    },
    getAll() {
      if (!this.all) {
        this.getLibrary();
      } else {
        this.library = [];
        axios
          .get(`/api/all-library`, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.library = res.data;
            }
          });
      }
    },
    firstPage() {
      axios
        .get(this.first_page, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.library = res.data.data;
        });
    },
    lastPage() {
      axios
        .get(this.last_page, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.library = res.data.data;
        });
    },
    next() {
      if (this.next_page) {
        axios
          .get(this.next_page, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
            this.library = res.data.data;
          });
      }
    },
    prev() {
      if (this.prev_page) {
        axios
          .get(this.prev_page, {
            headers: {
              Authorization: `Bearer ${this.$props.student.access_token}`,
            },
          })
          .then((res) => {
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
            this.library = res.data.data;
          });
      }
    },
    view(id,subject,cover) {
      let read = {
        id:id,
        cover:cover,
        subject:subject
      }
      localStorage.setItem('lastRead', JSON.stringify(read))
      this.$router.push(`/student/study/${id}`);
    },
  },
};
</script>

<style scoped>
.continue-reading {
  background-color: #fff;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  margin: 40px;
}
.continue-word {
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.continue-word p:first-child {
  font-weight: 500;
  font-size: 30px;
}
.continue-word h6 {
  font-weight: bold;
  font-size: 30px;
}
.continue-reading-icon {
  display: flex;
  align-items: center;
}
.btn-continue {
  background-color: #13a699;
  border-radius: 50%;
  color: #fff;
  padding: 0 6px;
}
.btn-continue i {
  font-size: 22px;
}

.continue-reading-icon p {
  padding-left: 5px;
  margin-bottom: 0;
}
.continue-img img {
  width: 150px;
  height: 150px;
}
.filter-view {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}
.filter-view a {
  color: #000 !important;
  padding-top: 10px;
  font-family: "Montserrat";
}
.filter-view a:hover {
  color: #13a699 !important;
  text-decoration: underline !important;
}
.resource-img img {
  width: 200px;
  height: 150px;
}
.col-md-3 a {
  color: #000;
}
.books {
  padding: 0;
  padding-top: 20px;
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
  background: #f7f8fa;
  padding: 5px 20px;
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
nav {
  background: rgba(19, 166, 153, 0.9);
  color: white;
}
.table .thead-light th {
  color: white;
  background-color: rgba(19, 166, 153, 0.9);
  border-color: rgba(19, 166, 153, 0.9);
}
.bar {
  position: relative;
  width: 20%;
  text-align: center;
  font-size: 14px;
}
.red {
  color: var(--red, red);
}
.search_bar {
  position: relative;
}
.search_input {
  border-color: #f7f8fa;
  height: 30px;
  font-size: 13px;
}
.btn-darkgreen {
  background: rgba(19, 166, 153, 0.9);
  color: #fff !important;
}
.btn-outline-darkgreen {
  color: rgba(19, 166, 153, 0.9) !important;
  border: 1px solid rgba(19, 166, 153, 0.9);
  background: transparent;
}
.form-control::placeholder {
  font-size: 13px;
}
.fa-search {
  position: absolute;
  font-size: 12px;
  right: 14px;
  top: 50%;
  margin-top: -6px;
  color: rgba(0, 0, 0, 0.44);
}
.options {
  width: 15px;
}
td {
  text-transform: capitalize;
}
ul {
  list-style: none;
}
.options {
  position: relative;
}
.option {
  display: none;
  position: absolute;
  padding: 15px;
  bottom: 80%;
  width: 100px;
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
.excerpt {
  height: 45px;
  font-size: 15px;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  -ms-line-clamp: 2;
  -o-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  -o-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>