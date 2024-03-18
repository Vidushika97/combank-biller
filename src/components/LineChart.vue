<template>
    <div class="line-chart-container">
    <div class="chart-wrapper">
      <lineChart id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<script>
import { Line as lineChart } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default {
  name: "LineChart",
  components: { lineChart },
  data() {
    return {
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            label: "Channel 1",
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: "#FFA500", 
            borderColor:"#FFA500",
            borderWidth: 0.5, 
            fill: false, 
            pointRadius: 0, 
            pointHoverRadius: 0, 
            yAxisID: "y",
           
          },
          {
            label: "Channel 2",
            data: [25.2, 60, 70, 80, 90, 100, 110],
            backgroundColor: "#CCCCCC",
            borderColor:"#CCCCCC",
            borderWidth: 0.5,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0,
            yAxisID: "y",
          },
          {
            label: "Channel 3",
            data: [12, 23, 38, 45, 55, 65, 75],
            backgroundColor: "#2D8727",
            borderColor:"#2D8727",
            borderWidth: 0.5,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0,
            yAxisID: "y",
          },
          {
            label: "Channel 4",
            data: [2, 15, 12, 20, 30, 40, 50],
            backgroundColor: "#86072E",
            borderColor:"#86072E",
            borderWidth: 0.5,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0,
            yAxisID: "y",
          },
          {
            label: "Channel 5",
            data: [8, 29, 31, 35, 45, 55, 65],
            backgroundColor: "#45078E",
            borderColor:"#45078E",
            borderWidth: 0.5,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 0,
            yAxisID: "y",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "The frequency of usage of the top 5 channels",
            font: {
              family: "Poppins",
              weight: 700,
              size: 20,
              letterSpacing: -2,
              
            },
            color: "#1B2559",
            align:'start',
            
          },
            legend: {
        display: true,
        position: 'bottom',
        width:50,
        height:50
        },
      
        },
      
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Time",
              align:'end'
            },
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Number of Transactions",
            },
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
            suggestedMin: -10,
            suggestedMax: 200,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.line-chart-container{
  width: 700px;
  height: auto;
  border-radius: 19.46px;
  box-shadow: 0.2px 0.2px 3px 3px rgba(204, 204, 204, 0.25);
  background-color: white;
  margin:20px;
}
</style>
