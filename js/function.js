// * functions

// methods = build-in functions
"amir".toLocaleLowerCase();
Math.random()
// ! Own functions
// function decoration syntax

function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1
    }
    return num1 + num2;
}
// console.log(sum(4, 1));

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("user@github.com"));

// const getUserNameFromEmail = function (email) {
//     return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("amir@github.com"));


const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
}
// console.log(getUserNameFromEmail("developer@github.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

}
console.log(toProperCase("september"));

// *function provided reusable code!