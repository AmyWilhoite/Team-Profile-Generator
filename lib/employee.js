class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  //Methods
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// var newEmployee = new Employee("Amy", "1", "test@gmail.com"); 
// console.log(newEmployee.getRole()); 

module.exports = Employee;
