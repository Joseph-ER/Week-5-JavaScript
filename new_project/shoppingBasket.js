const Candy = require("./candy");

class ShoppingBasket{
  constructor(){
    this.items = [];
  }

  addItem(candy){
    // let newCandy = new Candy(name, price);
    this.items.push(candy);
    return 'item added';
  }

  allItems() {
    return this.items.map(item => { return item.getName()});
    // return all;
  }

  getTotalPrice(){
    let totalPrice = 0;
    this.items.forEach(candy => totalPrice += candy.getPrice());
     return(totalPrice);
  }
  
}
module.exports = ShoppingBasket;


// const candy = new Candy('Mars', 4.99);

// console.log(candy.getName());

// console.log(candy.getPrice());


// const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice());


// console.log(basket.addItem(candy));

// console.log(basket.getTotalPrice());


// console.log(basket.addItem(new Candy('Skittle', 3.99)));
// console.log(basket.addItem(new Candy('Skittle', 3.99)));

// console.log(basket.getTotalPrice());
// console.log(basket.allItems());