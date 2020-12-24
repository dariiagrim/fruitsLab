window.addEventListener('click', function(event) {
    if (event.target.classList.contains('sale') || event.target.classList.contains('nav__sale')) {
        renderSalePage()
    }
    if (event.target.classList.contains('buy-sale')) {
        window.location.href = window.location.href.slice(0, window.location.href.length - 1)
        renderMain()
    }
})

async function renderSalePage() {
    main.innerHTML = ""
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    const salesReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await salesReq.json()
    for (let i = 0; i < 4; i++) {
        main.appendChild(createBigSale(data[i].text))
    }
}

function createBigSale(saleDescription) {
    const saleBlock = document.createElement('div')
    saleBlock.classList.add('big-sale-block')
    saleBlock.innerHTML = `<p class="sale-description">${saleDescription}</p><button class="buy-sale">Придбати фрукти</button>`
    return saleBlock
}