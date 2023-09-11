const nome = 'Rafaella'
const sex = 'F'
const compras = 300

if(sex == 'F') {
    res = (compras * 0.05 ) 
    desconto = compras - res
} else if(sex == 'M') {
    res = (compras * 0.13 ) 
    desconto = compras - res
}

console.log(`Cliente: ${nome}`)
console.log(`Valor do produto: R$${compras.toFixed(2)}`)
console.log(`Valor Promocional: R$${desconto.toFixed(2)}`)