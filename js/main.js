function createSalesBlock() {
    const sales = document.createElement('div')
    sales.classList.add('sales-block')
    sales.innerHTML = '<a href="#" class="sale sale-one"></a><a href="#" class="sale sale-two"></a>'
    sales.innerHTML += '<a href="#" class="sale sale-three"></a><a href=#" class="sale sale-four"></a>'
    return sales
} 


