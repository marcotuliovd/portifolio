// let valor = [1,2,3,5,500,60050,8,158,90,81];
// let maior = 0;
// for (index = 0;index<valor.length;index++) {

//     for (index2 = 0; index2 < valor.length;index2++) {

//         if (maior < valor[index2]) {

//         maior = valor[index2];
//         }
//     }

// }
// console.log(maior)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let fruits = [3,4,10,1,12];
// let soma = 0;

// for (index=0;index<fruits.length;index++){

//     soma = soma + fruits[index]
// }
// if (soma > 15) {
//     console.log(soma)
// }
// else {
//     console.log('valor menor que 16')
// }
//////////////////////////////////////////////////////////////

// let word = 'tryber';

// let invertido = word.split("").reverse().join("");

// console.log(invertido)
 /////////////////////////////////////////////////////////////////

//  let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = 'vllllllc';
//  for (index = 0; index < array.length; index++ ){
     
//     if(maiorPalavra.length > array[index].length){
//     maiorPalavra = array[index];
//     }
//     }

//     console.log(maiorPalavra)

//////////////////////////////////////////////////
// let maior = 0;

// for (let index = 0; index <= 50; index++) {

//   let isPrime = true;

//   for (let index2 = 2; index2 < index; index2++) {

//     if (index % index2 === 0) {

//       isPrime = false;
      
//     }
//   }
//   if (isPrime) {

//     maior = index;

//   }
// }

// console.log(maior);
 ////////////////////////////////////////////////////////////////

//  let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };


//console.log('O livro favorito de',leitor.nome,leitor.sobrenome,'Pessoa se chama ',leitor.livrosFavoritos[0].titulo);

// function mudarTexto {
// let textoPrincipal = document.getElementsByTagName('p')[1] ;
// textoPrincipal.innerHTML = "hsitoriaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas mal contadas mentiras inventadas estou poeta"
// }
// mudarTexto();

let corpo = document.querySelectorAll('#corpo');

let newDiv = document.createElement('div');

newDiv = 'texto';

corpo.appendChild(newDiv);