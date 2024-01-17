//Example of an onclick Method
/*let btn = document.querySelector('button')
function addAlert() {
    alert('I also love JavaScript')
    console.log("Me too down here");
}
btn.addEventListener('click', addAlert)

//Example of mouseover method
let Btn2 = document.querySelector('.btn2')

function changeBgColor() {
    Btn2.style.backgroundColor = 'blue'
}
Btn2.addEventListener('mouseover', changeBgColor)*/

const button = document.querySelector(".Button");
const hcontent = document.querySelector(".Hidden");

function showHiddenContent() {
  if (hcontent.classList.contains("Button")) {
    hcontent.classList.remove("Button");
  } else {
    hcontent.classList.add("Button");
  }
}
button.addEventListener("click", showHiddenContent);
 