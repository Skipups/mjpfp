const Sequelize = require('sequelize');
const { db } = require('../db.js');

const Person = db.define('person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = { Person };
