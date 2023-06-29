let res = document.getElementById('res')

function converter() {
    let valor1 = prompt('digite uma distância em metros (m)')
    


    res.innerHTML = `A distância de ${valor1} metros, corresponde a...`
    res.innerHTML += `<p>quilômetros (Km)</p>`
    res.innerHTML += `<p>hectômetros (Hm)</p>`
    res.innerHTML += `<p>decâmetros (Dam)</p>`
    res.innerHTML += `<p>decimetros (dm)</p>`
    res.innerHTML += `<p>centimetros (cm)</p>`
    res.innerHTML += `<p>malimetros (mm)</p>`
}
