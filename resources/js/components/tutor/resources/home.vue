<template>
  <!-- <div class="body">
    <nav class="mb-5">
      <b-button block class=" shadow-sm">
        Multi-Drop
      
      </b-button>
      <router-link to="/tutor/resource/create">
        <b-button block class=" shadow-sm">
         Create Resource
        
        </b-button>
      </router-link>

      <b-button block class=" shadow-sm hiden">
       Assign Course
      
      </b-button>

      <b-button block class=" shadow-sm hiden">
       Assign Level
      
      </b-button>
    </nav>

    <table class="table table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
          <th>s/n</th>
          <th>Level</th>
          <th>Subject</th>
          <th>Module Title</th>
          
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in resources" :key="idx">
          <td scope="row">{{idx+1}}</td>
          <td class="toCaps">{{item.level}}</td>
          <td class="toCaps">{{item.subject}}</td>
          <td class="toCaps">{{item.module}}</td>
      
          <td class="options">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          <div class="option-box">
            <ul>
              <li @click="edit(item.id)"><i class="fas fa-edit"></i> Edit</li>
              <li @click="view(item.id)"><i class="fa fa-eye" aria-hidden="true"></i> View</li>
              <li @click="drop(item.id)"><i class="fas fa-minus-circle" aria-hidden="true"></i> Drop</li>
            </ul>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>-->
  <div class="resource-main">
    <div class="resource-btn">
      <router-link to="/tutor/resource/create">
        <div class="btn btn-resource">
          <i class="fa fa-plus"></i>
          <span>ADD RESOURCE</span>
        </div>
      </router-link>
    </div>

    <div class="container">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Sort By:</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="mx-auto">
            <b-form-select class="mr-5" :options="subjects" v-model="subject">
              <template v-slot:first>
                <b-form-select-option :value="null" disabled>-- Subject --</b-form-select-option>
              </template>
            </b-form-select>
            <b-form-select :options="classess" v-model="myclass">
              <template v-slot:first>
                <b-form-select-option :value="null" disabled>-- Class --</b-form-select-option>
              </template>
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
    <div class="resource-table container">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th>S/N</th>
            <th>CLASS</th>
            <th>SUBJECT</th>
            <th>TITLE</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in sorted" :key="idx">
            <td scope="row">{{idx+1}}</td>
            <td class="toCaps">{{item.level}}</td>
            <td class="toCaps">{{item.subject}}</td>
            <td class="toCaps">{{item.module}}</td>

            <td class="options">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <div class="option-box">
                <ul>
                  <li @click="edit(item.id)">
                    <i class="fas fa-edit"></i> Edit
                  </li>
                  <li @click="view(item.id)">
                    <i class="fa fa-eye" aria-hidden="true"></i> View
                  </li>
                  <li @click="drop(item.id)">
                    <i class="fas fa-minus-circle" aria-hidden="true"></i> Drop
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      resources: [],
      subjects: [],
      classess: [],
      subject: null,
      myclass: null,
    };
  },
  mounted() {
    this.getResources();
  },
  computed: {
    sorted() {
      return this.resources.filter((item) => {
        if (this.subject == item.subject || this.level == item.myclass ) {
          return item;
        } 
      });
    },
  },
  methods: {
    sortContent(arr) {
      let ans = [];

      arr.forEach((item) => {
        ans.push(item.name);
      });

      return arr;
    },
    getResources() {
      axios
        .get(`/api/resource`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.resources = res.data;
            res.data.forEach((item) => {
              if (!this.subjects.includes(item.subject)) {
                this.subjects.push(item.subject);
              }

              if (!this.classess.includes(item.level)) {
                this.classess.push(item.level);
              }
            });
          }
        });
    },
    edit(id) {
      this.$router.push(`/tutor/resource/edit/${id}`);
    },
    view(id) {
      this.$router.push(`/tutor/resource/view/${id}`);
    },
    drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/resource/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.tutor.access_token}`,
            },
          })
          .then((res) => {
            if (res.status == 200) {
              this.getResources();
            }
          });
      }
    },
    // multiDrop() {
    //   let del = confirm("Are you sure about this?");
    //   let data = {
    //     data: this.items
    //   };
    //   if (del) {
    //     axios
    //       .post("/api/multi-resource-drop", data, {
    //         headers: {
    //           Authorization: `Bearer ${this.$props.tutor.access_token}`
    //         }
    //       })
    //       .then(res => {
    //         if (res.status == 200) {
    //           this.getgroups();
    //           this.item = false
    //         }
    //       })
    //       .catch(err => {
    //         console.log("del -> err", err);
    //       });
    //   }
    // }
  },
};
</script>

<style scoped>
.resource-main {
  padding: 20px 40px;
}
.resource-btn {
  display: flex;
  justify-content: flex-end;
}
.btn-resource {
  background: #0a4065;
  box-shadow: 5px 4px 13px rgba(249, 247, 240, 0.25);
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
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

.resource-table {
  padding-top: 20px;
}
.table {
  border-radius: 10px;
}
.table .thead-dark th {
  color: #000;
  background-color: #c0bdbd;
  border-color: #c0bdbd;
}
.search {
  width: 250px;
  border-color: #41cee2;
}

.rounded-pill {
  border-radius: 50rem !important;
}
.hiden {
  opacity: 0;
}

.options {
  position: relative;
  width: 10px;
}
.option-box {
  position: absolute;
  bottom: 100%;
  background: white;
  padding: 15px;
  font-size: 14px;
  width: 100px;
  display: none;
  right: 10px;
}
.options:hover .option-box {
  display: block;
}
.option-box ul {
  text-decoration: none;
  list-style: none;
}
.option-box ul li {
  padding: 5px 0;
  cursor: pointer;
}
.fa-ellipsis-v {
  cursor: pointer;
}
</style>