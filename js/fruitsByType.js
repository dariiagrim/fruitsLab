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
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    const sweetReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSweet = await sweetReq.json()
    const sweetContainer = createProductContainer('sweet__container')
    for (let i = 8; i < 14; i++) {
        sweetContainer.appendChild(createProduct(dataSweet[i].url, dataSweet[i].name, dataSweet[i].price, 'sweet', i))
    }
    main.appendChild(sweetContainer)
}

async function renderSourFruits() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    const sourReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSour = await sourReq.json()
    const sourContainer = createProductContainer('sour__container')
    for (let i = 14; i < 20; i++) {
        sourContainer.appendChild(createProduct(dataSour[i].url, dataSour[i].name, dataSour[i].price, 'sour', i))
    }
    main.appendChild(sourContainer)
}

async function renderNeutralFruits() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    const neutralReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataNeutral = await neutralReq.json()
    const neutralContainer = createProductContainer('neutral__container')
    for (let i = 20; i < 26; i++) {
        neutralContainer.appendChild(createProduct(dataNeutral[i].url, dataNeutral[i].name, dataNeutral[i].price, 'neutral', i))
    }
    main.appendChild(neutralContainer)
}

async function renderAllFruits() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    const allReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataAll = await allReq.json()
    const allContainer = createProductContainer('all__container')
    for (let i = 8; i < 26; i++) {
        console.log(dataAll[i].url)
        allContainer.appendChild(createProduct(dataAll[i].url, dataAll[i].name, dataAll[i].price, 'all', i))
    }
    main.appendChild(allContainer)
}