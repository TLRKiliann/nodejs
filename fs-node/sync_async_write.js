const fs = require("node:fs");

// sync function
fs.writeFileSync("./greet.txt", "My written file for koala\n");

// async function
fs.writeFile("./greet.txt", "Data append !", {flag: 'a'}, (error) =>{
    if (error) {
        console.log(error);
    } else {
        console.log("data append !");
    }
});
