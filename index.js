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
        {
            type: 'list',
            name: 'addMember',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        },
    ]

    // // Define the questions asked if answers.addMember is equal to 'Add an engineer' or 'Add an intern'
    // const employeeQuestionsArr = [
    //     {
    //         type: 'input',
    //         name: 'employeeName',
    //         message: "Please enter the employee's name",
    //     },
    //     {
    //         type: 'number',
    //         name: 'employeeID',
    //         message: "Please enter the employee's ID number",
    //     },
    //     {
    //         type: 'input',
    //         name: 'employeeEmail',
    //         message: "Please enter the employee's email address",
    //     },
    // ]

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
        {
            type: 'list',
            name: 'addMember',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
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
        {
            type: 'list',
            name: 'addMember',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        },
    ]

    // Create an HTML file using the HTML returned from the render function.
    // Write it to a file named team.html in the output folder.
    // You can use the provided variable outputPath to target this location.

    function manager() {
        inquirer.prompt(managerQuestionsArr)
            .then((answers) => {
                const manager = new Manager(
                    answers.name,
                    answers.ID,
                    answers.email,
                    answers.officeNumber,
                )
                team.push(manager)

                if (answers.addMember === 'Add an intern') {
                    intern()
                }
                else if
                    (answers.addMember === 'Add an engineer') {
                    engineer()
                } else {
                    writeFile()
                }

            })
    }

    function intern() {
        inquirer.prompt(internQuestionsArr)
            .then((answers) => {
                const intern = new Intern(
                    answers.name,
                    answers.ID,
                    answers.email,
                    answers.school,
                )
                team.push(intern)

                if (answers.addMember === 'Add an intern') {
                    intern()
                }
                else if
                    (answers.addMember === 'Add an engineer') {
                    engineer()
                } else {
                    writeFile()
                }
            })
    }

    function engineer() {
        inquirer.prompt(engineerQuestionsArr)
            .then((answers) => {
                const engineer = new Engineer(
                    answers.name,
                    answers.ID,
                    answers.email,
                    answers.github,
                )
                team.push(engineer)

                if (answers.addMember === 'Add an intern') {
                    intern()
                }
                else if
                    (answers.addMember === 'Add an engineer') {
                    engineer()
                } else {
                    writeFile()
                }
            })
    }

    manager()

}

function writeFile() {
    
    // Call the render function and pass in an array containing all employee objects;
    // The render function will generate and return a block of HTML including templated divs for each employee!

    console.log(team)
    const renderTeam = render(team)
    
    fs.writeFile(outputPath, renderTeam, (err) =>
        err ? console.error(err) : console.log('Team page created!')
    );
}

// call the function to initialise program
init()