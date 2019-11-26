const { db } = require('./db.js');
const { Event } = require('./models/Event.js');

module.exports = { db, Event };
const { db } = require('./db.js');
const { Person } = require('./models/Person.js');
const { Event } = require('./models/Event.js');

//associations

Person.hasMany(Event); //
Event.belongsTo(Person); //child

module.exports = {
  db,
  Person,
  Event,
};
