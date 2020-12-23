const sweetLink = document.querySelector('.nav__sweet')
const sourLink = document.querySelector('.nav__sour')
const neutralLink = document.querySelector('.nav__neutral')
const allLink = document.querySelector('.nav__all')

sweetLink.onclick = function(e) {
    e.preventDefault()
    let href = window.location.href
    href = href.slice(0, href.length - window.location.hash.length)
    if (href[href.length - 1] === '/') {
        href = href.slice(0, href.length - 1)
    }
    window.history.replaceState( null , null, href + '/#sweet');
    renderSweetFruits()
}


sourLink.onclick = function(e) {
    e.preventDefault()
    let href = window.location.href
    href = href.slice(0, href.length - window.location.hash.length)
    if (href[href.length - 1] === '/') {
        href = href.slice(0, href.length - 1)
    }
    window.history.replaceState( null , null, href + '/#sour');
    renderSourFruits()
}


neutralLink.onclick = function(e) {
    e.preventDefault()
    let href = window.location.href
    href = href.slice(0, href.length - window.location.hash.length)
    if (href[href.length - 1] === '/') {
        href = href.slice(0, href.length - 1)
    }
    window.history.replaceState( null , null, href + '/#neutral');
    renderNeutralFruits()
}

async function renderSweetFruits() {
    main.innerHTML = ''
    const sweetReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sweet', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSweet = await sweetReq.json()
    const sweetContainer = createProductContainer('sweet__container')
    for (let i = 0; i < 6; i++) {
        sweetContainer.appendChild(createProduct(dataSweet[i].url, dataSweet[i].name, dataSweet[i].price, 'sweet'))
    }
    main.appendChild(sweetContainer)
}

async function renderSourFruits() {
    main.innerHTML = ''
    const sourReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sour', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSour = await sourReq.json()
    const sourContainer = createProductContainer('sour__container')
    for (let i = 0; i < 6; i++) {
        sourContainer.appendChild(createProduct(dataSour[i].url, dataSour[i].name, dataSour[i].price, 'sour'))
    }
    main.appendChild(sourContainer)
}

async function renderNeutralFruits() {
    main.innerHTML = ''
    const neutralReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/neutral', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataNeutral = await neutralReq.json()
    const neutralContainer = createProductContainer('neutral__container')
    for (let i = 0; i < 6; i++) {
        neutralContainer.appendChild(createProduct(dataNeutral[i].url, dataNeutral[i].name, dataNeutral[i].price, 'neutral'))
    }
    main.appendChild(neutralContainer)
}
