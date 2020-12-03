const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("error: ", error);
    console.log('statusCode:', response && response.statusCode);
  } else {

    const data = JSON.parse(body); //formatting: destructure as const [data] = . . .

    // potential for loop to satisfy vague search query

    const breedDescription = JSON.stringify(data[0].description); //like above: data.description
    console.log(breedDescription);
  }
});