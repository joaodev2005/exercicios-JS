const nome = 'joão'
const nota1 = 10
const nota2 = 9

media = (nota1 + nota2) / 2

if(media < 7) {
    console.log(`Aluno: ${nome}`)
    console.log(`Media: ${media} REPROVADO`)
} else {
    console.log(`Aluno: ${nome}`)
    console.log(`Media: ${media} APROVADO`)
}