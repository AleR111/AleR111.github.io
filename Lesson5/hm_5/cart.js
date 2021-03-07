'use strict'

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
        },
        {
            vendorCode: 'item53',
            cost: 150,
            count: 10
        },
    ],

    countBasketPrice() {
        return this.goods.reduce((totalCost, costItem) =>
                totalCost += costItem.cost * costItem.count
            , 0)
    },

    getTotalCostCart() {
        const cart = document.querySelector('.cart');
        console.log(cart);
        if (this.countBasketPrice() === 0) {
            cart.insertAdjacentHTML('afterbegin', `<h4>Козина пуста</h4>`);
        } else cart.insertAdjacentHTML('afterbegin', `<h4>В корзине: ${this.goods.length} товарa(ов) на сумму ${this.countBasketPrice()} рублей</h4>`);
    },

};

console.log(goodsCart.countBasketPrice())

goodsCart.getTotalCostCart();