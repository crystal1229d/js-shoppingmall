import View from './View.js'

const tag = '[ItemListView]'

const ItemListView = Object.create(View)

ItemListView.messages = {
    NO_ITEM: '상품이 없습니다'
}

ItemListView.setup = function (el) {
    this.init(el)
    return this
}

ItemListView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getItemListHtml(data) : this.messages.NO_ITEM
    return this
}

ItemListView.getItemListHtml = function (data) {
    return data.reduce((html, item) => {
        html += 
        `<li data-id="${item.id}">
            <div><img src='./img/${item.img}.png'></div>
            <div>${item.sex}, ${item.size}</div>
        </li>`
        return html
    }, '<ul>') + `</ul>`
}

export default ItemListView