class Manager extends Employee {
    // In addition to Employee's properties and methods, Manager will also have officeNumber

    constructor(officeNumber) {
        this.officeNumber = officeNumber
    }

    getRole() {
        // overridden to return 'Manager'
    }
}

module.exports = Manager