<template>
  <div class="dashboard-form">
    <div class="dashboard-header">
      <DashboardHeader />
    </div>
    <div class="middle-view">
      <div class="middle-view-one">
        <p id="text-line1">Welcome back,</p>
        <p id="text-line2">Charith!</p>
        
        <p id="text-line3">
          <img src="../assets/calender_icon.png"/>
          January 12, 2023
    
        </p>
        
      </div>
      <div class="middle-view-two">
        <FormHelperTopDisplay />
      </div>
      <div class="middle-view=three">
        <FormHelperTopDisplay />
      </div>
    </div>
    <div class="date-picker-column">
      <DatePicker/>
    </div>
    <div class="bottom-view">
      <div class="bottom-view-box-one"><StaticDetailsTable /></div>
      <div class="bottom-view-box-two"><StaticDetailsTable /></div>
    </div>
    <div class="style-bottom">
      <div class="doughnut-view">
        <div class="doughnut-view-box-one"><DoughnutChart /></div>
        <div class="doughnut-view-box-two"><DoughnutChart /></div>
      </div>
      <div class="lineChart-view">
        <div class="lineChart-view-box-one"><LineChart /></div>
        <div class="lineChart-view-box-two"><LineChart /></div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "../components/DashboardHeader.vue";
import FormHelperTopDisplay from "../components/FormHelperTopDisplay.vue";
import StaticDetailsTable from "../components/StaticDetailsTable.vue";
import DoughnutChart from "../components/DoughnutChart.vue";
import LineChart from "../components/LineChart.vue";
import DatePicker from "../components/DatePicker.vue";
export default {
  
  components: {
    DashboardHeader,
    FormHelperTopDisplay,
    StaticDetailsTable,
    DoughnutChart,
    LineChart,
    DatePicker,
  },
};
</script>

<style scoped>
.middle-view {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}
.middle-view-one,
.middle-view-two,
.middle-view-three {
  display: flex;
  flex-direction: column;
}
.bottom-view {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.doughnut-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.lineChart-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.style-bottom {
  background-color: #f9fafb;
  width: 1500px;
  height: auto;
  border-radius: 25px;
  box-shadow: 0.2px 0.2px 3px 3px rgba(204, 204, 204, 0.25);
  margin-left: 5px;
}
#text-line1{
  font-family: poppins;
  font-size:36px;
  font-weight: 400;
  color:#07205D;
}
#text-line2{
  font-family: poppins;
  font-size:36px;
  font-weight: 700;
  color:#07205D;
}

#text-line3{
Font-family:Poppins;

font-Weight:400;
font-size: 18px;
line-height: 27px;
color: #333333;
justify-content: center;
align-items: center;
}
/* .date-wrapper{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
} */
</style>
