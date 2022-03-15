// packages 
// TODO: include jest
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML'); //get HTML template

// team profile
const employee = require("./lib/employee");
const manager = require ("./lib/manager");
const engineer = require ("./lib/engineer");
const intern = require ("./lib/intern");

// TODO: identify output location

// TODO: Create array for employee data inputs
const addEmployee = [
          {
            type: 'list',
            name: 'pickRole',
            message: 'Which team member would you like to add?',
            choices: [ 'Manager', 'Engineer', 'Intern'],
          },       
          {
            type: 'input',
            name: 'employeeID',
            message: 'What is the team member employee ID?',
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is the team member name?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is the team member email?',
          },
    ];

 // if manager include office number + override role
    {
      type: 'input',
      name: 'officePhone',
      message: 'What is your office phone number?',
    },
    

  // if engineer include Github + repository + over ride role
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is your github username?',
    },

    {
      type: 'input',
      name: 'githubLink',
      message: 'What is your github repository url?',
    },


    // if intern include school
    {
      type: 'input',
      name: 'school',
      message: 'What is your school name?',
    },



// function to write HTML file
// syntax: fs.writeFile( file, data, options, callback )
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".html", generateHTML(data), (err) =>
    err ? console.log(err) : console.log('Success!!!'))
};

// function to initialize app
function init() {
    inquirer
    .prompt(addEmployee)
    .then ((data) => writeToFile(data.title, data))
};

// Function call to initialize app
init();