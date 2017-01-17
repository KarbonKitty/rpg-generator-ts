import helpers = require('./helpers');
import items = require('../data/treasure');

function generateCommonItem(template: items.CommonItemTemplate): string | null {
  if (Math.random() < template.p) {
    return helpers.randomFromWeighted(template.types);
  } else {
    return null
  }
}

function selectRandomItem(maxSize: number): items.Item {
  let smallItems = items.items.uncommon.filter(i => i.size <= maxSize );
  let currentItem = helpers.randomFromArray(smallItems);
  while (Math.random() > currentItem.rarity) {
    currentItem = helpers.randomFromArray(smallItems);
  }
  return currentItem;
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
        container.items = [];
        let currentCapacity = template.capacity;
        while (currentCapacity > 0) {
          if (Math.random() > (currentCapacity / container.capacity)) {
            break;
          } else {
            let item = selectRandomItem(currentCapacity);
            container.items.push(item.name);
            currentCapacity -= item.size;
          }
        }
        this.containers.push(container);
      }
    });
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