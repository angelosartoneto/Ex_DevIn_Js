//Faça com que o navegador do usuário pergunte o nome dele(a). 
//Utilizando o método alert, exiba o nome inserido pelo usuário.

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


