require('./wrapper.js');
const path = require('node:path');
const woman = require('./obj.js');
const nested = require('./nestedObject.js');
const fnCall = require('./func.js');
const wrapper =require('./wrapper.js');
const File = require('./classFile.js');

const newClass = new File;
console.log("...");
console.log(newClass.setName("Truc"));
console.log(newClass.getName());

console.log(nested, " => nested");
console.log(wrapper, " => wrapper");
console.log(fnCall, " => fnCall");
//console.trace(fnCall);

const objArr = nested.topfive;
console.log(objArr, " => nested topfive");

console.log(fnCall(2, 2), "result fnCall(2,2)");

console.log(woman.name);
const { name } = woman;
console.log(name);

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.isAbsolute(__filename));

console.log(path.join('folder1', 'folder2', __filename))
//console.log(path.resolve('folder1', '//folder2', 'index.js')); // doesn't work with __filename
