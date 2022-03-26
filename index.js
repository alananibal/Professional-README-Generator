// // TODO: Include packages needed for this application
// Inquirer
const fs = require('fs');
const inquirer = require('inquirer');

// // TODO: Create an array of questions for user input
// const questions = [];
const prompQuestions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('You need to enter a project Title!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'contents',
        message: 'What are your readme contents? (Check all that apply)',
        choices: ['installation', 'usage', 'credits', 'license', 'badges', 'contributing', 'tests']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.        '
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.        '
      },
      {
        type: 'input',
        name: 'license',
        message: 'please, Let other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)        '
      },
    //   badges
      {
        type: 'confirm',
        name: 'confirmBadges',
        message: 'Would you like to enter badges section ?',
        default: true
      },
      {
        type: 'input',
        name: 'Badges',
        message: 'Please Provide badges',
        when: ({confirmBadges}) => confirmBadges
      },
    //   Contributing
      {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to enter contributing section?',
        default: true
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.',
        when: ({confirmContributing}) => confirmContributing
    },
    // tests
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to enter tests section?',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'write tests for your application. Then provide examples on how to run them.  ',
        when: ({confirmTests}) => confirmTests
    },  

    ]);
   
  };

  

prompQuestions()
.then(answers => console.log(answers))






// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

