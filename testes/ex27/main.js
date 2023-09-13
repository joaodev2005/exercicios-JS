const opcoes = ['pedra', 'papel' ,'tesoura']
const user = 'joao'

function escolhaComputador() {
    const indice = Math.floor(Math.random() * 3)
    return opcoes[indice]
}

function determinarVencedor(jogador, computador) {
      if(jogador === computador) {
        return 'EMPATE!'
    } else if(
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador ==='pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return `${user} venceu!`
    } else {
        return 'Computador venceu!'
    }
}
  
    console.log('escolha: pedra, papel ou tesoura')
    console.log('jo')
    console.log('ken')
    console.log('Po')
    
    const jogador = 'pedra'

    const computador = escolhaComputador()
    console.log(`Computador escolheu: ${computador}`)

    const resultado = determinarVencedor(jogador, computador)
    console.log(resultado)