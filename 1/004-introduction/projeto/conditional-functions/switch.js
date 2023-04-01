let cor = "verde";

switch (cor) {
  case "verde":
    console.log("Siga");
    cor = "amarelo";
    break;
  case "amarelo":
    console.log("Atenção");
    cor = "vermelho";
    break;
  case "vermelho":
    console.log("Pare");
    cor = "verde";
    break;
  default:
    console.log("Cor inválida");
    break;
}
