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
  else if((idade >= 30) && (idade <= 59)){
    window.alert("Sua categoria é de Adulto");  
  }
  else if(idade > 60){
    window.alert("Sua categoria é de Sênior");  
  }
  else{
    window.alert("Não pertence a nenhuma categoria.");  
  }
   
}
