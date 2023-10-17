class DrinkMachine
{
    servDrink(size) {
        if (size === "large") {
            console.log(`Yeahea! You won a ${size} drink!`);
        } else if (size === "medium") {
            console.log(`Hooo! You won a ${size} drink ;)`);
        }
        else {
            console.log("Nothing to choice...");
        }
    }
}

module.exports = DrinkMachine;