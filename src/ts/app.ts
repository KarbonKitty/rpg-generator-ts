import dice = require('./dice');
import person = require('./person');

let result = document.getElementById('result');
if (result != null) {
  result.innerHTML = new person.Person('english').display();
}

let newPersonButton = document.getElementById('newPerson');
if (newPersonButton != null) {
  newPersonButton.onclick = () => {
    if (result != null) {
      result.innerHTML = new person.Person('english').display()
    }
  };
}