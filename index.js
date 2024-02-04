const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
            name: 'projectTitle',
            message: 'What is the title of your project?',
            type: 'input'
        },
        {
            name: 'description',
            message: 'Describe your project:',
            type: 'input'
        },
        {
            name: 'install',
            message:'Does your app require installation?',
            type: 'input'
        },
        {
            name: 'usage',
            message: 'What are the instructions to use it?',
            type: 'input'
        },
        {
            name: 'license',
            message: 'What licence do you require?',
            type: 'list',
            choices: ['MIT','Apache', 'GPL']
        },
        {
            name: 'contribute',
            message: 'Please explain any guidelines for other developers if you are open to contributions:',
            type: 'input'
        },
        {
            name: 'tests',
            message: 'Are there any tests for your project?',
            type: 'input'
        },
        {
            name: 'githubID',
            message: 'Enter your GitHub username:',
            type: 'input'
        },
        {
            name: 'githubURL',
            message: 'Please provide the URL to your GitHub profile:',
            type: 'input'
        },
        {
            name: 'email',
            message: 'Please enter your email address:',
            type: 'input'
        }
    ];


// function to write README file
function writeToFile(projectTitle, data) {
    return fs.writeFile('README.md', data, (error) => {
        if (error) {
            return console.log(error);
        } else{
            console.log(`-------You have successfully created your README file for: ${projectTitle}!-------`);
        }
    });
}

// function to initialize program
function init() {
    console.log('------Welcome to the README Generator!------');
    inquirer.prompt(questions).then((answers) => {
        console.log({answers});
        const markdown = generateMarkdown(answers);
        console.log({markdown});
        writeToFile(answers.projectTitle, markdown);
    })
}

// function call to initialize program
init();
