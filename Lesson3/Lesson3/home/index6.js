function amount(x, y) {
  return x + y;
}

function difference(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function mathOperation(arg1, arg2, operation) {
  switch(operation) {
    case '+':
      return amount(arg1, arg2);
    case '-':
      return difference(arg1, arg2);
    case '/':
      return multiplication(arg1, arg2);
    case '*':
      return division(arg1, arg2);
  }
}
