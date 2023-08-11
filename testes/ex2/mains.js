const btn = document.querySelector('#btn')

function showPrompt() {
    
    const userInput = prompt('Digite o Nome do Funcionário')
    const userInputSalario = prompt('Digite o Salário do Funcionário')

    if (userInput !== null || userInputSalario !== null) {

        const boxName = document.querySelector('#name')
        boxName.value = userInput

        const boxSalario = document.querySelector('#sal')
        boxSalario.value = userInputSalario

        const resultado = document.querySelector('#res')
        resultado.value = `O Funcionário ${userInput}, teve um Salário de R$ ${userInputSalario}, 00 , nesse Mês `

    }
}
