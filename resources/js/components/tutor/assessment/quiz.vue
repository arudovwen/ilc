<template>
  <div class="body">
    <router-link to="/tutor/assessment/create/assignment">
      <div class="create-btn">
        <div class="btn btn-create">Create Assignment</div>
      </div>
    </router-link>
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
            <b-table :fields="fields" :items="items" head-variant="darkblue">
              <template v-slot:cell(action)="data">
                <div class="options">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <div class="option shadow">
                    <ul>
                      <li @click="drop(data.item.id)">Drop</li>
                    </ul>
                  </div>
                </div>
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
        "Sn",
        "session",
        { key: "subject", sortable: true },
        { key: "title", sortable: true },

        "level",
        "created_at",
        "action",
      ],
      items: [],
      filterShow: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
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
ul {
  list-style: none;
}
.create-btn {
  display: flex;
  justify-content: flex-end;
}
.btn {
  padding: 10px 20px;
  border-radius: 5px;
}
.btn-create {
  background: #0a4065;
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