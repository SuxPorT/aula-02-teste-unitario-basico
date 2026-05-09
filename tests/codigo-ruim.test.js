const {
  processarTudo,
  total_operacoes,
  ultimo_resultado,
} = require('../scripts/legado_baguncado');

describe('Testes do Código Legado (Por que ele é difícil de testar)', () => {
  test('Deve somar corretamente, mas o nome do parâmetro "s" não é intuitivo', () => {
    expect(processarTudo(10, 5, 's', false)).toBe(15);
  });

  test('Deve retornar "Muito alto" em vez de um número se o resultado passar de 1000', () => {
    // Retorno inconsistente: aqui o teste espera uma String, enquanto o anterior esperava Number
    expect(processarTudo(500, 501, 's', false)).toBe('Muito alto');
  });

  test('O uso de variáveis globais causa efeitos colaterais entre testes', () => {
    processarTudo(10, 10, 's', false);
    // Este teste pode falhar dependendo da ordem em que os outros testes rodaram!
    // Se outros testes rodaram antes, total_operacoes não será 1.
    expect(total_operacoes).toBeGreaterThan(0);
  });

  test('Teste do IMC com "Número Mágico" escondido', () => {
    // O valor 1.75 está chumbado no código original.
    // Se o desenvolvedor mudar a altura no script, este teste quebra sem motivo aparente.
    const peso = 70;
    const resultadoEsperado = peso / (1.75 * 1.75);
    expect(processarTudo(peso, 0, null, true)).toBe(resultadoEsperado);
  });

  test('Comportamento imprevisível quando parâmetros são omitidos', () => {
    // O código não trata erros, ele apenas retorna 0 silenciosamente
    expect(processarTudo(10, 10, 'comando_inexistente', false)).toBe(0);
  });
});
