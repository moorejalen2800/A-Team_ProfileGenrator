const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const path = require('path');
const fs = require('fs');
if (fs.existsSync('./team.html')) {
    fs.unlinkSync('./team.html');
    console.log('folder reset!');
}
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const render = require('./page-template.js');
const { Module } = require("module");

const team = [];
const idArray = [];





function appMenu() {
    function createManager() {
        inquirer.prompt([

            {
                type: "input",
                message: "What is the team Manager's name?",
                name: "managerName",
                validate: (employeeInput) => {

                    if (employeeInput !== '') {
                        return true;
                    }
                    return "Please enter valid Name"
                }
            },
            {
                type: "input",
                message: "What is the team Manager's ID?",
                name: "managerId",
                validate: (employeeInput) => {
                    const pass = employeeInput.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid Number"
                }

            },
            {
                type: "input",
                message: "What is the Employee's email address",
                name: "managerEmail",
                validate: (employeeInput) => {
                    const pass = employeeInput.match(/\S+@\S+\.\S+/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter valid Email address"
                },
            },

        ])
            .then((employeeAnswer) => {
                const manager = new Manager(
                    employeeAnswer.managerName,
                    employeeAnswer.managerId,
                    employeeAnswer.managerEmail,
                    employeeAnswer.managerOffice
                );
                team.push(manager);
                idArray.push(employeeAnswer.managerId);
                teamSelect();
            });

    };



    function createEngineer() {
        inquirer.prompt([

            {
                type: "input",
                message: "What is the team Manager's name?",
                name: "engineerName",
                validate: (employeeInput) => {

                    if (employeeInput !== '') {
                        return true;
                    }
                    return "Please enter valid Name"
                }
            },
            {
                type: "input",
                message: "What is the team Engineer's ID?",
                name: "engineerId",
                validate: (employeeInput) => {
                    const pass = employeeInput.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid Number"
                }

            },
            {
                type: "input",
                message: "What is the Employee's email address",
                name: "engineerEmail",
                validate: (employeeInput) => {
                    const pass = employeeInput.match(/\S+@\S+\.\S+/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter valid Email address"
                },
            },
            {
                type: "input",
                message: "What is the Engineer github",
                name: "engineerGithub",
  
               
            }

        ])
            .then((employeeAnswer) => {
                const engineer = new Engineer(
                    employeeAnswer.engineerName,
                    employeeAnswer.engineerId,
                    employeeAnswer.engineerEmail,
                    employeeAnswer.engineerGithub
                );
                team.push(engineer);
                idArray.push(employeeAnswer.engineerId);
                teamSelect();
            });

    };

    function createIntern() {
        inquirer.prompt([

            {
                type: "input",
                message: "What is the team intern's name?",
                name: "internName",
                validate: (employeeInput) => {

                    if (employeeInput !== '') {
                        return true;
                    }
                    return "Please enter valid Name"
                }
            },
            {
                type: "input",
                message: "What is the team Interns ID?",
                name: "internId",
                validate: (employeeInput) => {
                    const pass = employeeInput.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid Number"
                }

            },
            {
                type: "input",
                message: "What is the Interns School",
                name: "internSchool",
                validate: (employeeInput) => {
                    const pass = employeeInput.match();
                    if (pass) {
                        return true;
                    }
                    return "Please enter valid school"
                },
            },

        ])
            .then((employeeAnswer) => {
                const manager = new Intern(
                    employeeAnswer.internName,
                    employeeAnswer.internId,
                    employeeAnswer.internSchool,
                
                );
                team.push(manager);
                idArray.push(employeeAnswer.managerId);
                teamSelect();
            });

    };



    const teamSelect = () => {
        return inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which type of team member would you like to add?",
                    name: "select",
                    choices: ["Add an Engineer", "Add an Intern", "Add an Manager", "No thank you"],
                },
            ])
            .then((userChoice) => {
                switch (userChoice.select) {
                    case "Add an Engineer":
                        createEngineer();
                        break;
                    case "Add an Intern":
                        createIntern();
                        break;
                    default:
                        createPage();
                }
            });
    }

    function createPage() {

        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(team), 'utf-8');
    }

    createManager();



}
appMenu();



          
 
