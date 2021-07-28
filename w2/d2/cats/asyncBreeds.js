// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile. // can't use 'return data;'
    if (!error) callback(data);// CHANGE: Pass data into callback instead of returning it directly
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};
const printCatBreed = breed => { // CHANGE 1: Moved the console.log into a new function:
  console.log('Return Value: ', breed) // => print out details correctly.
};

// we try to get the return value
breedDetailsFromFile('Bombay', printCatBreed); // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
module.exports = breedDetailsFromFile;