/*
  Arrays
    - Array é uma estrutura de dados que armazena uma coleção de valores.
    - Os valores de um array podem ser de qualquer tipo.
    - Um array é uma lista ordenada de valores.

  Sintaxe:
    const nomes = ["Eduardo", "Maria", "Joana"];

  Acessando valores de um array:
    nomes[0]; // Eduardo

  Alterando valores de um array:
    nomes[2] = "João";

  Métodos de um array:
    nomes.push("João"); // adiciona um item no final do array
    nomes.unshift("Eduardo"); // adiciona um item no início do array, ficando ["Eduardo", "Maria", "João"]
    nomes.pop(); // remove o último item do array, ficando ["Eduardo", "Maria"]
    nomes.shift(); // remove o primeiro item do array, ficando ["Maria", "João"]
    nomes.slice(0, 1); // remove o item do índice 0, ficando ["Maria", "João"] 
      - o primeiro parâmetro é o índice inicial e o segundo é o índice final (opcional)
  
  Propriedades de um array:
    nomes.length; // (quantidade de itens no array)

  Métodos de iteração de um array:
    forEach - executa uma função para cada item do array
    map - executa uma função para cada item do array e retorna um novo array com os resultados
    filter - filtra os itens de um array de acordo com uma condição e retorna um novo array
    find - retorna o primeiro item de um array que satisfaça uma condição
    reduce - reduz o array a um único valor
    every - retorna true se todos os itens do array satisfazerem uma condição
    some - retorna true se pelo menos um item do array satisfazer uma condição
    sort - ordena os itens de um array de acordo com uma condição
*/

const carros = ["Palio 98", "Toro", "Uno", 10, true, new Date(), function () {}];

carros.forEach(function (item, index) {
  console.log(index, item);
});
