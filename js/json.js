// *json : javaScript object notation
const myObj = {
    name: "Amir",
    hobbies: ["Eat", "sleep", "Code"],
    hello: function () {
        console.log("hello");
    }
}
console.log(myObj);
console.log(myObj.name);
myObj.hello()
console.log(typeof myObj);

const sendJson = JSON.stringify(myObj)
console.log(sendJson);
console.log(typeof sendJson);
console.log(sendJson.name);

const receivedJson = JSON.parse(sendJson)
console.log(receivedJson);
console.log(receivedJson.hobbies);
console.log(typeof receivedJson);




