class Candy{
  constructor(candyName, candyPrice){
    this.candyName = (candyName)
    this.candyPrice = (candyPrice)
  }

  getName(){
    return this.candyName;
  }
  getPrice(){
    return this.candyPrice;
  }
  
}
module.exports = Candy;