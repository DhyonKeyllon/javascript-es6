/*
  Destructuring Assignment (Desestruturação de atribuição)
    - É uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
*/

// Desestruturação de array
const frutas = [
  "Banana",
  "Uva",
  "Morango",
  [
    ["Pera", "Maçã"],
    ["Melancia", "Melão"],
  ],
];

const [fruta1, fruta2, fruta3] = frutas;

// Pular índices
const [, , , [, [melancia]]] = frutas;

// Definir um novo índice com valor padrão
const [banana, uva, morango, arrayDeFrutas, mamao = "Mamão"] = frutas;

console.log(fruta1);
console.log(melancia);
console.log(mamao);

// Desestruturação de objeto
let produto = {
  nome: "Smartphone",
  preco: 1500,
  caracteristicas: {
    tela: undefined,
    camera: "12mp",
  },
};

// const { nome, preco, caracteristicas } = produto;

// const { nome: n, preco: p, caracteristicas, desconto = 5 } = produto;

const {
  caracteristicas: { camera: f, tela = "Não informado" },
} = produto;

console.log(f, tela);

// Desestruturação de parâmetros de função com array

let numeros = [10, 20, 30, 40];

function printNumbers([a, b, , c, d = 100]) {
  console.log(a, b, c, d);
}

printNumbers(numeros);

// Desestruturação de parâmetros de função com objeto

let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

function printObj({ a: firstNumber, b: secondNumber, d, z = 1 }) {
  console.log(firstNumber, secondNumber, d, z);
}

printObj(obj);

// Desestruturação em conjunto com rest operator

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function printNumbersRest([a, b, ...rest]) {
  console.log(a, b, rest);
}

printNumbersRest(numbers);

let object = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

let { a, ...y } = object;
console.log(a, y);
