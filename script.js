/*Questão 1
let n1 = 0
let n2 = 0
let soma = 0
//let vezes = parseFloat(prompt('Digite quantos números voc~e deseja somar:'));

    do{
       let n2 = parseFloat(prompt('Digite seu número:'));
       soma = soma + n1
       console.log ( soma + n2 )
       n1 = n1 + n2
    }
    while ( vezes > n1);*/

//Questão 2
let intervalo = null;

var timer = function(){
    let count = 10;
    intervalo = setInterval(() =>{
        console.log(count);
        count--
        }, 1000)}

var stop = function(){
    setTimeout(() => {
        clearInterval(intervalo)
        console.log('Lançamento');        
            }, 10000)
    }

timer();
stop();

