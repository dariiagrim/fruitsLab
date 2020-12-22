const main = document.querySelector('.main__inner')




if (window.location.hash === "") {
    renderMain()
} 

window.onhashchange = function() {
    if (window.location.hash === "") {
        renderMain()
    } 
}