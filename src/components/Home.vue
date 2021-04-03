<template>
  <v-container>
    <h1>Current Melbourne Weather</h1>
    <h2>{{ currentDate }}</h2>
    <v-card>
      {{ weather.temp }}
      {{ weather.humidity }}
      {{ weather.wind }}
      <v-img :src="iconString" height="100" width="100" />
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

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
  mounted: async function () {
    await axios
      .get("http://api.airvisual.com/v2/city", {
        params: {
          city: this.location.city,
          country: this.location.country,
          state: this.location.state,
          key: process.env.VUE_APP_API_KEY,
        },
      })
      .then((response) => {
        let weather = response.data.data.current.weather;
        this.weather = {
          temp: weather.tp,
          humidity: weather.hu,
          wind: weather.ws,
          icon: weather.ic,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
