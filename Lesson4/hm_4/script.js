'use strict'

function getObjectNumbers(number) {

    const objectNumbers = {
        единицы: null,
        десятки: null,
        сотни: null,
    }
    if (number > 999 || number < 0) return console.log('Введите число от 0 до 999'), {}
    let numberStr = number.toString()

    let i = numberStr.length - 1
    for (const prop in objectNumbers) {
        if (numberStr[i] === undefined) {
            objectNumbers[prop] = 0
        } else objectNumbers[prop] = +numberStr[i]
        --i
    }

    return objectNumbers

}

let check = getObjectNumbers(277)
console.log(check)

// 2

let goodsCart = {

    goods: [
        {
            vendorCode: 'item1',
            cost: 100,
            count: 1
        },
        {
            vendorCode: 'item12',
            cost: 400,
            count: 2
        },
        {
            vendorCode: 'item132',
            cost: 150,
            count: 1
        },
        {
            vendorCode: 'item5',
            cost: 15,
            count: 10
        }
    ],

    countBasketPrice() {
        return this.goods.reduce((totalCost, costItem) =>
             totalCost += costItem.cost * costItem.count
        , 0)
    }
};

console.log(goodsCart.countBasketPrice())



