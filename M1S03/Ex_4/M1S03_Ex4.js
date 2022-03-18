//Pergunte ao usuário: nome (prompt), idade (prompt) e se gosta de praticar algum esporte (confirm). 
//Crie 3 variáveis para guardar as respostas do usuário: uma deve receber um valor textual (string), 
//outra deve receber um valor numérico (number), e outra um valor de verdadeiro ou falso (boolean). 
//Faça com que esses 3 valores sejam exibidos no console do navegador.

function myFunction()
{

var y;
var x;

var Meunome=prompt("Digite seu nome:");
var Minhaidade=prompt("Digite sua idade:" );
if (confirm("Voce gosta de esportes?") == true) {
  text = "gosta de esportes.";
} else {
  text = "não gosta de esportes.";
}

if (Meunome!=null)
if (Minhaidade!=null)

  {
  y="Olá  " + Meunome + "!";
  x=" Você tem " + Minhaidade + " anos e, ";
  document.getElementById("demo").innerHTML=y+x+text;
  }
}


