'use strict'

// 1

let i = 1;

while (i <= 100) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
        console.log(i)
    } else if (i !== 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) console.log(i);
    ++i;
}

// 2

let goodsCart = [
    ['item1', 150, 2],
    ['item11', 300, 1],
    ['item2', 200, 1],
    ['item31', 100, 12],
];

function countBasketPrice(array) {

    let count = 0;
    for (const val of array) {

        count += val[1] * val[2];

    }
    return count

}

let check = countBasketPrice(goodsCart);
console.log(check)

// 3

for (let i = 0; i <= 9; console.log(i), i++) {/*здесь пусто*/
}

// 4

let item = 'x'

for (let i = 0; i < 20; i++) {
    console.log(item)
    item += 'x'
}