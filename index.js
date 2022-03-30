// packages 
// TODO: include jest
const generateHTML = require('./src/generateHTML'); //get HTML template
const fs = require('fs');
const inquirer = require('inquirer');


// team profile
const employee = require("./lib/employee");
const manager = require ("./lib/manager");
const engineer = require ("./lib/engineer");
const intern = require ("./lib/intern");

// TODO: identify output location


let addEmployee = [];


// TODO: Create array for employee data inputs, parent object
// all employee have these basic fields
function promptUser () {
  return inquirer.prompt([
          {
            type: 'list',
            name: 'pickRole',
            message: 'Which team member would you like to add?',
            choices: [ 'Manager', 'Engineer', 'Intern', 'Generate HTML'],
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
          }])
         // if manager include office number & offer to add next
          .then(({pickRole, employeeID, name, email}) => {
            if(pickRole ==='Manager') {
              return inquirer
                  .prompt([
                    {
                      type: 'input',
                      name: 'officePhone',
                      message: 'What is your office phone number?',
                    }, 
                    {
                      type: 'confirm',
                      name: 'addAnother',
                      message: 'Would you like to add another team member?',
                      default: false
                    }
                  ]) 
                  .then(({officePhone, addAnother}) => {
                        manager.push(addEmployee(employee, employeeID, email, officePhone))
                        if (addAnother) {
                          return promptUser();
                        }
                      })
              // if engineer include Github + repository      
              } else if (pickRole === "Engineer"){
                return inquirer
                  .prompt([
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
                engineer.push(addEmployee(employee, employeeId, email, gitHub, githubLink))
                if (addAnother) {
                  return promptUser();
                }
              })

            } else if (pickRole === "Intern"){
              return inquirer
              .prompt([
            // if intern include school //child 3
            {
              type: 'input',
              name: 'school',
              message: 'What is your school name?',
            }])

            .then(({school, addAnother}) => {
              intern.push(newIntern(employee, id, email, school))
              if (addAnother) {
                return promptUser();
              }
            })
        }else {
          //build the html page 
          console.log("building html")
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
  // inquirer 
  // .prompt()
  // .then ((data) => writeToFile(data.title, data))
  promptUser();

  };

// Function call to initialize app
init();