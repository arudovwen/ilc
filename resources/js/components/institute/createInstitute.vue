<template>
  <div class="container">
    <form @submit.prevent>
      <div class="form-group">
        <label for>Education Level</label>
        <select class="custom-select" v-model="user.education_level">
          <option selected>Select one</option>
          <option>Professional</option>
          <option>Tertiary</option>
          <option>Secondary</option>
          <option>Primary</option>
          <option>Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for>Tertiary Institutions</label>
        <select class="custom-select" v-model="user.tertiary">
          <option selected>Select one</option>
          <option>Alvan Ikoku College of Education</option>
          <option>Eastern Palm University, Ogboko, Ideato</option>
          <option>Imo State Polytechnic, Umuagwo</option>
          <option>Imo State University, Owerri (IMSU)</option>
          <option>Technological Skills Acquisition Institute, Orlu</option>
        </select>
      </div>

      <div class="form-group">
        <label for>Faculty</label>
        <select class="custom-select" v-model="faculty">
          <option selected>Select one</option>
          <option>Faculty Of Agriculture & Veterinary Medicine</option>
          <option>Faculty Of Business Administration</option>
          <option>Faculty Of Education</option>
          <option>Faculty Of Engineering</option>
          <option>Faculty Of Environmental Science</option>
          <option>Faculty Of Health Science</option>
          <option>Faculty Of Humanitieso</option>
          <option>Faculty Of Law</option>
          <option>Faculty Of Medicine</option>
          <option>Faculty Of Sciencesu</option>
          <option>Faculty Of Social Science</option>
        </select>
      </div>

      <div class="form-group">
        <label for>Departments</label>
        <select class="custom-select" v-model="user.department">
          <option selected>Select one</option>
          <!-- Agriculture  -->
          <option>Department of Agriculture Economics</option>
          <option>Department of Extension & Rural Development</option>
          <option>Department of Animal science and Fisheries</option>
          <option>Department of Crop Science And Biotechnology</option>
          <option>Department of Soil Science and Environment</option>

          <!-- Business admin   -->
          <option>Department of Management</option>
          <option>Department of Hospitality and Tourism Management</option>
          <option>Department of Marketing</option>
          <option>Department of Accountancy</option>
          <option>Department of Banking and Finance</option>
          <option>Department of Insurance and Actuarial Science</option>

          <!-- Education  -->

          <option>Department of Arts Education</option>
          <option>Department of Physical Science Education</option>
          <option>Department of Life Science Education</option>
          <option>Department of Language Education</option>
          <option>Department of Library and information Science</option>
          <option>Department of Foundation and Counseling</option>

          <!-- Ø Faculty Of Engineering -->

          <option>Department of Agricultural Engineering</option>
          <option>Department of Electrical Engineering</option>
          <option>Department of Civil Engineering</option>
          <option>Department of Food Science & Technology</option>
          <option>Department of Mechanical Engineering</option>

          <!-- Faculty Of Environmental Science  -->

          <option>Department of Surveying & GeoInformatics</option>
          <option>Department of Architecture</option>
          <option>Department of Building</option>
          <option>Department of Urban and Regional Planning</option>
          <option>Department of Quantity Surveying</option>
          <option>Department of Fine & Applied Arts</option>
          <option>Department of Estate Management</option>

          <!-- Faculty Of Health Science -->
          <option>Department of Optometry</option>
          <option>Department of Medical Laboratory Science</option>
          <option>Department of Nursing Science</option>
          <option>Department of Nutrition and Dietetics</option>

          <!-- Faculty Of Humanities -->
          <option>Department of Religious Studies</option>
          <option>Department of French</option>
          <option>Department of History and International Studies</option>
          <option>Department of Philosophy</option>
          <option>Department of Theatre arts</option>
          <option>Department of Linguistics and Igbo</option>
          <option>Department of English language and Literary Studies</option>

          <!-- Ø Faculty Of Medicine -->
          <option>Department of Anatomy</option>
          <option>Department of Physiology</option>
          <option>Department of Medical Biochemistry</option>
          <option>Department of Community Medicine</option>
          <option>Department of Medical Microbiology/ Parasitology</option>
          <option>Department of Chemical Pathology</option>
          <option>Department of Morbid Anatomy/ Histopathology</option>
          <option>Department of Haematology and Blood Transfusion Medicine</option>
          <option>Department of Medicine</option>
          <option>Department of Surgery</option>
          <option>Department of Obstetrics & Gynecology</option>
          <option>Department of Pediatrics</option>
          <option>Department of Pharmacology</option>

          <!-- Ø Faculty Of Sciences -->
          <option>Department of Animal Science and Environmental Biology</option>
          <option>Department of Plant Science and Biotechnology</option>
          <option>Department of Physics/ Industrial Physics</option>
          <option>Department of Chemistry/Industrial Chemistry</option>
          <option>Department of Microbiology/Industrial Microbiology</option>
          <option>Department of Biochemistry</option>
          <option>Department of Mathematics</option>
          <option>Department of Statistics</option>
          <option>Department of Computer Science</option>

          <!-- Ø Faculty Of Social Science -->
          <option>Department of Economics</option>
          <option>Department of Psychology</option>
          <option>Department of Geography & Environmental Management</option>
          <option>Department of Political Science</option>
          <option>Department of Sociology</option>
          <option>Department of Mass Communication</option>
        </select>
      </div>

      <button type="button" class="btn btn-primary">Create</button>
    </form>

    <form @submit.prevent>
      <legend>Add School</legend>
      <div class="form-group">
        <label for>School name</label>
        <input type="text" class="form-control" aria-describedby="helpId" placeholder  v-model="school_name"/>
      </div>
      <button type="button" class="btn btn-primary">Create</button>
    </form>
    <form @submit.prevent>
      <legend>Add Faculty</legend>

      <div class="form-group">
        <label for>School name</label>
        <select class="custom-select" v-model="school_name">
          <option selected>Select one</option>
          <option value></option>
        </select>
      </div>
      <div class="form-group">
        <label for>Faculty name</label>
        <input type="text" class="form-control" name id aria-describedby="helpId" placeholder  v-model="faculy_name"/>
      </div>
      <button type="button" class="btn btn-primary">Create</button>
    </form>
    <form @submit.prevent>
      <legend>Add Department</legend>
      <div class="form-group">
        <label for>School name</label>
        <select class="custom-select"  v-model="school_name">
          <option selected>Select one</option>
          <option value></option>
        </select>
      </div>
      <div class="form-group">
        <label for>Faculty name</label>
        <select class="custom-select"  v-model="faculy_name">
          <option selected>Select one</option>
          <option value></option>
        </select>
      </div>
      <div class="form-group">
        <label for>Department name</label>
        <input type="text" class="form-control" name id aria-describedby="helpId" placeholder v-model="department_name"/>
      </div>
      <button type="button" class="btn btn-primary">Create</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user:{
                education_level:'',
                tertiary:'',
                faculty:'',
                department:''
            },
            school_name:'',
            faculty_name:'',
            department_name:''
        }
    },
};
</script>

<style scoped>
.container{
    padding-top: 60px;
    padding-bottom: 45px;
}
form{
    margin-bottom: 34px;
}
</style>