class Intern extends Employee {
    
    constructor(school){
        this.school = school
    }

    getSchool(){

    }

    getRole(){
        // overridden to return 'Intern'
    }

}

module.exports = Intern