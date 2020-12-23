window.addEventListener('click', function(event) {
    if (event.target.classList.contains('product')) {
        renderOneProductInfo(event.target.id)
    }
    if (event.target.parentNode.classList.contains('product')) {
        renderOneProductInfo(event.target.parentNode.id)
    }
})

async function renderOneProductInfo(id) {
    main.innerHTML = ''
    main.parentNode.parentNode.classList.add('one-page-main')
    const allReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataAll = await allReq.json()
    const pageProduct = createPageForOneProduct(dataAll[id].url, dataAll[id].name, dataAll[id].price, dataAll[id].description, id)
    main.appendChild(pageProduct)
}

function createPageForOneProduct(img, name, price, description, id) {
    const productPage = document.createElement('div')
    productPage.classList.add('product-page')
    productPage.innerHTML = `<img src="${img}" alt="${name}" class="one-product-img">`
    productPage.innerHTML += `<div class="product-info"><p class="one-product-name info-item">${name}</p><p class="one-product-price info-item">${price}</p><p class="one-product-description info-item">${description}</p><button class="add-to-cart info-item">Додати до кошику</button></div>`
    return productPage
}

