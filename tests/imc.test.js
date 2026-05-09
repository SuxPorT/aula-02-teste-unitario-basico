const calcularIMC = require('../scripts/imc');

describe('Testes de IMC', () => {
  test('Deve calcular o IMC corretamente (70kg, 1.75m)', () => {
    expect(calcularIMC(70, 1.75)).toBe(22.86);
  });
});

// describe('Teste intencionalmente falho de IMC', () => {
//   test('Deve falhar ao calcular o IMC (70kg, 1.75m)', () => {
//     expect(calcularIMC(70, 1.75)).toBe(25);
//   });
// });
