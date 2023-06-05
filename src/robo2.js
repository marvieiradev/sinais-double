const numCount = 15
const urlApi = "https://api2.minhablaze.com.br/api/v1/result/double"

const fetchNums = async () => {
    //for (let i = 1; i <= numCount; i++) {
        await getNums()
   // }
}

const getNums = async () => {
    const url = urlApi
    const resp = await fetch(url)
    const data = await resp.json()
    ver(data)
    exibirFrase()
    
}

const ver  = (data) => {
    for (let i = 1; i <= numCount; i++) {
        console.log(data.results[i])
        
    }
}

fetchNums()


function exibirFrase() {
    let frases = [
        "APOSTE</b> na COR</b> acima de <b>77%</b>. <br>Faça G1 & G2</b> se Precisar.",
        "Seja Lucrativa(o)</b> com Paciência</b> <br>e Análise das Informações</b>!",
        "Entrar Após o LOSS</b> é Uma Excelente <br>Estratégia</b> nos Sinais",
        "Sempre Considere Fazer Gales 1 e 2 <br>Respeitando as Porcentágens.</b>",
        "Ferramenta de Suporte a entradas e Sinais.</b> <br>Alie a Sua <b>Estratégia!</b>",
    ]
    frase = frases[Math.floor(Math.random() * 5)]
    //setTimeout(() => { exibirFrase() }, 10000)
    len('.frase').innerHTML = frase
}

//exibirFrase()///
