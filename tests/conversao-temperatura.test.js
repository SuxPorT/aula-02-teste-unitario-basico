const {
  celsiusParaFahrenheit,
  fahrenheitParaCelsius,
  celsiusParaKelvin,
  kelvinParaCelsius,
  fahrenheitParaKelvin,
} = require('../scripts/conversao-temperatura');

describe('Testes de Conversão de Temperatura', () => {
  describe('Escalas Celsius e Fahrenheit', () => {
    test('Celsius (0) -> Fahrenheit (32)', () => {
      expect(celsiusParaFahrenheit(0)).toBe(32);
    });

    test('Fahrenheit (212) -> Celsius (100)', () => {
      expect(fahrenheitParaCelsius(212)).toBe(100);
    });
  });

  describe('Escalas Celsius e Kelvin', () => {
    test('Celsius (0) -> Kelvin (273.15)', () => {
      expect(celsiusParaKelvin(0)).toBe(273.15);
    });

    test('Kelvin (300) -> Celsius (26.85)', () => {
      expect(kelvinParaCelsius(300)).toBe(26.85);
    });
  });

  describe('Escalas Fahrenheit e Kelvin', () => {
    test('Fahrenheit (32) -> Kelvin (273.15)', () => {
      expect(fahrenheitParaKelvin(32)).toBe(273.15);
    });
  });

  describe('Teste intencionalmente falho', () => {
    test('Celsius (100) -> Fahrenheit (212) - teste falho', () => {
      expect(celsiusParaFahrenheit(100)).toBe(211);
    });
  });
});
