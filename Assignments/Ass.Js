//Writing a programme that reverse a string using javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
const inputString = prompt("Enter your string");
const reversedString = alert(reverseString(inputString));
console.log(reversedString);
