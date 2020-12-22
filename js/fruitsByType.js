const sweetLink = document.querySelector('.nav__sweet')

sweetLink.onclick = function(e) {
    e.preventDefault()
    let href = window.location.href
    href = href.slice(0, href.length - window.location.hash.length)
    window.history.replaceState( null , null, href + '/#sweet');
    renderSweetFruits()
}

async function renderSweetFruits() {
    main.innerHTML = ''
    const salesReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sweet', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await salesReq.json()
    main.appendChild(createSalesBlock(data[0].text, data[1].text, data[2].text, data[3].text))
    const hitsReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/hits', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataHits = await hitsReq.json()
    const hitContainer = createFruitContainer()
    hitContainer.appendChild(createFruit(dataHits[0].url, dataHits[0].name, dataHits[0].price))
    hitContainer.appendChild(createFruit(dataHits[1].url, dataHits[1].name, dataHits[1].price))
    hitContainer.appendChild(createFruit(dataHits[2].url, dataHits[2].name, dataHits[2].price))
    hitContainer.appendChild(createFruit(dataHits[3].url, dataHits[3].name, dataHits[3].price))
    hitContainer.appendChild(createFruit(dataHits[4].url, dataHits[4].name, dataHits[4].price))
    hitContainer.appendChild(createFruit(dataHits[5].url, dataHits[5].name, dataHits[5].price))
    hitContainer.appendChild(createFruit(dataHits[6].url, dataHits[6].name, dataHits[6].price))
    hitContainer.appendChild(createFruit(dataHits[7].url, dataHits[7].name, dataHits[7].price))
    main.appendChild(hitContainer)
}