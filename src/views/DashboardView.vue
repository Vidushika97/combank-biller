<template>
<div class=dashboard-form>
<div class="dashboard-header">
  <DashboardHeader/>
</div> 
<div class=" middle-view">
  <div class="middle-view-one">
    <p>Welcome back</p>
    <p>Charith</p>
    <p>calender</p>
  </div>
  <div class="middle-view-two">
    <FormHelperTopDisplay/>
  </div>
  <div class="middle-view=three">
     <FormHelperTopDisplay/>
  </div>
</div>
<div class="bottom-view">
  
  <div class="bottom-view-box-one"><StaticDetailsTable/></div>
  <div class="bottom-view-box-two"><StaticDetailsTable/> </div>  
</div>
<div class="doughnut-view">
  
  <div class="doughnut-view-box-one"><DoughnutChart /></div>
  <div class="doughnut-view-box-two"><DoughnutChart /> </div>  
</div>
<div class="lineChart-view">
  
  <div class="lineChart-view-box-one"><LineChart /></div>
  <div class="lineChart-view-box-two"><LineChart /> </div>  
</div>
</div>
</template>

<script>
import DashboardHeader from '../components/DashboardHeader.vue'
import FormHelperTopDisplay  from '../components/FormHelperTopDisplay.vue'
import  StaticDetailsTable  from '../components/StaticDetailsTable.vue'
import  DoughnutChart from '../components/DoughnutChart.vue'
import  LineChart from '../components/LineChart.vue'
export default {
    components:{
        DashboardHeader,
        FormHelperTopDisplay,
        StaticDetailsTable,
        DoughnutChart,
        LineChart 
    }

}
</script>

<style scoped>
.middle-view{
  padding: 40px;
  display:grid;
  grid-template-columns:1fr 1fr 1fr ;
  grid-template-rows:1fr;
}
.middle-view-one,.middle-view-two,.middle-view-three{
  display:flex;
  }
  .bottom-view{
  padding: 40px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr; 
  }
  .doughnut-view{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr;   
  }
  .lineChart-view{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr;  
  }
</style>