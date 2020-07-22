<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="admin-dashboard-top-cards">
            <b-card>
              <div class="inner-top-cards">
                <img src="/images/teacher-green.png" class="img-fluid" alt />
                <div class="inner-top-cards-text pl-2">
                  <p>
                    <strong>200+</strong>
                  </p>
                  <p>Teachers</p>
                </div>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="admin-dashboard-top-cards">
            <b-card>
              <div class="inner-top-cards">
                <img src="/images/teacher-green.png" class="img-fluid" alt />
                <div class="inner-top-cards-text pl-2">
                  <p>
                    <strong>200+</strong>
                  </p>
                  <p>Teachers</p>
                </div>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="admin-dashboard-top-cards">
            <b-card>
              <div class="inner-top-cards">
                <img src="/images/teacher-green.png" class="img-fluid" alt />
                <div class="inner-top-cards-text pl-2">
                  <p>
                    <strong>200+</strong>
                  </p>
                  <p>Teachers</p>
                </div>
              </div>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div class="chart">
      <column-chart
        :data="[['Basic 1', 32], ['Basic 2', 46], ['Basic 3', 28], ['Basic 4', 10], ['Basic 5', 18], ['Basic 6', 20], ['Basic 7', 28], ['Basic 8', 38]]"
      ></column-chart>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <div class="dashboard-bottom-cards">
            <b-card>
              <h6 class>Up Coming Lessons</h6>
              <div class="bottom-card-details">
                <b-avatar text="e"></b-avatar>
                <div class="bottom-cards-text">
                  <p>English Language</p>
                  <p>
                    <span>10AM Bascic 2</span>
                  </p>
                </div>
              </div>
              <div class="bottom-card-details">
                <b-avatar text="e"></b-avatar>
                <div class="bottom-cards-text">
                  <p>Economics</p>
                  <p>
                    <span>1PM Bascic 8</span>
                  </p>
                </div>
              </div>
              <div class="bottom-card-details">
                <b-avatar text="m"></b-avatar>
                <div class="bottom-cards-text">
                  <p>Music</p>
                  <p>
                    <span>10AM Bascic 5</span>
                  </p>
                </div>
              </div>
              <p class="bottom-card-link pull-right">View all Lessons</p>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div class="dashboard-bottom-cards">
            <b-card>
            <div class="note-card-top">
              <h6>Notes</h6>
              <b-button variant="outline-primary">Add Note</b-button>
            </div>
            <div class="note-card-details">
              <p>You currently have no note create notes to add</p>
            </div>
          </b-card>
          </div>
        </b-col>
        <b-col>
                    <div class="dashboard-bottom-cards">
            <b-card>
            <div class="note-card-top">
              <h6>Notes</h6>
              <b-button variant="outline-primary">Add Task</b-button>
            </div>
            <div class="note-card-details">
              <p>You currently have no Task create notes to add</p>
            </div>
          </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
</style>