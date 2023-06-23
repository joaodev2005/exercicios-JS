function clicou() {
    var nome = prompt('Qual o seu nome? ')
    var idade = prompt('Digite sua idade: ')

    window.alert(`Acabei de conhecer o ${nome}, que tem ${idade} anos de idade! `)

    if (idade < 18) {
        window.alert('Voce e de menor')
    } else {
        if (idade > 18 && idade < 40) {
            window.alert('voce e de maior')
        } else {
            window.alert('voce e um idoso')
        }
    }
}