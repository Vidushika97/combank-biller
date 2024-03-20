<template>
  <div class="dashboard-form">
    <div class="dashboard-header">
      <DashboardHeader />
    </div>
    <div class="middle-view">
      <div class="middle-view-one">
        <p id="text-line1">Welcome back,</p>
        <p id="text-line2">{{username1}}!</p>
        
        <p id="text-line3">
          <img src="../assets/calender_icon.png"/>
          {{formattedDate}}
    
        </p>
        
      </div>
      <div class="middle-view-two">
        <FormHelperTopDisplay :headerText="'Top Channel'" :tranType="'CDM'" :tranAmount="28" :totalAmount="643"/>
      </div>
      <div class="middle-view=three">
        <FormHelperTopDisplay :headerText="'Top Biller'" :tranType="'CEB'" :tranAmount="21" :totalAmount="678"/>
      </div>
    </div>
    <div class="date-picker-column">
      <DatePicker/>
    </div>
    <div class="bottom-view">
      <div class="bottom-view-box-one"><StaticDetailsTable 
      :successfulAmount="28" 
      :successfulAmountValue="280000000"  
      :transactionAmount="643" 
      :transactionAmountValue="280000000000"  
      :pendingAmount="28"
      :pendingAmountValue="280000000"
      :failedAmount="28"
      :failedAmountValue="280000000"
      :type="'Channels'"
      iconSrc="youtube_round.png"
      placeHolderValue="All Channels"
      
      /></div>
      <div class="bottom-view-box-two"><StaticDetailsTable
      :successfulAmount="28" 
      :successfulAmountValue="280000000"  
      :transactionAmount="643" 
      :transactionAmountValue="280000000000"  
      :pendingAmount="28"
      :pendingAmountValue="280000000"
      :failedAmount="28"
      :failedAmountValue="280000000"
      :type="'Biller Categories'"
      iconSrc="biller_icon.png"
      placeHolderValue="All Categories" 
      
      /></div>
    </div>
    <div class="style-bottom">
      <div class="doughnut-view">
        <div class="doughnut-view-box-one"><DoughnutChart 
        :transactionValue="20000"
        :topCategory="'Top 10 Channels'"
        :activeCategory="'Active Channels'"
        :activeAmount="25"
        :inactiveCategory="'Inactive Channels'"
        :inactiveAmount="28"
        :type1="'Channel 1'"
        :type2="'Channel 2'"
        :type3="'Channel 3'"
        :type4="'Channel 4'"
        :type5="'Channel 5'"
        :type6="'Channel 6'"
        :type7="'Channel 7'"
        :type8="'Channel 8'"
        :type9="'Channel 9'"
        :type10="'Channel 10'"
        /></div>
        <div class="doughnut-view-box-two"><DoughnutChart 
        :transactionValue="28000" 
        :topCategory="'Top 10 Biller Categories'"
        :activeCategory="'Active Billers'"
        :activeAmount="21"
        :inactiveCategory="'Inactive Billers'"
        :inactiveAmount="29"
        :type1="'Category 1'"
        :type2="'Category 2'"
        :type3="'Category 3'"
        :type4="'Category 4'"
        :type5="'Category 5'"
        :type6="'Category 6'"
        :type7="'Category 7'"
        :type8="'Category 8'"
        :type9="'Category 9'"
        :type10="'Category 10'"
        /></div>
      </div>
      <div class="lineChart-view">
        <div class="lineChart-view-box-one"><LineChart 
        :chartTitle="'The frequency of usage of the top 5 channels'"
        :name1="'Channel 1'"
        :name2="'Channel 2'"
        :name3="'Channel 3'"
        :name4="'Channel 4'"
        :name5="'Channel 5'"

        /></div>
        <div class="lineChart-view-box-two"><LineChart 
        :chartTitle="'The frequency of usage of the top 5 billers'"
        :name1="'Biller 1'"
        :name2="'Biller 2'"
        :name3="'Biller 3'"
        :name4="'Biller 4'"
        :name5="'Biller 5'"
        /></div>
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
  data() {
    return {
      username1: 'Vidushika', 
      currentDate: new Date(),
      
    };
  },
  computed: {
    formattedDate() {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      return this.currentDate.toLocaleDateString('en-US', options);
    }
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
