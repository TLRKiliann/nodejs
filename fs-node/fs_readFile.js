const fs = require("node:fs/promises");

// fs.readFile()
fs.readFile("file.txt", "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// ES6
const readFile = async() => {
    try {
        const data = await fs.readFile("file.txt", "utf-8");
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
readFile();

// old manner
async function readFile2() {
    try {
        const data = await fs.readFile("file.txt", "utf-8");
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}
readFile2();