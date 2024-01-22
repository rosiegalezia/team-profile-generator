const Employee = require("./team/Employee.js")
const Manager = require("./team/Manager.js");
const Engineer = require("./team/Engineer.js");
const Intern = require("./team/Intern.js");
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
                type: 'list',
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

            // Call the render function and pass in an array containing all employee objects;
            // The render function will generate and return a block of HTML including templated divs for each employee!

            // TODO: ASk Benicio how to pass in array, forEach???

            .then((answers) => {
                
                const renderHTML = render(answers)

                fs.writeFile('team.html', renderHTML, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
            })


        // Create an HTML file using the HTML returned from the render function.
        // Write it to a file named team.html in the output folder.
        // You can use the provided variable outputPath to target this location.
        // TODO: Ask Benicio, do I call this from within the class?
        // TODO: How does OUTPIUT_DIR work??
    ]

}

// call the function to initialise program
init()