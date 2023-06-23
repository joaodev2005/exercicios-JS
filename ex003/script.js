function gerar() {
    let numero = prompt('Digite um numero: ')
    numero = parseInt(numero)

    let antecessor = numero - 1
    let sucessor = numero + 1

    window.alert(`Antes de ${numero}, temos o numero ${antecessor}.
    Depois de ${numero}, temos o numero ${sucessor}  `)
}