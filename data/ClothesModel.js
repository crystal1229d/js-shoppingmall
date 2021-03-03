export default {

    data : [
        {
            id: '0',
            type: 'shirt',
            color: 'pink',
            size: 'large',
            sex: 'female',
            img: 'pink_t'
        },
        {
            id: '1',
            type: 'pants',
            color: 'blue',
            size: 'small',
            sex: 'male',
            img: 'blue_p'
        },
        {
            id: '2',
            type: 'pants',
            color: 'yellow',
            size: 'large',
            sex: 'male',
            img: 'yellow_p'
        },
        {
            id: '3',
            type: 'skirt',
            color: 'yellow',
            size: 'large',
            sex: 'female',
            img: 'yellow_s'
        },
        {
            id: '4',
            type: 'skirt',
            color: 'blue',
            size: 'small',
            sex: 'female',
            img: 'blue_s'
        },
        {
            id: '5',
            type: 'shirt',
            color: 'blue',
            size: 'large',
            sex: 'male',
            img: 'blue_t'
        },
        {
            id: '6',
            type: 'shirt',
            color: 'yellow',
            size: 'large',
            sex: 'male',
            img: 'yellow_t'
        },
        {
            id: '7',
            type: 'pants',
            color: 'pink',
            size: 'large',
            sex: 'female',
            img: 'pink_p'
        },
        {
            id: '8',
            type: 'shirt',
            color: 'pink',
            size: 'small',
            sex: 'male',
            img: 'pink_t'
        }
    ],

    list (query) {
        return new Promise(res => {
            setTimeout(() => {
                res(this.data)
            }, 200);
        })
    },

    sort (query) {
        return new Promise(res => {
            setTimeout(() => {
                let result = this.data.filter (item => {
                    if ( item.type === query ||
                        item.color === query || 
                        item.size === query || 
                        item.sex === query )
                        return item
                })
                res(result)
            }, 200);
        })
    },

    add () {

    },

    remove (id) {
        this.data = this.data.filter(item => item.id !== id)
    }
}