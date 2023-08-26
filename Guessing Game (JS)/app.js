let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

let guessCount = 1;

const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Take a guess");

while (parseInt(guess) !== targetNum) {
  if (guess.toLowerCase() === "q") {
    break;
  }

  if (guess > targetNum) {
    guess = prompt("Too high! Guess again...");
    guessCount++;
  } else {
    guess = prompt("Too low! Guess again...");
    guessCount++;
  }
}

if (guess.toLowerCase() === "q") {
  alert("Quitter!");
} else {
  alert(`You've guessed it in ${guessCount} times`);
}
