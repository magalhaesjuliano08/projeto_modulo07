document.getElementById('calculo').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtém os valores dos campos A e B
  const valorCampoA = parseInt(document.getElementById('campo-a').value);
  const valorCampoB = parseInt(document.getElementById('campo-b').value);

  // Verifica se o valor de B é maior que o valor de A
  if (valorCampoB > valorCampoA) {
      exibirMensagemPositiva();
  } else {
      exibirMensagemNegativa();
  }
});

function exibirMensagemPositiva() {
  document.getElementById('mensagem').innerHTML = "Formulário válido! B é maior que A.";
  document.getElementById('mensagem').classList.add("mensagem-positiva");
  document.getElementById('mensagem').classList.remove("mensagem-negativa");
}

function exibirMensagemNegativa() {
  document.getElementById('mensagem').innerHTML = "Formulário inválido! B deve ser maior que A.";
  document.getElementById('mensagem').classList.add("mensagem-negativa");
  document.getElementById('mensagem').classList.remove("mensagem-positiva");
}