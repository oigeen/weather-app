<template>
  <v-container class="mb-6">
    <v-card class="mt-12 pa-6">
      <v-card-title>
        <h3>Today: {{ currentDate }}</h3>
      </v-card-title>
      <v-container class="pa-6">
        <v-row>
          <v-col offset="1" cols="2">
            <v-img :src="iconString" height="100" width="100" />
          </v-col>
          <v-col>
            <ul>
              <li>Temp: {{ weather.temp }} C</li>
              <li>Humidity: {{ weather.humidity }}%</li>
              <li>Wind Speed: {{ weather.wind }} km/h</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
      <v-divider />
      <WeatherChart :weather="weather" class="mt-4" />
    </v-card>
    <v-row justify="end">
      <FaceBookShareButton class="mt-6" target="_blank" />
      <TwitterShareButton class="mt-6 ml-2" target="_blank" />
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import WeatherChart from "./WeatherChart";
import FaceBookShareButton from "./FaceBookShareButton";
import TwitterShareButton from "./TwitterShareButton";

export default {
  name: "Home",
  components: { WeatherChart, FaceBookShareButton, TwitterShareButton },
  data: () => ({
    location: {
      city: "Melbourne",
      state: "Victoria",
      country: "Australia",
    },
    weather: {},
  }),
  computed: {
    currentDate: function () {
      let dateNow = new Date();
      return dateNow.toLocaleDateString() + " " + dateNow.toLocaleTimeString();
    },
    iconString: function () {
      return `https://airvisual.com/images/${this.weather.icon}.png`;
    },
  },
  created: async function () {
    await axios
      .get("https://weather-api-relay.herokuapp.com", {
        params: {
          city: this.location.city,
          country: this.location.country,
          state: this.location.state,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          let weather = response.data.results.data.current.weather;
          console.log(weather);
          this.weather = {
            temp: weather.tp,
            humidity: weather.hu,
            wind: weather.ws,
            icon: weather.ic,
          };
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
