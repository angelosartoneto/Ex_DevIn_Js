var array = [4, 3, 4, 8]; //4
for (i = 0; i < array.length; i++) {
  console.log('posição: ', i);
  console.log('valor array: ', array[i]);
}

var pessoas = [{ nome: 'teste' }, { nome: 'teste2' }]; //4

pessoas.forEach(function (pessoa) {
  console.log(pessoa.nome);
});

var contador = 0;
var entrar = true;

while (entrar) {
  console.log('contador', contador);
  contador++;
  if (contador == 10) {
    entrar = false;
  }
}