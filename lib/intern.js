const Employee =require('./employee'); 

class Intern extends Employee{
    constructor(name, email, id, school){
        //inherit from parent 
        super(name, email, id); 
        this.school = school;
    }
    //override the value 
    getRole(){
        return "Intern";
    }

}

// var newIntern = new Intern("TESTY", "testy@gmail.com", 1, 234); 
// console.log(newIntern.getRole()); 

module.exports = Intern; 