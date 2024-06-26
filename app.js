let maior = 'maior'
let menor = 'menor'
let tentativas = 1;

let aleatorio = numeroAleatorio();
console.log(aleatorio);

function construirSite(tag, texto) {
    let corpo = document.querySelector(tag);
    corpo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

construirSite('h1', 'Jogo Do Numero Secreto');
construirSite('p', 'chute um numero de 1 a 100');

function verificarChute(){
    let chute = document.querySelector('input').value;
    //caso o umero esteja certo
    if (chute == aleatorio) {
       construirSite('h1', 'Parabens voce ganhou!!!');
       var vezes = 1 ? vezes = 'tentativa' : vezes = 'tetativas'
       construirSite('p', `voce acertou com ${tentativas} ${vezes}`);
       var resposta = document.querySelector('.container__input').style.display = 'none';
       var chutar = document.querySelector('.chutar').setAttribute('disabled', 'true');
       var Novogame = document.querySelector('#reiniciar').removeAttribute('disabled', 'true');
    //caso ele erre
    }else if(chute == ''){
        construirSite('p', `Por Favor prencha o campo de resposta, com uma resposta valida`);
    
    }else if(chute > 100 || chute < 0){
        construirSite('p', `Sua resposta deve ser entre 0 a 100`);
    
    }else{
            tentativas++;
            let dica = '';
            chute < aleatorio ? dica = maior : dica = menor;
            construirSite('h1', 'Voce errou tente novamente');
            construirSite('p', `O numero Aleatorio e ${dica}`);
            limparChute() 
    }
}

function novoGame() {
    window.location.reload();
}

function numeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);   
}

function limparChute() {
    chute = document.querySelector('input');
    return chute.value = '';
}