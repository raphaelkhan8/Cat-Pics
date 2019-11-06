const { CatCounter } = require('./index.js');

// store the image in the catCounter model if it doesn't already exist
const storeImages = url => CatCounter.findOrCreate({
  defaults: {
    image: url,
  },
  where: {
    image: url,
  },
});

// get the images from the catCounter model
const getImages = (req, res) => CatCounter.findAll({}).then(cats => {
  if (cats.length) {
    res.send(cats);
  }
})
  .catch(err => console.log('the cats done got got', err));

module.exports = {
  storeImages,
  getImages,
};
