Melbourne Weather App
======================

Fetches temperature, humidity and wind speed data for Melbourne and represents them on a bubble graph. Allows users to share on Twitter or Facebook.

I wanted to make something that would show the user how these three pieces of data are related on one chart with a quick glance. Unfortunately the free tier for provided API only gives current weather data and not forecasts. Therefore the data for the days apart from the current day are hard-coded. I've designed the app in such a way that this can be updated to be more dynamic with more data. If you require me to show this please let me know and I can use another API to demonstrate.

The front-end uses VueJS and is hosted on Netlify. I've used the chart.js library to display the data. The front-end uses a very simple relay-api to make API calls. This pattern is partially meant to abstract the API logic away from the front-end and hide the API key. It's also partially just to show off a bit of back-end skills. The back-end uses express in Node.js and runs on a heroku dyno.

I used VSCode to develop this app and postman to test API endpoints. The front-end framework is Vuetify.

With more time I would like to introduce a slider to select a range of dates to display rather than just the current 5 days. I would also have liked to add a loading wheel to display while the data is being fetched.


# weather-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
