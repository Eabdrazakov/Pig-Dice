// Business logic

function diceNumberRandomizer() {
    return Math.floor(Math.random() * 6) + 1;
}
// console.log(diceNumberRandomizer(6));

function diceRollContainer() {
    const resultContainer = [];

    const randomNumber = diceNumberRandomizer();
    resultContainer.push(randomNumber);

    return resultContainer;
}
const result = diceRollContainer();
// console.log(result);

function totalScoreCounter(totalScore, currentScore) {
    if (diceNumberRandomizer(1)) {
        return totalScore; 0;
    } else {
        return currentScore + diceNumberRandomizer;
    }
}

// console.log(totalScoreCounter(6, 5))


// UI logic
document.addEventListener("DOMContentLoaded", () => {

    const pigDiceUserForm = document.getElementById("pigdiceUserForm");
    let myGame = null;
    pigDiceUserForm.addEventListener("submit", (e) => {
        e.preventDefault();


    })
});