import dice = require('./Dice');

class Person {
  sex: string;
  age: number;
  height: number;
  name: string;
  build: string;
  hairColor: string;
  eyeColor: string;
  hairStyle: string;
  specials: string[];
  clothesStyle: string;

  randomSex() {
    return Math.random() < 0.5 ? "male" : "female";
  }

  randomAge() {
    const minAge = 18;
    const maxAge = 65;
    return (Math.random() * (maxAge - minAge)) + minAge;
  }

  randomHeight() {
    const d20 = new dice.Dice(20, false);
    return 147 + d20.rollMultiple(3).reduce((a, b) => { return a + b; });
  }

  display() {
    return `<div>
      <p>Name: random</p>
      <p>Sex: ${this.randomSex()}</p>
      <p>Age: ${this.randomAge()}</p>
      <p>Height: ${this.randomHeight()}</p>
    </div>`
  }
}

export = { Person };