const Thermostat = require('./Thermostat');

describe('Thermostat tests',() => {
  it('tests thermostat is created and has temp of 20', () => {
    const TS = new Thermostat();
    expect(TS.getTemperature()).toBe(20);
  });
  it('turnUp() turnUp() increases temp by 2',() => {
    const TS = new Thermostat();
    TS.turnUp();
    TS.turnUp();
    expect(TS.getTemperature()).toBe(22);
  });
  it('turnUp() turnUp() increases temp by 2 then turnDown() decreases by 1',() => {
    const TS = new Thermostat();
    TS.turnUp();
    TS.turnUp();
    TS.turnDown();
    expect(TS.getTemperature()).toBe(21);
  });
  it('while setPowerSavingMode(true) max temp is 25', () =>{
    const TS = new Thermostat();
    for (let i = 0 ; i < 6 ; i ++){
      TS.turnUp();
    }
    expect(TS.getTemperature()).toBe(25);
    expect(TS.turnUp()).toBe('Max temperature is 25');
  });
  it('allows temp over 25 when setPowerSavingMode(false)',() => {
    const TS = new Thermostat();
    TS.setPowerSavingMode(false);
    for (let i = 0 ; i < 6 ; i ++){
      TS.turnUp();
    }
    expect(TS.getTemperature()).toBe(26);
  });
  it('thermostat.reset() sets temp to 20',() => {
    const TS = new Thermostat();
    TS.setPowerSavingMode(false);
    for (let i = 0 ; i < 6 ; i ++){
      TS.turnUp();
    }
    expect(TS.getTemperature()).toBe(26);
    TS.reset();
    expect(TS.getTemperature()).toBe(20);
  });
  it('temperature cannot go below 10',() => {
    const TS = new Thermostat();
    for (let i = 0 ; i < 11 ; i ++){
      TS.turnDown();
    }
    expect(TS.getTemperature()).toBe(10);
    expect(TS.turnDown()).toBe('Minimum temperature is 10');
  });
});
