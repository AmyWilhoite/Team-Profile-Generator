// packages 
// include jest
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML'); //get HTML template

// team profile
const employee = require("./lib/employee");
const manager = require ("./lib/manager");
const engineer = require ("./lib/engineer");
const intern = require ("./lib/intern");

// TODO: Create array for personnel data inputs
const addPersonnel = [
        {
          type: 'input',
          name: 'title',
          message: 'What is your name?',
        },
        
    ];

// function to write HTML file
// syntax: fs.writeFile( file, data, options, callback )
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".html", generateHTML(data), (err) =>
    err ? console.log(err) : console.log('Success!!!'))
};

// function to initialize app
function init() {
    inquirer
    .prompt(addPersonnel)
    .then ((data) => writeToFile(data.title, data))
};

// Function call to initialize app
init();