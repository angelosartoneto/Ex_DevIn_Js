//Faça 3 prompts ao usuário: no primeiro, pergunte qual o tipo de cálculo ele deseja fazer 
//(“+”, “-”, “*” ou “/”). No segundo, pergunte o primeiro valor que deseja calcular. 
//No terceiro, o segundo valor que deseja calcular. Em seguida, realize o cálculo e 
//exiba na tela um alert contendo o texto “O resultado do seu cálculo é: X”, 
//onde X é o resultado final do cálculo solicitado pelo usuário.


const operador = prompt('Informe a operação que deseja realizar: (+, -, * ou /)');
const num1 = parseFloat( prompt('Informe seu primieiro numero: '));
const num2 = parseFloat( prompt('Informe seu segundo numero: '));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('O valor informado não é um numero')
}
else {

    if(operador == '+'){
        result = num1 + num2;
    } else if(operador == '-'){
        result = num1 - num2;
    } else if(operador == '*'){
        result = num1 * num2;
    } else if(operador == '/'){
        result = num1 / num2;
    }

    window.alert(num1 + operador + num2 + ' = ' + result);
}
