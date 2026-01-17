// BMI Calculator Function
function calculateBMI(weight, height) {
  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
}
let result = calculateBMI(1.65, 60);
console.log("Your BMI is:", result);
