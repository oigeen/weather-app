<template>
  <div>
    <canvas id="weather-chart" height="100" width="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "WeatherChart",
  data() {
    return {};
  },
  props: { weather: Object },
  watch: {
    weather(oldVal, newVal) {
      if (oldVal != newVal) {
        this.generateChart();
      }
    },
  },
  methods: {
    generateChart() {
      const ctx = document.getElementById("weather-chart");
      new Chart(ctx, {
        type: "bubble",
        data: {
          datasets: [
            {
              label: ["30/3/21"],
              backgroundColor: "rgba(60,186,159,0.2)",
              borderColor: "rgba(60,186,159,1)",
              data: [
                {
                  x: 32,
                  y: 0,
                  r: 34,
                },
              ],
            },
            {
              label: ["31/3/21"],
              backgroundColor: "rgba(0,0,0,0.2)",
              borderColor: "#000",
              data: [
                {
                  x: 12,
                  y: 25,
                  r: 18,
                },
              ],
            },
            {
              label: ["1/4/21"],
              backgroundColor: "rgba(193,46,12,0.2)",
              borderColor: "rgba(193,46,12,1)",
              data: [
                {
                  x: 25,
                  y: 42,
                  r: 18,
                },
              ],
            },
            {
              label: ["2/4/21"],
              backgroundColor: "rgba(123,113,12,0.2)",
              borderColor: "rgba(123,13,112,1)",
              data: [
                {
                  x: 30,
                  y: 100,
                  r: 34,
                },
              ],
            },
            {
              label: ["Today"],
              backgroundColor: "rgba(255,221,50,0.2)",
              borderColor: "rgba(255,221,50,1)",
              data: [
                {
                  x: this.weather.wind,
                  y: this.weather.humidity,
                  r: this.weather.temp,
                },
              ],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text:
              "Relationship between Humidity, Windspeed and Temperature in Melbourne. Bubble radius represents temperature in degrees Celcius",
          },
          scales: {
            y: {
              min: 0,
              max: 100,
            },
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Humidity",
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Wind Speed (km/h)",
                },
              },
            ],
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>