function isBissexto(ano) {
    if(ano & 4 === 0) {
    } else if (ano % 100 !== 0 || ano % 400 === 0) {
        return true
    }
    return false
}

let ano = 2000
if (isBissexto(ano)) {
    console.log(`${ano} é um ano Bissexto.`)
} else {
    console.log(`${ano} não é um ano Bissexto`)
}