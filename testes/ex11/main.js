const produto = 'PC'
const valor = 100
const desconto = 0.05

valorPromocional = (valor * desconto)
novoValor = valor - valorPromocional

console.log(`Produto: ${produto}`)
console.log(`Valor: R$${valor},00`)
console.log(`Valor Promocional: R$${novoValor},00`)