'use strict';

const settings = {
    rowCountDefault: 8,
    collCountDefault: 8,
    darkCellColor: '#2f1212',
    lightCellColor: '#bc8c71',
    availableNamesColl: 'ABCDEFGH',
};

const checkers = {
    settings,
    containerElement: document.getElementById('checkers'),


    createCheckers() {

        for (let row = 1; row <= this.settings.rowCountDefault; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let coll = 1; coll <= this.settings.collCountDefault; coll++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                if (coll % 2 !== 0 && row % 2 !== 0 || coll % 2 === 0 && row % 2 === 0) {
                    td.style.background = this.settings.lightCellColor;
                } else {
                    td.style.background = this.settings.darkCellColor;
                }
            }

        }

        this.createNameCell();

    },

    createNameCell() {
        const tr = document.querySelectorAll('tr');
        let i = 8;
        tr.forEach(tag => {
            tag.insertAdjacentHTML('afterbegin', `<td>${i--}</td>`);
        })

        const nameColl = document.createElement('tr');
        this.containerElement.appendChild(nameColl);
        for (let i = 0; i <= this.settings.collCountDefault; i++) {
            if (i === 0) {
                nameColl.insertAdjacentHTML('afterbegin', `<td></td>`);
            } else nameColl.insertAdjacentHTML('beforeend', `<td>${this.settings.availableNamesColl[i - 1]}</td>`);
        }
    },


};

checkers.createCheckers();

