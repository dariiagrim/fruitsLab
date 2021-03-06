const sweetLink = document.querySelector('.nav__sweet')
const sourLink = document.querySelector('.nav__sour')
const neutralLink = document.querySelector('.nav__neutral')
const allLink = document.querySelector('.nav__all')

sweetLink.onclick = function(e) {
    e.preventDefault()
    renderSweetFruits()
}


sourLink.onclick = function(e) {
    e.preventDefault()
    renderSourFruits()
}


neutralLink.onclick = function(e) {
    e.preventDefault()
    renderNeutralFruits()
}

allLink.onclick = function(e) {
    e.preventDefault()
    renderAllFruits()
}

async function renderSweetFruits() {
    window.location.hash = "#/sweet"
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    if (header.classList.contains('one-page-header')) {
        header.classList.remove('one-page-header')
    }
    main.appendChild(loader)
    const sweetReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSweet = await sweetReq.json()
    const sweetContainer = createProductContainer('sweet__container')
    for (let i = 8; i < 14; i++) {
        sweetContainer.appendChild(createProduct(dataSweet[i].url, dataSweet[i].name, dataSweet[i].price, 'sweet', i))
    }
    main.removeChild(loader)
    main.appendChild(sweetContainer)
}

async function renderSourFruits() {
    window.location.hash = "#/sour"
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    if (header.classList.contains('one-page-header')) {
        header.classList.remove('one-page-header')
    }
    main.appendChild(loader)
    const sourReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSour = await sourReq.json()
    const sourContainer = createProductContainer('sour__container')
    for (let i = 14; i < 20; i++) {
        sourContainer.appendChild(createProduct(dataSour[i].url, dataSour[i].name, dataSour[i].price, 'sour', i))
    }
    main.removeChild(loader)
    main.appendChild(sourContainer)
}

async function renderNeutralFruits() {
    window.location.hash = "#/neutral"
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    if (header.classList.contains('one-page-header')) {
        header.classList.remove('one-page-header')
    }
    main.appendChild(loader)
    const neutralReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataNeutral = await neutralReq.json()
    const neutralContainer = createProductContainer('neutral__container')
    for (let i = 20; i < 26; i++) {
        neutralContainer.appendChild(createProduct(dataNeutral[i].url, dataNeutral[i].name, dataNeutral[i].price, 'neutral', i))
    }
    main.removeChild(loader)
    main.appendChild(neutralContainer)
}

async function renderAllFruits() {
    window.location.hash = "#/all"
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    if (header.classList.contains('one-page-header')) {
        header.classList.remove('one-page-header')
    }
    main.appendChild(loader)
    const allReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataAll = await allReq.json()
    const allContainer = createProductContainer('all__container')
    for (let i = 8; i < 26; i++) {
        let product = createProduct(dataAll[i].url, dataAll[i].name, dataAll[i].price, 'all', i) 
        product.appendChild(createFruitTypeText(i))
        allContainer.appendChild(product)
    }
    main.removeChild(loader)
    main.appendChild(allContainer)
}

function getFruitType(index) {
    if (index >= 8 && index < 14) {
        return 'солодкий'
    }
    if (index >= 14 && index < 20) {
        return 'кислий'
    }
    return 'нейтральний'
}

function createFruitTypeText(index) {
    const typeText = document.createElement('p')
    typeText.classList.add('type-text')
    typeText.innerHTML = getFruitType(index)
    return typeText
}