//There are two ways to access properties in an object
let myCrush = {
  name: "TrustJah",
  complexion: "Light Skin",
  Friendly: "yes",
}; //Using the Dot notation to access a property in my object
let imaginaryCrush = myCrush.complexion;
console.log(imaginaryCrush);
//Using Bracket Notation to access object properties
let futureCrush = myCrush["name"];
console.log(futureCrush);
//Changing Properties in an Object
myCrush.name = "Joy";
console.log(myCrush.name);
//Adding Properties to an Object
myCrush.witness = true;
myCrush.beautiful = "Yes";
console.log(myCrush.witness);
console.log(myCrush.beautiful);
//Deleting properties from an object
delete myCrush.name;
console.log(myCrush.name);
//Checking if my object has a particular property
function checkObj(checkprop) {
  if (myCrush.hasOwnProperty(checkprop)) {
    return myCrush[checkprop];
  } else {
    return "No such Object";
  }
}
console.log(checkObj("complexion"));
 