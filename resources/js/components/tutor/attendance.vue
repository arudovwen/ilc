<template>
  <div class="main-body">
    <div class="main-attendance container">
      <div class="attendance">
        <div class="sort-table">
          <b-container>
            <b-row>
              <b-col md="2">
                <p>
                  <strong>Attendance</strong>
                </p>
              </b-col>
              <b-col md="6">
                <b-container>
                  <b-row>
                    <b-col md="4">
                      <b-form-select v-model="selected" :options="Class"></b-form-select>
                    </b-col>
                    <b-col md="4">
                      <b-form-select v-model="selected" :options="subject"></b-form-select>
                    </b-col>
                    <b-col md="4">
                      <b-form-select v-model="selected" :options="term"></b-form-select>
                    </b-col>
                  </b-row>
                </b-container>
              </b-col>
              <b-col md="4">
                <b-container>
                  <b-row>
                    <b-col md="6">
                      <b-form-input placeholder="Search Student " class="search rounded-pill"></b-form-input>
                    </b-col>
                    <b-col md="6">
                      <div class="export">
                        <div class="btn btn-export">
                          Export
                          <i class="fa fa-external-link"></i>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <hr />

        <div class="attendance-table">
          <b-table :items="items" bordered>
            <template v-slot:cell(monday)="data" class="absent">
              <span v-html="data.value"></span>
            </template>
            <template v-slot:cell(tuesday)="data" class="absent">
              <span v-html="data.value"></span>
            </template>
            <template v-slot:cell(wednesday)="data" class="absent">
              <span v-html="data.value"></span>
            </template>
            <template v-slot:cell(thursday)="data" class="absent">
              <span v-html="data.value"></span>
            </template>
            <template v-slot:cell(friday)="data" class="absent">
              <span v-html="data.value"></span>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Success Ahon",
          monday: '<i class="fa fa-check" style="color: green" ></i>',
          tuesday: '<i class="fa fa-times" style="color: red"></i>',
          wednesday: '<i class="fa fa-check" style="color: green" ></i>',
          thursday: '<i class="fa fa-check" style="color: green" ></i>',
          friday: '<i class="fa fa-check" style="color: green" ></i>',
        },
        {
          name: "Success Ahon",
          monday: '<i class="fa fa-times" style=" color:red"></i>',
        },
      ],
    };
  },
};
</script>

<style scoped>
.sort-table p {
  font-size: 14px;
}
.main-attendance {
  padding-top: 20px;
  font-family: "Montserrat";
}
.attendance {
  background: #fff;
  padding: 20px;
}
.absent {
  color: #ff0000;
  background: rgba(255, 0, 0, 0.25);
}
</style>