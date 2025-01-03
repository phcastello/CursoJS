var botao = window.document.querySelector('input#botao');
var saida = window.document.querySelector('div#resultado');
var anoAtual = (new Date()).getFullYear();
botao.addEventListener('click', verificar);

function verificar(){
    var anoNascimento = Number(window.document.querySelector('input#anoNascimentoTxt').value);
    if(anoNascimento > anoAtual || anoNascimento == 0 || anoNascimento < 1900){
        window.alert('[ERRO] Verifique os dados e tente novamente [ERRO]')
    }
    else{
        var sexo = window.document.getElementsByName('sexo');
        var idade = anoAtual - anoNascimento;
        var imagem = window.document.createElement('img');
        imagem.setAttribute('id', 'foto');
        
        if(sexo[0].checked){
            sexo = 'Homem';
            if(idade < 10){
                //criança homem
                imagem.setAttribute('src', 'img/crianco.png'); //altera a fonte da imagem 
            }
            else if(idade < 21){
                //adolecente homem
                imagem.setAttribute('src', 'img/adolecente.png'); //altera a fonte da imagem 
            }
            else if(idade < 65){
                //adulto homem
                imagem.setAttribute('src', 'img/homi.png'); //altera a fonte da imagem 
            }
            else{
                //velho homem
                imagem.setAttribute('src', 'img/veio.png'); //altera a fonte da imagem 
            }
        }
        else if(sexo[1].checked){
            sexo = 'Mulher';
            if(idade < 10){
                imagem.setAttribute('src', 'img/crianca.png'); //altera a fonte da imagem 
            }
            else if(idade < 21){
                imagem.setAttribute('src', 'img/adolecenta.png'); //altera a fonte da imagem 
            }
            else if(idade < 65){
                imagem.setAttribute('src', 'img/muie.png'); //altera a fonte da imagem 
            }
            else{
                imagem.setAttribute('src', 'img/veia.png'); //altera a fonte da imagem 
            }
        }
        saida.innerHTML = `Detectamos ${sexo} com ${idade} anos.<br>`;
        saida.appendChild(imagem);
    }

    console.log(sexo);
    console.log(anoNascimento);
}
