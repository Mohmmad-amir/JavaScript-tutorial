// *web storage api



// window.alert("hello")
// alert("ok")
// window.alert(window.location)
// alert(location)

//storage
const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Amir",
    age: 22,
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name);
    }
}


// myObject.logName()

// ?session storage
// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);


// ?local storage
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore")
// localStorage.clear()
const key = localStorage.key(0)
const length = localStorage.length
const myLocalData = JSON.parse(sessionStorage.getItem("myLocalStore"));
console.log(key);
console.log(length);

