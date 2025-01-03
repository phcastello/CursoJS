let botao = window.document.querySelector('input#botao');
botao.addEventListener('click', gerarTabuada);

select.innerHTML = "Selecione um número!";

function gerarTabuada(){
    let numero = Number.parseInt(window.document.querySelector('input#numero').value);
    let select = window.document.querySelector('select#tabuada');
    
    if(numero){
        select.innerHTML = "";
        for(let i=0; i <= 10; i++){
        let option = window.document.createElement('option');
        option.innerHTML = `  ${i} * ${numero} = ${i * numero}  `;
        select.appendChild(option);
        }
    }
    else{
        window.alert('Por favor, digite um numero');
        return;
    }
}
