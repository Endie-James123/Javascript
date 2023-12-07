const ageLimit = 18;
const userAge = Number(prompt("Enter your age."));
if (userAge >= ageLimit) {
  console.log("You are elligible to vote");
} else {
    console.log(
        `Sorry boy! you are not old enough to vote. come back in ${ageLimit - userAge}years time`
    )
}