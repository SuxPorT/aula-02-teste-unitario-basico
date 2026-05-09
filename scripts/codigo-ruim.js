// Variáveis globais (ruim para testes unitários, pois mantêm estado)
let total_operacoes = 0;
var ultimo_resultado = null;

function processarTudo(valor1, valor2, oqueFazer, extras) {
  // Falta de validação de tipos
  // Uso de "var" em vez de const/let
  var r = 0;
  total_operacoes++;

  // Lógica aninhada e confusa (Arrowhead Anti-pattern)
  if (oqueFazer != null) {
    if (oqueFazer == 's') {
      r = valor1 + valor2;
    } else {
      if (oqueFazer == 'm') {
        r = valor1 * valor2;
      } else {
        // Se esquecer o oqueFazer, ele simplesmente retorna 0 sem erro claro
        r = 0;
      }
    }
  }

  // Mistura de responsabilidades: IMC misturado com lógica de calculadora
  if (extras === true) {
    // Altura fixa mágica (Magic Number) sem explicação
    r = valor1 / (1.75 * 1.75);
  }

  // Efeito colateral: altera uma variável fora da função
  ultimo_resultado = r;

  // Retorno inconsistente (às vezes número, às vezes string)
  if (r > 1000) return 'Muito alto';

  return r;
}

// Exportação de uma função gigante que faz tudo (God Object/Function)
module.exports = {
  processarTudo,
  total_operacoes,
  ultimo_resultado,
};
