const Employee =require('./employee'); 

class Engineer extends Employee{
    constructor(name, email, id, gitHub, githubLink){
        //inherit from parent 
        super(name, email, id); 
        this.gitHub = gitHub; 
        this.githubLink = githubLink;
    }
    //override the value 
    getRole(){
        return "Engineer";
    }

}

// var newEngineer = new Engineer("TESTY", "testy@gmail.com", 1, 234); 
// console.log(newEngineer.getRole()); 

module.exports = Engineer; 