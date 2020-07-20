<template>
  <div class="body">
    <nav class="mb-5">
      <div class="nav_box shadow-sm">
        <p class="mx-auto" >Multi-Drop</p>
        <hr />
      </div>
      <router-link to="/tutor/resource/create">
        <div class="nav_box shadow-sm">
          <p class="mx-auto">Create Resource</p>
          <hr />
        </div>
      </router-link>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Assign Course</p>
        <hr />
      </div>

      <div class="nav_box shadow-sm hiden">
        <p class="mx-auto">Assign Level</p>
        <hr />
      </div>
    </nav>

    <table class="table table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
          <th>s/n</th>
          <th>Level</th>
          <th>Subject</th>
          <th>Module Title</th>
          <th>Resource</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in resources" :key="idx">
          <td scope="row">{{idx+1}}</td>
          <td class="toCaps">{{item.level}}</td>
          <td class="toCaps">{{item.subject}}</td>
          <td class="toCaps">{{item.module}}</td>
          <td class="p-0">
            <table class="table table-borderless table-sm">
             
              <tr v-for="(ite,index) in JSON.parse(item.content)" :key="index">
                <td class="toCaps">{{ite.name}}</td>
                <td class="">{{ite.type}}</td>
              </tr>
            </table>
          </td>
          <td class="options">
          <i class="fa fa-ellipsis-v" @click="openOptions(id)" aria-hidden="true"></i>
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
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      resources: []
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    sortContent(arr) {
      let ans = [];

      arr.forEach(item => {
        ans.push(item.name);
      });
      console.log("sortContent -> ans", ans);
      return arr;
    },
    getResources() {
      axios
        .get(`/api/resource`, {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.resources = res.data;
          }
        });
    },
    edit(id){
    this.$router.push(`/tutor/resource/edit/${id}`)
    },
    view(){
   this.$router.push(`/tutor/resource/view/${id}`)
    },
     drop(id) {
      let del = confirm("Are you sure?");
      if (del) {
        axios
          .delete(`/api/resource/${id}`, {
            headers: {
              Authorization: `Bearer ${this.$props.tutor.access_token}`
            }
          })
          .then(res => {
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
  }
};
</script>

<style scoped>
.body {
  height: 100%;
  padding: 40px 30px 70px;
}
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
}
.hiden {
  opacity: 0;
}
.nav_box {
  background-color: #f7f8fa;
  display: flex;
  text-align: center;
  padding: 10px 15px;
}
.options{
  position: relative;
  width:10px
}
.option-box{
  position: absolute;
  bottom: 100%;
  background: white;
  padding:15px;
 font-size: 14px;
 width:100px;
 display: none;
 right: 10px;
}
.options:hover .option-box{
  display: block;
}
.option-box ul{
  text-decoration: none;
  list-style: none;
}
.option-box ul li{
  padding: 5px 0;
  cursor: pointer;
}
.fa-ellipsis-v{
   cursor: pointer;
}
</style>