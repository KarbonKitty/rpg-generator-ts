import dice = require('./dice');
import helpers = require('./helpers');
import data = require('../data/military-unit');

class MilitaryUnit {
  number: number;
  size: string;
  adjective: string | null;
  type: string;

  constructor(){
    let maxNumber = data.maxNumber * (dice.d10() == 10 ? 10 : 1);
    maxNumber = data.maxNumber * (dice.d10() == 10 ? 10 : 1);
    this.number = ((Math.random() * maxNumber) << 0) + 1;
    this.size = helpers.randomFromWeighted(data.sizes);
    this.type = helpers.randomFromWeighted(data.types);
    this.adjective = Math.random() < 0.3 ? helpers.randomFromWeighted(data.adjectives) : null;
  }

  display() {
    let ordinal = '';
    if (this.number % 10 == 1) {
      ordinal = 'st';
    } else if (this.number % 10 == 2) {
      ordinal = 'nd';
    } else if (this.number % 10 == 3) {
      ordinal = 'rd';
    } else {
      ordinal = 'th';
    }

    return `<div>
      <p>${this.number}${ordinal} ${this.adjective == null ? '' : this.adjective} ${this.type} ${this.size}</p> 
    </div>`
  }
}

export = MilitaryUnit;