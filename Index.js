const candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');
let basket = new ShoppingBasket();

basket.addItem('mars',2.00);
basket.addItem('snickers',1.89);
basket.addItem('twix',0.89);
// console.log(basket.getTotalPrice());
console.log(basket.allItems());
console.log(basket.getTotalPrice());