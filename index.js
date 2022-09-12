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
            type: 'input',
            name: 'description',
            message: 'Please describe your project (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter instructions for installation (required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain usage of your application (required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter application usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please describe how users can contribute to your application (required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter how users can contribute to your application.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter instructions for user testing (required)',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('Please enter instructions for user testing.');
                    return false;
                }
            }
        }
    ]);
}


// TODO: Create a function to write README file
const writeToFile = data => {
        fs.writeFile("./dist/README.md", data, err => {
            // if there is an error, reject the Promise and send it to catch() method
            if (err) {
                console.log(err);
                //return function so that resolve() is not executed
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




// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
// init();
