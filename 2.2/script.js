//counters for the rps game
let wins = 0;
let loss = 0;
let draws = 0;

/*generates a random number to get a random result for the AI to use. 
Then compares the outcome with the player choice in order to desicde status of game. 
Finally calls update function
*/
function rps(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[Math.floor(Math.random() * choices.length)];
  let status;
  if (userChoice === botChoice) {
    draws++;
    console.log("It's a draw!");
    status = "draw";
  } else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "scissors" && botChoice === "paper") ||
    (userChoice === "paper" && botChoice === "rock")
  ) {
    wins++;
    console.log("You win!");
    status = "win";
  } else {
    loss++;
    console.log("You lose!");
    status = "loss";
  }

  updateRecord(status, userChoice, botChoice);
}

//handles the records and updates the visual elements accordingly
function updateRecord(status, userChoice, botChoice) {
  if (userChoice) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(
      "Player: " +
        userChoice +
        ", AI Choice: " +
        botChoice +
        ", Result: " +
        status
    );
    node.appendChild(textnode);
    document.getElementById("rpsresults").appendChild(node);
  }
  document.getElementById("playerpick").innerHTML =
    "Player Picked: " + userChoice;
  document.getElementById("aipick").innerHTML = "AI Picked: " + botChoice;
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("loss").innerHTML = "Losses: " + loss;
  document.getElementById("draws").innerHTML = "Draws: " + draws;
}

//shows/hides the rps game
function playrps() {
  if (document.getElementById("rpsgame").style.visibility == `hidden`) {
    document.getElementById("rpsgame").style.visibility = `visible`;
    document.getElementById("rpsrecord").style.visibility = `visible`;
    document.getElementById("playrpsbutton").innerHTML = "Hide";
  } else {
    document.getElementById("rpsgame").style.visibility = `hidden`;
    document.getElementById("rpsrecord").style.visibility = `hidden`;
    document.getElementById("playrpsbutton").innerHTML = "Play Now!";
  }
}

//run on first load so that the page looks fully loaded.
updateRecord();
