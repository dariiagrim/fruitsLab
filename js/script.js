const main = document.querySelector('.main__inner')





function createProduct(imgUrl, name, price, className, id) {
    const product = document.createElement('div')
    product.classList.add(className)
    product.classList.add('product')
    product.innerHTML = `<img src="${imgUrl}" alt="${name}" class="product__img ${className}__img">`
    product.innerHTML += `<p class="product__name ${className}__name">${name}</p>`
    product.innerHTML += `<button class="product__price ${className}__price">${price}</button>`
    product.setAttribute('id', `${id}`)
    return product
}

function createProductContainer(className) {
    const hitContainer = document.createElement('div')
    hitContainer.classList.add('product__container')
    hitContainer.classList.add(className)
    return hitContainer
}

