// * objects
// ? key value pairs in curly braces

const anyObj = {
    name: "amir"
}

const anotherObj = {
    alive: true,
    number: 41,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "Iced Tea"
    },
    action: function () {
        return `time for ${this.beverage.morning}`
    }
}
// console.log(anyObj.name);
// console.log(anotherObj);
// console.log(anotherObj.action());


const vehicle = {
    wheels: 4,
    engine: function () {
        return "vrroooom"
    }
}

const truck = Object.create(vehicle);
truck.doors = 2
// console.log(truck);
// console.log(truck.wheels); // inheritance
// console.log(truck.engine());

const car = Object.create(vehicle)
car.doors = 4
car.engine = function () {
    return "whooooosh"
}

// console.log(car.engine());
// console.log(car.wheels);

const tesla = Object.create(car);
// console.log(tesla.wheels);
tesla.engine = function () { return "shhhhhhhh......" }
// console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "john paul jones",
    drums: " john bonham"
}
delete band.drums
console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    // console.log(band[job]);
    console.log(`On ${job}, it's ${band[job]} !`);
}

// * destructuring objects

const { guitar, vocals, bass, drums } = band;
console.log(bass);
console.log(vocals);

function sings({ vocals }) {
    return `${vocals} sings !`
}
console.log(sings(band));