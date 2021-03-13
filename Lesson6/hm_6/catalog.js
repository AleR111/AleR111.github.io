'use strict'

const catalog = {

    render(good) {
        return `<div class="good_prop"><b>Наименование</b>: ${good.name}</div>
                <div class="good_prop"><b>Артику</b>: ${good.vendorCode}</div>
                <div class="good_prop"><b>Цена</b>: ${good.cost}</div>`;
    },

    containerElement: document.getElementById('catalog'),

    goods: [
        {
            name: 'Гвозди',
            vendorCode: '34534',
            cost: 100,
        },
        {
            name: 'Обои',
            vendorCode: '1234',
            cost: 400,
        },
        {
            name: 'Плитка',
            vendorCode: '879',
            cost: 150,
        },
        {
            name: 'Шурупы',
            vendorCode: '456',
            cost: 15,
        },
        {
            name: 'Изолента',
            vendorCode: '775',
            cost: 150,
        },
        {
            name: 'Клей',
            vendorCode: '775',
            cost: 150,
        },
    ],


    createHtml() {
        let i = 0
        this.goods.forEach(good => {
            const box = document.createElement('div')
            box.classList.add('good')

            box.insertAdjacentHTML("beforeend", this.render(good))

            const good_btn = document.createElement('a')
            good_btn.innerText = 'Добавить в козину'
            good_btn.classList.add('button')
            good_btn.setAttribute('href', '#')
            good_btn.dataset.id = `${i++}`
            box.appendChild(good_btn)

            this.containerElement.appendChild(box)


        })
    },

};

catalog.createHtml();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const goodsCart = {

    cartContainer: document.getElementById('cart'),

    render(good) {
        return `<div class="good_prop"><b>Наименование</b>: ${good.name}</div>
                <div class="good_prop"><b>Артику</b>: ${good.vendorCode}</div>
                <div class="good_prop"><b>Цена</b>: ${good.cost}</div>
                <div class="good_prop"><b>Количество</b>: ${good.count}</div>
`
    },

    goods: [],

    countBasketPrice() {
        return this.goods.reduce((totalCost, costItem) =>
                totalCost += costItem.cost * 1
            , 0)
    },

    getTotalCostCart() {

        this.cartContainer.innerText = ''
        if (this.countBasketPrice() === 0) {
            this.cartContainer.insertAdjacentHTML('afterbegin', ` < h4 > Козина
            пуста < /h4>`);
        } else this.createGood();

        const cartInfo = document.createElement('h4');
        cartInfo.innerText = ``
        cartInfo.innerText = `В корзине: ${this.goods.length} товарa(ов) на сумму ${this.countBasketPrice()} рублей`
        this.cartContainer.appendChild(cartInfo)
    },

    createGood() {

        this.goods.forEach(good => {
            const box = document.createElement('div')
            box.classList.add('good')

            box.insertAdjacentHTML("beforeend", this.render(good))

            this.cartContainer.appendChild(box)


        })
    },

}


const addGoods = {
    catalog,
    goodsCart,
    // buttonNum: null,

    addGood(id) {
        // this.buttonNum = id;

        this.goodsCart.goods.push(this.catalog.goods[id])
        this.goodsCart.goods[id].count = 9
        console.log(this.goodsCart.goods)
        console.log(goodsCart.countBasketPrice())
        this.goodsCart.getTotalCostCart()
    },


    clickButtonAddGood() {

        this.catalog.containerElement.addEventListener("click", (event) => {
            this.containerClickHandler(event)
        })

    },

    containerClickHandler(event) {

        if (event.target.tagName !== 'A') return;
        this.addGood(event.target.dataset.id);

    },

}

addGoods.clickButtonAddGood();
console.log(goodsCart)