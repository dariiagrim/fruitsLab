const main = document.querySelector('.main__inner')
main.appendChild(createSalesBlock())
async function getInfo() {
    const response = await fetch('https://my-json-server.typicode.com/dariiagrim/fruitsLab/sales', {method: "GET", headers: {"Content-Type":"application/json"}})
    const data = await response.json()
    console.log(data.url)
}
getInfo()