// // SWITCH STATEMENTS
// // Imagine you have a variety of options or scenarios and you want to
// // perform different actions based on a specific condition or choice.
// // That's where a switch statement comes in handy. It's like having multiple doors,
// //  and depending on which door you choose, something different happens.

// // Explaining Switch Statements:
// // 1. Decision-Making Tool:

// // A switch statement is a decision-making tool in programming that helps you
// choose what to do among several options or cases.
// // It's like a series of doors (cases) you can walk through, and behind each door
// is a different outcome or action.
// // 2. How It Works:
// // You have a variable or value (let's call it the "selector") that you want to
// check against different cases.
// // The switch statement evaluates this "selector" and checks which case matches
// its value.
// // When a match is found, it executes the code associated with that case.

// switch (selector) {
//   case option1:
//     // Code to run if selector matches option1
//     break;
//   case option2:
//     // Code to run if selector matches option2
//     break;
//   case option3:
//     // Code to run if selector matches option3
//     break;
//   case option4:
//     // Code to run if selector matches option4
//     break;
//   default:
//   // Code to run if no cases match
// }

//  Key Components:

// switch: This starts the switch statement and evaluates the "selector".
// case: Each case represents a possible value the "selector" might have.
// break: This tells the program to exit the switch statement after executing
// the code for the matching case.
// default: If none of the cases match the selector, the code inside the default
//  block runs.


// REAL LIFE ANALOGY
// if you have different days of the week (cases), and you want to do something
//  specific on each day, you'd use a switch statement to perform different actions
//   based on the current day.

let day = prompt("Select Day")

switch (day) {
  case "Monday":
    console.log("Let's start the week!");
    break;
  case "Tuesday":
    console.log("Time for some tasks!");
    break;
  // Other days...
  default:
    console.log("Enjoy your day!");
}
// This switch statement checks the day variable and performs different actions based on which day 
// it is. For each day (case), it executes specific code.