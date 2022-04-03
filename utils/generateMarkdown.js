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

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.licenseType}

## Contributing

${data.contributionGuidelines}

## Tests

${data.testInstructions}

## Questions 

Have any questions? Let's collaborate! Find me here: 

- GitHub: (https://github.com/${data.githubLink})
- Email: (${data.email})


`;
}

module.exports = generateMarkdown;
