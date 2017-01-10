import helpers = require('./helpers');
import items = require('../data/treasure');

function randomCommonItem(template: { types: items.WeightedOptions }) {
  return helpers.randomFromWeighted(template.types);
}

interface Container {
  name: string;
  items: string[];
}

class Loot {
  common: string[];
  containers: Container[];

  constructor() {
    this.common = [];
    this.containers = [];

    items.items.common.forEach(template => {
      if (Math.random() < template.p) {
        this.common.push(randomCommonItem(template));
      }
    });

    items.items.containers.forEach(template => {
      if (Math.random() < template.p) {
        let container: any = {};
        container.name = randomCommonItem(template);
        let ss = <string[]>[];
        for (let size in template.sizes) {
          const n = ((Math.random() * (template.sizes[size].max - template.sizes[size].min)) << 0) + template.sizes[size].min + 1;
          for (let i = 0; i < n; i++) {
            ss.push(size);
          }
        }
        container.items = [];
        (<string[]>ss).forEach(s => {
          let category = <items.Category>helpers.randomFromObject(items.items.uncommon);
          container.items.push(helpers.randomFromWeighted(category[s]));
        });
        this.containers.push(container);
      }
    })
  }

  display() {
    let itemStrings = <string[]>[];
    this.containers.forEach(c => {
      itemStrings.push(`${c.name}: ${c.items.join(', ')}`);
    });
    return `<div>
      <p>${this.common.join(', ')}</p>
      <p>${itemStrings.join('</p><p>')}</p>
    </div>`;
  }
}

export = Loot;