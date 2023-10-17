const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`CMD done ! Your choice ${size} & ${topping}`);
    drinkMachine.servDrink(size);
});

pizzaShop.order("medium", "Mushrooms");
pizzaShop.display();
