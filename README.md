# README-generator

![Badge](https://img.shields.io/badge/License-MIT-lightblue.svg)

## Table of Contents

- [README-generator](#readme-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

Command-line application that dynamically generates professional README.md files from user's input through Inquirer.

### User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

### Acceptance Criteria

GIVEN a command-line application that accepts user input

- WHEN I am prompted for information about my application repository
  - THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title
  - THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  - THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options
  - THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username
  - THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address
  - THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents
  - THEN I am taken to the corresponding section of the README

## Installation

Use inquirer from your command line to answer questions about your project. That information will be used to generate the README. Run the following command at the root of the README-generator folder to initialize the application: `node index.js`.

## Usage

User should clone this repository from Github and download Node. From your terminal run commands `npm init` and `npm install inquirer`. Then you will be prompted a series of questions.

## License

This application is licensed under MIT.

## Contributing

If you would like to contribute to this project reach out to me. You can find my contact information in the [Questions](#questions) section.

## Tests

No testing information available at the moment.

## Questions

If you have any questions about this project, contact me at tracynburton@gmail.com.
Don't forget to check out my other projects! Visit [my github](https://github.com/tracybrtn).
