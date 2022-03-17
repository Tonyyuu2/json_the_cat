const request = require('request');
const args = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    console.log("This error should work: ", error);
  } else {
    console.log(JSON.parse(body)[0].description);
  }
});

// const data = JSON.parse(body)
// console.log(data[0].weight)