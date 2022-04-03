// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a brief description of your project. What is it's purpose and user story?",
  },
  {
    type: "input",
    name: "install",
    message: "Best way for users to install your application:",
  },
  {
    type: "input",
    name: "usage",
    message: "Best practice to use and optimize your application:",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "How would you like users to contribute to this project?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "How should users test this application?",
  },
  {
    type: "list",
    name: "licenseType",
    message:
      "What type of license does this project have? Check all that apply.",
    choices: ["MIT", "GPL 2.0", "APACHE 2.0", "ISC", "MPL", "BSD 2.0"],
  },
  {
    type: "input",
    name: "githubLink",
    message: "What is your GitHub user name? ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// prompts the questions array to run. Calls the generateMarkdown
inquirer.prompt(questions).then((data) => {
  // console.log(data);
  const markdown = generateMarkdown(data);
  fs.writeFile("./output/README.md", markdown, (err) => {
    console.log(err);
  });

  console.log(markdown);
});
