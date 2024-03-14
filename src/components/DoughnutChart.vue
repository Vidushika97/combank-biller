<template>
<div class="overview-card">
  <div class="overview-description">

  </div>
  <div class="doughnut-chart-container">
    <div class="legend">
      <div class="legend-column">
        <div v-for="(channel, index) in chartData.labels.slice(0, 5)" :key="index" class="legend-item">
          <span class="legend-color" :style="{ backgroundColor: chartData.datasets[0].backgroundColor[index] }"></span>
          <span class="legend-label">{{ channel }}</span>
        </div>
      </div>
      <div class="legend-gap"></div>
      <div class="legend-column">
        <div v-for="(channel, index) in chartData.labels.slice(5)" :key="index" class="legend-item">
          <span class="legend-color" :style="{ backgroundColor: chartData.datasets[0].backgroundColor[index + 5] }"></span>
          <span class="legend-label">{{ channel }}</span>
        </div>
      </div>
    </div>
    <div class="chart">
      <Doughnut :data="chartData" :options="chartOptions"  />
      
    </div>
  </div>
 </div> 
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: ['Channel 1', 'Channel 2', 'Channel 3', 'Channel 4', 'Channel 5', 'Channel 6', 'Channel 7', 'Channel 8', 'Channel 9', 'Channel 10'],
        datasets: [{
          data: [23, 17, 14, 12, 10, 7, 6, 5, 4, 2],
          backgroundColor: [
            '#07205D', //channel 1
            '#0066CC', //channel 2
            '#8E4507', //channel 3
            '#FFA500', //channel 4
            '#BD8700', //channel 5
            '#FFD700', //channel 6
            '#2D8727', //channel 7
            '#4CAF50', //channel 8
            '#86072E', //channel 9
            '#CCCCCC'  //channel 10
          ]
        }]
      },
      chartOptions: {
        responsive: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.overview-description{
  width:0
}
.doughnut-chart-container {
  display: flex;
  align-items: flex-start;
  width:700px;
  height:239px;
  margin-top: 121px;  
  margin-left:50px;

}

.legend {
  display: flex;
  margin: 20px;
  width:500px;
  height:600px;
}

.legend-column {
  display: flex;
  flex-direction: column;
  margin:40px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

/* .legend-gap {
  margin-left: 20px;
  margin-right: 20px;
} */

.legend-color {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.chart {
  flex: 1;
  margin:20px;
  padding:5px;
  height:239px;
  width:239px;
  
}
.legend-label{
  font-family: poppins;
  font-size:14px;
  font-weight: 500;
  color:#64676A
}
</style>
