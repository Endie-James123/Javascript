// Prompting the user to enter the first number
const firstNumber = Number(prompt("Enter the first number:"));

// Prompting the user to enter the second number
const secondNumber = Number(prompt("Enter the second number:"));
// Comparing the numbers and printing the result
if (firstNumber > secondNumber) {
  console.log(`${firstNumber} is greater than ${secondNumber}.`);
} else if (secondNumber > firstNumber) {
  console.log(`${secondNumber} is greater than ${firstNumber}.`);
} else {
  console.log("Both numbers are equal.");
}
