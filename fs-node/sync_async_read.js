const fs = require("node:fs");

console.log("step start");

// synchronous function
const fileRead = fs.readFileSync("./file.txt", "utf-8");
console.log(fileRead);

console.log("step 1");

// asynchronous function
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log("step 2");

const returnName = (name) => {
    console.log("Hello", name);
}

console.log("step 3");

const getName = (getFn) => {
    const name = "Vishwas";
    getFn(name);
}

getName(returnName);

console.log("final step");