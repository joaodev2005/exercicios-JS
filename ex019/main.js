const res = document.querySelector('#res')
const btnVerificar = document.querySelector('#btnVerificar')

const checkPrices = () => {   
    let precoAnterior = prompt('Qual era o preço anterior do produto?')
    let precoAtual = prompt('Qual e o preço atual do produto?')
    let price = ''
    let movimento = ''
    let LowestPrice = 0
    let biggestPrice = 0
    let resultPrices = 0

    LowestPrice = precoAnterior - precoAtual
    biggestPrice = precoAtual - precoAnterior

    if(precoAtual > precoAnterior){
        price = 'caro'
    }else {
        price = 'barato'
    }if(precoAtual > precoAnterior){
        movimento = 'subiu'
    }else {
        movimento = 'caiu'
    }if(precoAtual > precoAnterior){
        resultPrices = biggestPrice
    }else {
        resultPrices = LowestPrice
    }

    res.innerHTML = `<p>O produto custava R$${precoAnterior},00 e agora custa R$ ${precoAtual},00</p>`
    res.innerHTML += `<p>Hoje o produto esta mais ${price}</p>`
    res.innerHTML += `<p>O preço ${movimento} R$ ${biggestPrice},00 em relação ao preço anterior</p>`
}



btnVerificar.addEventListener('click', checkPrices)
