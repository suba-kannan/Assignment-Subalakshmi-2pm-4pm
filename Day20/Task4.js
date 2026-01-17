// Create a class Employee with name and salary — add a method to display info.
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
const emp1 = new Employee("Suba", 30000);
emp1.displayInfo();
