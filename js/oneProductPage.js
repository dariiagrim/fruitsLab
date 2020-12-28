class Product {
    constructor(id) {
        this.name = 'None'
        this.price = '0'
        this.id = id
        this.priceInt = 0
        this.amountInCart = 1
    }

    setPriceInt() {
        this.priceInt = parseInt(this.price)
    }
}

let allProducts = []
for (let i = 0; i < 26; i++) {
    allProducts.push(new Product(i))
}

let cart = []
let cartLength = 0
const cartIcon = document.querySelector('.cart')
const header = document.querySelector('.header')



window.addEventListener('click', function(event) {
    if (event.target.classList.contains('product')) {
        renderOneProductInfo(event.target.id)
    }
    if (event.target.parentNode.classList.contains('product')) {
        renderOneProductInfo(event.target.parentNode.id)
    }
    if (event.target.classList.contains('add-to-cart')) {
        cartLength += 1
        let id = event.target.id
        is_duplicate = false
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id  == id) {
                is_duplicate = true
                cart[i].amountInCart += 1
            }
        }
        if (!is_duplicate) {
            cart.push(allProducts[id])
        }
        cartIcon.innerHTML = `${cartLength}`
    }
})

async function renderOneProductInfo(id) {
    main.innerHTML = ''
    main.parentNode.parentNode.classList.add('one-page-main')
    header.classList.add('one-page-header')
    main.appendChild(loader)
    const allReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataAll = await allReq.json()
    console.log(id, dataAll[id].url, dataAll[id].name, dataAll[id].price, dataAll[id].description, id)
    const pageProduct = createPageForOneProduct(dataAll[id].url, dataAll[id].name, dataAll[id].price, dataAll[id].description, id)
    if (allProducts[id].name === "None") {
        allProducts[id].name = dataAll[id].name
        allProducts[id].price = dataAll[id].price
        allProducts[id].setPriceInt()
    }
    main.removeChild(loader)
    main.appendChild(pageProduct)
}

function createPageForOneProduct(img, name, price, description, id) {
    const productPage = document.createElement('div')
    productPage.classList.add('product-page')
    productPage.innerHTML = `<img src="${img}" alt="${name}" class="one-product-img">`
    productPage.innerHTML += `<div class="product-info"><p class="one-product-name info-item">${name}</p><p class="one-product-price info-item">${price}</p><p class="one-product-description info-item">${description}</p><button class="add-to-cart info-item" id="${id}">Додати до кошику</button></div>`
    return productPage
}

