<template>
  <!-- <div class="body">
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
            </b-form>
          </div>
        </div>
        <div class="profile-inner">
          <h6>School Information</h6>
          <div class="personal-form">
            <b-form>
              <b-form-row>
                <b-col>
                  <b-form-group label="Qualification">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Area of Specialization">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group label="Date of Entry">
                    <b-form-datepicker id="example-datepicker"></b-form-datepicker>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Faculty">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-group label="Department">
                <b-form-input placeholder></b-form-input>
              </b-form-group>
              <b-form-row>
                <b-col>
                  <b-form-group label="Current Grade Level">
                    <b-form-select v-model="selected" :options="gradelevel"></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="File No">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </b-form>
          </div>
        </div>
        <div class="profile-inner">
          <h6>Bank Information</h6>
          <div class="personal-form">
            <b-form>
              <b-form-row>
                <b-col>
                  <b-form-group label="Bank Name">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Account Number">
                    <b-form-input placeholder></b-form-input>
                  </b-form-group>
                </b-col>
              </b-form-row>
            
              <b-form-group label="BVN">
                <b-form-input placeholder></b-form-input>
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
  props: ["tutor"],
  data() {
    return {
      details: {},
      selected: null,
      gender: [
        { value: null, text: "Please select gender" },
        { value: "a", text: "Female" },
        { value: "b", text: "Male" },
      ],
      gradelevel: [
        { value: null, text: "Please select grade level" },
        { value: "a", text: "Level 1" },
        { value: "b", text: "Level 2" },
        { value: "c", text: "Level 3" },
      ],
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
            Authorization: `Bearer ${this.$props.tutor.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.details = res.data;
          }
        });
    },
    update() {
      this.$router.push(`/tutor/update/${this.details.id}`);
    },
  },
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
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
ul {
  list-style: none;
}
li {
  text-transform: capitalize;
  padding: 10px 0;
}
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
.save-btn{
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
}
.btn-save{
  background: #0A4065;
  color: #fff;
  padding: 9px 16px;
  font-size: 16px;
  font-weight: 500;
}
</style>