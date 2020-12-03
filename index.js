const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, breedDescription) => {
  if (error) {
    console.log('ERROR fetch details: ', error);
  } else {
    console.log('Results: ', breedDescription);
  }
});
