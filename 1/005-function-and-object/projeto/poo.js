/*
  * Programação Orientada a Objetos

  ? Objetos
    - Objetos são estruturas que representam entidades do mundo real. 
    - Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. 
    - Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. 
    - Em JavaScript, quase tudo são objetos.
  
  ? Classes
    - Classes são estruturas que representam entidades do mundo real.
    - Classes são como uma receita de bolo, onde você define os ingredientes e o modo de preparo.
    - Nas classes, você define os atributos e os métodos.
    - A partir de uma classe, você pode criar objetos.

    atributos
      - Atributos são as características de um objeto.
    
    métodos
      - Métodos são funções que estão dentro de uma classe.

    this
      - O this é uma palavra reservada que faz referência ao próprio objeto.

  ? Instância
    - Instância é um objeto criado a partir de uma classe.

  ! O nome do arquivo deve ser o mesmo nome da classe.
*/

class celular {
  constructor() {
    this.cor = "prata";
  }

  ligar() {
    console.log("Fazendo ligação...");
    return "Ligação feita";
  }
}

let objeto = new celular();
console.log(objeto.ligar());
