const segmento1 = 12
const segmento2 = 13
const segmento3 = 19
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