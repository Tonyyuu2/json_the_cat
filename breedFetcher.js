const request = require('request');

const fetchBreedDescription = function(breedName, callback) { //callback refers to the function on index.js's (error, desc)
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('breed not found', null);
    }
  });
};


// const data = JSON.parse(body)
// console.log(data[0].weight)

// else {
//   console.log(JSON.parse(body)[0].description);
// };

module.exports = {fetchBreedDescription};