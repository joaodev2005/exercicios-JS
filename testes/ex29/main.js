const salario = 3500
const valorCasa = 130000
const qtdAnos = 14

let limite = salario * 0.30
let qtdmeses = qtdAnos * 12
let mensalidade = valorCasa / qtdmeses

if (mensalidade > limite) {
    console.log('Empréstimo não aprovado, limite de 30% alcançado')
    console.log(`Saldo para gastar: ${limite.toFixed(2)}`)
    console.log(`Valor necessário: ${mensalidade.toFixed(2)}`)
} else {
    console.log('Empréstimo aprovado, detalhes da compra')
    console.log(`Duração do contrato: ${qtdAnos} anos`)
    console.log(`Valor do imóvel: R$${valorCasa.toFixed(2)}`)
    console.log(`Valor da mensalidade: R$${mensalidade.toFixed(2)}`)
    console.log(`Disponível para gasto: R$${limite.toFixed(2)}`)
}