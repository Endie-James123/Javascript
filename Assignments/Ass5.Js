let mathsScore = Number(prompt("What's your Maths Score?"));
let physicsScore = Number(prompt("Whats your Physics score?"));
let biologyScore = Number(prompt("Whats your Biology score?"));
let computerScore = Number(prompt("Whats your Computer score?"));
let totalScore = mathsScore + physicsScore + biologyScore + computerScore;
if (totalScore >= 60) {
  console.log(`Hurray!! You scored ${totalScore} Out of 80. You Passed`);
} else {
  console.log(`Too bad, You scored ${totalScore} Out of 100. You Failed`);
}
