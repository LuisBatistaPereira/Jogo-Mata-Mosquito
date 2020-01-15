/*
    Encontrar: Largura e Altura
*/ 

var altura = 0
var largura = 0 
var vidas = 1
var tempo = 20
var criarMosquito = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500 segundos
    criarMosquito = 1500
}
else if(nivel === 'dificil'){
    //1000 segundos
    criarMosquito = 1000
}
else if(nivel === 'hard'){
    //750 segundos
   criarMosquito = 750
}


if(nivel === 'normal'){
    tempo = 20
}
else if(nivel === 'dificil'){
    tempo = 30
}
else if(nivel === 'hard'){
    tempo = 50
}

function ajustarTamanhoJogo(){
    altura = window.innerHeight
    largura =  window.innerWidth
}

ajustarTamanhoJogo()

/*Aplicando cronômetro ao jogo*/
var cronometro = setInterval(function(){

    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'        
    }
    else{
      document.getElementById('tempo').innerHTML = tempo
    }
}, 1000)

/*
    Criar posições aleatorias para o mosquito
    Criar lados aleatórios para o mosquito
*/ 

function posicaoRandomica(){

    //removendo mosquito anterior
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas < 4){
           document.getElementById('vida'+vidas).src="imagens/coracao_vazio.png"
            vidas += 1 
        }
        else{
            window.location.href = 'fimDeJogo.html'
        }
        
    }

    //subtraindo 90 em cada posição para que o mosquito não ultrapasse a tela
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //Coreção erro (posição menor que 0)
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    /*Criando o elemento html(mosquito)*/
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoMosquito() + ' ' + ladoAleatorio()

     
    //Atribuindo a possição aleatoria para o mosquito
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    //Remover mosquito ao clica-lo
    mosquito.onclick = function(){
        this.remove()
    }


    //Atribuindo mosquito como filho do body
    document.body.appendChild(mosquito)
}

function tamanhoMosquito(){
    var classe = Math.floor(Math.random() * 3)

        switch(classe) {
            case 0:
                  return 'mosquito01'

            case 1:
                  return 'mosquito02'

            case 2:
                  return 'mosquito03'

          }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
              return 'ladoA'

        case 1:
              return 'ladoB'

      }
}

function reiniciar(){
    window.location.href = 'index.html'
}