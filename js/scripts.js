// Business logic

function diceNumberRandomizer() {
    return Math.floor(Math.random() * 6) + 1;
}

function Player(name, score) {
    this.name = name;
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

Player.prototype.resetScore = function () {
    this.score = 0;
    this.currentRound = [];
};





// UI logic
const Player1 = new Player("", 0);
const Player2 = new Player("", 0);

document.addEventListener("DOMContentLoaded", () => {

    const pigDiceUserForm = document.getElementById("gameUserForm");
    pigDiceUserForm.addEventListener("submit", (e) => {
        e.preventDefault();

        Player1.name = document.getElementById("nameFirst").value;
        Player2.name = document.getElementById("nameSecond").value;

        function addNameToScore() {

            const name1 = document.getElementById("nameFirst").value;
            const name2 = document.getElementById("nameSecond").value;

            document.querySelector("#giveName1").innerText = name1 + `'s`;
            document.querySelector("#giveName2").innerText = name2 + `'s`;
            document.getElementById("Name1").innerText = name1;
            document.getElementById("Name2").innerText = name2;


        }

        const form = document.getElementById("namePlayers");
        const clicky = document.getElementById("gameUserForm");
        clicky.setAttribute("class", "hidden");
        form.removeAttribute("class", "hidden");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("border1").removeAttribute("class", "hidden");
            addNameToScore();
            form.setAttribute("class", "hidden");


            const totalScore = document.getElementById("total");
            totalScore.removeAttribute("class", "hidden");
            const button1 = document.getElementById("button1");
            const button2 = document.getElementById("button2");

            button1.addEventListener("click", () => {
                const rollValue = diceNumberRandomizer();
                document.getElementById("roll1").innerText = rollValue;
                Player1.round(rollValue);
                const score = Player1.score
                document.getElementById('score1').innerText = score;
                document.getElementById("total1").innerText = score;
                button1.setAttribute("class", "hidden");
                button11.removeAttribute("class", "hidden");

                if (score >= 15) {
                    alert(`First player wins!`);

                    Player1.resetScore();

                    document.getElementById("roll1").innerText = 0;
                    document.getElementById('score1').innerText = Player1.score;
                    document.getElementById("total1").innerText = Player1.score;

                    document.getElementById("roll2").innerText = 0;
                    document.getElementById('score2').innerText = 0;
                    document.getElementById("total2").innerText = 0;

                    document.querySelector(".p").classList.add("hidden");
                    document.querySelector(".m").classList.add("hidden");

                    const starter = document.getElementById("starter");
                    starter.removeAttribute("class", "hidden");

                    document.getElementById("border2").setAttribute("class", "hidden");
                    document.getElementById("border1").setAttribute("class", "hidden");

                    starter.addEventListener("click", () => {
                        document.getElementById("border1").removeAttribute("class", "hidden");
                        document.getElementById("button1").removeAttribute("class", "hidden");
                        document.getElementById("button2").removeAttribute("class", "hidden");

                        button11.setAttribute("class", "hidden");
                        starter.setAttribute("class", "hidden");

                        document.querySelector(".p").classList.remove("hidden");
                        document.querySelector(".m").classList.remove("hidden");

                    });
                }

            });

            const button11 = document.getElementById("button11");
            button11.addEventListener("click", () => {
                document.getElementById("border1").setAttribute("class", "hidden");
                document.getElementById("border2").removeAttribute("class", "hidden");
                button1.removeAttribute("class", "hidden");
                button22.setAttribute("class", "hidden");

            });

            button2.addEventListener("click", () => {
                const rollValue2 = diceNumberRandomizer();
                document.getElementById("roll2").innerText = rollValue2;
                Player2.round(rollValue2);
                const score2 = Player2.score
                document.getElementById('score2').innerText = score2;
                document.getElementById("total2").innerText = score2;
                button2.setAttribute("class", "hidden");
                button22.removeAttribute("class", "hidden");

                if (score2 >= 15) {
                    alert(`Second player wins!`);

                    Player2.resetScore();

                    document.getElementById("roll2").innerText = 0;
                    document.getElementById('score2').innerText = Player2.score;
                    document.getElementById("total2").innerText = Player2.score;

                    document.getElementById("roll1").innerText = 0;
                    document.getElementById('score1').innerText = 0;
                    document.getElementById("total1").innerText = 0;

                    document.querySelector(".p").setAttribute("class", "hidden");
                    document.querySelector(".m").setAttribute("class", "hidden");


                    const starter = document.getElementById("starter");

                    starter.removeAttribute("class", "hidden");
                    document.getElementById("border2").setAttribute("class", "hidden");
                    document.getElementById("border1").setAttribute("class", "hidden");

                    starter.addEventListener("click", () => {
                        document.getElementById("border1").removeAttribute("class", "hidden");
                        document.getElementById("button1").removeAttribute("class", "hidden");
                        document.getElementById("button2").removeAttribute("class", "hidden");

                        button11.setAttribute("class", "hidden");
                        starter.setAttribute("class", "hidden");

                        document.querySelector(".p").classList.remove("hidden");
                        document.querySelector(".m").classList.remove("hidden");
                    });
                }

            });
            const button22 = document.getElementById("button22");
            button22.addEventListener("click", () => {
                document.getElementById("border2").setAttribute("class", "hidden");
                document.getElementById("border1").removeAttribute("class", "hidden");
                button2.removeAttribute("class", "hidden");
                button11.setAttribute("class", "hidden");

            })

        });
    });
});