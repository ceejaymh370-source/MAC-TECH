const teams = [
  {name: "Lakers", score: 112},
  {name: "Celtics", score: 118},
  {name: "Golden state Warriors", score: 99},
  {name: "Chicago Bulls", score: 100},
];

// shows each team's score 
console.log("Scoreboard");
for (const team of teams){
  console.log (`${team.name}: ${team.score}`);
}

// Find the highest score
let highestScore = teams[0].score;
for (const team of teams) {
  if (team.score > highestScore) {
    highestScore = team.score;
  }
}

// Collect every team that has the highest score
const leaders = [];
for (const team of teams) {
  if (team.score === highestScore) {
    leaders.push(team.name);
  }
}

//Anounce the winner 
if (leaders.length === 1) {
  console.log (`Winner: ${leaders[0]} with ${highestScore} points!`);
} else {
  console.log(`it's a tie between ${leaders.join("  and  ")} with ${highestScore} points!`));
}