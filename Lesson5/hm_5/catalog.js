'use strict'

const catalog = {

    containerElement: document.getElementById('catalog'),

    goods: [
        {
            name: 'thing1',
            vendorCode: '34534',
            cost: 100,
        },
        {
            name: 'thing2',
            vendorCode: '1234',
            cost: 400,
        },
        {
            name: 'thing3',
            vendorCode: '879',
            cost: 150,
        },
        {
            name: 'thing4',
            vendorCode: '456',
            cost: 15,
        },
        {
            name: 'thing5',
            vendorCode: '775',
            cost: 150,
        },
        {
            name: 'thing6',
            vendorCode: '775',
            cost: 150,
        },
    ],


    createHtml() {

        this.goods.forEach(element => {
            const box = document.createElement('div')

            for (const prop in element) {

                box.insertAdjacentHTML("beforeend", `<div class="item"><h4 class="heading">${prop}:</h4><p>${element[prop]}</p></div>`)

            }

            box.style.border = '1px solid #ccc'
            box.style.paddingLeft = '16px'
            box.style.paddingBottom = '16px'
            box.style.width = '300px'

            box.insertAdjacentHTML("beforeend", `<a href="#" class="button">Добавить в корзину</a>`)
            this.containerElement.appendChild(box)

        })
    },

};

catalog.createHtml();

const goodsCart = {

    goods: [],

    countBasketPrice() {
        return this.goods.reduce((totalCost, costItem) =>
                totalCost += costItem.cost * 1
            , 0)
    },

};

const addGoods = {
    catalog,
    goodsCart,
    buttonNum: null,

    addGood(i) {
        this.buttonNum = i;
        this.goodsCart.goods.push(this.catalog.goods[this.buttonNum])
        console.log(goodsCart.countBasketPrice())
    },

    clickButtonAddGood() {

        const buttonClicked = document.querySelectorAll('.button');
        for (let i = 0; i < buttonClicked.length; i++) {
            buttonClicked[i].onclick = () => this.addGood(i)
        }

    },

}

addGoods.clickButtonAddGood();
console.log(goodsCart)
