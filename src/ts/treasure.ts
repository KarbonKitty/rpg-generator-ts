import helpers = require('./helpers');
import items = require('../data/treasure');

function randomCommonItem(template: any) {
  return helpers.randomFromWeighted(template.types);
}

class Loot {
  common: string[];
  uncommon: string[];

  constructor() {
    this.common = [];
    items.items.common.forEach(template => {
      if (Math.random() < template.p) {
        this.common.push(randomCommonItem(template));
      }
    });
  }

  display() {
    return `<div>
      <p>${this.common.join(', ')}</p>
    </div>`;
  }
}

export = Loot;