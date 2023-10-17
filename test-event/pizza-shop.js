const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter
{
    constructor() {
        super()
        this.command = 0;
    }

    order(size, topping){
        this.command++;
        this.emit("order", size, topping);
    }

    display(){
        console.log(`${this.command}`);
    }
}

module.exports = PizzaShop;