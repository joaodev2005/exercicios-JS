

function reajustar(){
    const res = document.querySelector('#res')
    let nome = prompt('Digite seu nome')
    let salario = prompt(`Qual o salário de ${nome}`)
    let porcentagemDeReajuste = prompt(`O salário de ${nome} vai ser resjustado em qual porcentagem`)
    
    let wage = Number.parseFloat(salario)
    let reajuste = Number.parseFloat(porcentagemDeReajuste)
    let valorAjustado = wage * reajuste / 100
    let valorNovo = wage + valorAjustado

    res.innerHTML = `${nome} recebeu um aumento salarial!`
    res.innerHTML += `<p>O salário atual era R$ ${wage}.</p>`
    res.innerHTML += `<p>Com um aumento de ${reajuste}%, o salario vai aumentar R$ ${valorAjustado} no proximo mês.</p>`
    res.innerHTML += `<p>E a partir dai, ${nome} vai passar a ganhar R$ ${valorNovo}.</p>`
}