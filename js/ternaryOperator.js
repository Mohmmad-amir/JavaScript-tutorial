//*-ternary operator

//?syntax
// ! { condition ? ifTrue : ifFalse }

let chickenSoup = "chicken noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry no soup for you"
    : chickenSoup ? `yes, we have${chickenSoup} today`
        : "Sorry no soup today";
// console.log(soupAccess);

let testScore = 69;
let grade = testScore > 89 ? "A"
    : testScore > 79 ? "B"
        : testScore > 69 ? "C"
            : testScore > 59 ? "D"
                : testScore > 49 ? "E"
                    : "Fail";
// console.log(`My test grade is a: ${grade}`); 

let playerOne = "paper"
let computer = "scissors"
let result =
    playerOne === computer ? "Tie Game"
        : playerOne === "rocl" && computer === "paper" ? "computer wins"
            : playerOne === "paper" && computer === "scissors" ? "computer wins"
                : playerOne === "scissors" && computer === "rock" ? "computer wins"
                    : "playerOne wins"
console.log(result);