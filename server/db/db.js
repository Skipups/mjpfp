const Sequelize = require('sequelize');
const pg = require('pg');
const db = new Sequelize('postgres://localhost:5432/calendar', {
  logging: false,
});

module.exports = { db };
