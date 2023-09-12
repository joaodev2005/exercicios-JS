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

while (true) {
    console.log('escolha pedra, papel ou tesoura (ou digite [sair] para encerrar):')
    const jogador = 'pedra'

    if(jogador === 'sair') {
        break
    }

    if(!opcoes.includes(jogador)) {
        console.log('escolha inválida')
        continue
    }

    const computador = escolhaComputador()
    console.log(`Computador escolheu: ${computador}`)

    const resultado = determinarVencedor(jogador, computador)
    console.log(resultado)
}

// 31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)