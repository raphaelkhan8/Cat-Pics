const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getCatImagesFromApi } = require('./server-helpers.js');

const {
  storeImages,
  getImages,
} = require('../database-mysql/db-helpers.js');

const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname, '../react-client/dist')));

app.use(bodyParser.json());

app.get('/cats', (req, res) => {
  // get the data from api and send it to the front-end client
  getCatImagesFromApi().then((resData) => {
    res.send(resData);
  });
});

// get the images from database and send to client
app.get('/images', getImages);

// send image to database from the client for storage
app.post('/images', (req, res) => {
  const { imageUrl } = req.body;
  storeImages(imageUrl)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => console.error('The image was not saved.', err));
});


app.listen(3000, () => {
  console.log('listening on port 3000!');
});