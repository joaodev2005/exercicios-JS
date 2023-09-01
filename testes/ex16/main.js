const anoNascimento = 2006
const anoAtual = 2022

calcularIdade = anoAtual - anoNascimento

if (calcularIdade < 16) {
    console.log(`Voto não obrigatório idade: ${calcularIdade}`)
} else if (calcularIdade <= 17) {
    console.log(`Voto Opcional idade: ${calcularIdade}`)
} else if (calcularIdade <= 70) {
    console.log(`Voto Obrigatório idade: ${calcularIdade}`)
} else {
    console.log(`Velho demais idade: ${calcularIdade}`)
}

