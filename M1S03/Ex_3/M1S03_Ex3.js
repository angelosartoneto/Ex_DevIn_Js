//Faça com que o navegador do usuário pergunte o nome dele(a). 
//Utilizando o método alert, exiba o nome inserido pelo usuário.

function myFunction()
{
var x;

var nome=prompt("Digite seu nome:");

if (nome!=null)
  {
  x="Seu nome é: " + nome;
  document.getElementById("demo").innerHTML=x;
  }
}