const tipo = 'luxo'
const dias = 10
const kmRodados = 5

if(tipo == 'popular') {
    if(kmRodados < 100) {
        quilometragem = kmRodados * 0.20
        aluguel = (90 * dias) + quilometragem
    } else{
        quilometragem = kmRodados * 0.10
        aluguel = (90 * dias) + quilometragem
    }
} else if(tipo == 'luxo') {
    if(kmRodados < 200) {
        quilometragem = kmRodados * 0.30
        aluguel = (150 * dias) + quilometragem
    } else {
        quilometragem = kmRodados * 0.25
        aluguel = (150 * dias) + quilometragem
    }
}

console.log(`Tipo do carro: ${tipo}`)
console.log(`Valor do aluguel: R$${aluguel.toFixed(2)}`)
console.log(`Km percorridos: ${kmRodados}Km`)
