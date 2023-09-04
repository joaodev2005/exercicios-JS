function isAlistamneto(ano) {
    if (ano < 18) {
        return true
    } else {
        return false
    }
}

let ano = 19
if (isAlistamneto(ano)) {
    menor = 18 - ano
    console.log(`Faltam ${menor} anos para o alistamento`)
} else if (ano > 18) {
    maior = ano - 18
    console.log(`Já se passaram ${maior} anos desde o alistamemto`)
} else if (ano === 18) {
    console.log('Ano de alistamento')
}
