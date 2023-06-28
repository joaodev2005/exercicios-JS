var qtdNumeros = prompt('digite a quantidade de numeros ')
var res = document.getElementById('res')
    var maior = 0
    var numero

    for (var i = 0; i < qtdNumeros; i++) {
        numero = parseInt(prompt('digite o numero desejado'))

        if (numero > maior)
            maior = numero
    }
    res.innerHTML = `o maior numero foi ${maior}`


/*var qntNumeros = parseInt(prompt('quantos numeros voce deseja digitar '));
var res = document.getElementById('res')
    var maior = 0
    var numero

     for (var  i = 0; i < qntNumeros; i++) {
        numero = parseInt(prompt('digite o numero desejado '))

        if (numero > maior) {
            maior = numero
        }
    }
    res.innerHTML = `o maior foi ${maior}`
*/  