var botao = window.document.querySelector('input#botao');
var saida = window.document.querySelector(`div#saida`);
botao.addEventListener('click', clicar);
botao.addEventListener('mouseenter', mouseentrou);
botao.addEventListener('mouseout', mousesaiu);

function clicar(){
    saida.innerHTML = '<strong>Clicou!</strong>';
    window.document.body.style.backgroundColor = 'red';
}

function mouseentrou(){
    saida.innerHTML = '<strong>Entrou!</strong>'
    window.document.body.style.backgroundColor = '#468eec';
}

function mousesaiu(){
    saida.innerHTML = '<strong>saiu!</strong>'
    window.document.body.style.backgroundColor = 'green';
}