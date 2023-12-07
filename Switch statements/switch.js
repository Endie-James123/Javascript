// // // // SWITCH STATEMENTS
// // Switch statements are control flow structures in programming languages that
//  allow a program to perform different actions based on the value of a variable 
//  or expression. They provide an organized way to execute different code blocks 
//  depending on the evaluated value of a single variable or expression.

// // Key Components of Switch Statements:
// // Selector or Expression or variable:

// // The switch statement begins with an expression or variable called the 
// "selector". This value is evaluated against different cases.
// // Cases:

// // Cases represent various possible values or conditions that the selector might
//  match. Each case contains a specific value or condition to compare against the selector.
// // Code Blocks:

// // For each case, there's a corresponding block of code that executes if the
//  value of the selector matches that case.
// // Break Statements:

// // Within each case block, a break statement is used to exit the switch statement
//  after executing the code for the matched case. This prevents the execution of 
//  subsequent case blocks.
// // Default Case (Optional):

// // A default case is provided as a catch-all in case none of the specified cases 
// match the selector's value. It's optional and executes when there is no exact 
// match.

// // // // Explaining Switch Statements:
// // // // 1. Decision-Making Tool:

// // // // 2. How It Works:
// // // // You have a variable or value (let's call it the "selector") that you want to
// // // check against different cases.
// // // // The switch statement evaluates this "selector" and checks which case matches
// // // its value.
// // // // When a match is found, it executes the code associated with that case.

// // // switch (selector) {
// // //   case option1:
// // //     // Code to run if selector matches option1
// // //     break;
// // //   case option2:
// // //     // Code to run if selector matches option2
// // //     break;
// // //   case option3:
// // //     // Code to run if selector matches option3
// // //     break;
// // //   case option4:
// // //     // Code to run if selector matches option4
// // //     break;
// // //   default:
// // //   // Code to run if no cases match
// // // }

// // //  Key Components:

// // // switch: This starts the switch statement and evaluates the "selector".
// // // case: Each case represents a possible value the "selector" might have.
// // // break: This tells the program to exit the switch statement after executing
// // // the code for the matching case.
// // // default: If none of the cases match the selector, the code inside the default
// // //  block runs.


// // // REAL LIFE ANALOGY
// // // if you have different days of the week (cases), and you want to do 
// something
// // //  specific on each day, you'd use a switch statement to perform different
//  actions
// // //   based on the current day.

let day = "tuesday"

switch (day) {
  case "monday":
    console.log("Let's start the week!");
    break;
  case "tuesday":
    console.log("Time for some tasks!");
    break;
  // Other days...
  default:
    console.log("Enjoy your day!");
}
// // // This switch statement checks the day variable and performs different 
// actions based on which day it is. For each day (case), it executes specific code.