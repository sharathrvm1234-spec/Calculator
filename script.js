function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendOperator(operator) {
  document.getElementById('result').value += operator;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  let result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;
}
