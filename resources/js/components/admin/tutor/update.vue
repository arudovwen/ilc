<template>
  <div class="container">
    <b-form @submit.prevent="register">
    
      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              v-model="tutor.name"
              aria-describedby="helpId"
              placeholder="John Doe"
            />
          </div>
        </b-col>
        <b-col>
          <div class="form-group">
            <label for>Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              v-model="tutor.email"
              aria-describedby="helpId"
              placeholder="example@email.com"
            />
          </div>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Password</label>
            <input
              type="password"
              class="form-control"
              name="pasword"
              id="password"
              v-model="tutor.password"
              aria-describedby="helpId"
              placeholder="*******"
            />
          </div>
        </b-col>

        <b-col>
          <div class="form-group">
            <label for>Phone</label>
            <input
              type="phone"
              class="form-control"
              name="phone"
              id="phone"
              v-model="tutor.phone"
              aria-describedby="helpId"
              placeholder="0910*******"
            />
          </div>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Gender</label>
            <select class="form-control" v-model="tutor.gender">
              <option value disabled>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </b-col>
        <b-col>
          <div class="form-group">
            <label for>Address</label>
            <input
              type="text"
              class="form-control"
              name="address"
              id="address"
              v-model="tutor.address"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Faculty</label>
            <input
              type="text"
              class="form-control"
              name="faculty"
              id="faculty"
              v-model="tutor.faculty"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
        <b-col>
          <div class="form-group">
            <label for>Department</label>
            <input
              type="text"
              class="form-control"
              name="department"
              id="department"
              v-model="tutor.department"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Subjects</label>
            <textarea
              name="subjects"
              id="subjects"
              cols="30"
              rows="5"
              v-model="tutor.subjects"
              class="form-control"
              placeholder="Subject 1, Subject 2"
            ></textarea>
          </div>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>DOB</label>
            <input
              type="date"
              class="form-control"
              name="dob"
              id="dob"
              v-model="tutor.dob"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>

        <b-col>
          <div class="form-group">
            <label for>DOE</label>
            <input
              type="date"
              class="form-control"
              name="doe"
              id="doe"
              v-model="tutor.doe"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Lga</label>
            <input
              type="text"
              class="form-control"
              name="lga"
              id="lga"
              v-model="tutor.lga"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
        <b-col>
          <div class="form-group">
            <label for>State</label>
            <input
              type="text"
              class="form-control"
              name="state"
              id="state"
              v-model="tutor.state"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Bank Name</label>
            <input
              type="text"
              class="form-control"
              name="bank_name"
              id="bank_name"
              v-model="tutor.bank_name"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>

        <b-col>
          <div class="form-group">
            <label for>Bank No</label>
            <input
              type="text"
              class="form-control"
              name="bank_no"
              id="bank_no"
              v-model="tutor.bank_no"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
        <b-col>
          <div class="form-group">
            <label for>Bvn</label>
            <input
              type="text"
              class="form-control"
              name="bvn"
              id="bvn"
              v-model="tutor.bvn"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <div class="form-group">
            <label for>Cgl</label>
            <input
              type="text"
              class="form-control"
              name="cgl"
              id="cgl"
              v-model="tutor.cgl"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
        <b-col>
          <div class="form-group">
            <label for>Rank</label>
            <input
              type="text"
              class="form-control"
              name="rank"
              id="rank"
              v-model="tutor.rank"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
        <b-col>
          <div class="form-group">
            <label for>File No</label>
            <input
              type="text"
              class="form-control"
              name="file_no"
              id="file_no"
              v-model="tutor.file_no"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </b-col>
      </b-form-row>

      <div class="form-group">
        <label for>Area of Specialization</label>
        <input
          type="text"
          class="form-control"
          name="area_of_specialization"
          id="area_of_specialization"
          v-model="tutor.area_of_specialization"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <b-form-group class="mb-3">
        <b-row>
          <b-col>
            <b-button variant="outline-secondary" @click="toggleModal" block type="button">Cancel</b-button>
          </b-col>
          <b-col>
            <b-button variant="success" block type="submit">Update</b-button>
          </b-col>
        </b-row>
      </b-form-group>
    </b-form>
  </div>
</template>


<script>
export default {
  props: ["admin",'id'],
  data() {
    return {
      tutor: {
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        level_of_edu: "",
        subjects: "",
        faculty: "",
        department: "",
        course_level: "",
        address: "",
        dob: "",
        doe: "",
        lga: "",
        state: "",
        bank_name: "",
        bank_no: "",
        bvn: "",
        cgl: "",
        rank: "",
        file_no: "",
        area_of_specialization: "",
      },

      spin: false,
    };
  },
  mounted() {
    this.getTutor();
  },
  methods: {
     toggleModal(){
   this.$emit('toggleModal','tutor-edit')
    },
    register() {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      axios
        .put(`/api/tutor/${this.$props.id}`, this.tutor, {
          headers: {
            Authorization: `Bearer ${admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.$toasted.info("Successful");
             this.toggleModal()
          }
        });
    },
    getTutor() {
      axios
        .get(`/api/tutor/${this.$props.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.tutor = res.data;
          }
        });
    },
  },
};
</script>

<style scoped>
.container {

}
form {
  margin: 0 auto;
}
.form-group{
  margin-bottom:24px;
}
</style>