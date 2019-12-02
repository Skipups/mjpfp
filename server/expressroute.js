const express = require('express');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const app = express();
const PORT = 3000;
const { db, Event } = require('./db/index.js');
const path = require('path');
const {
  startOfYear,
  endOfYear,
  startOfMonth,
  endOfMonth,
  parseISO,
} = require('date-fns');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../static')));

//get all the tasks
app.get('/api/events/:year/:month', async (req, res, next) => {
  let { year, month } = req.params;
  //console.log('!!!!!n express route', year, month, req.params, req.body);

  try {
    let allEvents = await Event.findAll({
      where: {
        date: {
          [Op.between]: [
            startOfMonth(parseISO(month)),
            endOfMonth(parseISO(month)),
          ],
        },
      },
    });
    console.log('***currentMont events', allEvents);
    res.status(200).send(allEvents);
  } catch (err) {
    next(err);
  }
});

//create a new event
app.post('/api/events', async (req, res, next) => {
  let newEvent = req.body;
  try {
    let createdEvent = await Event.create(newEvent);
    //console.log('createdEvent', createdEvent);
    res.status(200).send(createdEvent);
  } catch (err) {
    next(err);
  }
});

module.exports = { app };
