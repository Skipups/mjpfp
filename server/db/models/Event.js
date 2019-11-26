const Sequelize = require('sequelize');
const { db } = require('../db.js');

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = { Event };
