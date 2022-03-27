//Utilizando estrutura condicional **exiba (console.log)** a descrição da classificação da **idade 
//(variável)** da pessoa de acordo com os dados abaixo:

//Jovens - Indivíduos de até 15 anos;
//Adultos - Indivíduos com idade entre 16 até 64 anos;
//Idosos - Indivíduos de 65 anos em diante.

//Realizei incrementos as categorias, conforme rege a lesgislação brasileira.

function myFunction()
{

let idade = prompt("Digite sua idade: ")


if((idade >= 5) && (idade <= 11)){
    window.alert("Sua categoria é de Criança");  
  }
  else if((idade >= 12) && (idade <= 18)){
    window.alert("Sua categoria é de Adolescente");  
  }
  else if((idade >= 19) && (idade <= 29)){
    window.alert("Sua categoria é de Jovem");  
  }
  else if((idade >= 30) && (idade <= 64)){
    window.alert("Sua categoria é de Adulto");  
  }
  else if(idade > 64){
    window.alert("Sua categoria é de Sênior");  
  }
  else{
    window.alert("Não pertence a nenhuma categoria.");  
  }
   
}
