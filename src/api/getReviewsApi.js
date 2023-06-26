/* eslint-disable consistent-return */
import axios from 'axios';

export const getReviewsApi = async () => {
    const cors = require('cors');
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.REACT_APP_PLACE_ID}&key=${process.env.REACT_APP_API}`;
    // const url =`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.REACT_APP_PLACE_ID}&fields=name%2Crating%2Cformatted_phone_number&key=${process.env.REACT_APP_API}`;
    const corsOptions = {
        origin: 'http://localhost:5000/',
        optionsSuccessStatus: 200,
        credentials: true

    }
    var config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.REACT_APP_PLACE_ID}&key=${process.env.REACT_APP_API}`,
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

};

// https.get(url, ress => {
//     let data = '';
//     ress.on('data', chunk => {
//         data += chunk;
//     });
//     ress.on('end', () => {
//         data = JSON.parse(data);
//         console.log(data);
//     })
// }).on('error', err => {
//     console.log(err.message);
// })
// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=YOUR_API_KEY',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });