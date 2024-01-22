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


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function init() {

    // Define the default questions
    const managerQuestionsArr = [
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the team manager's name",
        },
        {
            type: 'number',
            name: 'managerID',
            message: "Please enter the team manager's ID number",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the team manager's email address",
        },
        {
            type: 'number',
            name: 'managerOffice',
            message: "Please enter the team manager's office number",
        },
        // {
        //     type: 'list',
        //     name: 'addMember',
        //     message: 'What would you like to do next?',
        //     choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        // },
    ]

    // Define the questions asked if answers.addMember is equal to 'Add an engineer' or 'Add an intern'
    const employeeQuestionsArr = [
        {
            type: 'input',
            name: 'employeeName',
            message: "Please enter the employee's name",
        },
        {
            type: 'number',
            name: 'employeeID',
            message: "Please enter the employee's ID number",
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please enter the employee's email address",
        },
    ]

    // Define the questions asked if answers.addMember is equal to 'Add an engineer'
    const engineerQuestionsArr = [
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter the engineer's GitHub username",
            when: (answers) => answers['addMember'] === 'Add an engineer',
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
            name: 'internSchool',
            message: "Please enter the intern's school",
            when: (answers) => answers['addMember'] === 'Add an intern',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        },
    ]

    // work out what to do if 'finish team' is selected
    // either an inquirer 'when' or an if statement


    // Call the render function and pass in an array containing all employee objects;
    // The render function will generate and return a block of HTML including templated divs for each employee!

    // TODO: Ask Benicio how to pass in array, forEach??

    // Create an HTML file using the HTML returned from the render function.
    // Write it to a file named team.html in the output folder.
    // You can use the provided variable outputPath to target this location.
    // TODO: Ask Benicio, do I call this from within the class?
    // TODO: How does OUTPIUT_DIR work??

    function manager(){
        inquirer.prompt(managerQuestionsArr)
        .then((answers) =>
        const manager = new Manager(
            answers.maagerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOffice,
        )
        team.push(manager)
        )
    }

    // function managerQuestions() {
    //     inquirer.prompt(managerQuestionsArr)
    //         .then((answers) => {

    //             const renderTeam = render(answers)

    //             if (answers.addMember === 'Add an engineer') {
    //                 inquirer.prompt(employeeQuestionsArr)
    //                 inquirer.prompt(engineerQuestionsArr)
    //             } else
    //                 if (answers.addMember === 'Add an intern') {
    //                     inquirer.prompt(employeeQuestionsArr)
    //                     inquirer.prompt(internQuestionsArr)
    //                 } else {
    //                     fs.writeFile('team.html', renderTeam, (err) =>
    //                         err ? console.error(err) : console.log('Success!')
    //                     );
    //                 }
    //         })
    // }

    managerQuestions()

}





// call the function to initialise program
init()