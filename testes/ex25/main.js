const employee = 'Jailson'
const wage = 2000
const yearsInTheCompany = 15

if (yearsInTheCompany === 3) {
    reajuste = wage * 0.03
    res = wage + reajuste
} else if(yearsInTheCompany <= 10) {
    reajuste = wage * 0.125
    res = wage + reajuste
} else {
    reajuste = wage * 0.20
    res = wage + reajuste
}

console.log(`Funcionario: ${employee}`)
console.log(`Anos de contribuicão: ${yearsInTheCompany}`)
console.log(`Salário: R$${wage.toFixed(2)}`)
console.log(`Salário reajustado: R$${res.toFixed(2)}`)