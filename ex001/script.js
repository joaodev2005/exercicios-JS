//BTN 1
var btn = document.getElementById('btn')
btn.addEventListener('click', clicou)
btn.addEventListener('onmousemove', passou)
//BTN 2
var btn2 = document.getElementById('btn2')
btn2.addEventListener('click', clicado)

//BTN 3
var btn3 = document.getElementById('btn3')
btn3.addEventListener('click', clic)

function clicou() {
    window.alert('oi')
}

function passou() {
    btn.innerText = 'sou foda'
}

function clicado() {
    window.alert('salve')
}

function clic() {
    window.alert('vamos ser Devs')
}