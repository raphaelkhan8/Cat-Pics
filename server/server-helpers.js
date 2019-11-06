const axios = require('axios');

// function to get cat images from api
const getCatImagesFromApi = () => {
  const options = {
    url: 'https://api.thecatapi.com/v1/images/search/',
  };
  return axios(options)
    .then(response => response)
    .catch((err) => {
      console.log('The cats were not retrieved', err);
    });
};

module.exports = {
  getCatImagesFromApi,
};