// * arrays
const myArray = [];

// add elements to an array
myArray[0] = "amir";
myArray[1] = 1001;
myArray[2] = false

// refer to an array
// console.log(myArray);

// length property
// console.log(myArray.length);
//last element in an array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);
// * push function add value an array to the last
myArray.push("school")
// console.log(myArray);
const newLength = myArray.unshift(78)
// * unshift function add value an array to the first
const firstItem = myArray.shift()
// * shift function remove first value from an array
const lastItem = myArray.pop();
// * pop function remove last value from an array 

// delete myArray[1]
// myArray.splice(1, 1);
myArray.splice(1, 0, 45)

// console.log(myArray[0]);
// console.log(myArray);
// console.log(lastItem);
// console.log(newLength);
// console.log(firstItem);
const oldArray = ["A", "B", "C", "D", "E", "F"];
const oldArrayA = ["A", "B", "C"]
const oldArrayB = ["D", "E", "F"];
const newArray = oldArray.slice(2, 5)
// console.log(newArray);
// oldArray.reverse()
// console.log(oldArray);
const newString = oldArray.join()
const oldString = newString.split(",")
// console.log(oldString);
// const oldArrayC = oldArrayA.concat(oldArrayB)
const oldArrayC = [...oldArrayA, ...oldArrayB]
// console.log(oldArrayC);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf ball", "tennis ball"];

const clotheShelfA = ["tank tops", "t-shirt", "jerseys"];
const clotheShelfB = ["sweat tops", "sweat pant", "hoodies"];
console.log(equipShelfA[1]);
//of
console.log(clotheShelfB[0]);

const equipDept = [equipShelfA, equipShelfB]
const clotheDept = [clotheShelfA, clotheShelfB]

console.log(equipDept[0][1]);
//or
console.log(clotheDept[1][0]);
console.log(equipDept);
//or
console.log(clotheDept);

const sportsStore = [equipDept, clotheDept]
console.log(sportsStore);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);