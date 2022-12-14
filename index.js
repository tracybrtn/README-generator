// Declaring variables and dependencies
const fs = require('fs');
const inquirer = require('inquirer');

//link to page where README.md is generated
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = () => {
    //that uses inquirer to .prompt questions to user
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username',
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log('Please enter your github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your project title',
            validate: inputTitle => {
                if (inputTitle) {
                    return true;
                } else {
                    console.log('Please enter the title of your project');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddLicense',
            message: 'Would you like to add a license to this project?',
            default: false
        },
        {
            //this question only appears if user would like to license their project
            type: 'list',
            name: 'license',
            message: 'What type of license would you like to add?',
            choices: [
                'Apache',
                'GNU',
                'MIT',
                'BSD 2',
                'BSD 3',
                'Boost',
                'CC',
                'Eclipse',
                'GNU',
                'Mozilla',
                'The Unlicense'
                ],
            when(answers) {
                return answers.confirmAddLicense;
            }
        },
        
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter instructions for installation.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain usage of your application.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to enter application usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please describe how users can contribute to your application.',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to describe how users can contribute to your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter instructions for user testing.',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('You need to enter instructions for user testing.');
                    return false;
                }
            }
        }
    ]);
}


// TODO: Create a function to write README file
const writeToFile = data => {
        fs.writeFile(`./dist/README.md`, data, err => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("README created")
            }

    
            })
        };

//Call function and then create README file
    questions()
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then (data => {
            return writeToFile(data);
        })
        .catch(err => {
            console.log(err)
        })
