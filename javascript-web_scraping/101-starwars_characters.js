#!/usr/bin/node
const axios = require('axios');

if (process.argv.length !== 3) {
  console.error('Usage: node 101-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

axios.get(apiUrl)
  .then(response => {
    const film = response.data;

    if (!film || !film.characters || film.characters.length === 0) {
      console.error('No characters found for the specified movie ID.');
      process.exit(1);
    }

    const charactersUrls = film.characters;
    const charactersPromises = charactersUrls.map(url => axios.get(url).then(res => res.data.name));

    return Promise.all(charactersPromises);
  })
  .then(characters => {
    characters.forEach(character => console.log(character));
  })
  .catch(error => {
    console.error('Error fetching data:', error.response ? error.response.status : error.message);
    process.exit(1);
  });
