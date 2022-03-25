const fs = require('fs');
const generateTxt = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [title, description] = profileDataArgs;


console.log(generateTxt(title, description));

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
fs.writeFile('ReadMe-Result.txt', generateTxt(title, description), err => {
    if (err) throw err;
  
    console.log('ReadMe File complete! Check out ReadMeresult.txt to see the output!');
  });


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
