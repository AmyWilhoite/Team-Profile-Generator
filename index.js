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
const Prompt = require('inquirer/lib/prompts/base');

// TODO: identify output location

// TODO: Create array for employee data inputs, parent object
function Prompt () {
  
  return inquirer
  .prompt([
          {
            type: 'input',
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
        ])
    .then(({pickRole, employeeID, name, email}) => {
      if(role ==='Manager') {
        return inquirer
        .prompt([
        // if manager include office number + override role
          {
            type: 'input',
            name: 'officePhone',
            message: 'What is your office phone number?',
          }, 
          {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another team member?',
            default: false;
          }])
        .then(({officePhone, addAnother}) => {
          manager.push(newManager(employee, id, email, officePhone))
          if (addAnother) {
            return Prompt();
          }
        })
      } else if (role === "Engineer"){return inquirer
        .prompt([
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
    }])

    .then(({gitHub, githubLink, addAnother}) => {
      engineer.push(newEngineer(employee, id, email, gitHub, githubLink))
      if (addAnother) {
        return Prompt();
      }
    })

    } else if (role === "Intern"){
      return inquirer
      .prompt([
     // if intern include school
     {
      type: 'input',
      name: 'school',
      message: 'What is your school name?',
    }])

  .then(({school, addAnother}) => {
    intern.push(newIntern(employee, id, email, school))
    if (addAnother) {
      return Prompt();
    }
  })
};

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
  
    }

// Function call to initialize app
init();