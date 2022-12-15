function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    data = console.log(fazGet('https://api.bcb.gov.br/dados/serie/bcdata.sgs.20542/dados/ultimos/10?formato=json'))
    dados = JSON.parse(data)
    console.log(dados)
}

main()