#!/usr/bin/node

const request = require('request');

// Get the movie ID from the first command-line argument
const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Make the API request to get the movie details
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  // Parse the response body
  const filmData = JSON.parse(body);

  // Get the array of character URLs from the movie data
  const characters = filmData.characters;

  // Iterate over each character URL and make a request to get the character name
  characters.forEach((characterUrl) => {
    request(characterUrl, (charError, charResponse, charBody) => {
      if (charError) {
        console.error('Error:', charError);
        return;
      }

      // Parse the character data and log the name
      const characterData = JSON.parse(charBody);
      console.log(characterData.name);
    });
  });
});
