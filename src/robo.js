const url = "https://api2.minhablaze.com.br/api/v1/result/double"

var sum = 0; var seq = 0; var as = []

let win_primeira = 0; let win_gale1 = 0; let win_gale2 = 0; let loss = 0
let gale = 0

var len = (el) => {
    return document.querySelector(el)
},
    sugestao = len('.sugestao'),
    startRobo = () => {
        //Inicio da fetch api
        fetch(
            url,
            {
                method: "GET"
            }
        ).then(
            response => response.json()
        ).then(
            //Inicio das funções do robo
            (res) => {
                let resultados = res.results
                let casa = 15
                let tamanho = resultados.length
                let indice = tamanho - casa
                let cor = mostraCor(resultados[indice].color)
                let corRef = resultados[indice].color
                let ult_num = resultados[tamanho - 1].roll
                let ult_cor = mostraCor(resultados[tamanho - 1].color);

                var v = 0; var p = 0; var b = 0;

                for (var i = 15; i > 0; i--) {
                    if (resultados[tamanho - i].color == 1) {
                        v++
                    } else if (resultados[tamanho - i].color == 2) {
                        p++
                    } else if (resultados[tamanho - i].color == 0) {
                        b++
                    }

                    if(resultados[tamanho - i].color == 0){
                        as[casa - i] = resultados[tamanho - i-1].color
                    }else{
                        as[casa - i] = resultados[tamanho - i].color
                    }
                    let aaa = ".n"+i
                    let ccc = ""
                    
                    
                    if(resultados[tamanho - i].color == 1){
                        ccc = "red"
                    }else if(resultados[tamanho - i].color == 2){
                        ccc = "black"
                    }else{
                        ccc = "white"
                    }

                    len(aaa).style.backgroundColor = ccc
                    len(aaa).innerHTML = resultados[tamanho - i].roll
                }

                let maisChamados = verificaChamados(p, v)
                verificaAssertividade(maisChamados)

                var t = "TOTAL VERMELHOS: " + v + " | TOTAL PRETOS: " + p + " | TOTAL BRANCOS: " + b
               // len('.ultimo').innerHTML = "[ ULTIMO NUMERO: " + ult_num + " " + ult_cor + " ] --- ( " + t + " ) "

            }
        )
        setTimeout(() => { startRobo() }, 3000)
    }

startRobo()

function mostraCor(cor) {
    switch (cor) {
        case 1:
            return 'VERMELHO'
            break
        case 2:
            return 'PRETO'
            break
        case 0:
            return 'BRANCO'
            break
    }
}

function verificaChamados(p, v) {
    let x = 0; let y = 0
    if (v < p) {
        x = 1; y = 6
        if (p >= 10) {
            y = 11
            if (p >= 11) {
                y = 16
                if (p >= 12) {
                    y = 21
                    if (p >= 13) {
                        y = 26
                    }
                }
            }
        }
        sum = y
    } else if (p < v) {
        x = 2; y = 6
        if (v >= 10) {
            y = 11
            if (v >= 11) {
                y = 16
                if (v >= 12) {
                    y = 21
                    if (v >= 13) {
                        y = 26
                    }
                }
            }
        }
        sum = y
    }else{
        y = 0
        sum = y
    }
    return x
}

function verificaAssertividade(soma) {
    let chanceP = 50; let chanceV = 50;
    let aux = verificaSequencia()
    if (aux == 1) {
        chanceP = chanceP + seq; chanceV = 100 - chanceP
        if (soma == 1) {
            chanceP = chanceP + soma; chanceV = 100 - chanceP
        } else if (soma == 2) {
            chanceV = chanceV + soma; chanceP = 100 - chanceV
        }
    } else if (aux == 2) {
        chanceV = chanceV + seq; chanceP = 100 - chanceV
        if (soma == 1) {
            chanceP = chanceP + soma; chanceV = 100 - chanceP
        } else if (soma == 2) {
            chanceV = chanceV + soma; chanceP = 100 - chanceV
        }
    }

    if (chanceP > chanceV) {
        sugestao = "SUGESTÃO PARA: "+ mostraCor(2)
        if(chanceP >=75 && chanceP >80){
            sugestao = "GRANDE CHANCE DE VIR "+ mostraCor(2)
        }else if(chanceP >=80){
            sugestao = mostraCor(2)+" CONFIRMADO!"
        }
    } else if (chanceV > chanceP) {
        sugestao = "SUGESTÃO PARA: "+ mostraCor(1)
        if(chanceV >=75 && chanceV >80){
            sugestao = "GRANDE CHANCE DE VIR "+ mostraCor(1)
        }else if(chanceV >=80){
            sugestao = mostraCor(1)+" CONFIRMADO!"
        }
    }
    len('.sugestao').innerHTML = "" + sugestao
    len('.preto').innerHTML = chanceP + "%"
    len('.vermelho').innerHTML = chanceV + "%"
}

function verificaSequencia() {
    let ac = as.reverse()
    let x = 0
    let y = ac[0]

    if (ac[0] == ac[1]) {
        x = x + 16
        if ((ac[0] == ac[1]) && (ac[1] == ac[2])) {
            x = x + 8
            if (ac[0] == ac[1] && ac[1] == ac[2] && ac[2] == ac[3]) {
                x = x + 4
                if (ac[0] == ac[1] && ac[1] == ac[2] && ac[2] == ac[3] && ac[3] == ac[4]) {
                    x = x + 2
                    if (ac[0] == ac[1] && ac[1] == ac[2] && ac[2] == ac[3] && ac[3] == ac[4] && ac[4] == ac[5]) {
                        x = x + 1
                        if (ac[0] == ac[1] && ac[1] == ac[2] && ac[2] == ac[3] && ac[3] == ac[4] && ac[4] == ac[5] && ac[5] == ac[6]) {
                            x = x + 1
                        }
                    }
                }
            }
        }
    }
    seq = x
    return y
}