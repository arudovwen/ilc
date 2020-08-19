<template>
  <!-- <div class="body">
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
  </div>-->
  <div class="profile-page">
    <div class="profile container">
      <div class="tutor-profile">
        <div class="avatar-profile">
          <b-avatar variant="secondary" size="6rem"></b-avatar>
        </div>
        <div class="profile-inner">
          <h6>Personal Information</h6>
          <div class="personal-form">
            <b-form>
              <b-form-row>
                <b-col>
                  <b-form-group label="Name">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Email">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group label="Date of Birth">
                    <b-form-datepicker id="example-datepicker"></b-form-datepicker>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Address">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-group label="Gender">
                <b-form-select v-model="selected" :options="gender"></b-form-select>
              </b-form-group>
              <b-form-row>
                <b-col>
                  <b-form-group label="State">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Local Goverment Area">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group label="Guardian">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Guardian Phone">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group label="Next of Kin">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Next of Kin Phone">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </b-form>
          </div>
        </div>
        <div class="profile-inner">
          <h6>School Information</h6>
          <div class="personal-form">
            <b-form>
              <b-form-row>
                <b-col>
                  <b-form-group label="Class">
                    <b-form-select v-model="selected" :options="gradelevel"></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="File No">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-group label="Date of Entry">
                <b-form-datepicker id="example-datepicker"></b-form-datepicker>
              </b-form-group>
            </b-form>
          </div>
        </div>

        <div class="save-btn">
          <div class="btn btn-save">Save</div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  props: ["student"],
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      axios
        .get(`/api/user`, {
          headers: {
            Authorization: `Bearer ${this.$props.student.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.detail = res.data;
          }
        });
    },
    update() {
      this.$router.push(`/detail/update`);
    },
  },
};
</script>
<style scoped>
.profile {
  /* display: flex;
  justify-content: center; */
  padding-top: 50px;
}
.avatar-profile {
  position: absolute;
  left: calc(50% - 35px);
  transform: translateY(-65%);
}
.tutor-profile {
  background: #fff;
  position: relative;
  padding: 30px;
}
.personal-form {
  border: 1px solid #c4c4c4;
  margin-bottom: 30px;
  margin-top: 20px;
}
.form-group{
  position: relative;
}
.form-group:hover::before{
  content: "\f040";
  font-family: "FontAwesome";
  font-weight: 500;
  position: absolute;
  right: 0;
  top: 0;
}
.save-btn {
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
}
.btn-save {
  background: #13a699;
  color: #fff;
  padding: 9px 16px;
  font-size: 16px;
  font-weight: 500;
}
</style>