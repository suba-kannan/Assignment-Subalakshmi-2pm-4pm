// Use prototypes to add a new method to all Student objects dynamically.
class Student {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }
  display() {
    console.log(`Name: ${this.name}, Mark: ${this.mark}`);
  }
}
Student.prototype.grade = function () {
  if (this.mark >= 80) return "A";
  else if (this.mark >= 60) return "B";
  else return "C";
};
const s1 = new Student("Suba", 85);
const s2 = new Student("Anu", 72);
console.log(s1.grade());
console.log(s2.grade());
