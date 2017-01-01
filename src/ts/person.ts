import dice = require('./Dice');
import data = require('../data/person');

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

  constructor(nationality: string) {
    this.sex = this.randomSex();
    this.name = this.randomName(this.sex);
    this.age = this.randomAge();
    this.height = this.randomHeight();
  }

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

  randomName(sex: string) {
    let first = '';
    if (sex === "male") {
      const randomNumber = (Math.random() * data.names.english.male.length) << 0;
      first = data.names.english.male[randomNumber];
    } else {
      const randomNumber = (Math.random() * data.names.english.female.length) << 0;
      first = data.names.english.female[randomNumber];
    }

    const randomLastName = (Math.random() * data.names.english.last.length) << 0;
    const last = data.names.english.last[randomLastName];

    return first + " " + last;
  }

  display() {
    return `<div>
      <p>Name: ${this.name}</p>
      <p>Sex: ${this.sex}</p>
      <p>Age: ${this.age}</p>
      <p>Height: ${this.height}</p>
    </div>`
  }
}

export = { Person };