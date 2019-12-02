const { app } = require('./expressroute.js');
const { db, Event, EventDate } = require('./db/index.js');
const PORT = process.env.PORT || 3000;

async function syncAndSeed() {
  try {
    await db.sync({ force: true });

    const events = [{ name: 'Run' }, { name: 'School' }, { name: 'Homework' }];

    const dates = [
      { date: '2019-11-30' },
      { date: '2019-12-03' },
      { date: '2019-12-04' },
    ];
    const [run, school, homework] = await Promise.all(
      events.map(event => Event.create(event))
    );
    const [novthirty, novtwentynine, decfirst] = await Promise.all(
      dates.map(date => EventDate.create(date))
    );

    await run.update({ eventDateId: novthirty.id });
    await school.update({ eventDateId: novtwentynine.id });
    await homework.update({ eventDateId: decfirst.id });
  } catch (err) {
    console.log(err);
  }
}

// syncAndSeed()
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log('listening on port', PORT);
    });
  })
  .catch(err => {
    console.log('connection errorrrr', err);
  });
