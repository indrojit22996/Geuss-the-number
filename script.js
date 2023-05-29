let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 100;
let highscore = 0;
let check = document.querySelector(".check");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
  if(message==="📈 Too high!"){
    console.log('h')
    document.querySelector("body").style.backgroundColor = "#FF6D60";
  }else{
    console.log('l')
    document.querySelector("body").style.backgroundColor = "#E5D1FA";
  }
};

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;


    document.querySelector("body").style.backgroundColor = "#60b387";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").classList.add("h1");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").classList.add("h2")
  document.querySelector(".number").textContent = "Hidden Number";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#AEE2FF";
});
