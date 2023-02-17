// * key Word = var, let, const

// var x = 1;
// var x = 2;
// let y = 2;
// const z = 3;

// console.log(z);

// ? global scope
var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;
console.log(`global : ${x}`);
console.log(`global : ${y}`);
console.log(`global : ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;

    {
        var x = 11;
        const z = 12;
        console.log(`block : ${x}`);
        console.log(`block : ${y}`);
        console.log(`block : ${z}`);
    }
    console.log(`function : ${x}`);
    console.log(`function : ${y}`);
    console.log(`function : ${z}`);
}
myFunc()

// ? local scope
// function myFunc() {
//     const z = 7;
//     console.log(y);
    // ? local scope
//     {
//         let y = 4;
//         console.log(y);

//     }


// }
// myFunc()