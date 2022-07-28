class Thermostat{
  constructor(){
    this.temperature = 20;
    this.PSM = true;
  }

  getTemperature(){
    return this.temperature;
  }

  turnUp(){
    if (this.temperature === 25 && this.PSM === true){
      return('Max temperature is 25');
    }else{
    this.temperature += 1;
    }
  }

  turnDown(){
    if (this.temperature ===10){
      return('Minimum temperature is 10');
    }else{
      this.temperature -= 1;
    }
  }

  setPowerSavingMode(value){
    this.PSM = value;
  };

  reset(){
    this.temperature = 20;
  }
}
module.exports = Thermostat;