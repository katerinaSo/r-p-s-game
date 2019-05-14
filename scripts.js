// ------------------game avokes from html on cllick ----------------
function game(choice) {
  var arr = ["s", "r", "p", "s", "r"];
  var personChoice = choice;
  var robotChoice = Math.round(Math.random() * 3);
  var winner;

  var person = document.querySelector("#person");
  var robot = document.querySelector("#robot");
  var tie = document.querySelector("#tie");

  if (personChoice === arr[robotChoice]) {
    winner = "tie";
  } else if (personChoice === arr[robotChoice - 1]) {
    winner = "robot";
  } else if (personChoice === arr[robotChoice + 1]) {
    winner = "person";
  }

  robot.className = winner === "robot" ? "orange" : "gamer";
  person.className = winner === "person" ? "orange" : "gamer";
  tie.className = winner === "tie" ? "visible" : "hidden";
}
