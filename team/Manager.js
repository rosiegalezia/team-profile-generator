const Employee = require("./Employee")

class Manager extends Employee {
    // In addition to Employee's properties and methods, Manager will also have officeNumber

    constructor(officeNumber) {
        // TODO: Ask Benicio, should this be answers or this?
        super(answers.managerName, answers.managerID, answers.managerEmail)
        this.officeNumber = officeNumber
    }

    getRole() {
        // overridden to return 'Manager'
    }
}

module.exports = Manager