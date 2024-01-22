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
const { add } = require("lodash");

const team = []

function init() {

    // Define the default questions
    const managerQuestionsArr = [
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name",
        },
        {
            type: 'number',
            name: 'ID',
            message: "Please enter the team manager's ID number",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email address",
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter the team manager's office number",
        },
    ]

    // Define the questions asked if answers.addMember is equal to 'Add an engineer'
    const engineerQuestionsArr = [
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name",
        },
        {
            type: 'number',
            name: 'ID',
            message: "Please enter the engineer's ID number",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username",
        },
    ]

    // Define the questions asked if answers.addMember is equal to 'Add an intern'
    const internQuestionsArr = [
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name",
        },
        {
            type: 'number',
            name: 'ID',
            message: "Please enter the intern's ID number",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
        },
    ]

    function addMember() {

        // ask user if they want to add another employee or finish
        inquirer.prompt({
            type: 'list',
            name: 'addMember',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        })
            .then((answers) => {
                if (answers.addMember === 'Add an intern') {
                    intern()
                }
                else if (answers.addMember === 'Add an engineer') {
                    engineer()
                }
                else {
                    writeFile()
                }
            })
    }

    function manager() {
        // pass the initial questions to the inquirer to get user inputs

        inquirer.prompt(managerQuestionsArr)

            .then((answers) => {

                const manager = new Manager(
                    answers.name,
                    answers.ID,
                    answers.email,
                    answers.officeNumber,
                )
                team.push(manager)

                // see if user wants to add another employee or finish
                addMember()
            })


    }

    function intern() {

        // pass the intern-specific questions to the inquirer to get user inputs
        inquirer.prompt(internQuestionsArr)

            .then((answers) => {

                // pass in the employee details obtained by Inquirer to the constructor function
                const intern = new Intern(
                    answers.name,
                    answers.ID,
                    answers.email,
                    answers.school,
                )

                // push the newly created subclass to the 'team' array
                team.push(intern)

                // see if user wants to add another employee or finish
                addMember()
            })


    }

    function engineer() {

        // pass the engineer-specific questions to the inquirer to get user inputs
        inquirer.prompt(engineerQuestionsArr)

            .then((answers) => {

                // pass in the employee details obtained by Inquirer to the constructor function
                const engineer = new Engineer(
                    answers.name,
                    answers.ID,
                    answers.email,
                    answers.github,
                )

                // push the newly created subclass to the 'team' array
                team.push(engineer)

                // see if user wants to add another employee or finish
                addMember()
            })


    }

    // call the manager function to trigger the first series of questions.
    manager()

}

// function to create the HTML page
function writeFile() {

    // calls the render function, passing in the 'team' array
    // this will generate and return a block of HTML including templated divs for each employee
    const renderTeam = render(team)

    fs.writeFile(outputPath, renderTeam, (err) =>
        err ? console.error(err) : console.log('Team page created!')
    );
}

// call the function to initialise program
init()