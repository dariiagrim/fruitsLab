const main = document.querySelector('.main__inner')

async function renderMain() {
    const response = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await response.json()
    main.appendChild(createSalesBlock(data[0].text, data[1].text, data[2].text, data[3].text))
    const hitContainer = createHitContainer()
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    hitContainer.appendChild(createHit('./img/hitPapaya.jpeg', 'Papaya', '50'))
    main.appendChild(hitContainer)
}


window.onload = function() {
    if (window.location.hash === "") {
        renderMain()
    }
}