// * modules
// import 
// import playGuitar from "./guitar.js";
// import { shredding as shred, plucking as fingerPicking } from "./guitar.js";

import * as Guitars from "./guitar.js"
import User from "./user.js";
const email = "email@example.com"
const name = "Amir"
const me = new User(email, name);
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

