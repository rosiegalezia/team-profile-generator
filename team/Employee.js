class Employee {

    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

        // TODO: Ask Benicio, do I need to define the methods in here?
        // TODO: if so, how as the inquirer name specifies the role (or should I split the inquirer questions up?)
    getName(){}
    getId(){}
    getEmail(){}
    getRole(){
        // returns 'Employee'
    }

}

module.exports = Employee