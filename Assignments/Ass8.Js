function isPrime(number) {
    if (number <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If divisible by any number, it's not prime
      }
    }
  
    return true; // If no factors other than 1 and itself, it's prime
  }
  
  // Example usage:
  const userNumber = 1; 
  const result = isPrime(userNumber);
  
  if (result) {
    console.log(`${userNumber} is a prime number.`);
  } else {
    console.log(`${userNumber} is not a prime number.`);
  }
  