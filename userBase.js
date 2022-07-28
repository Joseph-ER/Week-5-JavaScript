class UserBase {
  constructor(users){
    this.users = (users)
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return users.map((user) => user.getName());
  }

  getIntroductions() {
    return users.map((user) => user.getIntroduction());
  }

}

module.exports = UserBase;