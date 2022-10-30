//3. Faça um algoritmo que receba dois números inteiros que
//representam um intervalo, exemplo 1 - 50 ou 73 - 167, e informe
//quantos números pares e ímpares existem nesse intervalo.

var n1
var n2
var pares = 0
var impares = 0

n1 = parseInt(prompt(" Insira o primeiro numero "))
n2 = parseInt(prompt( " Insira o segundo numero "))
if (n1 < n2 ){
    for ( n1 + 1; n1 <= n2; n1++){
        if (n1 % 2 == 0){
            pares++
        }else {
            impares++
        }
    }
}
console.log( " Neste intervalo há", pares, " números pares e", impares, " números impares " )