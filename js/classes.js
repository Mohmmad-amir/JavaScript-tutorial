//factory function

// function pizzaFactory(pizzaSize) {
//     const crust = "original"
//     const size = pizzaSize
//     return {
//         bake: () => console.log(`baking a ${size} ${crust} crust pizza`)
//     }
// }

// const myPizza = pizzaFactory("small")
// myPizza.bake()

//javascript class
class pizza {
    crust = "original"
    #sauce = "traditional"
    #size
    constructor(pizzaSize) {
        // this.type = pizzaType;
        this.#size = pizzaSize;
        // this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    // getToppings() {
    //     return this.toppings
    // }
    // setToppings(toppings) {
    //     this.toppings.push(toppings);
    // }
    // bake() {
    //     console.log(`baking a ${this.size},${this.crust},${this.type} crust pizza`);
    // }
    hereYouGo() {
        console.log(`heres your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
    }
}
const myPizza = new pizza("large")
myPizza.hereYouGo()
console.log(myPizza.crust);
// const myPizza = new pizza("pepperoni", "large")
// myPizza.type = "chocolate"
// myPizza.setCrust("thin");
// myPizza.bake()
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());

// super class/ child class
// class specialPizza extends pizza {
//     constructor(pizzaSize) {
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type}, ${this.size} pizza has 8 slices`);
//     }
// }

// const mySpecialty = new specialPizza("medium")
// mySpecialty.slice()

