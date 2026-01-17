// Create a class Student with constructor and display() method — make 3 students.
class Student {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }
  display() {
    console.log(`Name: ${this.name}, Mark: ${this.mark}`);
  }
}
const s1 = new Student("Suba", 85);
const s2 = new Student("Lajitha", 90);
const s3 = new Student("Mala", 78);
s1.display();
s2.display();
s3.display();
