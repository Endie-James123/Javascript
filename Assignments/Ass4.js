let yearOfBirth = Number(prompt("what is your birthyear"));
const currentYear =2023
if (yearOfBirth >= 1922 && yearOfBirth <= 1927) {
  console.log(`You are ${currentYear - yearOfBirth} years old`);
} else if (yearOfBirth >= 1928 && yearOfBirth <= 1945) {
  console.log(`You are ${currentYear - yearOfBirth} years old so you belong to the Post War Generation.`);
} else if (yearOfBirth >= 1946 && yearOfBirth <= 1954) {
  console.log(`You are ${currentYear - yearOfBirth} years old so you belong to the Boomers I* Generation.`);
} else if (yearOfBirth >= 1955 && yearOfBirth <= 1964) {
  console.log(`You are ${currentYear - yearOfBirth} years old so you belong to the boomers II (a/k/a Generation Jones)*.`);
} else if (yearOfBirth >= 1965 && yearOfBirth <= 1980) {
  console.log(`You are ${currentYear - yearOfBirth}years old so you belong to the Gen X Generation.`);
} else if (yearOfBirth >= 1981 && yearOfBirth <= 1996) {
  console.log(`You are ${currentYear - yearOfBirth}years old so you belong to the Millennials.`);
} else if (yearOfBirth >= 1997 && yearOfBirth <= 2012) {
  console.log(`You ${currentYear - yearOfBirth}years old so you belong to the Gen Z Generation.`);
} else {
  console.log(`You're a very small boy of ${2023 - yearOfBirth}`);
}
