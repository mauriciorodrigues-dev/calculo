function imc() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let resIMC = document.getElementById("resultIMC");
  let imcResult = peso / (altura * altura);
  let imcRes = document.getElementById("imc_result");

  // Definindo a escala de cores com base no valor do IMC
  let resultado;

  if (imcResult < 18.5) {
    resultado = "Abaixo do Peso";
    imcRes.classList.add('primeira_cor'); // Vermelho fraquinho
  } else if (imcResult >= 18.5 && imcResult < 24.9) {
    resultado = "Peso Normal";
    imcRes.classList.add('segunda_cor')
    imcRes.style.backgroundColor = "blue"; // Vermelho médio
  } else if (imcResult >= 24.9 && imcResult < 29.9) {
    resultado = "Excesso de Peso";
    imcRes.classList.add('terceira_cor')
    imcRes.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Vermelho forte
  } else if (imcResult >= 29.9 && imcResult < 39.9) {
    resultado = "Obesidade";
    imcRes.classList.add('quarta_cor')
    imcRes.style.backgroundColor = "rgba(255, 0, 0, 0.9)"; // Vermelho bem forte
  } else {
    resultado = "Obesidade Mórbida";
    imcRes.classList.add('quinta_cor')
    imcRes.style.backgroundColor = "rgba(255, 0, 0, 1)"; // Vermelho intenso
  }

  resIMC.innerHTML = `Seu IMC é de <br>${imcResult.toFixed(
    2
  )}. Situação: ${resultado}`;
}
