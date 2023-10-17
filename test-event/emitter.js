const EventEmitter = require("node:events");

const emitter = new EventEmitter;

emitter.on("order", (size) => {
    console.log(`Cmd done! Your arg: ${size}`);
})

emitter.emit("order", "large");
