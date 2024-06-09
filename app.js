let maior = 'maior'
let menor = 'menor'
let tentativas = 0;

let aleatorio = numeroAleatorio();
console.log(aleatorio);

function construirSite(tag, texto) {
    let corpo = document.querySelector(tag);
    corpo.innerHTML = texto;
}

construirSite('h1', 'Jogo Do Numero Secreto');
construirSite('p', 'chute um numero de 1 a 100');

function verificarChute(){
    let chute = document.querySelector('input').value;
    while (chute != aleatorio) {
        console.log('lopp')
        //caso n for um numero
        if (!isNaN(chute) || Number.isInteger(chute)) {
            construirSite('p', 'por favor coloque um numero valido, de 1 a 100');
        //caso ele erre
        }else {
            tentativas++;
            let dica = '';
            chute < aleatorio ? dica = maior : dica = menor;
            construirSite('h1', 'Voce errou tente novamente');
            construirSite('p', `O numero Aleatorio e ${dica}`);
            console.log(chute);
        }
    }
    //caso o umero esteja certo
    if (chute == aleatorio) {
       construirSite('h1', 'Parabens voce ganhou!!!');
       construirSite('p', `voce acertou com ${tentativas} tentativas`);
       var resposta = document.querySelector('.container__input').style.display = 'none';
       var chutar = document.querySelector('.chutar').setAttribute('disabled', 'true');
       var Novogame = document.querySelector('#reiniciar').removeAttribute('disabled', 'true');
    }
}

function novoGame() {
    window.location.reload();
}

function numeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);   
}