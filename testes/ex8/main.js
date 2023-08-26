let peso = 160
let altura = 1.80

valorAltura = altura * altura
resultado = peso / valorAltura
const resultadoFormatado = resultado.toFixed(2)

if (resultadoFormatado < 18.5) {
    console.log('Abaixo do Peso')
} else if (resultadoFormatado < 24.9) {
    console.log('Peso Normal')
} else if (resultadoFormatado < 29.9) {
    console.log('Sobrepeso')
} else if (resultadoFormatado < 35) {
    console.log('Obesidade Grau 1')
} else if (resultadoFormatado <= 39.9) {
    console.log('Obesidade Grau 2')
} else {
    console.log('Obesidade Mórbida')
}


console.log(`IMC : ${resultadoFormatado}`)