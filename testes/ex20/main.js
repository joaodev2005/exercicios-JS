function isAlistamneto(ano) {
    if (ano < 18) {
        return true
    } else {
        return false
    }
}

let ano = 4
if (isAlistamneto(ano)) {
    menor = 18 - ano
    console.log(`Faltam ${menor} anos para o alistamento`)
} else if (ano > 18) {
    maior = ano - 18
    console.log(`Já se passaram ${maior} anos desde o alistamemto`)
}










// 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
// situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
// alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento.