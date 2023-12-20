//Writing a programme that reverses a string
function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Example usage:
const inputString = prompt("Enter your string")
const reversedString = alert(reverseString(inputString));
console.log(reversedString);
