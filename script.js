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

/*Questão 2
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
stop();*/

//Questão 3
let ja = parseFloat(prompt('Digite o seu total de ganhos do mês de Janeiro:'));
let f = parseFloat(prompt('Digite o seu total de ganhos do mês de Fevereiro :'));
let m = parseFloat(prompt('Digite o seu total de ganhos do mês de Março:'));
let a = parseFloat(prompt('Digite o seu total de ganhos do mês de Abril:'));
let ma = parseFloat(prompt('Digite o seu total de ganhos do mês de Maio:'));
let ju = parseFloat(prompt('Digite o seu total de ganhos do mês de Junho:'));
let j = parseFloat(prompt('Digite o seu total de ganhos do mês de Julho:'));
let ag = parseFloat(prompt('Digite o seu total de ganhos do mês de Agosto:'));
let s = parseFloat(prompt('Digite o seu total de ganhos do mês de Setembro:'));
let o = parseFloat(prompt('Digite o seu total de ganhos do mês de Outubro:'));
let n = parseFloat(prompt('Digite o seu total de ganhos do mês de Novembro:'));
let d = parseFloat(prompt('Digite o seu total de ganhos do mês de Dezembro:'));

let soma = 0


    soma = ja+f+m+a+ma+ju+j+ag+s+o+n+d
    console.log ( 'Seu total de Ganhos do Ano foi de:' );
    console.log ( soma );

let ja1 = parseFloat(prompt('Digite o seu total de gastos do mês de Janeiro:'));
let f1 = parseFloat(prompt('Digite o seu total de gastos do mês de Fevereiro :'));
let m1 = parseFloat(prompt('Digite o seu total de gastos do mês de Março:'));
let a1 = parseFloat(prompt('Digite o seu total de gastos do mês de Abril:'));
let ma1 = parseFloat(prompt('Digite o seu total de gastos do mês de Maio:'));
let ju1 = parseFloat(prompt('Digite o seu total de gastos do mês de Junho:'));
let j1 = parseFloat(prompt('Digite o seu total de gastos do mês de Julho:'));
let ag1 = parseFloat(prompt('Digite o seu total de gastos do mês de Agosto:'));
let s1 = parseFloat(prompt('Digite o seu total de gastos do mês de Setembro:'));
let o1 = parseFloat(prompt('Digite o seu total de gastos do mês de Outubro:'));
let n1 = parseFloat(prompt('Digite o seu total de gastos do mês de Novembro:'));
let d1 = parseFloat(prompt('Digite o seu total de gastos do mês de Dezembro:'));

let somas = 0


    somas = ja1+f1+m1+a1+ma1+ju1+j1+ag1+s1+o1+n1+d1
    console.log ( 'Seu total de Gastos do Ano foi de:' );
    console.log ( somas );

let saldo = 0

    saldo = soma --- somas
    console.log ( 'Seu total de Saldo do Ano foi de:' );
    console.log ( saldo );

   if (saldo > 0){ ('Você teve lucro')
   }else if (saldo === 0){
    console.log ( 'Você não ganhou nada')
   } else{
    console.log ( 'Você teve prejuízo')
   } 