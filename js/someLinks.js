window.addEventListener('click', function(event) {
    if (event.target.classList.contains('sale') || event.target.classList.contains('nav__sale')) {
        renderSalePage()
    }
    if (event.target.classList.contains('buy-sale')) {
        renderMain()
    }
    if (event.target.classList.contains('about__company')) {
        renderAboutCompany()
    }
    if (event.target.classList.contains('about__contacts')) {
        renderAboutContacts()
    }
})

async function renderSalePage() {
    main.innerHTML = ""
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    main.appendChild(loader)
    const salesReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await salesReq.json()
    main.removeChild(loader)
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

function renderAboutCompany() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    main.appendChild(createAboutCompany())
}

function createAboutCompany() {
    const aboutBlock = document.createElement('p')
    aboutBlock.classList.add('about__text')
    aboutBlock.innerHTML = 'Наша компанія робить людей щасливішими. Коли на вулиці погана погода aбо просто поганий настрій, яскравий, соковитий, солодкий фрукт стане в нагоді.'
    return aboutBlock
}


function renderAboutContacts() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    main.appendChild(createAboutContacts())
}

function createAboutContacts() {
    const aboutBlock = document.createElement('p')
    aboutBlock.classList.add('about__text')
    aboutBlock.innerHTML = 'Тут знаходяться наші контакти.'
    return aboutBlock
}