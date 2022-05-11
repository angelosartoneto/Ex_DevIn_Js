//Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;
//Após o filtro ordene por ordem decrescente de acordo com a população (primeiro cidades mais populosas);

//cidades:** [
 // { nome: 'Patos de Minas', populacao: 153585 },
 // { nome: 'Lages', populacao: 157349 },
 // { nome: 'Ibiúna', populacao: 79479 },
 // { nome: 'Maringá', populacao: 403063 },
 // { nome: 'Curitiba', populacao: 1963726 },
 // { nome: 'Florianópolis', populacao: 508826 },
 // { nome: 'Pato Branco', populacao: 84779 },
//];

//Dica: Dar uma olhada nos métodos filter e sort
//extra: https://www.w3schools.com/jsref/jsref_sort.asp_


const cidades = [
 { nome: 'Patos de Minas', populacao: 153585 },
 { nome: 'Lages', populacao: 157349 },
 { nome: 'Ibiúna', populacao: 79479 },
 { nome: 'Maringá', populacao: 403063 },
 { nome: 'Curitiba', populacao: 1963726 },
 { nome: 'Florianópolis', populacao: 508826 },
 { nome: 'Pato Branco', populacao: 84779 },
];

cidades.sort(function(b, a) {return a.populacao - b.populacao});

let cidade = cidades.filter(aux => aux.populacao >= 200000);

for (let cidade2 of cidade) {
    console.log(`${cidade2.nome} - Populacao: ${cidade2.populacao} habitantes.`)
}





