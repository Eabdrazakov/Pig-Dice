// Business logic

function diceNumberRandomizer() {
    return Math.floor(Math.random() * 6);
}
console.log(diceNumberRandomizer(6));




// UI logic
document.addEventListener("DOMContentLoaded", () => {
    const pigDiceUserForm = document.getElementById("pigdiceUserForm");
    pigDiceUserForm.addEventListener("submit", (e) => {
        e.preventDefault();
    })
});