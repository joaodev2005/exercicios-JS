function comprar() {
    let produto = prompt('que produto voce está comprando? ')
    let valor = prompt(`Quanto custa o ${produto} que voce está comprando? `)
    let pagamento = prompt(`Qual foi o valor que voce deu para pagar o ${produto}`)
    let troco = pagamento - valor

    if (pagamento < valor ) {
        window.alert('A compra não pode ser realizada. SALDO INSUFICIENTE...')
    }

    window.alert(`você comprou ${produto } que custou R$${valor},00. 
    Deu ${pagamento},00 em dinheiro e vai receber R$${troco},00 de troco.  
    Volte Sempre!`)    
}