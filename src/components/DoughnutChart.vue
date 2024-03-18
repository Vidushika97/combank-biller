<template>
  <div class="overview-card">
    <div class="overview-description">
      <div class="columns">
        <div class="column-one">
          <p>Transactions Overview</p>
          <h2>Top 10 Channels</h2>
        </div>
        <div class="column-two">
          <div class="flex-container">
            <div>
              <img src="../assets/up-icon.png" />
            </div>
            <div class="header-one">
              <p>Active Channels</p>
              <h2>25</h2>
            </div>
          </div>
        </div>
        <div class="column-three">
          <div class="flex-container">
            <div>
              <img src="../assets/down-icon.png" />
            </div>
            <div class="header-one">
              <p>Inactive Channels</p>
              <h2>25</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doughnut-wrapper">
    <div class="doughnut-chart-container">
      <div class="legend">
        <div class="legend-column">
          <div
            v-for="(channel, index) in chartData.labels.slice(0, 5)"
            :key="index"
            class="legend-item"
          >
            <span
              class="legend-color"
              :style="{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
              }"
            ></span>
            <span class="legend-label">{{ channel }}</span>
          </div>
        </div>
        <div class="legend-gap"></div>
        <div class="legend-column">
          <div
            v-for="(channel, index) in chartData.labels.slice(5)"
            :key="index"
            class="legend-item"
          >
            <span
              class="legend-color"
              :style="{
                backgroundColor:
                  chartData.datasets[0].backgroundColor[index + 5],
              }"
            ></span>
            <span class="legend-label">{{ channel }}</span>
          </div>
        </div>
      </div>
      <div class="doughnut-wrapper"><div class="chart">
        <Doughnut :data="chartData" :options="chartOptions" />
      </div>
      <div class="inner-doughnut">
      <p>Total</p>
      <p>Transactions</p>
      <h2>28000</h2>
    </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "DoughnutChart",
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: [
          "Channel 1",
          "Channel 2",
          "Channel 3",
          "Channel 4",
          "Channel 5",
          "Channel 6",
          "Channel 7",
          "Channel 8",
          "Channel 9",
          "Channel 10",
        ],
        datasets: [
          {
            data: [23, 17, 14, 12, 10, 7, 6, 5, 4, 2],
            backgroundColor: [
              "#07205D", //channel 1
              "#0066CC", //channel 2
              "#8E4507", //channel 3
              "#FFA500", //channel 4
              "#BD8700", //channel 5
              "#FFD700", //channel 6
              "#2D8727", //channel 7
              "#4CAF50", //channel 8
              "#86072E", //channel 9
              "#CCCCCC", //channel 10
            ],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>

<style scoped>

.overview-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column-one {
  width: 220px;
  height: 80px;
  margin-top:50px;
  margin-left:80px;
}

.column-two,
.column-three {
  background-color: #e8eaef;
  border-radius: 8px;
  width:220px;
  height: 80px;
  margin-top:5px;
  margin-left:30px;
  padding: 5px;
}

.column-two img,
.column-three img{
padding-left: 10px;
padding-right:10px

}
.columns {
  display: flex;
  align-items: center;
  max-width: 750px;
}
.column-one h2 {
  font-family: poppins;
  font-weight: 700;
  font-size: 20px;
  color: #1b2559;
}
.column-one p {
  font-family: poppins;
  font-weight: 500;
  font-size: 15px;
  color: #757575;
}

.column-two h2,
.column-three h2 {
  font-family: poppins;
  font-weight: 700;
  font-size: 24px;
  color: #1b2559;
}
.column-two p,
.column-three p {
  font-family: poppins;
  font-weight: 500;
  font-size: 15px;
  color: #757575;
}

.flex-container {
  display: flex;
  gap: 6px;
  margin-top: 5px;
}
.doughnut-wrapper{
  position:relative;
}
.doughnut-chart-container {
  display: flex;
  align-items: flex-start;
  width: 700px;
  height: 400px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 19.46px;
  box-shadow: 0.2px 0.2px 3px 3px rgba(204, 204, 204, 0.25);
  background-color: white;
}
.inner-doughnut{
  position:absolute;
  top: 50%;
  left:45%;
  text-align: center;
  /* transform: translate(-50%, -50%); */
}
.inner-doughnut p{
font-family:poppins;
font-size:15px;
font-weight:400;
color:#64676A
}
.inner-doughnut h2{
font-family:poppins;
font-size:21.21px;
font-weight: 700;
color:#231F20;
}
.legend {
  display: flex;
  margin: 20px;
  width: 300px;
  height: 600px;
  
}

.legend-column {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.legend-color {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.chart {
  flex: 1;
  margin: 20px;
  padding: 5px;
  height: 239px;
  width: 239px;
}

.legend-label {
  font-family: poppins;
  font-size: 14px;
  font-weight: 500;
  color: #64676a;
}

</style>
