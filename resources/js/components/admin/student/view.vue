<template>
  <div class="body">
    <div class="text-right">
      <b-button type="button" @click="update">Update</b-button>
    </div>

    <div class="info">
      <h4>Student Information</h4>

      <div class="image my-5">
        <img :src="student.profile" alt />
      </div>
      <div class="d-flex">
        <div class="personal w-50">
          <h5>Personal Information</h5>
          <ul>
            <li>Name : {{student.name}}</li>
            <li>Email : {{student.email}}</li>
            <li>DOB : {{student.dob}}</li>
            <li>Address : {{student.address}}</li>
            <li>Gender : {{student.gender}}</li>
            <li>State : {{student.state}}</li>
            <li>LGA : {{student.lga}}</li>
            <li>Guardian : {{student.guardian}}</li>
            <li>Guardian Phone{{student.guardian_phone}} </li>
            <li>Next of Kin : {{student.next_of_kin}}</li>
            <li>Next of Kin Phone : {{student.next_of_kin_phone}}</li>
          </ul>
        </div>

        <div class="w-50">
          <div class="official">
            <h5>School Information</h5>
            <ul>
                <li>Mat No : {{student.mat_no}}</li>
              <li>Study Course : {{student.study_course}}</li>
              <li>Level : {{student.student_level}}</li>
              <li>Faculty : {{student.faculty}}</li>
              <li>Department : {{student.department}}</li>
           
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
     props:['admin','id'],
    data() {
        return {
            student:{}
        }
    },
    mounted() {
        this.getInfo()
    },
    methods: {
        getInfo(){
            axios.get(`/api/admin-get-user/${this.$props.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        }).then(res=>{
            if (res.status == 200) {
                this.student = res.data
            }
        })
        },
        update(){
            this.$router.push(`/admin/student/update/${this.student.id}`)
        }
    },
}
</script>
