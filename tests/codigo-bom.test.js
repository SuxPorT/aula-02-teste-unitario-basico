const {
  processarExecucao,
  OPERACOES,
} = require('../scripts/codigo-bom.js');

describe('Processador Moderno - Testes de Alta Qualidade', () => {
  test('Deve realizar soma com parâmetros claros', () => {
    expect(processarExecucao(10, 5, OPERACOES.SOMA)).toBe(15);
  });

  test('Deve limitar o resultado em 1000 para manter consistência de tipo', () => {
    // Agora o retorno é sempre um número, evitando erros em outros módulos
    expect(processarExecucao(500, 600, OPERACOES.SOMA)).toBe(1000);
  });

  test('Deve lançar erro ao receber tipos inválidos (Segurança)', () => {
    expect(() => processarExecucao('10', 5, OPERACOES.SOMA)).toThrow();
  });

  test('Deve calcular IMC de forma isolada e previsível', () => {
    const resultado = processarExecucao(70, 0, null, true);
    expect(resultado).toBe(22.86);
  });
});
