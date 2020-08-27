<template>
  <div>
    <b-container fluid>
      <b-row>
        
        <b-col>
          <div>
            <b-card no-body>
              <b-tabs card justified>
                <b-tab title="School Curriculum" active>
                  <b-card-text><Curriculum :tutor="tutor"/></b-card-text>
                </b-tab>
                <b-tab title="School Syllabus">
                  <b-card-text><Syllabus  :tutor="tutor"/></b-card-text>
                </b-tab>
             
               <b-tab title="School TimeTable">
                  <b-card-text><Times :tutor="tutor" /></b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Curriculum  from '../curriculum'
import Syllabus from "../syllabus";
import Times from '../times'
export default {
  props:['tutor'],
    components:{
        Curriculum,
        Syllabus,
        Times
    }
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 70px;
  overflow:auto;
}


</style>