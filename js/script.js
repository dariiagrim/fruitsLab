const main = document.querySelector('.main__inner')

async function renderMain() {
    const salesReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await salesReq.json()
    main.appendChild(createSalesBlock(data[0].text, data[1].text, data[2].text, data[3].text))
    const hitsReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/hits', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataHits = await hitsReq.json()
    const hitContainer = createHitContainer()
    hitContainer.appendChild(createHit(dataHits[0].url, dataHits[0].name, dataHits[0].price))
    hitContainer.appendChild(createHit(dataHits[1].url, dataHits[1].name, dataHits[1].price))
    hitContainer.appendChild(createHit(dataHits[2].url, dataHits[2].name, dataHits[2].price))
    hitContainer.appendChild(createHit(dataHits[3].url, dataHits[3].name, dataHits[3].price))
    hitContainer.appendChild(createHit(dataHits[4].url, dataHits[4].name, dataHits[4].price))
    hitContainer.appendChild(createHit(dataHits[5].url, dataHits[5].name, dataHits[5].price))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    main.appendChild(hitContainer)
}


window.onload = function() {
    if (window.location.hash === "") {
        renderMain()
    }
}