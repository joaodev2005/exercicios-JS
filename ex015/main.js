function converter() {
    let res = document.getElementById('res')
    let celsius = Number(prompt('Digite uma temperatura em *C (Celsius)'))
    let fahrenheint = (celsius * 9/5) + 32
    let kelvin = celsius + 273.15
    

    res.innerHTML = `A temperatura de ${celsius}*C, corresponde a......`
    res.innerHTML += `<p>${fahrenheint}*F (fahrenheint)</p>`
    res.innerHTML += `<p>${kelvin}*K (Kelvin)</p>`
}



