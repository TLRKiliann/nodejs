const fs = require("node:fs");

/*Synchronous schema*/
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2
});

const writeableStream = fs.createWriteStream("./file2.txt")

readableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});

/*
fs.createReadStream()
fs.createWriteStream()

readableStream.on()
writeableStream.write()
*/

const readableStreams = fs.createReadStream("./greet.txt", {
  encoding: "utf-8",
  //highWaterMark: 2
})

readableStreams.on("data", (chunk) => {
  console.log(chunk);
})