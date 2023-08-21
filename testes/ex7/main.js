const tempo = 10

let cigarosPorDia = 4
let tempoFumado = 12
let tempoPerdido = 0

tempoFumado = tempoFumado * 30
tempoConvertido = tempoFumado * cigarosPorDia
tempoPerdido = tempoConvertido / 60

console.log(`Cigarros por dia: ${cigarosPorDia}`)
console.log(`Tempo de vicio: ${tempoFumado} dias`)
console.log(`perderá ${tempoPerdido} horas de vida`)