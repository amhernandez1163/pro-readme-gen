// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Creates a function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Project Description

${data.description}

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Installation Instructions

${data.install}

## Usage

${data.usage}

## License

[![license](https://img.shields.io/badge/license-${data.licenseType}-green)](https://shields.io)

## Contribution Guidelines

${data.contributionGuidelines}

## Test Instructions

${data.testInstructions}

## Questions 

Let's collaborate! Find me here for any questions or suggestions: 

- GitHub: (https://github.com/${data.githubLink})
- Email: (${data.email})


`;
}

module.exports = generateMarkdown;
