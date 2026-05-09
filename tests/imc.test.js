const calcularIMC = require('../scripts/imc');

describe('Testes de IMC', () => {
  test('Deve calcular o IMC corretamente (70kg, 1.75m)', () => {
    expect(calcularIMC(70, 1.75)).toBe(22.86);
  });

  test('Deve retornar 0 se a altura for zero', () => {
    expect(calcularIMC(70, 0)).toBe(0);
  });
});
