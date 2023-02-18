// * javaScript Errors & Error handling
"use strict";
//variable = "amir" // referenceError
// console.log(variable);
//Object..create //syntaxError
//name = "hosen"// typeError
const makeError = () => {
    let i = 1
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error('odd number');
            }
            console.log("even number");
            // throw new Error("this is a error")
            // const name = "Amir"
            // name = "john"//(this is also a typeError)
        } catch (err) {
            console.log(err.name);
            console.error(err.message);
            console.warn(err.stack);
            console.table(err);
        }
        finally {
            console.log("......finally");
            i++
        }
    }

}
makeError()

function customError(message) {
    this.message = message
    this.name = "customError"
    this.stack = `${this.name} : ${this.message}`
}


