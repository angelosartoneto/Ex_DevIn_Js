//Dado um número verifique se ele é par, caso seja exibe a mensagem de que ele é par, 
//caso não exibe a mensagem de que ele é impar. Para exibir a mensagem pode ser usado console.log
//dica: operador ternário pode ser uma boa_

function myFunction()
{

let numero = prompt("Digite um numero: ")

let Num = numero % 2 == 0 ? 'O número é Par' : 'O número é Ímpar'
window.alert(Num)
}
