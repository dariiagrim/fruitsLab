const main = document.querySelector('.main__inner')

async function getInfo() {
    const response = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await response.json()
    main.appendChild(createSalesBlock(data.sales[0].text, data.sales[1].text, data.sales[2].text, data.dales[3].text))
}
getInfo()