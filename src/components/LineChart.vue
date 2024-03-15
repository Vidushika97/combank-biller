<template>
  <lineChart id="my-chart-id" :options="chartOptions" :data="chartData" />
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
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Dataset 1",
            data: [10, 20, 30],
            borderColor: "#000",
            // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            yAxisID: "y",
          },
          {
            label: "Dataset 2",
            data: [25.2, 60, 70],
            borderColor: "#ff0000",
            // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
            yAxisID: "y",
          },
          {
            label: "Dataset 1",
            data: [12, 23, 38],
            borderColor: "#000",
            // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            yAxisID: "y",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Chart.js Line Chart - Cubic interpolation mode",
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
            ticks: {
              display: false, // Hides only the labels of the x-axis
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
