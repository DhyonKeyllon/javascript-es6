/*
  ? Operadores lógicos (logical operators)
  
  O que são operadores lógicos? 
    São operadores que retornam um valor booleano (true ou false).

  Operadores lógicos:
    && (AND) - E
      Retorna true se os dois operandos forem true.
    || (OR) - OU
      Retorna true se um dos operandos forem true.
    ! (NOT) - NÃO
      Retorna true se o operando for false.
    ?? (COALESCING) - COALESCENTE (ES2020)
      Retorna o primeiro operando que não é null ou undefined.
*/

// && (AND) - E
// true && true => true
// true && false => false
if (2 === 2 && 3 > 1) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

// || (OR) - OU
// true || true => true
// true || false => true
// false || false => false
if (2 === 2 || 3 > 1) {
  // true || true => true
  console.log("verdadeiro");
} else {
  console.log("falso");
}

// ! (NOT) - NÃO
// !true => false
if (!(2 === 2 || 3 > 1)) {
  // !true => false
  console.log("verdadeiro");
}

// ?? (COALESCING) - COALESCENTE (ES2020)
/*
  x = 'Oi'
  y = undefined
  x ?? y => 'Oi'
  y ?? x => 'Oi'
*/
let x = "Oi";
let y = undefined;
console.log(x ?? y); // 'Oi'
