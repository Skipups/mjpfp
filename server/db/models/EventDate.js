const Sequelize = require('sequelize');
const { db } = require('../db.js');

//yyyy-mm-dd
const EventDate = db.define('eventDate', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = { EventDate };
