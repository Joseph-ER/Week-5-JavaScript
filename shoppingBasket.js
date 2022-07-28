const Candy = require("./candy");

class ShoppingBasket{
  constructor(){
    this.items = [];
  }

  addItem(name, price){
    let newCandy = new Candy(name, price);
    this.items.push(newCandy);
    return newCandy;
  }

  allItems() {
    return this.items;
  }

  getTotalPrice(){
    let totalPrice = 0;
    this.items.forEach(candy => {
      totalPrice += candy.getPrice();
    });
    return totalPrice;
  }
  
}
module.exports = ShoppingBasket;