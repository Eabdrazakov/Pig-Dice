// Business logic

function diceNumberRandomizer() {
    return Math.floor(Math.random() * 6) + 1;
}
// console.log(diceNumberRandomizer(6));
function Player(name, score) {
    this.name = name;
    this.score = score;
}


// UI logic
document.addEventListener("DOMContentLoaded", () => {

    const pigDiceUserForm = document.getElementById("gameUserForm");
    let myGame = null;
    pigDiceUserForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const Player1 = new Player("Lily", 0);
        const Player2 = new Player("Ermek", 0);


        document.getElementById("Name1").innerText = Player1.name;
        document.getElementById("Name2").innerText = Player2.name;

        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");

        button1.addEventListener("click", () => {
            document.getElementById("roll1").innerText = diceNumberRandomizer();
        });

        button2.addEventListener("click", () => {
            document.getElementById("roll2").innerText = diceNumberRandomizer();
        });
    })
});