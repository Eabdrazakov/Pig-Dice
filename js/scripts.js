// Business logic

function diceNumberRandomizer() {
    return Math.floor(Math.random() * 6) + 1;
}

function Player(player, score) {
    this.player = player;
    this.score = score;

    this.currentRound = [];
}

Player.prototype.round = function (num) {
    if (num === 1) {
        this.score = 0;
        this.currentRound = [];
    } else {
        this.currentRound.push(num);
        this.score += num;
    }
    return this.currentRound;
};



// UI logic
document.addEventListener("DOMContentLoaded", () => {

    const pigDiceUserForm = document.getElementById("gameUserForm");
    pigDiceUserForm.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("border2").removeAttribute("class", "hidden");
        const Player1 = new Player("Lily", 0);
        const Player2 = new Player("Bek", 0);


        document.getElementById("Name1").innerText = Player1.player;
        document.getElementById("Name2").innerText = Player2.player;

        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");

        button1.addEventListener("click", () => {
            const rollValue = diceNumberRandomizer();
            document.getElementById("roll1").innerText = rollValue;
            Player1.round(rollValue);
            const score = Player1.score
            document.getElementById('score1').innerText = score;
            document.getElementById("total1").innerText = score;

            if (score >= 25) {
                alert(`${Player1.player} wins!`);
            }

            document.getElementById("border1").setAttribute("class", "hidden");
            document.getElementById("border2").removeAttribute("class", "hidden");

        });

        button2.addEventListener("click", () => {
            const rollValue2 = diceNumberRandomizer();
            document.getElementById("roll2").innerText = rollValue2;
            Player2.round(rollValue2);
            const score2 = Player2.score
            document.getElementById('score2').innerText = score2;
            document.getElementById("total2").innerText = score2;

            if (score2 >= 25) {
                alert(`${Player2.player} wins!`);
            }

            document.getElementById("border2").setAttribute("class", "hidden");
            document.getElementById("border1").removeAttribute("class", "hidden");
        });

    })
});