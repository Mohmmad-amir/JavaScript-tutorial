// your first interactive game
let playGame = confirm("shall we play rock, paper or scissors?");
if (playGame) {
    //play
    while (playGame) {
        const playerChoice = prompt("please enter rock, paper and scissors.");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLocaleLowerCase();
            if (playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors") {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"]
                const computer = rpsArray[computerChoice]

                const result =
                    playerOne === computer ? "Tie Game"
                        : playerOne === "rock" && computer === "paper"
                            ? `playerOne:${playerOne}\nComputer:${computer} \ncomputer wins!`
                            : playerOne === "paper" && computer === "scissors"
                                ? `playerOne:${playerOne}\nComputer:${computer} \ncomputer wins!`
                                : playerOne === "scissors" && computer === "rock"
                                    ? `playerOne:${playerOne}\nComputer:${computer} \ncomputer wins!`
                                    : `playerOne:${playerOne}\nComputer:${computer} \nplayerOne wins!`
                alert(result)
                playGame = confirm("play Again?")
                if (!playGame) alert("ok, thanks for playing")
                continue;
            } else {
                alert("you did't enter rock, paper or scissors")
                continue;
            }
        } else {
            alert("i guess you changed your mind. maybe next time.")
            break;
        }
    }
} else {
    alert("ok, maybe next time.")
}


