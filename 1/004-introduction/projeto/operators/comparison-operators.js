/*
  Operadores de Comparação
    Operadores de comparação são usados ​​para comparar valores.

  Operadores:
  == igualdade (valor) - não recomendado
  === igualdade estrita (valor e tipo)
  != diferente (valor) - não recomendado
  !== diferente estrito (valor e tipo)
  > maior que
  >= maior ou igual a
  < menor que
  <= menor ou igual a
  ? operador de comparação ternário (ES6)
*/

// == igualdade (valor) - não recomendado
if (2 == "2") {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* verdadeiro */

// === igualdade estrita (valor e tipo)
if (2 === "2") {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* falso */

// != diferente (valor) - não recomendado
if (2 != "2") {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* falso */

// !== diferente estrito (valor e tipo)
if (2 !== "2") {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* verdadeiro */

// > maior que
if (2 > 1) {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* verdadeiro */

// >= maior ou igual a
if (2 >= 1) {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* verdadeiro */

// < menor que
if (2 < 1) {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* falso */

// <= menor ou igual a
if (2 <= 1) {
  console.log("verdadeiro");
} else {
  console.log("falso");
} /* falso */

// ? operador de comparação ternário (ES6)
// (condição) ? (se verdadeiro) : (se falso)
let n = 5;
n > 0 ? console.log("positivo") : console.log("negativo"); /* positivo */
