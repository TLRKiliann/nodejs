require('./wrapper.js');
const users = require('./data.json');
const SuperHero = require('./super_hero');
const data = require('./app');
const path = require("node:path");

//--- json file
console.log("\nCall an array of objects from json file");
console.log("---------------------------------------\n");
console.log(users); // array of objects

//console.trace(users);
const objVal = Object.values(users);
console.log(objVal);
console.log(users.users[1].forname);

//--- call a class
console.log("\nCall a class");
console.log("------------\n");

console.log(SuperHero.getName());
SuperHero.setName('All');
console.log(SuperHero.getName());
SuperHero.setName('Doug');
console.log(SuperHero.name);

/*
const super_hero = new SuperHero("Emil");
console.log(super_hero.getName());
super_hero.setName('All');
console.log(super_hero.getName());
super_hero.setName('Doug');
console.log(super_hero.name);
*/

console.log("\nCall of objects");
console.log("---------------\n");

const {name, age, email} = data.data;
console.log(name,  age,  email);
const {phone, genre} = data.extra_data;
console.log(phone,  genre);

//--- basename - extname - isAbsolute
console.log("\nPath - basename() - extname() - isAbsolute()");
console.log("--------------------------------------------\n");

console.log(__filename); // file path
console.log(__dirname); // dir path

console.log(path.basename(__filename)); // index.js
console.log(path.basename(__dirname)); // my-app

console.log(path.extname(__filename)); // js
console.log(path.extname(__dirname)); // ?

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));
console.log(path.isAbsolute(__filename)); // true
console.log(path.isAbsolute('./index.js')); // false

//--- join - resolve
console.log("\nPath - join() - resolve()");
console.log("-------------------------\n");

console.log(path.join("folder1", "folder2", "index.js")); // folder1/folder2/index.js
console.log(path.join("/folder1", "/folder2", "index.js")); // shorthand path since folder1
// /folder1/folder2/index.js

console.log(path.resolve("folder1", "folder2", "index.js")); // add folder 1 & 2 in absolute path
console.log(path.resolve("/folder1", "//folder2", "index.js")); // jump folder1

console.log(path.resolve(__dirname, "data.json")); // absolute path
console.log(path.resolve(__dirname, __filename)); // ok
