<template>
  <div class="body">
    <div class="text-right">
      <b-button type="button" @click="update">Update</b-button>
    </div>

    <div class="info">
      <h4>Tutor Information</h4>

        <div class=" my-5">
      
        <b-avatar :src="details.profile" size="8em"></b-avatar>
      </div>
      <div class="d-flex">
        <div class="personal w-50">
          <h5>Personal Information</h5>
          <ul>
            <li>Name : {{details.name}}</li>
            <li>Email : {{details.email}}</li>
            <li>DOB : {{details.dob}}</li>
            <li>Address : {{details.address}}</li>
            <li>Gender {{details.gender}}</li>
            <li>State : {{details.state}}</li>
            <li>LGA : {{details.lga}}</li>
          </ul>
        </div>

        <div class="w-50">
          <div class="official">
            <h5>School Information</h5>
            <ul>
              <li>Qualification : {{details.subjects}}</li>
              <li>Area of Specialization : {{details.area_of_specialization}}</li>
              <li>Faculty : {{details.faculty}}</li>
              <li>Department : {{details.department}}</li>
              <li>CGL : {{details.cgl}}</li>
              <li>DOE : {{details.doe}}</li>
              <li>File No {{details.file_no}}</li>
            </ul>
          </div>

          <div class="bank">
            <h5>Bank Information</h5>
            <ul>
              <li>Bank Name : {{details.bank_name}}</li>
              <li>Account No : {{details.bank_no}}</li>
              <li>BVN : {{details.bvn}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tutor"],
  data() {
    return {
      details: {}
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      axios
        .get("/api/tutorDetails", {
          headers: {
            Authorization: `Bearer ${this.$props.tutor.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.details = res.data;
          }
        });
    },
    update() {
      this.$router.push(`/tutor/update/${this.details.id}`);
    }
  }
};
</script>

<style scoped>

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
  padding: 10px 0;
}
</style>