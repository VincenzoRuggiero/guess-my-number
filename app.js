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

  // When there's no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number! ";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    // Changing background color when winning
    document.querySelector("body").style.backgroundColor = "#60b347";
    // Increasing CPU number box width
    document.querySelector(".number").style.width = "30rem";

    // When guess is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // Game stopping when score reaches 0
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      // Changing background color when losing
      document.querySelector("body").style.backgroundColor = "#FC3153";
    }

    // When guess is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "📉 Too low!";
    } else {
      // Game stopping when score reaches 0
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      // Changing background color when losing
      document.querySelector("body").style.backgroundColor = "#FC3153";
    }
  }
});
