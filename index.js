const {fetchBreedDescription} = require("./breedFetcher");
const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => { //is the callback function
  if (error) {
    console.log('Error: ', error);
  } else {
    console.log('here it is ', desc);
  }
});
