//Questão 1
let n1 = 0
let n2 = 0
let soma = 0
let vezes = parseFloat(prompt('Digite quantos números voc~e deseja somar:'));

    do{
       let n2 = parseFloat(prompt('Digite seu número:'));
       soma = soma + n1
       console.log ( soma + n2 )
       n1 = n1 + n2
    }
    while ( vezes > n1);
