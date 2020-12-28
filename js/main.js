const logo = document.querySelector('.logo')
const loader = createLoader()
const footerLogo = document.querySelector('.footer__logo')
window.onload = function() {
    renderMain()
    let storage = localStorage.getItem('cart')
    if (storage === null) {
        cart = []
    } else {
        cart = JSON.parse(storage)
        for (let i = 0; i < cart.length; i++) {
            cart[i].__proto__ = Product.prototype
        }
    }
    storage = localStorage.getItem('cart-length')
    if (storage === null) {
        cartLength = 0
    } else {
        cartLength = parseInt(JSON.parse(storage))
    }
    cartIcon.innerHTML = `${cartLength}`
}

window.onunload = function() {
    localStorage.setItem('cart', JSON.stringify(cart)) 
    localStorage.setItem('cart-length', JSON.stringify(cartLength)) 
}

function createSalesBlock(text1, text2, text3, text4) {
    const sales = document.createElement('div')
    sales.classList.add('sales-block')
    sales.innerHTML = `<a href="#" class="sale sale-one">${text1}</a><a href="#" class="sale sale-two">${text2}</a>`
    sales.innerHTML += `<a href="#" class="sale sale-three">${text3}</a><a href="#" class="sale sale-four">${text4}</a>`
    return sales
} 

async function renderMain() {
    main.innerHTML = ""
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    if (header.classList.contains('one-page-header')) {
        header.classList.remove('one-page-header')
    }
    main.appendChild(loader)
    const salesReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await salesReq.json()
    main.appendChild(createSalesBlock(data[0].text, data[1].text, data[2].text, data[3].text))
    const hitsReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataHits = await hitsReq.json()
    const hitContainer = createProductContainer('hit__container')
    for (let i = 0; i < 8; i++) {
        hitContainer.appendChild(createProduct(dataHits[i].url, dataHits[i].name, dataHits[i].price, 'hit', i))
    }
    main.removeChild(loader)
    main.appendChild(hitContainer)
}

logo.onclick = function() {
    renderMain()
}

footerLogo.onclick = function() {
    renderMain()
}

function createLoader() {
    const loader = document.createElement('div')
    loader.classList.add('loader')
    return loader
}
