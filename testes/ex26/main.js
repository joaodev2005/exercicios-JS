const segmento1 = 10
const segmento2 = 10
const segmento3 = 10
const resultadoSegmentos = segmento1 + segmento2

if(resultadoSegmentos > segmento3) {
    console.log('É possível montar um triângulo com essas retas')
    if(segmento1 === segmento2 === segmento3) {
        console.log('TRIÂNGULO EQUILÁTERO')
    } else if(segmento1 === segmento2) {
        console.log('TRIÂNGULO ISÓSCELES')
    } 
} else { 
    console.log('Não é possível montar um triângulo com essas retas')
}



// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
//  - EQUILÁTERO: todos os lados iguais
//  - ISÓSCELES: dois lados iguais
//  - ESCALENO: todos os lados diferentes