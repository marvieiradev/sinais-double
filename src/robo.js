const url = "https://blaze1.space/api/roulette_games/recent/history"
var sum = 0; var seq = 0; var as = []
var frase = ""

var frases = [
    "APOSTE</b> na COR</b> acima de <b>77%</b>. <br>Faça G1 & G2</b> se precisar.",
    "Seja lucrativa(o)</b> com paciência</b> <br>e análise das informações</b>!",
    "Entrar após o <b>LOSS</b> é uma excelente <br>estratégia</b> nos sinais",
    "Sempre considere fazer <b>GALES 1 e 2</b> <br>respeitando as porcentagens.</b>",
    "Ferramenta de suporte a entradas e sinais. <br>Alie a sua <b>estratégia!</b>",
];

var len = (el) => {
    return document.querySelector(el)
},
    sugestao = len('.sugestao'),
    startRobo = () => {
        //Inicio da fetch api
        fetch(
            url,
            {
                method: "GET",
                mode: "cors"
            }
        ).then(
            response => response.json()
        ).then(
            //Inicio das funções do robo
            (res) => {
                let resultados = res.records
                let casa = 10
                let tamanho = resultados.length
                let indice = tamanho - casa

                var v = 0; var p = 0; var b = 0;

                for (var i = 10; i > 0; i--) {
                    if (resultados[tamanho - i].color === 1) {
                        v++
                    } else if (resultados[tamanho - i].color === 2) {
                        p++
                    } else if (resultados[tamanho - i].color === 0) {
                        b++
                    }

                    /*if (resultados[tamanho - i].color === 0) {
                        as[casa - i] = resultados[tamanho - i - 1].color
                    } else {
                        as[casa - i] = resultados[tamanho - i].color
                    }*/

                    as[casa - i] = resultados[tamanho - i].color

                    const data = new Date(res.records[tamanho - i].created_at)
                    let num_cham = ".n" + i
                    let hora_cham = ".h" + i
                    let cor_num_cham = ""

                    //Preencher as cores
                    if (resultados[tamanho - i].color === 1) {
                        cor_num_cham = "#FF2449"
                    } else if (resultados[tamanho - i].color === 2) {
                        cor_num_cham = "#262F3C"
                    } else {
                        cor_num_cham = "#FFFFFF"
                    }

                    len(num_cham).style.backgroundColor = cor_num_cham
                    len(num_cham).innerHTML = resultados[tamanho - i].roll
                    len(hora_cham).innerText = `${data.getHours().toString().padStart(2, '0')}:${data.getMinutes().toString().padStart(2, '0')}`;
                }

                let maisChamados = verificaChamados(p, v)
                verificaAssertividade(maisChamados)
                len('.frase').innerHTML = frase

            }
        )
        setTimeout(() => { startRobo() }, 1500)
    }

startRobo();

function exibirFrase() {
    frase = frases[Math.floor(Math.random() * 5)]
    setTimeout(() => { exibirFrase() }, 10000)
}

exibirFrase()

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
        if (p >= 6) {
            y = 11
            if (p >= 7) {
                y = 16
                if (p >= 8) {
                    y = 21
                    if (p >= 9) {
                        y = 26
                    }
                }
            }
        }
        sum = y
    } else if (p < v) {
        x = 2; y = 6
        if (v >= 6) {
            y = 11
            if (v >= 7) {
                y = 16
                if (v >= 8) {
                    y = 21
                    if (v >= 9) {
                        y = 26
                    }
                }
            }
        }
        sum = y
    } else {
        y = 0
        sum = y
    }
    return x
}

function verificaAssertividade(soma) {
    let chanceP = 50; let chanceV = 50;
    let aux = verificaSequencia()
    sugestao = "AGUARDANDO SINAIS..."
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
        if (chanceP >= 61 && chanceP < 75) {
            sugestao = `SUGESTÃO PARA: <strong>${mostraCor(2)}</strong>`
        } else if (chanceP >= 75 && chanceP < 80) {
            sugestao = `ALTA CHANCE DE: <strong>${mostraCor(2)}</strong>`
        } else if (chanceP >= 80) {
            sugestao = `<strong>${mostraCor(2)}</strong> CONFIRMADO!`
        }
    } else if (chanceV > chanceP) {
        if (chanceV >= 61 && chanceV < 75) {
            sugestao = `SUGESTÃO PARA: <strong>${mostraCor(1)}</strong>`
        } else if (chanceV >= 75 && chanceV < 80) {
            sugestao = `ALTA CHANCE DE: <strong>${mostraCor(1)}</strong>`
        } else if (chanceV >= 80) {
            sugestao = `<strong>${mostraCor(1)}</strong> CONFIRMADO!`
        }
    }
    if (sugestao != null) {
        len('.sugestao').innerHTML = `${sugestao}`
    }
    len('.preto').innerHTML = `${chanceP}%`
    len('.vermelho').innerHTML = `${chanceV}%`
}

function verificaSequencia() {
    let ac = as
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
                        x = x + 2
                        if (ac[0] == ac[1] && ac[1] == ac[2] && ac[2] == ac[3] && ac[3] == ac[4] && ac[4] == ac[5] && ac[5] == ac[6]) {
                            x = x + 1
                            if (ac[0] == ac[1] && ac[1] == ac[2] && ac[2] == ac[3] && ac[3] == ac[4] && ac[4] == ac[5] && ac[5] == ac[6] && ac[6] == ac[7]) {
                                x = x + 1
                            }
                        }
                    }
                }
            }
        }
    }
    seq = x
    return y
}