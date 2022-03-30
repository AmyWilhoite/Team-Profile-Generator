const Employee =require('./employee'); 

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        //inherit fro parent 
        super(name, email, id); 
        this.officeNumber = officeNumber; 
    }
    //overide the value 
    getRole(){
        return "Manager";
    }
    
}

// var newManger = new Manager("Test", "test@gmail.com", 1, 234); 
// console.log(newManger.getRole()); 

module.exports = Manager; 