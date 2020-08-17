<template>
  <!-- <div class="body">
   <div class="bd-table mb-3"> 
   <nav class="form-control d-flex justify-content-between align-items-center ">
      <div class="bar border-right">
        <i
          class="fa fa-angle-double-left pr-2"
          @click="firstPage"
          aria-hidden="true"
          v-if="first_page"
        ></i>
        <i class="fas fa-angle-left pr-2" @click="prev" v-if="prev_page"></i>
        <input type="number" class="row_numb pl-2" readonly v-model="current_page" />
        <i class="fas fa-angle-right pl-2" @click="next" aria-hidden="true" v-if="next_page"></i>
        <i
          class="fa fa-angle-double-right pl-2"
          @click="lastPage"
          aria-hidden="true"
          v-if="last_page"
        ></i>
      </div>
      <div class="bar border-right" @click="getAll">
        <span class="mr-3">
          <input type="checkbox" v-model="all" /> Show all
        </span>
        <button v-if="item" class="button-red" @click="multiDrop">Multi drop</button>
      </div>
      <div class="bar border-right">Number of rows {{row_number}}</div>
      <div class="bar border-right">Total library {{total_library}}</div>

      <div class="bar">
        <div class="form-group search_bar">
          <input
            type="text"
            class="form-control search_input rounded-pill"
            v-model="search"
            aria-describedby="helpId"
            placeholder="Search row"
          />
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
   </div>

    <div class="bd-table">
   <table class="table table-bordered table">
        <thead class="thead-light">
            <tr>
                <th>S/n</th>
                <th>Subject</th>
                <th>Title</th>
                <th>Excerpts</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          
            <tr v-for="(item,idx) in library" :key="idx">
                <td scope="row">{{idx+1}}</td>
                <td>{{item.subject}}</td>
                <td>{{item.title}}</td>
                <td>{{item.excerpt ? item.excerpt:'-'}}</td>
                <td class="options"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
                  <div class="option shadow">
                      <ul>
                          <li @click="view(item.id)">View</li>
                          <li>Drop</li>
                      </ul>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
  </div> -->
 
  <div class="library">
    <div class="continue-reading">
      <div class="continue-word">
        <p>You were Reading</p>
        <h6>Basic Science</h6>
        <div class="continue-reading-icon">
          <div class="continue-btn">
            <div class="btn-continue">
              <i class="icon-visibility-open"></i>
            </div>
          </div>
          <p>continue reading</p>
        </div>
      </div>
      <div class="continue-img">
        <img src="/images/text-book.png" alt />
      </div>
    </div>
    <div class="library-content container">
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
        <router-link to>View all</router-link>
      </div>
    <b-container class="books">
        <b-row>
        <b-col md="3">
          <router-link to>
            <div class="resource-img">
              <img src="/images/text-book.png" alt class="img-fluid"/>
               <h6>English Language</h6>
              <p>by: Tutor's Name</p>
            </div>
          </router-link>
        </b-col>
        <b-col md="3">
          <router-link to>
            <div class="resource-img">
              <img src="/images/text-book.png" alt class="img-fluid"/>
               <h6>English Language</h6>
              <p>by: Tutor's Name</p>
            </div>
          </router-link>
        </b-col>
        <b-col md="3">
          <router-link to>
            <div class="resource-img">
              <img src="/images/text-book.png" alt class="img-fluid"/>
               <h6>English Language</h6>
              <p>by: Tutor's Name</p>
            </div>
          </router-link>
        </b-col>
        <b-col md="3">
          <router-link to>
            <div class="resource-img">
              <img src="/images/text-book.png" alt class="img-fluid" />
              <h6>English Language</h6>
              <p>by: Tutor's Name</p>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
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
    };
  },
  mounted() {
    this.getLibrary();
  },
  watch: {
    all: "getAll",
  },
  methods: {
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
    view(id) {
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
  align-items: center;
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
  margin: 10px 40px;
}
.filter-view a{
  color: #000 !important;
  padding-top: 10px;
  font-family: "Montserrat";
}
.filter-view a:hover{
  color: #13a699 !important;
  text-decoration: underline !important;
}
.resource-img img {
  width: 200px;
  height: 150px;
}
.col-md-3 a{
  color: #000 !important;
}
.books{
  padding-top: 10px;
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
</style>