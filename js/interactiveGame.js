// your first interactive game
let playGame = confirm("shall we play rock, paper or scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("please enter rock, paper and scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                    : "scissors";

            let result =
                playerOne === computer ? "Tie Game"
                    : playerOne === "rock" && computer === "paper"
                        ? `playerOne:${playerOne}\nComputer:${computer} \ncomputer wins!`
                        : playerOne === "paper" && computer === "scissors"
                            ? `playerOne:${playerOne}\nComputer:${computer} \ncomputer wins!`
                            : playerOne === "scissors" && computer === "rock"
                                ? `playerOne:${playerOne}\nComputer:${computer} \ncomputer wins!`
                                : `playerOne:${playerOne}\nComputer:${computer} \nplayerOne wins!`
            alert(result)
            let playAgain = confirm("play Again?")
            playAgain ? location.reload() : alert("ok, thanks for playing")
        } else {
            alert("you did't enter rock, paper or scissors")
        }
    } else {
        alert("i guess you changed your mind. maybe next time.")
    }
} else {
    alert("ok, maybe next time.")
}


