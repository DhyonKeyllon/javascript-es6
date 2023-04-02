/*
  Objetos literais
  - Objetos são estruturas que representam entidades do mundo real.
  - Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.
*/

const pessoa = {
  nome: "João",
  idade: 20,
  cidade: "São Paulo",
};

// Notação de ponto
console.log(pessoa.nome);

// Notação de colchetes
console.log(pessoa["idade"]);

// Exemplo de objeto com função
let pessoa2 = {
  nome: "João",
  idade: 20,
  cidade: "Guarulhos",
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
};

console.log(pessoa2.apresentar());

// Alterando valores de um objeto
pessoa2.nome = "Maria";
pessoa2.idade = 25;

console.log(pessoa2.apresentar());

// Atribuição de valor de forma enxuta

let nome = "Paulo";
let idade = 21;
let cidade = "Una";

const pessoa3 = {
  nome,
  idade,
  cidade,
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
};

pessoa3.dizerOi = () => console.log("Oi");

console.log(pessoa3);
console.log(pessoa3.apresentar());
pessoa3.dizerOi();
