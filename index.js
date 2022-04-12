
const Employee = require("./Employee");
const Manager = require("./Manager");

const Engineer = require("./Engineer");
const Intern = require("./AssetsIntern");



const add: Employee  () => {
  return inquirer
      .prompt([
          {
              type:"input",
              message: "What is the team Employee's name?",
              name: "name",
          },
          {
              type:"input",
              message: "What is the team Employee's ID?",
              name: "id",
          },
          {
              type:"input",
              message: "What is the Employee's email address",
              name: "email",
          },
          {
              type:"input",
              message: "What is the team Employee's office number?",
              name: "office",
          },
      ])
      .then((employeeInput) => {
         const employee = new Employee(
             employeeInput.name,
             employeeInput.id,
             employeeInput.email,
             employeeInput.office
         );
         team.push(employee);
          teamSelect();
     });
};

const teamSelect = () => {
  return inquirer
      .prompt([
          {
              type: "list",
              message: "Are you adding more members to the team?",
              name: "select",
              choices: ["Add an engineer", "Add an intern", "Add an Manager","No thank you"],
          },
      ])
      .then((userChoice) => {
          if (userChoice)
      })
