//Faça 2 prompts ao usuário: no primeiro, pergunte o ano de nascimento. 
//No segundo, pergunte o ano atual. Em seguida, exiba na tela um alert 
//contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso 
//ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda 
//não tenha aniversariado no ano corrente.

function getAge() {

  var dateString=prompt("Digite a data de seu aniversario no formato: AAAA/MM/DD ");
  var hoje=prompt("Digite a data atual no formato: AAAA/MM/DD");
//Não encontrei uma forma para que o date aceite o formato de data DD/MM/AAAA.
  var today = new Date(hoje);
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
window.alert('sua idade é: ' + getAge());

