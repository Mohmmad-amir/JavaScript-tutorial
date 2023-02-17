// *loop
// ? while Loop
let myNumber = 1;
while (myNumber <= 50) {
    // console.log(myNumber);
    // myNumber += 2;
    myNumber++
}
// !don't create infinitive(endless) loop
// ? do while loop
do {
    // console.log(myNumber);
} while (myNumber < 50);
// ? for loop
for (let index = 0; index <= 50;) {
    // console.log(index);
    index++
}
let myName = "amir"
for (let i = 0; i <= myName.length; i++) {
    // console.log(myName.charAt(i));
}

// ? while loop again
let myName0 = "amir"
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = myName0[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "i") break;
    counter++
}
console.log(counter);
