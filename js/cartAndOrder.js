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
    if (event.target.classList.contains('clear-button')) {
        clearCart()
    }
})

function createCartTable() {
    const cartTable = document.createElement('table')
    cartTable.classList.add('cart-table')
    return cartTable
}

function createRow(name, price, amount) {
    const row = document.createElement('tr')
    row.classList.add('row-table')
    row.innerHTML = `<th class="cart-name">${name}</th><th class="cart-amount">${amount}</th><th class="cart-price">${price}</th>`
    return row
}

function renderCart() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    if (header.classList.contains('one-page-header')) {
        header.classList.remove('one-page-header')
    }
    main.appendChild(loader)
    const table = createCartTable()
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].name, cart[i].amountInCart, cart[i].priceInt*cart[i].amountInCart)
        table.appendChild(createRow(cart[i].name, cart[i].amountInCart, cart[i].priceInt*cart[i].amountInCart))
    }
    main.removeChild(loader)
    main.appendChild(table)
    main.appendChild(createClearCartButton()) 
    
}

function createClearCartButton() {
    const clearButton = document.createElement('button')
    clearButton.classList.add('clear-button')
    clearButton.innerHTML = 'Очистити кошик'
    return clearButton
}

function clearCart() {
    cart = []
    cartLength = 0
    cartIcon.innerHTML = '0'
    renderCart()
}

function renderOrder() {
    main.innerHTML = ''
    if (main.parentNode.parentNode.classList.contains('one-page-main')) {
        main.parentNode.parentNode.classList.remove('one-page-main')
    }
    if (header.classList.contains('one-page-header')) {
        header.classList.remove('one-page-header')
    }
    main.appendChild(createForm())
}

function createForm() {
    const form = document.createElement('div')
    form.classList.add('form')
    form.innerHTML = `<input type="text" class="first-name input-form" placeholder="Ім'я*"><input type="text" class="last-name input-form" placeholder="Прізвище*"><input type="text" class="address input-form" placeholder="Адреса*">`
    form.innerHTML += '<input type="text" class="time input-form" placeholder="Час доставки (> 1 год від цього моменту)*"><input type="text" class="pay input-form" placeholder="Карта/готівка*">'
    form.innerHTML += '<input type="text" class="mobile input-form" placeholder="Мобільний телефон*"><input type="text" class="email input-form" placeholder="Електронна пошта*"><input type="text" class="comment" placeholder="Коментар до замовлення">'
    form.innerHTML += '<button class="submit">Підтвердити замовлення</button>'
    return form
}

async function checkForm() {
    const comment = document.querySelector('.comment')
    const allInputs = document.querySelectorAll('.input-form')
    let foundEmpty = false
    for (let i = 0; i < allInputs.length; i++) {
        if (inputEmpty(allInputs[i])) {
            allInputs[i].value = "Поле не може бути пустим"
            foundEmpty = true
        }
       
    }
    if (foundEmpty) {
        return
    }
    if (!mobileValidation(allInputs[5].value) || !emailValidation(allInputs[6].value)) {
        if (!mobileValidation(allInputs[5].value)) {
            allInputs[5].value = 'Некоректно введені дані.'
        }
        if (!emailValidation(allInputs[6].value)) {
            allInputs[6].value = 'Некоректно введені дані.'
        }
        return
    }
    const orderDetails = {
        firstName: allInputs[0].value,
        lastName: allInputs[1].value,
        address: allInputs[2].value,
        orderTime: allInputs[3].value,
        payment: allInputs[4].value,
        mobile: allInputs[5].value,
        email: allInputs[6].value,
        comment: comment.value,
        sum: countSum()

    }
    sendDataToServer(orderDetails)
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = ''
    }
    comment.value = ''
}

function emailValidation(email) {
    const checkMatching = email.match(/[a-z]+@{1}[a-z]+\.{1}[a-z]+/)
    if (checkMatching === null) {
        return false
    }
    return checkMatching[0] === email
}

function mobileValidation(mobile) {
    const checkMatching = mobile.match(/0\d{9}/)
    if (checkMatching === null) {
        return false
    }
    return checkMatching[0] === mobile
} 


function inputEmpty(input) {
    if (input.value === '') {
        return true
    }
}

async function sendDataToServer(orderDetails) {
    const response = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/orders', {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(orderDetails)})
    const data = await response.json()
    console.log(data)
    cart = []
    cartLength = 0
    cartIcon.innerHTML = '0'
}

function countSum() {
    let sum = 0
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].priceInt * cart[i].amountInCart
    }
    return sum
}
