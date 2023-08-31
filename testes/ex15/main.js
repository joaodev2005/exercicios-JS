const radar = 94

valor = radar - 80
res = valor * 5

if(radar > 80){
    console.log(`Limite de velocidade atingido! MULTADO: R$${res.toFixed(2)}`)
}else {
    console.log(`tudo certo, velocidade permitida ${radar}Km `)
}







// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.