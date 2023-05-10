// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
console.log("generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{ 
    type: 'input',
    message: 'Title of Read Me:',
    name:'title'

},{
    type: 'input',
    message: 'Description of project:',
    name:'description'
},
{
    type: 'input',
    message: 'Installation instruction:',
    name:'installation'
},
{
    type: 'input',
    message: 'usage information:',
    name:'usage'
},
{
    type: 'input',
    message: 'Contribution guidelines:',
    name:'contribution'
},
{
    type: 'input',
    message: 'Testing instructions:',
    name:'testing'
},
{
    type: 'list',
      message: 'Select a licneses:',
      name: 'licnes',
      choices:['Apache 2.0','BSD 3-Clause','MIT','No licnesess']
},
{
    type: 'input',
    message: 'What is your github user name? :',
    name:'gitHub'
},
{
    type: 'input',
    message: 'Enter your email? :',
    name:'email'
},

];

// TODO: Create a function to write README file This function creates the ReadMe Folder 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.error(err): console.log('ReadMe has been successfully made '))
}

// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then(data => {
        writeToFile('README.md', data)
       
        
    })
}

// Function call to initialize app
init();
