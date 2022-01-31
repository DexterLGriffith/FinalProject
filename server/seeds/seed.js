
const db = require('../config/connection');
const { chestWorkout } = require('../models');

const chestWorkoutSeed = require('./chestWorkoutSeed.json');

db.once('open', async () => {
  await chestWorkout.deleteMany({});

  const addExercise = await chestWorkout.insertMany(chestWorkoutSeed);

  console.log('Exercises seeded!');
  process.exit(0);
});
