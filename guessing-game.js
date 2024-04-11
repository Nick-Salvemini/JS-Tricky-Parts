function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let guesses = 0;
    let hasWon = false;

    return function guess(number) {
        if (hasWon) return "The game is over, you already won!";

        guesses++;

        if (number === answer) {
            hasWon = true;
            return `You win! You found ${number} in ${guesses} guesses.`
        } else if (number < answer) {
            return `${number} is too low!`
        } else {
            return `${number} is too high!`
        }
    }
}

module.exports = { guessingGame };
