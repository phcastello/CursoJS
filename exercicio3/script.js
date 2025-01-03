var botao = window.document.querySelector('input#botao');
botao.addEventListener('click', contar);

function contar(){
    var inicio = window.document.querySelector('input#inicio').value;
    var fim = window.document.querySelector('input#fim').value;
    var passo = window.document.querySelector('input#passo').value;
    var saida = window.document.querySelector('p#saida');
    var apontarDireita = '\u{1F449}'; //https://unicode.org/emoji/charts/full-emoji-list.html
    var bandeiraChegada = '\u{1F3C1}'; //https://unicode.org/emoji/charts/full-emoji-list.html
    console.log(inicio);
    console.log(fim);
    console.log(passo);
    if(passo === "" || inicio === "" || fim === ""){
        saida.innerHTML = "Impossivel contar!";
        return;
    }
    else{
        saida.innerHTML = "Contando: <br>";
        inicio = Number.parseInt(inicio);
        fim = Number.parseInt(fim);
        passo = Number.parseInt(passo);
        if(passo <= 0){
            saida.innerHTML = "Impossivel contar!";
            return;
        }
        else if(inicio > fim){
            //inicio = 5
            //fim = 1
            for(let i=inicio; i >= fim; i -= passo){
                console.log(`i = ${i}`);
                saida.innerHTML += `${i} ${apontarDireita}`;
            }
            saida.innerHTML += `${bandeiraChegada}`;
        }
        else{
            for(let i=inicio; i <= fim; i+= passo){
                console.log(`i = ${i}`);
                saida.innerHTML += `${i} ${apontarDireita}`;
            }
            saida.innerHTML += `${bandeiraChegada}`;
        }
        
    }
}