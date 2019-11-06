const Sequelize = require('sequelize');

const sequelize = new Sequelize('cats', 'root', '', {
  port: 3306,
  dialect: 'mysql',
});

// force sequalize to overwite the table; set to true when I need to change/check something
sequelize.sync({ force: false });

sequelize.authenticate()
  .then(() => console.log('Connected to the database.'))
  .catch(err => console.log('The connection failed', err));

const CatCounter = sequelize.define('cats', {
  rating: { type: Sequelize.INTEGER, defaultValue: '0' },
  image: Sequelize.STRING,
});

module.exports = {
  CatCounter,
};