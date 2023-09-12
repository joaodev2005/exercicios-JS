const segmento1 = 14
const segmento2 = 14
const segmento3 = 14
const resultadoSegmentos = segmento1 + segmento2

if (resultadoSegmentos > segmento3) {
    console.log('É possível montar um triângulo com essas retas')
  
    if(segmento1 == segmento2 || (segmento1 == segmento3) || (segmento2 == segmento3)) {
        console.log('TRIÂNGULO ISÓSCELES')
    } else if (segmento1 != segmento2 && (segmento1 != segmento3) && (segmento2 != segmento3)) {
        console.log('TRIÂNGULO ESCALENO')
    } else if (segmento1 == segmento2 && (segmento1 == segmento3)) {
        console.log('TRIÂNGULO EQUILÁTERO')
    }
} else {
    console.log('Não é possível montar um triângulo com essas retas')
}



// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
//  - EQUILÁTERO: todos os lados iguais
//  - ISÓSCELES: dois lados iguais
//  - ESCALENO: todos os lados diferentes