var inputFirtNumber = document.querySelector(".first-number");
var inputSecondNumber = document.querySelector(".second-number");
var inputSum = document.querySelector(".sum-result");
var inputSubtraction = document.querySelector(".subtraction-result");
var inputSubtractionReverse = document.querySelector(
  ".subtractionReverse-result"
);

const firstNumberValue = inputFirtNumber.value;
const secondNumberValue = inputSecondNumber.value;
var firstNumber = parseInt(inputFirtNumber.value, 10);
var secondNumber = parseInt(inputSecondNumber.value, 10);

//a)
function sum(a, b) {
  return a + b;
}
//b)
function subtraction(a, b) {
  return a - b;
}
//c)
function subtractionReverse(a, b) {
  return b - a;
}
//d)
function multiplication(a, b) {
  return b * a;
}
//e)
function division(a, b) {
  if (b === 0) {
    return "Divisão por 0";
  }
  return a / b;
}
//f)
function divisionReverse(a, b) {
  if (a === 0) {
    return "Divisão por 0";
  }
  return b / a;
}
//g)
function squaredFirstNumber(a) {
  return a ** 2;
}
//h)
function squaredSecondNumber(b) {
  return b ** 2;
}
//i)
function firstNumberDivisors(a) {
  var divisors = [];
  for (var i = 1; i < a.lenth; i++) {
    var result = a / i;
    if (result === 0) {
      return (i += divisors).join(", ");
    }
    return divisors;
  }
}

function calculate() {
  //alert("input Clicadíssimo! " + firstNumberValue);
  var a = 2,
    b = 3;

  inputSum.value = sum(firstNumber, secondNumber);
  inputSubtraction.value = subtraction(a, b);
  inputSubtractionReverse.value = subtractionReverse(a, b);
}

/* var calculate = () => {
  return sum(firstNumber, secondNumber);
}; */

console.log();
console.log(sum(inputFirtNumber.value, inputSecondNumber.value));
