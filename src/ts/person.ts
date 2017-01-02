import dice = require('./dice');
import data = require('../data/person');
import helpers = require('./helpers')

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
    this.age = this.randomAge();
    this.height = this.randomHeight();
    this.name = this.randomName(this.sex);
    this.build = helpers.randomFromWeighted(data.tables.bodyBuild);
    this.hairColor = helpers.randomFromWeighted(data.tables.hairColor);
    this.eyeColor = helpers.randomFromWeighted((<any>data.tables.eyeColor)[this.hairColor]);
    this.hairStyle = helpers.randomFromWeighted(data.tables.hairStyle);
    this.clothesStyle = helpers.randomFromWeighted((<any>data.tables.clothes)[this.sex]);
    this.specials = this.randomSpecials();
  }

  randomSex() {
    return dice.d2() == 1 ? "male" : "female";
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

  randomSpecials() {
    const noOfSpecials = dice.d4() - 2;
    let retArr = [];

    for (let i = 0; i < noOfSpecials; i++) {
      retArr.push(helpers.randomFromWeighted(data.tables.special));
    }

    return retArr;
  }

  display() {
    return `<div>
      <p><strong>Name: ${this.name}</strong></p>
      <p>Sex: ${this.sex}</p>
      <p>Age: ${this.age.toFixed(0)}</p>
      <p>Height: ${this.height}</p>
      <p>Body build: ${this.build}</p>
      <p>Hair: ${this.hairColor} ${this.hairStyle}</p>
      <p>Eyes: ${this.eyeColor}</p>
      <p>Clothes: ${this.clothesStyle}</p>
      <p>Specials: ${this.specials.join(', ')}</p>
    </div>`
  }
}

export = { Person };