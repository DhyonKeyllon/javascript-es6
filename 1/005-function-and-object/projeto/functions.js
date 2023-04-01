/*
  * Funções - Funções são blocos de código que podem ser executados quando chamados.

  Função declarada
  - Funções declaradas são funções com nome.
  Exemplo:
    function nomeDaFuncao() {
      "bloco de código"
    }

  Função anônima
  - Funções anônimas são funções sem nome.
  Exemplo:
    const nomeDaFuncao = function() {
      "bloco de código"
    }
    
  Função auto-executável
  - Funções auto-executáveis são funções que são executadas assim que são criadas.
    function(params){
      return "bloco de código"
    }(params)
  
  Arrow Function
  - Arrow Function é uma forma mais curta de escrever uma função anônima.
  Exemplo:
    const nomeDaFuncao = (params) => {
      "bloco de código"
    }
    
*/

const calc = (x1, x2, operator) => {
  // ? eval() é uma função que executa uma string como código JavaScript.
  return eval(`${x1} ${operator} ${x2} `);
};

const result = calc(1, 2, "+");

console.log(result);
