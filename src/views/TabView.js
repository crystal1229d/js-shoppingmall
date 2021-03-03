import View from './View.js'

const tag = '[View]'

const TabView = Object.create(View)

TabView.tabList = [
    { type: 'shirt', img: 'blue_t' },
    { type: 'pants', img: 'blue_p' },
    { type: 'skirt', img: 'blue_s' },
    { type: 'blue', class: 'btn-blue' }, 
    { type: 'yellow', class: 'btn-yellow' },
    { type: 'pink', class: 'btn-pink' }
]

TabView.setup = function (el) {
    this.init(el)
    return this
}

TabView.render = function () {
    this.el.innerHTML = this.getTabsHtml()
    this.bindClick()
    return this
}

TabView.getTabsHtml = function() {
    return this.tabList.reduce((html, item) => {
        html += 
        `<li data-type='${item.type}'>
            ${item.img ? 
                `<img src='../img/${item.img}.png'></img>` 
                : `<div class='${item.class}'>${item.type}</div>`}
        </li>`
        return html
    }, `<ul class='tab-list'>`) + `</ul>`
}

TabView.bindClick = function () {
    Array.from(this.el.querySelectorAll('.tab-list li')).forEach(li => {
        li.addEventListener('click', e => this.onClick(li.dataset.type))
    })
}

TabView.onClick = function (tab) {
    console.log(tag, tab)
    this.emit('@sort', tab)   
}

export default TabView