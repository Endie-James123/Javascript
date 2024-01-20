let myIdentity = {
  firstName: "James",
  lastName: "Endie",
};
//Adding state to the object array
console.log(myIdentity);
myIdentity.state = "Akwa-Ibom"
console.log(myIdentjity)  
//Deleting firstname object
delete myIdentity.firstName
console.log(myIdentity);
//Showing only the keys
let keys = Object.keys(myIdentity)
console.log(keys);
//Showing only the values
let key = Object.values(myIdentity)
console.log(key);
//Showing the keys and values
let kys = Object.entries(myIdentity)
console.log(kys);

let kes = Object.hasOwnProperty(myIdentity)
console.log(kes);