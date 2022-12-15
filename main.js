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
    dados = fazGet('https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados/ultimos/10?formato=json')
    console.log(dados)
    /*let dados = JSON.parse(dados)
    let tabela = document.getElementById('tabela')

    dados.forEach(element => {
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