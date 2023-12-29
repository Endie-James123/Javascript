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

let myOutFit = "T-Shirt"
function outWear(){
    return myOutFit
}
console.log(outWear());
console.log(myOutFit);