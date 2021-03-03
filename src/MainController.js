import TabView from './views/TabView.js'
import ItemListView from './views/ItemListView.js'
import HeaderView from './views/HeaderView.js'

import ClothesModel from '../data/ClothesModel.js'

const tag = '[MainController]'

export default {
    init() {
        TabView.setup(document.querySelector('.tab'))
            .on('@sort', e => this.onSort(e.detail))

        ItemListView.setup(document.querySelector('.item-list'))

        HeaderView.setup(document.querySelector('.header'))
            .on('@logo', e => this.renderView())

        this.renderView()
    },
    renderView() {
        console.log(tag, 'renderView')
        TabView.render()
        HeaderView.render()
        this.fetchClothesList()
    },
    fetchClothesList () {
        ClothesModel.list().then(data => {
            ItemListView.render(data)
        })
    },
    onSort(query) {
        console.log(tag, query)
        ClothesModel.sort(query).then(data => {
            console.dir(tag, data)
            ItemListView.render(data)
        })
    }
}