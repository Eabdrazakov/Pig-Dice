// Business logic

function diceNumberRandomizer() {
    return Math.floor(Math.random() * 6) + 1;
}
// console.log(diceNumberRandomizer(6));
function Player(player, score) {
    this.player = player;
    this.score = score;

    this.currentRound = []
}

Player.prototype.round = function (num) {
    if (num === 1) {
        this.currentRoundround = [];
    } else {
        this.currentRound.push(num);
    }
    return this.currentRound;
};
// let result = new Player("Lily", 0);
// console.log(result.round(2));
// console.log(result.round(1));


// UI logic
document.addEventListener("DOMContentLoaded", () => {

    const pigDiceUserForm = document.getElementById("gameUserForm");
    pigDiceUserForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const Player1 = new Player("Lily", 0);
        const Player2 = new Player("Ermek", 0);


        document.getElementById("Name1").innerText = Player1.player;
        document.getElementById("Name2").innerText = Player2.player;

        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");

        button1.addEventListener("click", () => {
            document.getElementById("roll1").innerText = diceNumberRandomizer();
            const rollValue = diceNumberRandomizer();
            Player1.score += rollValue;
            document.getElementById("score1").innerText = Player1.score;
        });

        button2.addEventListener("click", () => {
            document.getElementById("roll2").innerText = diceNumberRandomizer();
        });
    })
});