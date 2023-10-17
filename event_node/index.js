const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`The command is banking! Your cmd ${size} & ${topping}.`);
    drinkMachine.servDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayCommand();