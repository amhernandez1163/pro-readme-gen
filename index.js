// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "projectName"
        message: "What is the title of your project?"
    }, 
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project. What is it's purpose and user story?", 
    },
    {
        type: "input",
        name: "instructions",
        message: "Best way for users to install your application:",       
      },
      {
        type: "input"
        name: "usage",
        message: "Best practice to use and optimize your application:";
      },
      {
        type: "input",
        name: "contributionGuidelines"
        message: "How would you like users to contribute to this project?",
      }
      {
        type: "input",
        name: "testInstructions",
        message: "How should users test this application?"
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
