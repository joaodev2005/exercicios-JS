let res = document.getElementById('res')
function desconto() {
    const produto = prompt('Qual produto voce está comprando? ')
    const valor = prompt(`Qual e o preço de ${produto}`)
    let desconto = 0.1
    var valorComDesconto = valor - (valor * desconto)
    var valorDesconto = valor - valorComDesconto


    res.innerHTML = `Calculando desconto de 10% para ${produto}`
    res.innerHTML += `<p>O preço original era R$${valor}</p>`
    res.innerHTML += `<p>voce acaba de ganhar ${valorDesconto} de desconto (-10%)</p>`
    res.innerHTML += `<p>voce vai pagar ${valorComDesconto}, no produto ${produto}</p>`
}