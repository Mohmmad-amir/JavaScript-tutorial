//* rock ,paper, scissors refactor with function
const initGame = () => {
    const startGame = confirm("shall we play rock, paper or scissors?");
    startGame ? playGame() : alert("OK, Maybe next time");
};

// game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice)
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotTOPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice)
        if (!playerChoice) {
            invalidChoice()
            continue;
        }
        const computerChoice = getComputerChoice()
        const result = determineWinner(playerChoice, computerChoice)
        displayResult(result)
        if (askToPlayAgain()) {
            continue
        } else {
            thanksForPlaying()
            break;
        }
    }
}

const getPlayerChoice = () => {
    return prompt("please enter rock, paper and scissors.");
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase()
    } else {
        return false
    }
}

const decidedNotTOPlay = () => {
    alert("i guess you changed your mind. maybe next time.")
}

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice
    } else {
        return false
    }
}



const invalidChoice = () => {
    alert("you did't enter rock, paper or scissors")
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    const rpsArray = ["rock", "paper", "scissors"]
    return rpsArray[randomNumber]
}

const determineWinner = (player, computer) => {
    const winner =
        player === computer
            ? "Tie Game"
            : player === "rock" && computer === "paper"
                ? `playerOne:${player}\nComputer:${computer} \ncomputer wins!`
                : player === "paper" && computer === "scissors"
                    ? `playerOne:${player}\nComputer:${computer} \ncomputer wins!`
                    : player === "scissors" && computer === "rock"
                        ? `playerOne:${player}\nComputer:${computer} \ncomputer wins!`
                        : `playerOne:${player}\nComputer:${computer} \nplayerOne wins!`
    return winner;
}

const displayResult = (result) => {
    alert(result)
}

const askToPlayAgain = () => {
    return confirm("Play again?")
}

const thanksForPlaying = () => {
    alert("OK, thanks for playing")
}

initGame()