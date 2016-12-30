class Dice {
  sides: number;
  exploding: boolean;

  constructor(sides: number, exploding = false) {
    this.sides = sides;
    this.exploding = exploding;
  }

  private basicRoll(): number {
    return Math.floor(Math.random() * this.sides) + 1;
  }

  roll(): number {
    let current = this.basicRoll();
    let total = 0;
    while (current == this.sides && this.exploding) {
      total += current;
      current = this.basicRoll();
    }
    return total;
  }

  rollMultiple(times: number): number[] {
    let rollResults = [];
    for (let i = 0; i < times; i++) {
      rollResults.push(this.roll());
    }
    return rollResults;
  }
}

function singleRoll(sides: number, exploding = false): number {
  let basicRoll = (sides: number) => Math.floor(Math.random() * sides) + 1;

  let current = basicRoll(sides);
  let total = 0;
  while (current == sides && exploding) {
    total += current;
    current = basicRoll(sides);
  }
  return total + current;
}

function d2(exploding = false) {
  return singleRoll(2, exploding);
}

function d4(exploding = false) {
  return singleRoll(4, exploding);
}

function d6(exploding = false) {
  return singleRoll(6, exploding);
}

function d8(exploding = false) {
  return singleRoll(8, exploding);
}

function d10(exploding = false) {
  return singleRoll(10, exploding);
}

function d12(exploding = false) {
  return singleRoll(12, exploding);
}

function d20(exploding = false) {
  return singleRoll(20, exploding);
}

function d100(exploding = false) {
  return singleRoll(100, exploding);
}

export = { Dice, singleRoll, d2, d4, d6, d8, d10, d12, d20, d100 };