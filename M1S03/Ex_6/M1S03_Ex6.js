//Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto 
//“Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, 
//e y é a quantidade de letras desse sobrenome.

function myFunction()
{

var sobrenome=prompt("Digite seu ÚLTIMO SOBRENOME: ");

if (sobrenome!=false)

{
  window.alert("Olá, " + sobrenome.toUpperCase() + "! " + " Seu sobrenome possui " + sobrenome.length + " carateres.");
  return false;     
}
else{
  alert("Retorne ao botão clique aqui e, digite seu sobrenome! " );
  return true;
}
}