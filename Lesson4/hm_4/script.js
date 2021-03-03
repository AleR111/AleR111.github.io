'use strict'

function getObjectNumbers(number) {

    const objectNumbers = {}
    if (number > 999 || number < 0) return console.log('Введите число от 0 до 999'), objectNumbers
    let numberStr = number.toString()
    if (numberStr.length === 2) numberStr = '0' + numberStr;
    if (numberStr.length === 1) numberStr = '00' + numberStr;
    if (numberStr.length === 0) numberStr = '000';
    objectNumbers['единицы'] = +numberStr[2]
    objectNumbers['десятки'] = +numberStr[1]
    objectNumbers['сотни'] = +numberStr[0]

    return objectNumbers

}

let check = getObjectNumbers(2)
console.log(check)
