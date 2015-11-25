function add(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}

function subtract(a, b){
  b = multiply(b, -1);
  return add(a, b);
}

function divide(a, b){
  return a / b;
}

function mod(a, b){
  return a % b;
}

function scale(a, min, max){
  var range = subtract(max, min);

  a = Math.max(a, min);
  a = Math.min(a, max);
  a = subtract(a, min);

  return divide(a, range);
}

function sigmoid(value, gain){
  gain = multiply(gain, -1);
  value = multiply(value, gain);
  var denominator = 1 + Math.exp(value);
  return divide(1, denominator);
}

function circleline(value){
  return multiply(value,Math.PI);
}

function circlearea(value){
  return multiply(multiply(value,value),Math.PI);
}

function largestcirclearea(a,b,c){
  d = Math.max(a,b);
  e = Math.max(b,c);
  f = d*d*Math.PI;
  g = e*e*Math.PI;
  return Math.max(f,g);
}
