/*
  Datas em JavaScript

  Date
  - O objeto Date é um objeto nativo do JavaScript que permite trabalhar com datas e horas.
  - O objeto Date é uma função construtora.
    - Uma função construtora é uma função que cria um novo objeto.
  
  new Date()
  - A instanciação do objeto Date sem parâmetros retorna a data atual.
  Exemplo:
    const today = new Date();

  Métodos da instância new Date()
  - getDate() => Retorna o dia do mês (1-31)
  - getFullYear() => Retorna o ano (4 dígitos)
  - getMonth() => Retorna o mês (0-11)
  - getDay() => Retorna o dia da semana (0-6)
  - toLocaleDateString() => Retorna a data no formato local, aceita como parâmetro o idioma.
*/

let today = new Date();

console.log(today.toLocaleDateString("pt-BR"));
