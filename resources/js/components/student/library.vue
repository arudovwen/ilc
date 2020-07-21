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
      all: false
    };
  },
  mounted() {
    this.getLibrary();
  },
  watch: {
    all: "getAll"
  },
  methods: {
    getLibrary() {
      axios
        .get("/api/library", {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
               this.next_page = res.data.next_page_url;
          this.prev_page = res.data.prev_page_url;
          this.current_page = res.data.current_page;
          this.row_number = res.data.per_page
          this.total_library =res.data.total
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
              Authorization: `Bearer ${this.$props.student.access_token}`
            }
          })
          .then(res => {
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
            Authorization: `Bearer ${this.$props.student.access_token}`
          }
        })
        .then(res => {
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
            Authorization: `Bearer ${this.$props.student.access_token}`
          }
        })
        .then(res => {
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
              Authorization: `Bearer ${this.$props.student.access_token}`
            }
          })
          .then(res => {
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
              Authorization: `Bearer ${this.$props.student.access_token}`
            }
          })
          .then(res => {
            this.next_page = res.data.next_page_url;
            this.prev_page = res.data.prev_page_url;
            this.current_page = res.data.current_page;
            this.library = res.data.data;
          });
      }
    },
    view(id){
      this.$router.push(`/student/study/${id}`)
    }
  }
};
</script>

<style scoped>

nav{
    background:#f7f8fa;
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
.options{
    width: 15px;
}
td{
    text-transform:capitalize;
}
ul{
    list-style:none;
}
.options{
    position: relative;
}
.option{
    display: none;
    position:absolute;
    padding: 15px;
    bottom:80%;
    width:100px;
    right:12px;
    background:white;
}
.options:hover .option{
    display: block;
}
.option li{
    padding:4px 15px;
    cursor:pointer;
}
</style>