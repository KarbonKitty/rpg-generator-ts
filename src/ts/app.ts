import dice = require('./dice');
import Person = require('./person');
import MilitaryUnit = require('./military-unit');
import Loot = require('./treasure');

let person = document.getElementById('person');
if (person != null) {
  person.innerHTML = new Person('english').display();
}

let newPersonButton = document.getElementById('newPerson');
if (newPersonButton != null) {
  newPersonButton.onclick = () => {
    if (person != null) {
      person.innerHTML = new Person('english').display()
    }
  };
}

let militaryUnit = document.getElementById('military-unit');
if (militaryUnit != null) {
  militaryUnit.innerHTML = new MilitaryUnit().display();
}

let newMilitaryUnitButton = document.getElementById('newMilitaryUnit');
if (newMilitaryUnitButton != null){
  newMilitaryUnitButton.onclick = () => {
    if (militaryUnit != null) {
      militaryUnit.innerHTML = new MilitaryUnit().display();
    }
  };
}

let loot = document.getElementById('items');
if (loot != null) {
  loot.innerHTML = new Loot().display();
}

let lootButton = document.getElementById('newItems');
if (lootButton != null) {
  lootButton.onclick = () => {
    if (loot != null) {
      loot.innerHTML = new Loot().display();
    }
  }
}