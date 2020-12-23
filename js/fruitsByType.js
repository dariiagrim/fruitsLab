const sweetLink = document.querySelector('.nav__sweet')
const allLink = document.querySelector('.nav__all')

sweetLink.onclick = function(e) {
    e.preventDefault()
    let href = window.location.href
    href = href.slice(0, href.length - window.location.hash.length)
    if (href[href.length - 1] === '/') {
        href = href.slice(0, href.length - 1)
    }
    window.history.replaceState( null , null, href + '/#sweet/');
    renderSweetFruits()
}

async function renderSweetFruits() {
    main.innerHTML = ''
    const sweetReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sweet', {method: "GET", headers: {"Content-Type":"application/json"}})
    const dataSweet = await sweetReq.json()
    const sweetContainer = createProductContainer('sweet__container')
    for (let i = 0; i < 6; i++) {
        sweetContainer.appendChild(createProduct(dataSweet[i].url, dataSweet[i].name, dataSweet[i].price, 'sweet'))
    }
    main.appendChild(sweetContainer)
}

