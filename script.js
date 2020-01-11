/*
        ------------------
        Primeiro objetivo
        ------------------
    Encontrar: Largura e Altura
*/ 

var altura = 0
var largura = 0 

function ajustarTamanhoJogo(){
    altura = window.innerHeight
    largura =  window.innerWidth

    console.log(largura, altura)
}

ajustarTamanhoJogo()

/*
                ------------------
                Segundo objetivo
                ------------------
    Criar posições aleatorias para o mosquito
*/ 

function posicaoRandomica(){
    //subtraindo 90 em cada posição para que o mosquito não ultrapasse a tela
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //Coreção erro (posição menor que 0)
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    /*Criando o elemento html(mosquito)*/
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'tamanho-mosquito'
     
    //Atribuindo a possição aleatoria para o mosquito
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}
