//user input
// alert("hello world")
// let myBoolean = confirm("Ok === True/nCancel === False")
// console.log(myBoolean);
let name = prompt("please enter you name.")
// console.log(name ?? "you didn't enter your name");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());

} else {
    console.log("name can't be null");
}
