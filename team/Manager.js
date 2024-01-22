const Employee = require("./Employee")

class Manager extends Employee {

    // In addition to Employee's properties and methods, Manager will also have officeNumber
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        // overridden to return 'Manager'
        return ' Manager'
    }
}

module.exports = Manager