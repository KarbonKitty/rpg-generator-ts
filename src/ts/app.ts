import dice = require('./dice');
import person = require('./person');

let result = document.getElementById('result');
if (result != null) {
  result.innerHTML = new person.Person().display();
}