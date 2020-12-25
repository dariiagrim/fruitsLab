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
    main.appendChild(createForm())
}

function createForm() {
    const form = document.createElement('div')
    form.classList.add('form')
    form.innerHTML = `<input type="text" class="first-name input-form" placeholder="Ім'я"><input type="text" class="last-name input-form" placeholder="Прізвище"><input type="text" class="address input-form" placeholder="Адреса">`
    form.innerHTML += `<input type="text" class="time input-form" placeholder="Час доставки (> 1 год від цього моменту)"><input type="text" class="pay input-form" placeholder="Карта/готівка">`
    form.innerHTML += `<input type="text" class="mobile input-form" placeholder="Мобільний телефон"><input type="text" class="email input-form" placeholder="Електронна пошта"><button class="submit">Підтвердити замовлення</button>`
    return form
}

function checkForm() {
    const email = document.querySelector('.email')
    const mobilePhone = document.querySelector('.mobile')
    const emailText = email.value
    const mobileText = mobilePhone.value
    const allInputs = document.querySelectorAll('.input-form')
    console.log(allInputs)
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
    if (!mobileValidation(mobileText) || !emailValidation(emailText)) {
        if (!mobileValidation(mobileText)) {
            mobilePhone.value = 'Некоректно введені дані.'
        }
        if (!emailValidation(emailText)) {
            email.value = 'Некоректно введені дані.'
        }
    }
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
