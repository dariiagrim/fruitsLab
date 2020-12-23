function createSalesBlock(text1, text2, text3, text4) {
    const sales = document.createElement('div')
    sales.classList.add('sales-block')
    sales.innerHTML = `<a href="#" class="sale sale-one">${text1}</a><a href="#" class="sale sale-two">${text2}</a>`
    sales.innerHTML += `<a href="#" class="sale sale-three">${text3}</a><a href=#" class="sale sale-four">${text4}</a>`
    return sales
} 



function createHitContainer() {
    const hitContainer = document.createElement('div')
    hitContainer.classList.add('hit__container')
    return hitContainer
}

async function renderMain() {
    const salesReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await salesReq.json()
    main.appendChild(createSalesBlock(data[0].text, data[1].text, data[2].text, data[3].text))
    const hitsReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/hits', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataHits = await hitsReq.json()
    const hitContainer = createHitContainer()
    for (let i = 0; i < 8; i++) {
        hitContainer.appendChild(createProduct(dataHits[i].url, dataHits[i].name, dataHits[i].price))
    }
    main.appendChild(hitContainer)
}
