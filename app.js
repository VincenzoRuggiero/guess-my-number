"use strict";

// CPU random number generator;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// Supporting variable to update user's score
let score = 20;

// User input 'Check' logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number! ";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // Game stopping when score reaches 0
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "📉 Too low!";
    } else {
      // Game stopping when score reaches 0
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
