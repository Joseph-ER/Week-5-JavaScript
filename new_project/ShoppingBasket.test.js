const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');
describe ('Shopping basket tests',() =>{
  it('tests creation of basket class and has 0 for total', () =>{
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  });
  it('mocks a candy of "mars",1.99 and adds to total',() =>{
    const basket = new ShoppingBasket();
    let candyDouble = {getName: () => 'mars', getPrice: () => 1.99};
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(1.99);
    expect(basket.allItems()).toEqual(['mars']);
  });
  it('mocks a candy of "mars",1.99 and adds to total',() =>{
    const basket = new ShoppingBasket();
    let candyDouble = {getName: () => 'mars', getPrice: () => 1.99};
    let candyDouble2 = {getName: () => 'snickers', getPrice: () => 2.00};
    basket.addItem(candyDouble);
    basket.addItem(candyDouble2);
    expect(basket.getTotalPrice()).toEqual(3.99);
  });
});

