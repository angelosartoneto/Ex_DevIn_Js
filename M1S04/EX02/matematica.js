//Crie uma **função **que receba como **parâmetro dois números e a operação a ser realizada**;
//Utilizando a estrutura condicional **switch** faça a validação e realize a operação desejada 
//soma, subtração, divisão ou multiplicação) com os dois números passados por parâmetro e exiba 
//o resultado utilizando console.log.
//Caso seja passada uma operação diferente das 4 à cima  deve exibir utilizando console.log que a 
//operação não está disponível.
//Chame essa função 5 vezes passando em cada uma uma operação como argumento e na ultima passando uma operação inválida.

function myFunction() {

  let result;
  const operator = prompt('Informe a operação ( +, -, * ou / ): ');
  const number1 = parseFloat(prompt('Informe o primeiro numero: '));
  const number2 = parseFloat(prompt('Informe o segundo numero: '));
  switch(operator) {
      case '+':
           result = number1 + number2;
          console.log(`${number1} + ${number2} = ${result}`);
          window.alert(result)
          break;
  
      case '-':
           result = number1 - number2;
          console.log(`${number1} - ${number2} = ${result}`);
          window.alert(result)
          break;
  
      case '*':
           result = number1 * number2;
          console.log(`${number1} * ${number2} = ${result}`);
          window.alert(result)
          break;
  
      case '/':
           result = number1 / number2;
          console.log(`${number1} / ${number2} = ${result}`);
          window.alert(result)
          break;
  
      default:
          window.alert('Operação indisponivel');
          break;
  }

}
