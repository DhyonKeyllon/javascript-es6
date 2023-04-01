/*
  Array Ordenação

  sort() - Ordena os elementos do array
    - Por padrão, ordena em ordem crescente
    - Se o array for de números, ordena em ordem crescente
    - Se o array for de strings, ordena em ordem alfabética
    - Se o array for de objetos, ordena em ordem crescente de acordo com o primeiro elemento

  reverse() - Inverte a ordem dos elementos do array
*/

let listaNumeros = [10, 5, 3, 7, 8, 2, 1, 4, 6, 9];

// Ordena os itens em ordem crescente.
listaNumeros.sort();
console.log(listaNumeros);

// Ordena os itens em ordem decrescente
listaNumeros.reverse();
console.log(listaNumeros);

// Passa como parâmetro uma função de comparação, onde a e b são os elementos que estão sendo comparados
listaNumeros.sort((a, b) => a - b);
console.log(listaNumeros);

// Ordena em ordem decrescente
listaNumeros.sort((a, b) => b - a);
console.log(listaNumeros);
