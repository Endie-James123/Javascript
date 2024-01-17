/*function salutation(){
    console.log("Hello World");
}
salutation()*/

//Passing Values to Functions with Argument

/*function yearConverter(){
    let currentYear = 2023
    let yearOfBirth = Number(prompt("Input year of birth"))
    console.log(currentYear - yearOfBirth);
}
yearConverter()*/

//Global vs Local Scope in Functions

/*let myOutFit = "T-Shirt"
function outWear(){
    return myOutFit
}
console.log(outWear());
console.log(myOutFit);*/

/*function testing(istrue){
    if (istrue){
        return "Yes it's true"
    }
    return "Nope, a'int true"
}
console.log(testing())*/

let performance = [
  "Fail!",
  "Very Poor!",
  "Fair",
  "Good",
  "Very Good",
  "Excellent",
];
function studentGrade(studentPerformance){
    const overAll = 150
    if (studentPerformance <= 10) {
        return performance[0]
    }else if (studentPerformance > 10 && studentPerformance <= 20 ){
        return performance[1]
    }else if (studentPerformance > 20 && studentPerformance <= 30 ){
        return performance[2]
    }
}
console.log(studentGrade(30));