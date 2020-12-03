const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body); //formatting: destructure as const [data] = . . .
    if (data.length === 0) {
      callback(error, "That must be a dog!");
    } else {
      // potential for loop to satisfy vague search query (multiple indexes)
      const breedDescription = JSON.stringify(data[0].description); //like above: deconstructs to data.description
      callback(error, breedDescription);
    }
  });
};

module.exports = { fetchBreedDescription };