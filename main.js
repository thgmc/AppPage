function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(bcdata){
    console.log(bcdata)
    linha = document.createElement("tr")
    tdData = document.createElement("td")
    tdValor = document.createElement("td")

    tdData.innerHTML = bcdata.data
    tdValor.innerHTML = bcdata.valor

    linha.appendChild(tdData)
    linha.appendChild(tdValor)

    return linha
}

function main(){
    res = fazGet('https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados/ultimos/10?formato=json')
    let dados = JSON.parse(res)
    let tabela = document.getElementById('tabela')
    //console.log(dados)

    /*dados.array.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });*/

    /*
    * Para cada data
    * criar uma linha
    * adicionar na tabela
    */
}

main()