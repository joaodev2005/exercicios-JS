const altura = 10
const largura = 8

let area = altura * largura

if (area < 100) {
    console.log(`${area}m² TERRENO POPULAR`)
} else if(area < 500) {
    console.log(`${area}m² TERRENO MASTER`)
} else {
    console.log(`${area}m² TERRENO VIP`)
}