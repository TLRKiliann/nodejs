class DrinkMachine
{
    servDrink(size) {
        if(size === "large")
        {
            console.log(`One drink ${size} added to the command`);
        }
    }
}

module.exports = DrinkMachine;