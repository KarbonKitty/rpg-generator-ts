import dice = require('./dice');
import Person = require('./person');
import MilitaryUnit = require('./military-unit');
import Loot = require('./treasure');

function safeSetInnerHTML(id: string, html: string) {
  let el = document.getElementById(id);
  if (el != null) {
    el.innerHTML = html;
  }
}

safeSetInnerHTML('person', new Person('english').display());
safeSetInnerHTML('military-unit', new MilitaryUnit().display());
safeSetInnerHTML('items', new Loot().display());

function safeAttachToClick(id: string, fun: () => void) {
  let el = document.getElementById(id);
  if (el != null) {
    el.onclick = fun;
  }
}

safeAttachToClick('newPerson', () => safeSetInnerHTML('person', new Person('english').display()));
safeAttachToClick('newMilitaryUnit', () => safeSetInnerHTML('military-unit', new MilitaryUnit().display()));
safeAttachToClick('newItems', () => safeSetInnerHTML('items', new Loot().display()));
