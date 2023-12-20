function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage:
  const userNumber = 16;
  const result = checkEvenOrOdd(userNumber);
  
  console.log(`${userNumber} is ${result}.`);
  