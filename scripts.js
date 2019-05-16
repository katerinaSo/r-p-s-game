// ------------------game avokes from html on cllick ----------------
function game(choice) {
  const arr = ["s", "r", "p", "s", "r"];
  let personChoice = choice;
  let robotChoice = Math.round(Math.random() * 3);
  let winner;

  

  if (personChoice === arr[robotChoice]) {
    winner = "tie";
  } else if (personChoice === arr[robotChoice - 1]) {
    winner = "robot";
  } else if (personChoice === arr[robotChoice + 1]) {
    winner = "person";
  }


  let person = document.querySelector("#person");
  let robot = document.querySelector("#robot");
  let tie = document.querySelector("#tie");

  robot.className = winner === "robot" ? "orange" : "gamer";
  person.className = winner === "person" ? "orange" : "gamer";
  tie.className = winner === "tie" ? "visible" : "hidden";
}
