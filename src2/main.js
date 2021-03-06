// fetch the items from the JSON fle
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

// Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    // join('') 으로 (문자열의)배열을 문자열로 병합
    container.innerHTML = items.map(item => createHTMLString(item)).join('') 
}

// create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `
}

// Handle button click
function onButtonClick(event, items) {
    
    // (방법 1) 버튼이 클릭될 때마다 컨테이너에 해당하는 데이터들을 새로 가져와 넣는다
    const dataset = event.target.dataset
    const key = dataset.key
    const value = dataset.value
    
    if (key == null || value == null) { return }

    displayItems(items.filter(item => item[key] === value))

    // (방법 2) (개선) 버튼이 클릭될 때마다 기존에 존재하던 데이터 중 해당하는 데이터만 보이게 한다
    // const target = event.target
    // const key = target.dataset.key
    // const value = target.dataset.value

    // if (key == null || value == null) { return }

    // updateItems(items, key, value)

}

// Make the items matching {key: value} invisible
function updateItems(items, key, value) {
    items.forEach(item => {
        if (item.dataset[key] === value) {
            item.classList.remove('invisible')
        } else {
            item.classList.add('invisible')
        }
    })
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo')
    const buttons = document.querySelector('.buttons')
    logo.addEventListener('click', () => displayItems(items))
    buttons.addEventListener('click', () => onButtonClick(event, items))
}

// main 
loadItems()
.then( items => {
    displayItems(items)
    setEventListeners(items)
})
.catch(console.log())