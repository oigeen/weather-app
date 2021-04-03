module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  //Proxy Server to avoid CORS errors in development
  devServer: {
    proxy: 'https://localhost:8888'
  }
}
