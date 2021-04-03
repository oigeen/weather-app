import axios from 'axios'

export default {
    getWeather: async function (location) {
        await axios.get('http://api.airvisual.com/v2/city',
            {
                params: {
                    city: location.city,
                    country: location.country,
                    state: location.state,
                    key: 'b0b51d2a-e06d-44dd-85ed-f6181741d879'
                }
            }
        )
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
        })
    }
}