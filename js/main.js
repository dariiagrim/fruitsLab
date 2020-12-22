function createSalesBlock(text1, text2, text3, text4) {
    const sales = document.createElement('div')
    sales.classList.add('sales-block')
    sales.innerHTML = `<a href="#" class="sale sale-one">${text1}</a><a href="#" class="sale sale-two">${text2}</a>`
    sales.innerHTML += `<a href="#" class="sale sale-three">${text3}</a><a href=#" class="sale sale-four">${text4}</a>`
    return sales
} 

function createHit(imgUrl, name, price) {
    const hit = document.createElement('div')
    hit.classList.add('hit')
    hit.innerHTML = `<img src="${imgUrl}" alt="${name}" class="hit__img">`
    hit.innerHTML += `<p class="hit__name">${name}</p>`
    hit.innerHTML += `<button class="hit__price">${price}</button>`
    return hit
}

function createHitContainer() {
    const hitContainer = document.createElement('div')
    hitContainer.classList.add('hit__container')
    return hitContainer
}

