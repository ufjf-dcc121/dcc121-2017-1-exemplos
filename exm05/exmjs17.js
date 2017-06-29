//Dados
var siglas = {
  "cr": "cursando",
  "ap": "aprovado",
  "rp": "reprovado",
  "si": "Sistemas de Informação",
  "cc": "Ciência da Computação",
  "ec": "Engenharia Computacional"
};

document.addEventListener('DOMContentLoaded', init);

function init() {
  //Entradas
  //Saidas
  var saida = document.getElementsByTagName("p")[0];
  //Operações
  document.opcoes.addEventListener("submit", function(evento) {
    evento.preventDefault();
    var curso = document.opcoes.curso.value;
    var situacao = document.opcoes.situacao.value;
    //Resultado
    saida.innerHTML = "Você está "+siglas[situacao]+" em "+siglas[curso]+"!";
  });
}
