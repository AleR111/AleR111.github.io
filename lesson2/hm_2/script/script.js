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
let resul = a;

switch (a) {
    case lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
    case ++lowLimit:
        resul = `${resul} ${++a}`;
}

console.log(resul)

