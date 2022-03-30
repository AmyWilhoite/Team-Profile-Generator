const Employee =require('./employee'); 

class Manager extends Employee{
    constructor(name, email, id, officePhone){
        //inherit from parent 
        super(name, email, id); 
        this.officePhone = officePhone; 
    }
    //override the value 
    getRole(){
        return "Manager";
    }

}

// var newManger = new Manager("Test", "test@gmail.com", 1, 234); 
// console.log(newManger.getRole()); 

module.exports = Manager; 