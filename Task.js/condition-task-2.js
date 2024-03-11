// Function to calculate BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
  }
  
  // Function to determine health category
  function BodyMass(bmi) {
    if (bmi < 18.5) {
      return "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "You are normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "You are overweight.";
    } else {
      return "You are obese.";
    }
  }
  
  // Example usage
  var weight = 70;  // in kilograms
  var height = 1.75;  // in meters
  
  var bmi = calculateBMI(weight, height);
  var healthCategory = BodyMass(bmi);
  
  console.log("Your BMI is: " + bmi.toFixed(2));
  console.log(healthCategory);
  