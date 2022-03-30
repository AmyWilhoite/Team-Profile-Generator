// packages 
// TODO: include jest
const generateHTML = require('./src/generateHTML'); //get HTML template
const fs = require('fs');
const inquirer = require('inquirer');


// team profile
const Intern = require ("./lib/intern");
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

// TODO: identify output location

let manager = [];
let engineer = [];
let intern = [];
let addEmployee = {manager, engineer, intern};


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
            name: 'id',
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
          .then(({pickRole, id, name, email}) => {
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
                        manager.push(new Manager (name, id, email, officePhone))
                        console.log(addEmployee)
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
                engineer.push(new Engineer(name, id, email, gitHub, githubLink))
                console.log(addEmployee)
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
              intern.push(new Intern(name, id, email, school))
              if (addAnother) {
                return promptUser();
              }
             else  {
              //build the html page 
                console.log("building html")
              }
            })
          }
        });

// function to write HTML file
// syntax: fs.writeFile( file, data, options, callback )
function writeToFile(fileName, data) {
    fs.writeFile('./dist/index.html', generateHTML(data), (err) =>
    err ? console.log(err) : console.log('Success!!!'))
};

// function to initialize app
function init() {
  // inquirer 
  // .prompt()
  // .then ((data) => writeToFile(data.title, data))
 promptUser()
  .then(createTeam =>
    return generateHTML(addEmployee)
  })
   .then (popHTML =>{
     return fs.writeFile(popHTML)
   })

   // Function call to initialize app 
init();