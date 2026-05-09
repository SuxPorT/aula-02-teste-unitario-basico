function celsiusParaFahrenheit(c) {
  return parseFloat((c * 9/5 + 32).toFixed(2));
}

function fahrenheitParaCelsius(f) {
  return parseFloat(((f - 32) * 5/9).toFixed(2));
}

function celsiusParaKelvin(c) {
  return parseFloat((c + 273.15).toFixed(2));
}

function kelvinParaCelsius(k) {
  return parseFloat((k - 273.15).toFixed(2));
}

function fahrenheitParaKelvin(f) {
  const c = (f - 32) * 5/9;
  return parseFloat((c + 273.15).toFixed(2));
}

module.exports = { 
  celsiusParaFahrenheit, 
  fahrenheitParaCelsius, 
  celsiusParaKelvin, 
  kelvinParaCelsius,
  fahrenheitParaKelvin
};
