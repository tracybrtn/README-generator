// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
//   If there is no license, return an empty string
   if (!license) {
    return '';
   }

//   returns license badge
   return `
![Badge](https://img.shields.io/badge/License-${license}-lightblue.svg)
`
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (!license) {
     return '';
   }

   //returns license link
   return `- [License](#license)`
}

// A function that returns the license section of README
function renderLicenseSection(license) {
   // If there is no license, return an empty string
   if (!license) {
     return '';
  }

  //returns license section of README
   return `
## License

This application is licensed under ${license}.
`
  
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}
${renderLicenseSection(data.license)}
## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions about this project, contact me at ${data.email}.
Don't forget to check out my other projects! Visit [my github](https://github.com/${data.github}).
`;
}

//export function to import it at index.js
module.exports = generateMarkdown;
