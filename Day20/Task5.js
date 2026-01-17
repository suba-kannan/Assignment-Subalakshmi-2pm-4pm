// Create another class Manager that inherits from Employee and adds a department.
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Salary: ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayManagerInfo() {
    this.displayInfo();
    console.log(`Department: ${this.department}`);
  }
}
const mgr1 = new Manager("Suba", 50000, "IT");
mgr1.displayManagerInfo();
