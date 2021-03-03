import View from './View.js'

const tag = '[HeaderView]'

const HeaderView = Object.create(View)

HeaderView.setup = function (el) {
    this.init(el)
    return this
}

HeaderView.render = function () {
    this.bindClickEvent()
    return this
}

HeaderView.bindClickEvent = function () {
    this.el.querySelector('img').addEventListener('click', e => {
        console.log(tag, 'bindClickEvent', e)
        e.stopPropagation()
        this.onClickLogo()
    })
}

HeaderView.onClickLogo = function () {
    this.emit('@logo')
}

export default HeaderView