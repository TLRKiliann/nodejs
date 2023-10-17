const path = require("node:path");
const fs = require("node:fs");
const fspromise = require("node:fs/promises");
const EventEmitter = require("node:events");

console.log(path, "path");
// resolve
// join
// isAbsolute
// basename
// dirname
// *******
// format
// parse
// console.log(path.format(path.parse(__filename)));

console.log(fs, "fs");
// createReadStream
// readFile
// readFileSync
// FileReadStream
// -----------------
// createWriteStream
// writeFile
// writeFileSync
// FileWriteStream

console.log(fspromise, "fspromise");
// readFile: [AsyncFunction: readFile]
// writeFile: [AsyncFunction: writeFile]

console.log(EventEmitter, "events");
// EventEmitter[]
// on