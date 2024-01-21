const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function init() {

    const teamInfo = [
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the team manager's name",
            },
            {
                type: 'input',
                name: 'managerID',
                message: "Please enter the team manager's ID number",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter the team manager's email address",
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "Please enter the team manager's office number",
            },
            {
                type:'list',
                name: 'addMember',
                message: 'What would you like to do next?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            },
            // engineer option chosen
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter the engineer's name",
                when: (answers) => answers['addMember'] === 'Add an engineer',
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "Please enter the engineer's ID number",
                when: (answers) => answers['addMember'] === 'Add an engineer',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter the engineer's email address",
                when: (answers) => answers['addMember'] === 'Add an engineer',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Please enter the engineer's GitHub username",
                when: (answers) => answers['addMember'] === 'Add an engineer',
            },
            // intern option chosen
            {
                type: 'input',
                name: 'internName',
                message: "Please enter the intern's name",
                when: (answers) => answers['addMember'] === 'Add an intern',
            },
            {
                type: 'input',
                name: 'internID',
                message: "Please enter the intern's ID number",
                when: (answers) => answers['addMember'] === 'Add an intern',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter the intern's email address",
                when: (answers) => answers['addMember'] === 'Add an intern',
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter the intern's school",
                when: (answers) => answers['addMember'] === 'Add an intern',
            },
            // work out what to do if 'finish team' is selected
            // either an inquirer 'when' or an if statement
        ])
    ]

}