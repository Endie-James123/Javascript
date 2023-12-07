// Write a program that gets a number from the user and determines if the number is an even or odd Number.


// Prompting the user to enter a number
const userInput = Number(prompt("Enter your number: "))

// Checking if the number is even or odd
if (userInput % 2 === 0){
    console.log(`${userInput} is an even number.`)
}else{
    console.log(`${userInput} is an odd number`)
}