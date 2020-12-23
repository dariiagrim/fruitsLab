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
    const sweetReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sweet', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSweet = await sweetReq.json()
    const sweetContainer = createSweetContainer()
    for (let i = 0; i < 6; i++) {
        sweetContainer.appendChild(createProduct(dataSweet[i].url, dataSweet[i].name, dataSweet[i].price))
    }
    main.appendChild(sweetContainer)
}

function createSweetContainer() {
    const sweetContainer = document.createElement('div')
    sweetContainer.classList.add('sweet__container')
    return sweetContainer
}