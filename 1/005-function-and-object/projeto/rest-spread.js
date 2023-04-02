/*
  Rest e Spread
  - Rest e Spread são recursos do ES6 que permitem trabalhar com listas de valores de forma mais simples e enxuta.

  Rest (Reunir)
  - Rest é um recurso que permite representar um número indefinido de argumentos como um array.
  
  Spread (Espalhar)
  - Spread é um recurso que permite representar um array como uma lista de valores.
*/

// Rest

// Rest em parâmetros de função (números indefinidos)
function soma(...params) {
  let resultado = 0;

  // console.log("params", params);

  params.forEach((valor) => (resultado += valor));

  return resultado;
}

console.log(soma(3, 8, 5, 7));

// Rest em parâmetros de função com parâmetros definidos
function multiplicador(m, ...params) {
  let resultado = 0;
  // console.log("m", m);
  // console.log("params", params);

  params.forEach((valor) => (resultado += valor * m));

  return resultado;
}

console.log(multiplicador(5, 7, 12, 3, 49));

// Spread em arrays de números
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log({ ...numeros });

// Spread em strings
const nomes = "João";
console.log(nomes);
console.log([...nomes]);

// Spread em objetos
const pessoa = {
  nome: "João",
  idade: 20,
  cidade: "São Paulo",
};

const clone = { endereço: "Rua Abc", ...pessoa };
console.log(clone);
