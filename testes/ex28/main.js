const numbers = [1, 2, 3, 4, 5]

function escolhaNumeros() {
    const indice = Math.floor(Math.random() * 5)
    return numbers[indice]
}

function acertarNumero(jogador, computador) {
           if(
            (jogador === 1 && computador === 1)  ||
            (jogador === 2 && computador === 2)  ||
            (jogador === 3 && computador === 3)  ||
            (jogador === 4 && computador === 4)  ||
            (jogador === 5 && computador === 5) 
           ) {
            return `VENCEDOR!`
        } else {
            return `Computador venceu!`
        }
}

const computador = escolhaNumeros()
console.log(computador)

const jogador = 3

const resultado = acertarNumero(jogador, computador)
console.log(resultado)