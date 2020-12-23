const main = document.querySelector('.main__inner')




if (window.location.hash === "") {
    renderMain()
} 

window.onhashchange = function() {
    if (window.location.hash === "") {
        renderMain()
    } 
}

function createProduct(imgUrl, name, price) {
    const product = document.createElement('div')
    product.classList.add('product')
    product.innerHTML = `<img src="${imgUrl}" alt="${name}" class="product__img">`
    product.innerHTML += `<p class="product__name">${name}</p>`
    product.innerHTML += `<button class="product__price">${price}</button>`
    return product
}