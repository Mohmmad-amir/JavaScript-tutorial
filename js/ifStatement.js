let customerIsBanned = false;
let soup = "Chicken noodle soup"
let crackers = true;
let reply;
if (customerIsBanned) {
    reply = "NO soup for you!"
}
else if (soup && crackers) {
    // run code
    reply = `here is your order of ${soup} & crackers`
}
else if (soup) {
    // run code
    reply = `here is your order of ${soup}`
} else {
    reply = `sorry we're out of ${soup}`
}
// console.log(reply);

let testSCore = 60;
let collageStudent = true
let grade;
if (testSCore >= 90) {
    grade = "A"
} else if (testSCore >= 80) {
    grade = "B"
} else if (testSCore >= 70) {
    grade = "C"
} else if (testSCore >= 60) {
    grade = "D"
} else {
    if (collageStudent) {
        grade = "Unsatisfactory"
    } else {
        grade = "fail"
    }
}
// console.log(grade);
// *decision tree
let playerOne = true;
let computer;

if (playerOne === computer) {
    //tie game
    console.log("tie Game");
} else if (playerOne === "rock") {
    if (computer === "paper") {
        //computer wins
        console.log("Computer wins");
    } else {
        // playerOne wins
        console.log("playerOne wins");
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        //computer wins
        console.log("Computer wins");
    } else {
        //playerOne wins
        console.log("playerOne wins");
    }
} else {
    if (computer === "rock") {
        //computer wins
        console.log("Computer wins");
    } else {
        //playerOne wins
        console.log("playerOne wins");
    }
}