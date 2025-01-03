var mostrarHora = window.document.querySelector('div#mostrarHora');
var imagem = window.document.querySelector('img#imagem');

var hora = (new Date()).getHours();

if(hora >= 0 && hora < 12){
    if(hora == 0){
        mostrarHora.innerHTML = `Bom dia!<br>Agora é meia-noite (${hora} horas).`;
    }
    else if(hora == 1){
        mostrarHora.innerHTML = `Bom dia!<br>Agora é ${hora} hora da manhã.`;
    }
    else{
        mostrarHora.innerHTML = `Bom dia!<br>Agora são ${hora} horas da manhã.`;
    }
    imagem.src = 'img/manha.png'; //altera a imagem dinamicamente
    document.body.style.background = '#e2cd9f'; //muda a cor do fundo dinamicamente
}
else if(hora > 12 && hora <= 18){
    mostrarHora.innerHTML = `Boa tarde!<br>Agora são ${hora} horas da tarde.`
    imagem.src = 'img/tarde.png'; //altera a imagem dinamicamente
    document.body.style.background = '#b9846f'; //muda a cor do fundo dinamicamente
}
else{
    mostrarHora.innerHTML = `Boa noite!<br>Agora são ${hora} horas da noite.`
    imagem.src = 'img/noite.png'; //altera a imagem dinamicamente
    document.body.style.background = '#515154'; //muda a cor do fundo dinamicamente
}
