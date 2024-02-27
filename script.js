let input = document.getElementById('input');
let btn = document.querySelector('.button-5');
let wrng = document.getElementById('wrng');
let guess = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100 + 1);

let numGuesses = 0;

btn.addEventListener("click", () => {
    guessNumber();
});

function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(parseInt(input.value))) {
        wrng.innerHTML = "Enter a number between 1 to 100";
    } else {
        numGuesses++;
        guess.innerHTML = "No. of Guesses: " + numGuesses;
        let userGuess = parseInt(input.value); // Convert input value to an integer
        if (userGuess > answer) {
            wrng.innerHTML = "You guessed too High";
            input.value = "";
        } else if (userGuess < answer) {
            wrng.innerHTML = "You Guessed too Low";
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations! You guessed the correct answer";

            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100 + 1);
    input.value = "";
    btn.disabled = false;
    guess.innerHTML = "No. of Guesses: 0";
}
