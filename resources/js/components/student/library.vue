<template>
  <div class="body">
    <nav class="form-control d-flex justify-content-between align-items-center mb-5">
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

    <table class="table table-bordered">
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
    };
  },
  mounted() {
    this.getLibrary();
  },
  watch: {
    all: "getAll",
  },
  methods: {
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
nav {
  background: #f7f8fa;
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
  margin-bottom: 0;
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
</style>