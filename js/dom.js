// * DOM => Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector('#view2')
console.log(view2);
view1.style.visibility = "visible"
view2.style.visibility = "visible"

const views = document.getElementsByClassName("view")
console.log(views);

const sameViews = document.querySelectorAll(".view")
console.log(sameViews);

const divs = view1.querySelectorAll("div")
console.log(divs);
const sameDivs = view2.getElementsByTagName("div")
console.log(sameDivs);

const evenDiv = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDiv);

for (let i = 0; i < evenDiv.length; i++) {
    evenDiv[i].style.backgroundColor = "darkblue"
    // evenDiv[i].style.width = "200px"
    // evenDiv[i].style.height = "50px"
}

const heading = document.getElementById("heading");
heading.textContent = "this is from dom.js"
console.log(heading);
const mainHeading = document.getElementsByTagName("main div")
mainHeading.innerHtml = `<h2>hello</h2>`
console.log(mainHeading);

console.log(evenDiv[0]);
console.log(evenDiv[0].parentElement);
console.log(evenDiv[0].parentElement.children);
console.log(evenDiv[0].parentElement.childNodes);
console.log(evenDiv[0].parentElement.hasChildNodes());
console.log(evenDiv[0].parentElement.lastChild);
console.log(evenDiv[0].parentElement.lastElementChild);
console.log(evenDiv[0].parentElement.firstChild);
console.log(evenDiv[0].parentElement.firstElementChild);
console.log(evenDiv[0].nextSibling);
console.log(evenDiv[0].nextElementSibling);
console.log(evenDiv[0].previousSibling);
console.log(evenDiv[0].previousElementSibling);


while (view2.lastChild) {
    view2.lastChild.remove();
}


const createDivs = (parent, item) => {
    const newDiv = document.createElement("div")
    newDiv.textContent = item;
    newDiv.style.backgroundColor = 'red'
    newDiv.style.width = '100px'
    newDiv.style.height = '100px'
    newDiv.style.margin = '10px'
    newDiv.style.display = 'flex'
    newDiv.style.justifyContent = 'center'
    newDiv.style.alignItems = 'center'
    parent.append(newDiv)
}
//createDivs(view2, 10)
for (let i = 0; i <= 12; i++) {
    createDivs(view2, i)
}



