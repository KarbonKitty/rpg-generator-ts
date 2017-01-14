import helpers = require('./helpers');
import items = require('../data/treasure');

function generateCommonItem(template: items.CommonItemTemplate): string | null {
  if (Math.random() < template.p) {
    return helpers.randomFromWeighted(template.types);
  } else {
    return null
  }
}

interface Container {
  name: string;
  items: string[];
}

interface HashMap<T> {
  [name: string]: T;
}

class Loot {
  common: string[];
  containers: Container[];

  constructor() {
    this.common = [];
    this.containers = [];

    items.items.common.forEach(template => {
      let item = generateCommonItem(template);
      if (item != null) {
        this.common.push(item);
      }
    });

    items.items.containers.forEach(template => {
      if (Math.random() < template.p) {
        let container: any = {};
        container.name = helpers.randomFromWeighted(template.types);
        let objectsOfSize = <HashMap<number>>{};
        for (let size in template.sizes) {
          const s = template.sizes[size];
          const n = ((Math.random() * (s.max - s.min)) << 0) + s.min + 1;
          objectsOfSize[size] = n;
        }
        container.items = [];
        for (let size in objectsOfSize) {
          const itemsOfSize = items.items.uncommon.filter(i => { return i.size == size});
          for (let i = 0; i < objectsOfSize[size]; i++){
            let currentItem = helpers.randomFromArray(itemsOfSize);
            while (Math.random() > currentItem.rarity) {
              currentItem = helpers.randomFromArray(itemsOfSize);
            }
            container.items.push(currentItem.name);
          }
        }
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