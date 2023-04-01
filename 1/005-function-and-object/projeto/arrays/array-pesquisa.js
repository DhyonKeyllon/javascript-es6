/*
  Pesquisa em array

  indexOf() - Retorna o índice do elemento pesquisado
    - Se o elemento não existir, retorna -1
  lastIndexOf() - Retorna o índice do último elemento pesquisado
    - Se o elemento não existir, retorna -1
  includes() - Retorna true ou false se o elemento existe na lista
    - Se o elemento não existir, retorna false
  find() - Retorna o elemento pesquisado
    - Se o elemento não existir, retorna undefined
  findIndex() - Retorna o índice do elemento pesquisado
    - Se o elemento não existir, retorna -1
*/

let listaFrutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

let indexDaUva = listaFrutas.indexOf("Uva");

if (indexDaUva === -1) {
  console.log("Não tem uva");
} else {
  console.log(`Existe uva na posição ${indexDaUva}`);
}
