//Utilizando JavaScript, peça a confirmação do usuário ao clicar em algum botão, 
//perguntando se ele deseja realmente realizar aquela ação (você pode utilizar a página criada 
//nos exercícios da semana 1, ou criar uma nova).

function funcao1()
{
var x;
var r=confirm("Você deseja realizar esta ação?");
if (r==true)
  {
  x="você pressionou OK!";
  }
else
  {
  x="Você pressionou Cancelar!";
  }
document.getElementById("demo").innerHTML=x;
}