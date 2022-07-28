class User {
  constructor (name){
    this.name = (name);
  }

  getName() {
    return (this.name);
  }

  getIntroduction() {
    return (`Hello, I am ${this.name}!`);
  }
}


const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];


module.exports = User;