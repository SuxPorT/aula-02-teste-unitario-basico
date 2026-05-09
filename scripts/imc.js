function calcularIMC(peso, altura) {
  if (altura <= 0) return 0;
  const imc = peso / (altura * altura);
  return parseFloat(imc.toFixed(2));
}

module.exports = calcularIMC;
