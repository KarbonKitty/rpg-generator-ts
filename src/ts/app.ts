import dice = require('./dice');

let result = document.getElementById('result');
if (result != null) {
  result.textContent = dice.d10(true).toString();
}