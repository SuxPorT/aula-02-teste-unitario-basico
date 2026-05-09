const {
  somar,
  subtrair,
  multiplicar,
  dividir,
} = require('../scripts/calculadora');

describe('Testes das 4 Operações Matemáticas', () => {
  test('Soma: deve somar 10 + 5 e retornar 15', () => {
    expect(somar(10, 5)).toBe(15);
  });

  test('Subtração: deve subtrair 10 - 5 e retornar 5', () => {
    expect(subtrair(10, 5)).toBe(5);
  });

  test('Multiplicação: deve multiplicar 10 * 5 e retornar 50', () => {
    expect(multiplicar(10, 5)).toBe(50);
  });

  test('Divisão: deve dividir 10 / 2 e retornar 5', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('Divisão: deve retornar mensagem de erro ao dividir por zero', () => {
    expect(dividir(10, 0)).toBe('Erro: Divisão por zero');
  });

  test('Soma errada: deve retornar falha de teste para 10 + 5', () => {
    expect(somar(10, 5)).not.toBe(25);
  });
});
