require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./Movies');

const seedMovies = [
  {
    title: 'The Dark Knight',
    releaseDate: 2008,
    genre: 'Action',
    actors: [
      { actorName: 'Christian Bale', characterName: 'Bruce Wayne' },
      { actorName: 'Heath Ledger', characterName: 'The Joker' },
      { actorName: 'Aaron Eckhart', characterName: 'Harvey Dent' },
    ],
  },
  {
    title: 'Inception',
    releaseDate: 2010,
    genre: 'Science Fiction',
    actors: [
      { actorName: 'Leonardo DiCaprio', characterName: 'Dom Cobb' },
      { actorName: 'Joseph Gordon-Levitt', characterName: 'Arthur' },
      { actorName: 'Elliot Page', characterName: 'Ariadne' },
    ],
  },
  {
    title: 'The Shawshank Redemption',
    releaseDate: 1994,
    genre: 'Drama',
    actors: [
      { actorName: 'Tim Robbins', characterName: 'Andy Dufresne' },
      { actorName: 'Morgan Freeman', characterName: 'Ellis Boyd Redding' },
      { actorName: 'Bob Gunton', characterName: 'Warden Norton' },
    ],
  },
  {
    title: 'The Silence of the Lambs',
    releaseDate: 1991,
    genre: 'Thriller',
    actors: [
      { actorName: 'Jodie Foster', characterName: 'Clarice Starling' },
      { actorName: 'Anthony Hopkins', characterName: 'Hannibal Lecter' },
      { actorName: 'Scott Glenn', characterName: 'Jack Crawford' },
    ],
  },
  {
    title: 'The Princess Bride',
    releaseDate: 1987,
    genre: 'Adventure',
    actors: [
      { actorName: 'Cary Elwes', characterName: 'Westley' },
      { actorName: 'Robin Wright', characterName: 'Buttercup' },
      { actorName: 'Mandy Patinkin', characterName: 'Inigo Montoya' },
    ],
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('Connected to MongoDB');

    await Movie.deleteMany({});
    console.log('Cleared existing movies');

    await Movie.insertMany(seedMovies);
    console.log('Seeded 5 movies successfully');

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
};

seed();