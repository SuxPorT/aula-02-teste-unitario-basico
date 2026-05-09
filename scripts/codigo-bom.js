/**
 * Constantes para evitar Magic Strings
 */
const OPERACOES = {
  SOMA: 'somar',
  MULTIPLICACAO: 'multiplicar',
};

const ALTURA_PADRAO_IMC = 1.75;

/**
 * Funções atômicas e puras (fáceis de testar e sem efeitos colaterais)
 */
const calcularSoma = (a, b) => a + b;
const calcularMultiplicacao = (a, b) => a * b;
const calcularIMC = (peso) =>
  parseFloat((peso / Math.pow(ALTURA_PADRAO_IMC, 2)).toFixed(2));

/**
 * Função principal com responsabilidades separadas e validação
 */
function processarExecucao(valor1, valor2, operacao, calcularExtra = false) {
  // 1. Validação de segurança
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    throw new Error('Os valores de entrada devem ser números');
  }

  // 2. Early Return para lógica extra (IMC)
  if (calcularExtra) {
    return calcularIMC(valor1);
  }

  // 3. Seleção de operação (Substituindo ifs aninhados)
  let resultado;
  switch (operacao) {
    case OPERACOES.SOMA:
      resultado = calcularSoma(valor1, valor2);
      break;
    case OPERACOES.MULTIPLICACAO:
      resultado = calcularMultiplicacao(valor1, valor2);
      break;
    default:
      resultado = 0;
  }

  // 4. Limite de segurança no retorno
  return resultado > 1000 ? 1000 : resultado;
}

module.exports = { processarExecucao, OPERACOES };
