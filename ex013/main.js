let res = document.getElementById('res')

function converter() {
    let metros = prompt('digite uma distância em metros (m)')

    //VERIFICA SE A ENTRADA E UM NUMERO
    if (isNaN(metros)) {
        alert('Digite um numero valido')
    } else {
        metros = metros.replace(',', '.')
        var numeroDecimal = parseFloat(metros)
    
        //REALIZA O CALCULO
        var km = numeroDecimal / 1000
        var hm = numeroDecimal / 100
        var dam = numeroDecimal / 10
        var dm = numeroDecimal * 10
        var cm = numeroDecimal * 100
        var mm = numeroDecimal * 1000  


        //EXIBE OS RESULTADOS
        res.innerHTML = `A distância de ${metros} metros, corresponde a...`
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm} decimetros (dm)</p>`
    res.innerHTML += `<p>${cm} centimetros (cm)</p>`
    res.innerHTML += `<p>${mm} malimetros (mm)</p>`
    }
}
