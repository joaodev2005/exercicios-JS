var cotacaoAtual = prompt('Quanto está a cotação do dólar agora?')

function converter(){
    var res = document.getElementById('res')
    var real = prompt('Quantos R$ voce tem na carteira')
    var dolar = real  / cotacaoAtual

    res.innerHTML = `<p>Com ${real}, voce pode comprar ${dolar}, dolares</p>`
}

