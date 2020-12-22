function createSalesBlock(text1, text2, text3, text4) {
    const sales = document.createElement('div')
    sales.classList.add('sales-block')
    sales.innerHTML = `<a href="#" class="sale sale-one">${text1}</a><a href="#" class="sale sale-two">${text2}</a>`
    sales.innerHTML += `<a href="#" class="sale sale-three">${text3}</a><a href=#" class="sale sale-four">${text4}</a>`
    return sales
} 


