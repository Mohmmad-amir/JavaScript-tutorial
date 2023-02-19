
//syntax * addEventListener("Event", function, useCapture)

// const doSomething = () => {
//     alert("doing something")
// }
// h2.addEventListener("click", doSomething, false);

// h2.removeEventListener("click", doSomething, false)

// h2.addEventListener("click", function (event) {
//     console.log(event.target);
//     event.target.textContent = "clicked"
// })

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState:complete");
        initApp();
    }
})
const initApp = () => {
    // const view = document.querySelector("#mainDiv");
    // console.log(view);
    // const div = view.querySelector("div")
    // const h1 = div.querySelector("h1")


    // view.addEventListener("click", (event) => {
    //     view.style.backgroundColor = "red"
    // }, false)
    // div.addEventListener("click", (event) => {
    // event.stopPropagation();
    //     div.style.backgroundColor = "blue"
    // }, false)
    // h1.addEventListener("click", (event) => {
    //     const myText = event.target.textContent;
    //     myText === "My Page" ? event.target.textContent = "clicked"
    //         : event.target.textContent = "My Page"
    // }, false)

    const view3 = document.querySelector("#view3")
    const myForm = view3.querySelector("#myForm")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("submit event");
    })
}






