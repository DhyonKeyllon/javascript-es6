/*
  DOM (Document Object Model)
  - O DOM é uma interface que representa documentos HTML e XML através de objetos.
  - Com o DOM, os programas podem acessar e alterar o conteúdo do documento, estilo, estrutura e muito mais.
  
  Window Object Model
  - O Window Object Model é uma interface que representa uma janela de um navegador.
  - Com o Window Object Model, os programas podem acessar e alterar o conteúdo da janela, estilo, estrutura e muito mais.

  Eventos
  - Eventos são ações que ocorrem no navegador ou no documento.
  - Com os eventos, os programas podem executar ações quando um evento ocorre.
  Exemplo:
    - Quando o usuário clica em um botão, o programa pode executar uma ação.

*/

// window => Navegador (Window Object Model)
window.addEventListener("focus", (e) => {
  console.log("focus");
});

// document => DOM (Document Object Model)
document.addEventListener("click", (e) => {
  console.log("click");
});
