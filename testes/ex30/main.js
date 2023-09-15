const altura = 1.40
const peso = 70

let imc = peso / (altura * altura)

if(imc < 18.5) {
    console.log('ABAIXO DO PESO')
} else if (imc < 25) {
    console.log('PESO IDEAL')
} else if (imc < 30) {
    console.log('SOBREPESO')
} else if(imc < 40) {
    console.log('OBESIDADE')
} else {
    console.log('OBESIDADE MÓRBIDA')
}

console.log(imc.toFixed(2))