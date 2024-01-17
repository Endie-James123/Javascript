// DOM stands for Document Object Model
//DOM Manipulations
//Document Object Module

//Get Element by Id
/*let head = document.getElementById("header")
console.log(head);*/

//Get Element by Class Name
/*let secondHead = document.getElementsByClassName("secondhead")
console.log(secondHead);*/

//Get Element by TagName

/*let pName = document.getElementsByTagName("p")
console.log(pName);*/
/*const title = document.querySelector("#header")
title.style.color = "yellow"
console.log(title);*/

//Styling Elements Using JavaScript
/*const listItems = document.querySelectorAll("li")
for (i=0; i < listItems.length; i++){
    listItems[i].style.color = "red"
}
console.log(listItems);*/

//Adding elements
const addingUl = document.querySelector("ul");
const addingLi = document.createElement("li");
addingUl.append(addingLi);

//Modifying Text
addingLi.innerText = "Testing"
//I use the code below to change the text in my header element
const hhead = document.getElementById("header")
hhead.innerText = "Changing the header"
hhead.style.color ="yellow"
//Changed the id of the paragraph to that of the header to make it have the same styling
const gethead = document.querySelector("p")
gethead.style.color="red"
gethead.setAttribute("id", "header")

//Checking the id or class of an element using JavaScript
console.log(hhead.getAttribute("id"));

//Removing an Element
hhead.remove()

//Using JavaScript to know the parent elements
console.log(gethead.parentNode);
