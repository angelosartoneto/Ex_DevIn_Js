//Faça 2 prompts ao usuário: no primeiro, pergunte o seu sobrenome. 
//No segundo, pergunte o seu nome. Em seguida, exiba na tela um alert contendo o nome completo do usuário, 
//na ordem correta (ou seja: Nome Sobrenome).

function myFunction()
{

var sobrenome=prompt("Digite seu SOBRENOME: ");
var nome=prompt("Digite seu NOME: ") 

if (sobrenome!=null)
if (nome!=null)

{
  window.alert("Olá, " + nome + " " + sobrenome + " !");
  return false;     
}
else{
  alert("Digite seu nome! " );
  return true;
}
}