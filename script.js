document.addEventListener("DOMContentLoaded", function () {
  const targetNumber = Math.floor(Math.random() * 10 + 1);

  const guessForm = document.getElementById("guessForm");
  let userGuessInput = document.getElementById("userGuess");
  let feedback = document.getElementById("feedback");
  let countTrack = document.getElementById("counter");
  let counter = 0;

  guessForm.addEventListener("submit", function (e) {
    e.preventDefault();
    checkGuess();
  });

  function checkGuess() {
    const userGuess = parseInt(userGuessInput.value);
    counter++;

    countTrack.textContent = `It took ${counter} try to guess correctly.`;

    if (userGuess === targetNumber) {
      feedback.textContent = `Congratulations! You guessed the correct number: ${targetNumber}`;
      guessForm.style.display = "none";
    } else if (userGuess > targetNumber) {
      feedback.textContent = "To high. Please try again";
      userGuessInput.value = "";
      feedback.value = "";
    } else {
      feedback.textContent = "To low. Please try again";
      userGuessInput.value = "";
      feedback.value = "";
    }
    console.log(userGuess);
  }

  console.log(feedback);
});
