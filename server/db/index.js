const { db } = require('./db.js');
const { EventDate } = require('./models/EventDate.js');
const { Event } = require('./models/Event.js');

//associations

EventDate.hasMany(Event); //
Event.belongsTo(EventDate); //child

module.exports = {
  db,
  Event,
  EventDate,
};
