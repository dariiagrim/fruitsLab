window.addEventListener('click', function(event) {
    if (event.target.classList.contains('cart')) {
        renderCart()
    }
    if (event.target.classList.contains('order')) {
        renderOrder()
    }
    if (event.target.classList.contains('submit')) {
        checkForm()
    }
})

function createCartTable() {
    const cartTable = document.createElement('table')
    cartTable.classList.add('cart-table')
    return cartTable
}

function createRow(name, price) {
    const row = document.createElement('tr')
    row.classList.add('row-table')
    row.innerHTML = `<th class="cart-name">${name}</th><th class="cart-price">${price}</th>`
    return row
}

async function renderCart() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    const allReq = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/all', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await allReq.json()
    const table = createCartTable()
    for (let i = 0; i < cart.length; i++) {
        table.appendChild(createRow(data[cart[i]].name, data[cart[i]].price))
    }
    main.appendChild(table)
    
}


function renderOrder() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    main.appendChild(createForm())
}

function createForm() {
    const form = document.createElement('div')
    form.classList.add('form')
    form.innerHTML = `<input type="text" class="first-name" placeholder="Ім'я"><input type="text" class="last-name" placeholder="Прізвище"><input type="text" class="address" placeholder="Адреса">`
    form.innerHTML += `<input type="text" class="time" placeholder="Час доставки (> 1 год від цього моменту)"><input type="text" class="pay" placeholder="Карта/готівка">`
    form.innerHTML += `<input type="text" class="mobile" placeholder="Мобільний телефон"><input type="text" class="email" placeholder="Електронна пошта"><button class="submit">Підтвердити замовлення</button>`
    return form
}

function checkForm() {
    console.log(15)
    const email = document.querySelector('.email')
    const mobilePhone = document.querySelector('.mobile')
    const emailText = email.value
    const mobileText = mobilePhone.value
    if (!emailValidation(emailText)) {
        email.value = 'Некоректно введені дані.'
        return
    }
    if (!mobileValidation(mobileText)) {
        mobilePhone.value = 'Некоректно введені дані.'
        return
    }
    
}

function emailValidation(email) {
    let isValid = false
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@' && !isValid) {
            isValid = true
        }
    }
    return isValid
}

function mobileValidation(mobile) {
    let isValid = true
    if (mobile.length != 10 || mobile[0] != '0') {
        return false
    }
    const charCodeZero = "0".charCodeAt(0);
    console.log(charCodeZero)
    const charCodeNine = "9".charCodeAt(0);
    for (let i = 0; i < mobile.length; i++) {
        if (mobile[i].charCodeAt(0) <= charCodeZero || mobile[i].charCodeAt(0) >= charCodeNine) {
            isValid = false
        }
    }
    return isValid
}



