//Dado o array abaixo realize a conversão da temperatura de  Fahrenheit para Celsius;
//Utilizando console.log exiba o valor do array original e do novo array convertido

//array:** [ 0, 32, 45, 50, 75, 80, 99, 120 ];
//formula:** Math.round( ( elem - 32 ) * 5 / 9 );
//Dica: eu daria uma olhada no .map_

function myFunction() {
    const temp = (array) => array.map(temp => (temp-32) * 5/9);

    const array = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
    const result = temp(array);
    console.log(result);
}