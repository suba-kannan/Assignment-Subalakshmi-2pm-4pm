// Marks to Grade Converter
function getGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 80) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 50) return "D";
  else return "Fail";
}
let grade = getGrade(78);
console.log("Grade:", grade);
