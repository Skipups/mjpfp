const express = require('express');
const app = express();
const PORT = 3000;
const { db, Event, EventDate } = require('./db/index.js');
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../static')));

//app.get('/api/whatever')

app.get('*', (req, res, next) => {
  console.log('in it'),
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

// why u do dis??
//app.listen(PORT, () => {
//  console.log('listening');
//});

// async function syncAndSeedDataBase() {
//   try {
//     await db.sync({ force: true });
//     const event = [{ name: 'run' }];
//     Event.create();
//   } catch {}
// }

module.exports = { app };
