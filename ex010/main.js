var qtdNumeros = prompt('quantos numeros voce deseja digitar? ')
var res = document.getElementById('res')
    var qtdPares = 0
    var somaPares = 0
    var qtdImpar = 0
    var somaImpar = 0

    for ( var i = 0; i < qtdNumeros; i++) {
        numero = parseInt(prompt('Digite o numero desejado: '))

        if (numero % 2 === 0) {
            qtdPares = qtdPares +1
            somaPares = somaPares + numero
        } else {
            qtdImpar = qtdImpar +1
            somaImpar = somaImpar + numero
        }
    }
    res.innerHTML = `<p>Pares: ${qtdPares}</p>`
    res.innerHTML += `<p>Soma Pares: ${somaPares}</p>`
    res.innerHTML += `<p>Impares: ${qtdImpar}</p>`
    res.innerHTML += `<p>Soma Impares ${somaImpar}</p>`
    res.innerHTML += 'Media Impares' + somaImpar / qtdNumeros