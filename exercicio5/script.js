var adicionar = window.document.querySelector('input#adicionar');
var finalizar = window.document.querySelector('input#finalizar');
var numeros = window.document.querySelector('select#numeros');
var listaNumeros = [];
var saida = window.document.querySelector('div#resultado');

adicionar.addEventListener('click', adicionarNumero);
finalizar.addEventListener('click', analizar);


//adiciona o numero do input do campo numero, no vetor listaNumeros e na selection, incrementando elementos.
function adicionarNumero(){
    let numero = Number.parseInt(window.document.querySelector('input#numero').value);
    //checa se o input tem os requisitos(maior que 0, menor ou igual a 100 e se o valor ainda não esta no vetor)
    if((!listaNumeros.includes(numero)) && numero > 0 && numero <= 100){
        saida.innerHTML = ''; //para caso o usuario adicione outro valor,apague assim que o usuario clicar em adicionar.
        listaNumeros.push(numero);

        //cria uma option para ser adicionada na select
        //optei por usar uma select por intuitos de aprendizado.
        let option = window.document.createElement('option');
        option.innerHTML = `Valor ${numero} adicionado`;
        numeros.appendChild(option);
    }
    else{
        window.alert('Numero invalido ou ja existente na lista! Tente novamente.');
    }

    //apagar o numero do input quando clicar em adicionar.
    window.document.querySelector('input#numero').value = '';
    window.document.querySelector('input#numero').focus();
}
function somarNumerosVetor(){
    let soma = 0;
    for(let i=0; i < listaNumeros.length; i++){
        soma += listaNumeros[i];
    }
    return soma;
}


//ao clicar no botão analizar, essa função é chamada
function analizar(){
    //checagem caso não tenha nenhum valor no campo de numero
    if(listaNumeros.length <= 0){
        window.alert('Adicione um numero antes de finalizar!'); 
    }
    //se estiver ok, apresenta os resultados.
    else{
        let somaLista = somarNumerosVetor();
        saida.innerHTML = `<p>Ao todo, tempos ${listaNumeros.length} numeros cadastrados</p>`;
        saida.innerHTML += `<p>O maior valor informado foi ${Math.max(...listaNumeros)}.</p>`;
        saida.innerHTML += `<p>O menor valor informado foi ${Math.min(...listaNumeros)}.</p>`
        saida.innerHTML += `<p>Somando todos os valores, temos ${somaLista}.</p>`;
        saida.innerHTML += `<p>A media dos valores digitados é ${somaLista/listaNumeros.length}.</p>`;   
    }
}
