<template>
  <v-container>
    {{ weather.temp }}
    {{ weather.humidity }}
    {{ weather.wind }}
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    location: {
      city: "Melbourne",
      state: "Victoria",
      country: "Australia",
    },
    weather: {},
  }),
  created: async function () {
    await axios
      .get("http://api.airvisual.com/v2/city", {
        params: {
          city: this.location.city,
          country: this.location.country,
          state: this.location.state,
          key: "b0b51d2a-e06d-44dd-85ed-f6181741d879",
        },
      })
      .then((response) => {
        let weather = response.data.data.current.weather;
        this.weather = {
          temp: weather.tp,
          humidity: weather.hu,
          wind: weather.ws,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
