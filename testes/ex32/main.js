const horasAtivas = 5
const pontosRecebidos = 0

if(horasAtivas < 10) {
    pontosRecebidos = horasAtivas * 2
} else if(horasAtivas < 20) {
    pontosRecebidos = horasAtivas * 5
} else {
    pontosRecebidos = horasAtivas * 10
}

const recibo = pontosRecebidos * 0.05

console.log(recibo)

// 36) Um programa de vida saudável quer dar pontos atividades físicas que podem
// ser trocados por dinheiro. O sistema funciona assim:
//  - Cada hora de atividade física no mês vale pontos
//  - até 10h de atividade no mês: ganha 2 pontos por hora
//  - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//  - acima de 20h de atividade no mês: ganha 10 pontos por hora
//  - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês,
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.