'use strict'

// 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 пефиксная фома инкрементирование производится сразу, а возврат — уже с обновленным значением.
// d = b++; alert(d);           // 1 в постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование
// c = (2+ ++a); alert(c);      // 5 2 + 3 ( переменная а два раза инкрементировалась)
// d = (2+ b++); alert(d);      // 4 2 + 2 т.к. постфиксная форма
// alert(a);                    // 3 ну тут понятно
// alert(b);                    // 3 выполнилось инкементирование строки 7


// 2

// var a = 2;
// var x = 1 + (a *= 2); // => 5   x = 1 + (a = a * 2) сначала выполнится то что в скобках

// 3

// let a = 0;
// let b = -5;
//
// if(a >= 0 && b >= 0) {
//     console.log(a - b)
// } else if (a < 0 && b < 0) {
//     console.log(a * b)
// } else {
//     console.log(a + b)
// }

// 4

let a = 0;
let lowLimit = 0;
let result = a;

switch (a) {
    case lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
    case ++lowLimit:
        result = `${result} ${++a}`;
}

console.log(result)

// 5

const sum = function sum(a, b) {
    return a + b;
};

let check = sum(5, -2);
console.log(check);

const subtract = function subtract(a, b) {
    return a - b;
};

check = subtract(5, -2);
console.log(check);

const multiplication = function multiplication(a, b) {
    return a * b;
};

check = multiplication(5, -2);
console.log(check);

const division = function division(a, b) {
    return a / b;
};

check = division(5, -2);
console.log(check);

// 6

const mathOperation = function mathOperation(arg1, arg2, operation) {

    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') return "Неправильно введеные данные"

    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return subtract(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        default:
            return "Неправильно введеные данные";
    }
}

check = mathOperation(-2, 19, '*');
console.log(check)

// 7

console.log(null > 0)
console.log(null >= 0)  // нестрогое равенство и сравнения > < >= <= работают по-разному, сравнения преобразуют null в число, рассматривая его как 0.
console.log(null <= 0)
console.log(null == 0)

// 8*

const power = function power(val, pow) {

    if (pow === 0) return 1;

    if (pow === 1) return val
    return power(val, (pow - 1)) * val;


}

check = power(2, 5);
console.log(check)
