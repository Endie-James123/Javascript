const hasLicence = prompt("Do you have a driving licence? (yes or no)");
const goodVision = prompt("Do you have a good vision (yes or no)");
const yes = true;
const no = false;
if (hasLicence && goodVision === yes) {
  console.log("you are eligible to drive a car");
} else {
  console.log("you are not eligible to drive a car");
}
