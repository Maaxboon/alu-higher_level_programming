#!/usr/bin/node
const axios = require('axios');

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Star Wars API URL for movies
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Fetch movie details including characters
axios.get(url)
  .then(response => {
    const characters = response.data.characters;

    // For each character URL, fetch the character details
    const characterPromises = characters.map(characterUrl => axios.get(characterUrl));

    // Wait for all character details to be fetched
    return Promise.all(characterPromises);
  })
  .then(responses => {
    // Log each character's name
    responses.forEach(characterResponse => {
      console.log(characterResponse.data.name);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });