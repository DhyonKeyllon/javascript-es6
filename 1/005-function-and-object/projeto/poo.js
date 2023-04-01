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
    - O nome do arquivo deve ser o mesmo nome da classe.

    atributos
      - Atributos são as características de um objeto.
    
    métodos
      - Métodos são funções que estão dentro de uma classe.

    this
      - O this é uma palavra reservada que faz referência ao próprio objeto.

  ? Instância
    - Instância é um objeto criado a partir de uma classe.



  ? Pilares da Programação Orientada a Objetos
    - Abstração
    - Encapsulamento
    - Herança
    - Polimorfismo

  * Abstração
    - Abstração é o processo de identificar entidades do mundo real e seus atributos e comportamentos.
      Entidade = classe
      Identidade = objeto
      Atributos = características
      Comportamentos = ações

  * Encapsulamento (Segurança e Reutilização)
    - Encapsulamento é o processo de esconder detalhes de implementação de um objeto e mostrar apenas a interface de uso.
    - O encapsulamento é feito através de modificadores de acesso.
    - Os modificadores de acesso são:
          public (padrão)
            this.atributo = valor;
          private (não é possível acessar fora da classe)
            this.#atributo = valor; // # (hashtag) é um novo recurso do JavaScript que permite criar atributos privados.
            pode ser encontrado usando _ (underline) no início do nome do atributo, por convenção. Mas não é mais recomendado.
            this._atributo = valor;
    - Getters e Setters
      - Getters e Setters são métodos nativos de uma classe que permitem acessar e modificar os atributos privados de um objeto.
        get - permite acessar o atributo privado
        set - permite modificar o atributo privado

  * Herança (Reutilização e Manutenção)
    - Herança é o processo de reutilização de código.
    - A herança é feita através da palavra reservada extends. Também é necessário usar a palavra reservada super() para chamar o construtor da classe pai.
    - A herança é feita de uma classe para outra classe. 
    - A classe que herda é chamada de classe filha ou subclasse, ja a classe que é herdada é chamada de classe pai ou superclasse.
  
  * Polimorfismo (Reutilização e Sobrescrita de Métodos)
    - Polimorfismo é a sobrescrita de métodos do objeto pai. Para caso de método especifico de uma classe filha.
    - Para sobrescrever um método, basta criar um método com o mesmo nome na classe filha.
*/

// Exemplo de sintaxe e usos de classes e subclasses

class Animal {
  #cor = null;

  constructor(tamanho, peso) {
    this.tamanho = tamanho;
    this.peso = peso;
  }

  dormir() {
    console.log("Dormir");
  }

  get cor() {
    return this.#cor;
  }

  set cor(cor) {
    if (typeof cor === "string") {
      this.#cor = cor;
    }
  }
}

class Cachorro extends Animal {
  constructor() {
    super();
    this.orelhas = null;
  }

  correr() {
    console.log("Correr");
  }

  rosnar() {
    console.log("Rosnar");
  }
}

class Passaro extends Animal {
  constructor(bico, cor, tamanho, peso) {
    super(tamanho, peso);
    this.bico = bico;
    this.cor = cor;
  }

  voar() {
    console.log("Voar");
  }
}

class Papagaio extends Passaro {
  constructor(sabeFalar, bico, cor, tamanho, peso) {
    super(bico, cor, tamanho, peso);
    this.sabeFalar = sabeFalar;
  }

  falar() {
    console.log("Falar");
  }
}

class Avestruz extends Passaro {
  constructor(bico, cor, tamanho, peso) {
    super(bico, cor, tamanho, peso);
  }

  correr() {
    console.log("Correr");
  }

  voar() {
    console.log("Não voa");
  }
}

let papagaio = new Papagaio(true, "Médio", "Verde", 25, 350);
let papagaio2 = new Papagaio(false, "Pequeno", "Azul", 10, 80);
let avestruz = new Avestruz("Grande", "Branco", 200, 1000);

console.log(papagaio);
console.log(papagaio2);
console.log(avestruz);

papagaio.voar();
avestruz.voar();
