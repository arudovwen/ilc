<template>
  <div class="body">
    <div class="text-right">
      <b-button type="button" @click="update">Update</b-button>
    </div>

    <div class="info">
      <h4>Student Information</h4>

      <div class=" my-5">
      
        <b-avatar :src="detail.profile" size="8em"></b-avatar>
      </div>
      <div class="d-flex">
        <div class="personal w-50">
          <h5>Personal Information</h5>
          <ul>
            <li>Name : {{detail.name}}</li>
            <li>Email : {{detail.email}}</li>
            <li>DOB : {{detail.dob}}</li>
            <li>Address : {{detail.address}}</li>
            <li>Gender : {{detail.gender}}</li>
            <li>State : {{detail.state}}</li>
            <li>LGA : {{detail.lga}}</li>
            <li>Guardian : {{detail.guardian}}</li>
            <li>Guardian Phone{{detail.guardian_phone}} </li>
            <li>Next of Kin : {{detail.next_of_kin}}</li>
            <li>Next of Kin Phone : {{detail.next_of_kin_phone}}</li>
          </ul>
        </div>

        <div class="w-50">
          <div class="official">
            <h5>School Information</h5>
            <ul>
                <li>Mat No : {{detail.mat_no}}</li>
              <li>Study Course : {{detail.study_course}}</li>
              <li>Level : {{detail.detail_level}}</li>
              <li>Faculty : {{detail.faculty}}</li>
              <li>Department : {{detail.department}}</li>
           
            </ul>
          </div>

    
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.body {
  padding: 50px 20px 70px;
  height: 100%;
}
.info {
  width: 80%;
  margin: 0 auto;
}
li{
  padding:8px 0
}
.image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
}
.image img{
    width:100%;
    height:100%;
    object-fit: cover;
}
ul {
  list-style: none;
}
li {
  text-transform: capitalize;
}
</style>


<script>
export default {
     props:['student'],
    data() {
        return {
            detail:{}
        }
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        getInfo(){
            axios.get(`/api/user`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`
          }
        }).then(res=>{
            if (res.status == 200) {
                this.detail = res.data
            }
        })
        },
        update(){
            this.$router.push(`/detail/update`)
        }
    },
}
</script>
