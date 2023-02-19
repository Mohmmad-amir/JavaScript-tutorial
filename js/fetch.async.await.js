// *- fetch api require a discussion of ...
// *- callback, promises, and async/await

//callbacks example

// function firstFunction(parameters, callback) {
// do stuff
//     callback();
// }
// firstFunction(para, function () {
// do stuff
//     secondFunction(para, function () {
//         thirdFunction(para, function () {

//         })
//     })
// })

//promises example
// 3 states : pending, fulfilled, rejected
const myPromises = new Promise((resolve, reject) => {
    const error = false
    if (!error) {
        resolve("Yes!, resolved the Promises!")
    } else {
        reject("No!, Rejected the Promise!")
    }
})
// console.log(myPromises);

myPromises.then(value => {
    return value + 1

}).then(newValue => {
    // console.log(newValue);
}).catch(err => console.log(err))

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("myNextPromise Resolve!")
    }, 3000);
});

myNextPromise.then(value => {
    // console.log(value);
})
myPromises.then(value => {
    // console.log(value);
})

const myUsers = fetch("http://jsonplaceholder.typicode.com/users")

//pending
// console.log(users);
const users = fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
        // console.log(response);
        return response.json();
    })
    .then(data => {
        data.map(user => {
            // console.log(user);
        })
        data.forEach(element => {
            // console.log(element);
        });
    })
// console.log(users);

//async & await

const myUser = {
    userList: []
}
const myCoolFunction = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    console.log(jsonUserData);
    return jsonUserData;
}
// myCoolFunction()

const anotherFunction = async () => {
    const data = await myCoolFunction();
    console.log(data);
    myUser.userList = data
    console.log(myUser.userList);
}
// anotherFunction()
// console.log(myUser.userList);

// * workFlow function

const getAllUserEmails = async () => {
    const responseEmail = await fetch("http://jsonplaceholder.typicode.com/users")
    const jsonUserEmail = await responseEmail.json()
    const userEmailArray = jsonUserEmail.map(user => {
        // return user.email;
        return `email: ${user.email}, Name : ${user.name}`
    })
    // console.log(userEmailArray);
    // return userEmailArray
    postToWebPage(userEmailArray)
}
const postToWebPage = (data) => {
    console.log(data);

}
// getAllUserEmails()

// * 2nd parameter of fetch is a object
const getDadJoke = async () => {
    const responseDadJoke = await fetch("http://icanhazdadjoke.com/",
        {
            method: "GET",
            headers: {
                Accept: "application/json"
                // Accept: "text/plain"
            }
        })
    const jsonJokeData = await responseDadJoke.json()
    // const jsonJokeData = await responseDadJoke.text()
    console.log(jsonJokeData);
}

// getDadJoke()

const jokeObj = {
    id: '41LeN7EImjb',
    joke: "What is the difference between ignorance and apathy?\r\n\r\nI don't know and I don't care."
}
const postData = async (jokeObj) => {
    const responsePostData = await fetch("http://httpbin.org/post",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // Accept: "text/plain"
            },
            body: JSON.stringify(jokeObj)
        })
    const jsonPostData = await responsePostData.json()
    console.log(jsonPostData);
}

// postData(jokeObj)

const requestJoke = async (firstName, lastName) => {
    const responseRequestJoke = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
    const jsonRequestJoke = await responseRequestJoke.json()
    console.log(jsonRequestJoke.value.joke);
}

requestJoke("bruce", "lee")












