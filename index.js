const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Description',
            message: 'Please describe your project (required)'
        },
        {
            type: 'input',
            name: 'Installation instructions',
            message: 'Please enter instructions for installation (required)'
        },
        {
            type: 'input',
            name: 'Usage Information',
            message: 'Please explain usage of your application (required)'
        },
        {
            type: 'input',
            name: 'Contribution guidelines',
            message: 'Please describe how users can contribute to your application (required)'
        },
        {
            type: 'input',
            name: 'Test Instructions',
            message: 'Please enter instructions for user testing (required)'
        }
        //add validation to all input
    ]);
}

promptUser();


// TODO: Create a function to write README file
//writeToFile();

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
// init();
