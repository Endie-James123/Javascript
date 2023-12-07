// Prompting the user to enter Temperature
const userTemp = Number(prompt("Enter your Temperature in Celcuis."));
// Converting Users Temperature in Celcuis to Fahrenheit
const fahTemp = (userTemp * 9) / 5 + 32;
console.log(`You are ${fahTemp} Degrees Fahrenheit.`)
