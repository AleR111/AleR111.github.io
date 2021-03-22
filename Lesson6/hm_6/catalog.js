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
        let i = 0;
        this.goods.forEach(good => {
            const box = document.createElement('div');
            box.classList.add('good');

            box.insertAdjacentHTML("beforeend", this.render(good));

            const good_btn = document.createElement('a');
            good_btn.innerText = 'Добавить в козину';
            good_btn.classList.add('button');
            good_btn.setAttribute('href', '#');
            good_btn.dataset.id = `${i++}`;
            box.appendChild(good_btn);

            this.containerElement.appendChild(box);


        })
    },

};

catalog.createHtml();

////////////////////////////////////////////   Cart  ///////////////////////////////////////////////////////////////////

const goodsCart = {

    goods: [],
    getCount: {},
    cartContainer: document.getElementById('cart'),

    render(good) {
        return `<div class="good_prop"><b>Наименование</b>: ${good.name}</div>
                <div class="good_prop"><b>Артику</b>: ${good.vendorCode}</div>
                <div class="good_prop"><b>Цена</b>: ${good.cost}</div>
                <div class="good_prop"><b>Количество</b>: ${good.count}</div>
`
    },

    countBasketPrice() {
        return this.goods.reduce((totalCost, costItem) =>
                totalCost += costItem.cost * costItem.count
            , 0)
    },

    totalCount() {
        return this.goods.reduce((totalCost, costItem) =>
                totalCost += costItem.count
            , 0)
    },

    getTotalCostCart() {

        this.cartContainer.innerText = '';
        if (this.countBasketPrice() === 0) {
            this.cartContainer.insertAdjacentHTML('afterbegin', '<h4> Козина пуста </h4>');
        } else {
            this.createGood();

            const cartInfo = document.createElement('h4');
            cartInfo.innerText = ``;
            cartInfo.innerText = `В корзине: ${this.totalCount()} товарa(ов) на сумму ${this.countBasketPrice()} рублей`;
            this.cartContainer.appendChild(cartInfo);

            this.cartContainer.insertAdjacentHTML('beforeend', '<a id = "buy" href = "#"> Купить</a>');
            const buyBtn = document.getElementById('buy');
            buyBtn.addEventListener("click", () => this.clearGoods());
        }
    },

    createGood() {

        this.goods.forEach(good => {
            const box = document.createElement('div');
            box.classList.add('good');

            box.insertAdjacentHTML("beforeend", this.render(good));

            this.cartContainer.appendChild(box);

        })


    },

    clearGoods() {
        this.goods = []
        this.getCount = {}
        this.getTotalCostCart()
    },

};


const addGoods = {
    catalog,
    goodsCart,

    clickButtonAddGood() {

        this.catalog.containerElement.addEventListener("click", (event) => {
            this.containerClickHandler(event)
        })

    },

    containerClickHandler(event) {

        if (event.target.tagName !== 'A') return;

        this.goodsCart.getCount[event.target.dataset.id] = this.goodsCart.getCount[event.target.dataset.id] === undefined ? 1 : this.goodsCart.getCount[event.target.dataset.id] + 1;
        this.addGood(event.target.dataset.id);

    },

    addGood(id) {

        this.goodsCart.goods[id] = (this.catalog.goods[id]);
        this.goodsCart.goods[id]['count'] = this.goodsCart.getCount[id];
        this.goodsCart.getTotalCostCart();
    },

};

goodsCart.getTotalCostCart();
addGoods.clickButtonAddGood();
